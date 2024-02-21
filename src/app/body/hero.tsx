'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Link as ScrollLink } from 'react-scroll';
import Link from "next/link"
import { motion } from 'framer-motion';


const Hero = () => {
    const h1Variants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "easeInOut",
                duration: 1.0,
            },
        },
    };

    const h3Variants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "easeInOut",
                duration: 1.0,
                delay: 0.5,
            },
        },
    };

    const btnVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "easeInOut",
                duration: 1.0,
                delay: 1.0,
            },
        },
    };

    return (
        <div className="flex justify-center items-center h-9/10">
            <div className="text-center p-5">
                <motion.h1
                    variants={h1Variants}
                    initial="hidden"
                    animate="visible"
                    className="text-8xl font-bold mb-6"
                >
                    thithu siva
                </motion.h1>
                <motion.div className="max-w-xl mx-auto"
                    variants={h3Variants}
                    initial="hidden"
                    animate="visible"
                >
                    <h3 className="text-lg mb-6">Mit Leidenschaft am Code - Für mich ist Programmieren mehr als nur Arbeit; es ist die Freude, Ideen zum Leben zu erwecken und kreative Lösungen für komplexe Probleme zu finden.</h3>
                </motion.div>
                <motion.div
                    variants={btnVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <Button>
                        <ScrollLink to="contact" smooth={true} duration={500}>
                            Sag Hallo
                        </ScrollLink>
                    </Button>
                </motion.div>
            </div>
        </div>
    );
}

export default Hero;