

import { DarkThemeToggle, Navbar, NavbarBrand } from "flowbite-react";
import React from "react";

export default function Navigation() {
    return (
        <Navbar fluid >
            <NavbarBrand>
                <span className="self-center whitespace-nowrap text-4xl font-semibold dark:text-white">
                    Vince Commero
                </span>
            </NavbarBrand>
            <DarkThemeToggle />
        </Navbar>
    );
}
