import Image from "next/image";
import Link from "next/link";

const About = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen p-8 text-center">
            <h2 className="text-4xl font-bold mb-8 underline">Über mich</h2>
            <p className="max-w-2xl mb-8">
                Meine Begeisterung für Informatik begann bereits in meiner Schulzeit und hat sich seitdem stetig vertieft. Programmieren ist für mich nicht nur ein Beruf, sondern eine Leidenschaft, die mich antreibt, kontinuierlich zu lernen und innovative Lösungen zu entwickeln. Ich schätze die Möglichkeiten, die die Programmierung bietet, um Probleme zu automatisieren und Prozesse zu vereinfachen, und finde großen Spaß daran, gemeinsam mit einem Team diese Herausforderungen anzugehen. 
            </p>
            <p className="max-w-2xl mb-8">
                Das Streben nach kreativen Lösungsansätzen und die Freude am gemeinsamen Erfolg sind Kern meiner Arbeitsethik. Mein Ziel ist es, durch die aktive Teilnahme an realen Projekten und die kontinuierliche Vertiefung meiner Kenntnisse in Programmiersprachen einen signifikanten Beitrag zu leisten. Jede Zeile Code, die ich schreibe, bringt mich meinem Ziel näher, effizientere und innovativere Wege in der Technologie zu erkunden.
            </p>
        </div>
    );
}

export default About;
