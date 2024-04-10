"use client";
import { useState } from "react";
import { useMDXComponents } from "@mdx-js/react";

const NavMenu = ({ children }) => {
    const [open, isOpen] = useState(false);
    const toggle = () => isOpen(!open);
    const mdx = useMDXComponents();

    return (
        <>
            <button onClick={toggle}>Open!</button>
            <nav style={{ display: open ? "block" : "none" }} onMouseOver={toggle} onMouseOut={toggle}>
                {Object.entries(mdx).keys(val => (
                    // TODO: check if mdx.h2 without termnary operator
                    <a href={`#${val[1]}`}>{ val[0] }</a>
                ))}
            </nav>
            { children }
        </>
    );
}

export default NavMenu;