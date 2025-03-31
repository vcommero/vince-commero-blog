"use client";

import { Modal, Box } from '@mantine/core';
import { useEffect, useState } from "react";
import Image from 'next/image';
import { useMediaQuery } from '@mantine/hooks';

interface ExpandableImageProps {
    // Image URL
    src: string;

    // Alt text for accessibility
    alt: string;

    // Width and height for the thumbnail version
    width?: number;
    height?: number;

    // Optional transformations as URL parameters
    thumbnailTransformations?: string;
    // Optional transformations for the full-size image
    fullSizeTransformations?: string;

    // Optional CSS classes
    className?: string;
}

export default function ExpandableImage({
    src,
    alt,
    width = 900,
    height = 550,
    thumbnailTransformations = '',
    fullSizeTransformations = '',
    className = ''
}: ExpandableImageProps) {
    const [opened, setOpened] = useState(false);
    const isMobile = useMediaQuery('(max-width: 768px)');

    // Parse Imagekit URLs
    let thumbnailUrl;
    let fullSizeUrl;
    const matches = src.match(/(https:\/\/ik\.imagekit\.io\/\w+\/)(.*)/g);
    if (matches && matches.length === 3) {
        const baseUrl = matches[1];
        const path = matches[2];

        // Construct ImageKit URLs with transformations
        thumbnailUrl = `${baseUrl}/${thumbnailTransformations ? `tr:${thumbnailTransformations}/` : ''}${path}`;
        fullSizeUrl = `${baseUrl}/${fullSizeTransformations ? `tr:${fullSizeTransformations}/` : ''}${path}`;
    }

    return (
        <>
            {/* Thumbnail Image */}
            <Box
                className={className}
                component="div"
                onClick={() => setOpened(true)}
                style={{ display: 'inline-block', position: 'relative' }}
            >
                <Image
                    src={thumbnailUrl ?? src}
                    alt={alt}
                    width={isMobile ? Math.min(width, 300) : width}
                    height={isMobile ? Math.min(height, 200) : height}
                    style={{
                        objectFit: 'cover'
                    }}
                />
            </Box>

            {/* Full Size Modal */}
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                size="2xl"
                fullScreen={isMobile}
                centered
                withCloseButton
                styles={{
                    body: {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 0
                    },
                    content: {
                        maxHeight: '90vh',
                        overflowY: 'auto'
                    }
                }}
            >
                <Image
                    src={fullSizeUrl ?? src}
                    alt={alt}
                    height={isMobile ? 300 : 1080}
                    width={isMobile ? 720 : 1920}
                    style={{
                        maxWidth: '100%',
                        maxHeight: '80vh',
                        objectFit: 'contain',
                        zIndex: -9999
                    }}
                />
            </Modal>
        </>
    );
}