'use client';

import { Link as ScrollLink } from 'react-scroll';

const Logo = () => {
    return (
            <ScrollLink to="home" smooth={true} duration={500} offset={-70} className="cursor-pointer">
                <div className="w-[100px] h-[100px] flex items-center justify-center font-bold">
                    <p>thithu siva</p>
                </div>
            </ScrollLink>
    );
}

export default Logo;
