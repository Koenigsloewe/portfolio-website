import Logo from "./logo";
import Navigation from "./navigation-bar"; 


const Navbar = () => {
    return (
        <div className="sticky top-0 z-50 flex justify-between items-center px-10 border-b h-1/10 backdrop-blur-md">
       <Logo />
       <Navigation /> 
        </div>
    );
    }
export default Navbar;