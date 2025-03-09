import { useMantineTheme } from '@mantine/core';
import { useDocumentVisibility } from '@mantine/hooks';
import React, { useEffect, useRef } from 'react';

// Define interfaces for type safety
interface TrailPoint {
    x: number;
    y: number;
}

interface AnimatedGridLinesProps {
    gridSize?: number;
    lineCount?: number;
    fadeLength?: number;
    backgroundColor?: string;
    colorRange?: {
        hueMin: number;
        hueMax: number;
        saturation: number;
        lightness: number;
    };
}

class Line {
    x: number;
    y: number;
    direction: number;
    speed: number;
    color: string;
    trail: TrailPoint[];
    lifespan: number;
    age: number;

    // Canvas dimensions needed for reset calculations
    private canvasWidth: number;
    private canvasHeight: number;
    private gridSize: number;
    private colorRange: AnimatedGridLinesProps['colorRange'];
    private fadeLength: number;
    private speedModifier: number;

    constructor(
        canvasWidth: number,
        canvasHeight: number,
        gridSize: number,
        colorRange: AnimatedGridLinesProps['colorRange'],
        fadeLength: number,
        speedModifier: number,
    ) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.gridSize = gridSize;
        this.colorRange = colorRange;
        this.fadeLength = fadeLength;
        this.speedModifier = speedModifier;

        // Initialize with default values
        this.x = 0;
        this.y = 0;
        this.direction = 0;
        this.speed = 0;
        this.color = '';
        this.trail = [];
        this.lifespan = 0;
        this.age = 0;

        // Set actual values
        this.reset();
    }

    reset(): void {
        // Start at a random position on the canvas
        this.x = Math.random() * this.canvasWidth;
        this.y = Math.random() * this.canvasHeight;

        // Snap to grid
        this.x = Math.floor(this.x / this.gridSize) * this.gridSize;
        this.y = Math.floor(this.y / this.gridSize) * this.gridSize;

        // Random direction (0: right, 1: down, 2: left, 3: up)
        this.direction = Math.floor(Math.random() * 4);

        // Random speed
        this.speed = Math.random() * this.speedModifier;

        // Random color within the specified range
        const hue = this.colorRange!.hueMin + Math.random() * (this.colorRange!.hueMax - this.colorRange!.hueMin);
        this.color = `hsl(${hue}, ${this.colorRange!.saturation}%, ${this.colorRange!.lightness}%)`;

        // Trail history for fade effect
        this.trail = [];

        // Random lifespan
        this.lifespan = 100 + Math.random() * 250;
        this.age = 0;
    }

    update(): void {
        // Store current position in trail
        this.trail.unshift({ x: this.x, y: this.y });

        // Remove old trail points
        if (this.trail.length > this.fadeLength) {
            this.trail.pop();
        }

        // Move in current direction
        switch (this.direction) {
            case 0: // Right
                this.x += this.speed;
                break;
            case 1: // Down
                this.y += this.speed;
                break;
            case 2: // Left
                this.x -= this.speed;
                break;
            case 3: // Up
                this.y -= this.speed;
                break;
        }

        // Random direction change with higher probability at grid intersections
        if (this.x % this.gridSize < this.speed && this.y % this.gridSize < this.speed) {
            if (Math.random() < 0.75) {
                // Change to a direction perpendicular to current
                this.direction = (this.direction + (Math.random() < 0.5 ? 1 : 3)) % 4;
            }
        }

        // Check if out of bounds
        if (
            this.x < 0 ||
            this.x > this.canvasWidth ||
            this.y < 0 ||
            this.y > this.canvasHeight
        ) {
            this.reset();
        }

        // Increment age
        this.age++;
        if (this.age > this.lifespan) {
            this.reset();
        }
    }

    draw(ctx: CanvasRenderingContext2D): void {
        if (this.trail.length < 2) return;

        // Draw the line with fading trail
        for (let i = 0; i < this.trail.length - 1; i++) {
            const alpha = 1 - i / this.fadeLength;

            ctx.beginPath();
            ctx.moveTo(this.trail[i].x, this.trail[i].y);
            ctx.lineTo(this.trail[i + 1].x, this.trail[i + 1].y);
            ctx.strokeStyle = this.color.replace(')', `, ${alpha})`).replace('hsl', 'hsla');
            ctx.lineWidth = 2;
            ctx.stroke();
        }
    }
}

export default function AnimatedGridLines({
    gridSize = 100,
    lineCount = 20,
    fadeLength = 100,
    speedModifier = 2,
    colorRange = {
        hueMin: 180,
        hueMax: 220,
        saturation: 80,
        lightness: 60
    }
}) {
    const theme = useMantineTheme();
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const documentVisible = useDocumentVisibility();



    useEffect(() => {
        const getBodyColor = () => {
            if (typeof window === 'undefined') return theme.colors.dark[7];
            return getComputedStyle(document.documentElement)
                .getPropertyValue('--mantine-color-body')
                .trim();
        };

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Store animation frame ID and last color
        let animationId: number;
        let lastBodyColor = getBodyColor();

        const resizeCanvas = (): void => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const lines: Line[] = Array.from({ length: lineCount }, () =>
            new Line(canvas.width, canvas.height, gridSize, colorRange, fadeLength, speedModifier)
        );

        const animate = () => {
            const currentBodyColor = getBodyColor();

            // Only update background color when it changes
            if (currentBodyColor !== lastBodyColor) {
                ctx.fillStyle = currentBodyColor;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                lastBodyColor = currentBodyColor;
            }

            // Apply trail effect with theme-aware color
            ctx.fillStyle = currentBodyColor.replace('rgb', 'rgba').replace(')', ', 0.05)');
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            lines.forEach(line => {
                line.update();
                line.draw(ctx);
            });

            if (documentVisible) {
                animationId = requestAnimationFrame(animate);
            }
        };

        // Initial setup with theme color
        ctx.fillStyle = getBodyColor();
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationId);
        };
    }, [gridSize, lineCount, fadeLength, colorRange, speedModifier, documentVisible, theme]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                backgroundColor: 'var(--mantine-color-body)'
            }}
        />
    );
};