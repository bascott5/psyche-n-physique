"use client";
import { useWindowSize } from "@uidotdev/usehooks";
import { useState, useEffect } from "react";

const NavMenu = ({ children }) => {
    const [open, isOpen] = useState(false);
    const window = useWindowSize();

    useEffect(() => {
        isOpen(window.width >= 1500 ? true : false);
    }, [window])

    return (
        <div className="flex basis-100% flex-col flex-1 flex-wrap">
            <div style={{ visibility: open ? "visible" : "hidden" }} className="bg-neutral-100 fixed h-100px top-0 left-0 bottom-0 overflow-y-scroll border-r-2 border-grey">
                <ul className="relative top-10">
                    <a className="block" href={`#user-content-what-is-this-game`}><li className="list-disk">What is this game?</li></a>
                    <a className="block" href={`#user-content-checks`}><li className="list-disk">Checks</li></a>
                    <a className="block" href={`#user-content-challenges`}><li className="list-disk">Challenges</li></a>
                    <a className="block" href={`#user-content-psyche`}><li className="list-disk">Psyche</li></a>
                    <a className="block" href={`#user-content-physique`}><li className="list-disk">Physique</li></a>
                    <a className="block" href={`#user-content-body-and-mind`}><li className="list-disk">Body and Mind</li></a>
                    <a className="block" href={`#user-content-attributes`}><li className="list-disk">Attributes</li></a>
                    <a className="block" href={`#user-content-abilities`}><li className="list-disk">Abilities</li></a>
                    <a className="block" href={`#user-content-skills`}><li className="list-disk">Skills</li></a>
                    <a className="block" href={`#user-content-inventory`}><li className="list-disk">Inventory</li></a>
                    <a className="block" href={`#user-content-death`}><li className="list-disk">Death</li></a>
                    <a className="block" href={`#user-content-optional-rule-humanoids`}><li className="list-disk">Optional Rule: Humanoids</li></a>
                    <a className="block" href={`#user-content-character-creation`}><li className="list-disk">Character Creation</li></a>
                    <a className="block" href={`#user-content-for-the-gm`}><li className="list-disk">For the GM</li></a>
                    <a className="block" href={`#user-content-challenge-creation`}><li className="list-disk">Challenge Creation</li></a>
                    <a className="block" href={`#user-content-skill-list`}><li className="list-disk">Skill List</li></a>
                    <a className="block" href={`#user-content-ability-list`}><li className="list-disk">Ability List</li></a>
                </ul>
            </div>
            <div style={open ? { marginRight: "8%", marginLeft: "auto", width: "65%" } : { marginRight: "auto", marginLeft: "auto", width: "75%" }} className="h-100px">{ children }</div>
        </div>
    );
}

export default NavMenu;