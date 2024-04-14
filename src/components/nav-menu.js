"use client";
import { useEffect, useState } from "react";

const NavMenu = ({ children }) => {
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
            <div className="fixed mx-25% w-25% left-25% top-25%">
                {ids && ids.map && ids.map(id => (
                    <a className="w-10% mx-25% left-25% block" href={`#${id}`}>{ id }</a>
                ))}
            </div>
            { children }
        </>
    );
}

export default NavMenu;