"use client";
import { useEffect, useState } from "react";

const NavMenu = ({ children }) => {
    const [open, isOpen] = useState(false);
    const toggle = () => isOpen(!open);

    const [ids, setIds] = useState([]);
    useEffect(() => {
        const ele = document.getElementsByTagName("h2");
        let eles = new Array(ele.length)
        for (let i = 0; i < ele.length - 1; i++) {
            eles[i] = ele.item(i).id
        }

        setIds([...eles]);
    }, []);

    return (
        <>
            <button onClick={toggle}>Open!</button>
            <div style={{ display: open ? "block" : "none" }}>
                {ids && ids.map && ids.map(id => (
                    <a href={`#${id}`}>{ id }</a>
                ))}
            </div>
            { children }
        </>
    );
}

export default NavMenu;