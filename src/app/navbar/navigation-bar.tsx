'use client'

import * as React from "react"
//import { Link } from 'react-scroll';
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
                    <NavigationMenuItem className="mr-4">
                        <Link href="#projects" legacyBehavior passHref>
                            <NavigationMenuLink>
                                Projekte
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="mr-4">
                        <Link href="#skills" legacyBehavior passHref>
                            <NavigationMenuLink>
                                Skills
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="mr-4">
                        <Link href="#about" legacyBehavior passHref>
                            <NavigationMenuLink>
                                Über Mich
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="#contact" legacyBehavior passHref>
                            <NavigationMenuLink>
                                Kontakt
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenu>
            </div>
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger>
                        <AlignJustify />
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>
                                <div className="flex flex-col space-y-4 items-start w-full text-lg">
                                    <Link href="#projects" legacyBehavior passHref>
                                        Projekte
                                    </Link>
                                    <Link href="#skills" legacyBehavior passHref>

                                        Skills
                                    </Link>
                                    <Link href="#about" legacyBehavior passHref>
                                        Über Mich
                                    </Link>
                                    <Link href="#contact" legacyBehavior passHref>
                                        Kontakt
                                    </Link>
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