'use client'
import React, { useState } from "react";
import { AboutSubNavbar, AcademicSubNavbar, AdmissionSubNavbar, StaffSubNavbar, StudentSubNavbar } from "@/constants";
import { menu} from "@/public/icons"; // Assume arrowDown is an icon for the indicator
import {ChevronDown} from "lucide-react";
import Image from "next/image";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = (): void => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="relative z-50 bg-white ">
            {/* Mobile Menu Button */}
            <div className="flex items-center justify-between p-4 md:hidden">
                <button onClick={toggleMenu} className="flex items-center w-10 h-10">
                    <Image src={menu} alt="menu" />
                </button>
            </div>

            {/* Mobile Slide-in Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex items-center justify-between p-4 border-b">
                    <span className="text-lg font-bold">Menu</span>
                    <button onClick={toggleMenu} className="text-sm font-medium text-red-600">
                        Close
                    </button>
                </div>
                <ul className="flex flex-col p-6 space-y-4">
                    <NavItem title="About" subItems={AboutSubNavbar} />
                    <NavItem title="Academic" subItems={AcademicSubNavbar} />
                    <NavItem title="Admission" subItems={AdmissionSubNavbar} />
                    <NavItem title="Students" subItems={StudentSubNavbar} />
                    <NavItem title="Staff" subItems={StaffSubNavbar} />
                </ul>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center md:justify-center list-none space-x-8 p-4">
                <NavItem title="About" subItems={AboutSubNavbar} />
                <NavItem title="Academic" subItems={AcademicSubNavbar} />
                <NavItem title="Admission" subItems={AdmissionSubNavbar} />
                <NavItem title="Students" subItems={StudentSubNavbar} />
                <NavItem title="Staff" subItems={StaffSubNavbar} />
            </div>
        </nav>
    );
}

type SubNavbarItem = {
    title: string;
    href: string;
    description: string;
};

interface NavItemProps {
    title: string;
    subItems: SubNavbarItem[];
}

function NavItem({ title, subItems }: NavItemProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <li
            className="relative md:hoverable"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            {/* Main Menu Item */}
            <div
                className="flex items-center justify-between w-full md:w-auto py-2 md:py-0 font-medium text-left md:text-center"
            >
                {title}
                <span className="hidden md:flex items-center">
                    <ChevronDown className={`ml-2 transform transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                    }`} />

                </span>
                <span className="md:hidden ml-2">
                     {isOpen ? "-" : "+"}
                </span>
            </div>

            {/* Submenu */}
            <ul
                className={`md:absolute md:left-0 md:top-full md:bg-white md:shadow-lg md:w-48 mt-2 md:mt-0 ${
                    isOpen ? "block" : "hidden"
                }`}
            >
                {subItems.map((item) => (
                    <li key={item.title}>
                        <a
                            href={item.href}
                            className="block p-2 hover:bg-gray-100"
                        >
                            {item.title}
                            <p className="text-sm text-gray-600">
                                {item.description}
                            </p>
                        </a>
                    </li>
                ))}
            </ul>
        </li>
    );
}