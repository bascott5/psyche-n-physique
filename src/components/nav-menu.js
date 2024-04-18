"use client";
import { useWindowSize } from "@uidotdev/usehooks";
import { useState } from "react";
import Image from "next/image";
import nav from "../static/nav.svg"

const NavMenu = ({ children }) => {
    const window = useWindowSize();
    const [open, isOpen] = useState(false);
    const toggle = () => isOpen(!open);

    return (
        <div className="flex basis-100% flex-col flex-1 flex-wrap">
            <Image src={ nav } style={{ zIndex: "1" }} className="fixed top-5 left-5" width={30} height={30} onClick={toggle} loading="eager" />
            <div style={{ visibility: open ? "visible" : "hidden" }} className="bg-neutral-100 fixed top-0 left-0 bottom-0 overflow-y-scroll border-r-2 border-grey shadow-lg">
                <ul className="relative top-14">
                    <a className="block" href={`#what-is-this-game`}><li>What is this game?</li></a>
                    <a className="block" href={`#checks`}><li>Checks</li></a>
                    <a className="block" href={`#challenges`}><li>Challenges</li></a>
                    <a className="block" href={`#psyche`}><li>Psyche</li></a>
                    <a className="block" href={`#physique`}><li>Physique</li></a>
                    <a className="block" href={`#body-and-mind`}><li>Body and Mind</li></a>
                    <a className="block" href={`#attributes`}><li>Attributes</li></a>
                    <a className="block" href={`#abilities`}><li>Abilities</li></a>
                    <a className="block" href={`#skills`}><li>Skills</li></a>
                    <a className="block" href={`#inventory`}><li>Inventory</li></a>
                    <a className="block" href={`#death`}><li>Death</li></a>
                    <a className="block" href={`#optional-rule-humanoids`}><li>Optional Rule: Humanoids</li></a>
                    <a className="block" href={`#character-creation`}><li>Character Creation</li></a>
                    <a className="block" href={`#for-the-gm`}><li>For the GM</li></a>
                    <a className="block" href={`#challenge-creation`}><li>Challenge Creation</li></a>
                    <a className="block" href={`#skill-list`}><li>Skill List</li></a>
                    <a className="block" href={`#ability-list`}><li>Ability List</li></a>
                </ul>
            </div>
            <div style={open && window.width >= 1500 ? { marginRight: "7%", marginLeft: "auto", width: "65%" } : { marginRight: "auto", marginLeft: "auto", width: "75%" }} className="h-100px">{ children }</div>
        </div>
    );
}

export default NavMenu;