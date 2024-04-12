"use client";
import Link from "next/link"
import { MDXProvider } from "@mdx-js/react";

const Sections = ({ children }) => {
    //TODO: make it so that all ids are collected so that can affect the tables of contents
    const components = {
        h2: 
    }

    return (
        <MDXProvider components={components}>{ children }</MDXProvider>
    );
}

export default Sections;