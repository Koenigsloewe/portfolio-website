'use client'

import * as React from "react"
import { Link as ScrollLink } from 'react-scroll';
import Link from "next/link";
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import { AlignJustify } from "lucide-react";

const Navigation = () => {
    return (
        <div>
            <div className="hidden md:flex">
                <NavigationMenu className="flex list-none">
                    <NavigationMenuItem className="mr-4 cursor-pointer hover:underline">
                        <ScrollLink to="projects" smooth={true} duration={500} offset={-70} >
                            <NavigationMenuLink>
                                Projekte
                            </NavigationMenuLink>
                        </ScrollLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="mr-4 cursor-pointer hover:underline">
                        <ScrollLink to="skills" smooth={true} duration={500} offset={-70}>
                            <NavigationMenuLink>
                                Skills
                            </NavigationMenuLink>
                        </ScrollLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="mr-4 cursor-pointer hover:underline">
                        <ScrollLink to="about" smooth={true} duration={500} offset={-0}>
                            <NavigationMenuLink>
                                Über Mich
                            </NavigationMenuLink>
                        </ScrollLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="mr-4 cursor-pointer hover:underline">
                        <ScrollLink to="contact" smooth={true} duration={500} offset={-40}>
                            <NavigationMenuLink>
                                Kontakt
                            </NavigationMenuLink>
                        </ScrollLink>
                    </NavigationMenuItem>
                </NavigationMenu>
            </div>
            <div className="md:hidden flex items-center justify-center">
                <Sheet>
                    <SheetTrigger>
                        <AlignJustify />
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>
                                <div className="flex flex-col space-y-4 items-start w-full text-lg">
                                    <ScrollLink to="projects" smooth={true} duration={500} offset={-70} className="mr-4 cursor-pointer hover:underline">
                                        Projekte
                                    </ScrollLink>
                                    <ScrollLink to="skills" smooth={true} duration={500} offset={-70} className="mr-4 cursor-pointer hover:underline">
                                        Skills
                                    </ScrollLink>
                                    <ScrollLink to="about" smooth={true} duration={500} offset={-70} className="mr-4 cursor-pointer hover:underline">
                                        Über Mich
                                    </ScrollLink>
                                    <ScrollLink to="contact" smooth={true} duration={500} offset={-50} className="mr-4 cursor-pointer hover:underline">
                                        Kontakt
                                    </ScrollLink>
                                </div>
                            </SheetTitle>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
}

export default Navigation;