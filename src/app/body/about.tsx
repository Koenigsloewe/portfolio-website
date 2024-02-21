'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.2, 
        triggerOnce: true, 
    });

    const h2Variants = {
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

    const pVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: (custom : any) => ({
            y: 0,
            opacity: 1,
            transition: {
                type: "easeInOut",
                duration: 1.0,
                delay: custom.delay, 
            },
        }),
    };

    return (
        <div ref={ref} className="flex flex-col justify-center items-center h-screen p-8 text-center">
            <motion.h2
                variants={h2Variants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="text-4xl font-bold mb-8 underline">Über mich</motion.h2>
            <motion.p
                variants={pVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={{ delay: 0.5 }} 
                className="max-w-2xl mb-8">
                Meine Begeisterung für Informatik begann bereits in meiner Schulzeit und hat sich seitdem stetig vertieft. Programmieren ist für mich nicht nur ein Beruf, sondern eine Leidenschaft, die mich antreibt, kontinuierlich zu lernen und innovative Lösungen zu entwickeln. Ich schätze die Möglichkeiten, die die Programmierung bietet, um Probleme zu automatisieren und Prozesse zu vereinfachen, und finde großen Spaß daran, gemeinsam mit einem Team diese Herausforderungen anzugehen.
            </motion.p>
            <motion.p
                variants={pVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={{ delay: 1.0 }} 
                className="max-w-2xl mb-8">
                Das Streben nach kreativen Lösungsansätzen und die Freude am gemeinsamen Erfolg sind Kern meiner Arbeitsethik. Mein Ziel ist es, durch die aktive Teilnahme an realen Projekten und die kontinuierliche Vertiefung meiner Kenntnisse in Programmiersprachen einen signifikanten Beitrag zu leisten. Jede Zeile Code, die ich schreibe, bringt mich meinem Ziel näher, effizientere und innovativere Wege in der Technologie zu erkunden.
            </motion.p>
        </div>
    );
}

export default About;