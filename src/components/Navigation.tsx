'use client';

import { Navbar, NavbarBrand } from 'flowbite-react'
import React from 'react'

export default function Navigation() {
  return (
    <Navbar fluid rounded>
        <NavbarBrand >
            <span className="self-center whitespace-nowrap text-4xl font-semibold dark:text-black">Vince Commero</span>
        </NavbarBrand>
    </Navbar>
  )
}
