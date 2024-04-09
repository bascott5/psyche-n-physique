"use client";
import { MDXProvider } from "@mdx-js/react";

const H2Id = ({...components}) => {
    return (
        <h2 className="text-red-400">{...components}</h2>
    )
}

const components = {
    h2: H2Id
}

const IdHandler = ({ children }) => {
    return (
        <MDXProvider components={components}>{ children }</MDXProvider>
    )
}

export default IdHandler;