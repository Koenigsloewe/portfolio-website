import Hero from "./hero";
import Projects from "./projects";
import Skills from "./skills";
import About from "./about";
import Contact from "./contact";

const Body = () => {
    return (
        <div>
            <div id="home"><Hero /></div>
            <div id="projects"><Projects/></div>
            <div id="skills"><Skills /></div>
            <div id="about"><About /></div>
            <div id="contact"><Contact /></div>
            <footer className="flex justify-center items-center text-center border-t h-1/10">
                <p>© 2024 Thithu Siva</p>
            </footer>
        </div>
    );
}

export default Body;