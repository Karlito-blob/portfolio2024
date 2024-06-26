import React, { useEffect, useState } from "react";

export default function Icon() {

    const [isOnWhiteBackground, setIsOnWhiteBackground] = useState(false);

    useEffect(() => {
        const parentBackgroundColor = window.getComputedStyle(document.body.parentNode).backgroundColor;
        setIsOnWhiteBackground(parentBackgroundColor === "rgb(245, 245, 245)");
    }, []);

    const svgStyle = isOnWhiteBackground ? { filter: 'invert(100%) grayscale(100%)' } : {};

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            fill="none"
            viewBox="0 0 64 64"
            style={svgStyle}
        >
            <path
                fill="#F5F5F5"
                d="M35.692 25.846v4.923H33.23v-4.923h2.462zM30.769 30.77h-2.462v-4.924h2.462v4.923zM28.307 35.692v-2.461h-2.461v2.461h2.461v2.462h7.385v-2.462h2.461v-2.461h-2.461v2.461h-7.385z"
            ></path>
            <path
                fill="#F5F5F5"
                fillRule="evenodd"
                d="M29.538 4.923h-2.462v2.462h-2.461V4.923h-4.923v2.462H17.23v2.461h-4.923v2.462H9.846v4.923H7.384v2.461H4.922v4.923h2.462v2.462H4.922v2.461H2.461v4.924h2.461v2.461h2.462v2.462H4.922v4.923h2.462v2.461h2.462v4.923h2.461v2.462h4.923v2.461h2.462v2.462h4.923v-2.462h2.461v2.462h2.462v2.462h4.923v-2.462h2.462v-2.462h2.461v2.462h4.923v-2.462h2.462v-2.461h4.923v-2.462h2.461V46.77h2.462v-2.461h2.461v-4.923h-2.461v-2.462h2.461v-2.462h2.462V29.54h-2.462v-2.462h-2.461v-2.462h2.461v-4.923h-2.461v-2.461h-2.462v-4.923h-2.461V9.846h-4.923V7.385h-2.462V4.923h-4.923v2.462h-2.462V4.923h-2.461V2.462h-4.923v2.461zm0 0h4.923v2.462h2.462v9.846H34.46v2.461h-4.923v-2.461h-2.462V7.385h2.462V4.923zm-4.923 14.77h4.923v2.46h4.923v-2.46h4.923v2.46h2.462v2.462h2.461v4.924h-2.461v4.922h2.461v4.924h-2.461v2.461h-2.462v2.462h-4.923v-2.462h-4.923v2.462h-4.923v-2.462h-2.462v-2.461h-2.461v-4.923h2.461v-4.924h-2.461v-4.923h2.461v-2.461h2.462v-2.462zm-2.462-4.924v2.462h2.462v2.461h-2.462v2.462h-2.461v2.461H17.23v-2.461H14.77v-2.462h-2.462v-7.384h7.385v2.461h2.461zm0 0v-2.461h-2.461V7.385h4.923v7.384h-2.462zm-9.846 4.923v2.462h2.462v2.461H7.384v-4.923h4.923zm7.385 9.846H17.23v-2.461H7.384v2.461H4.922v4.924h2.462v2.461h9.846v-2.462h2.462V29.54zm-4.923 12.308h2.461v-2.461h2.462v2.461h2.461v2.462h2.462v2.461h-2.462v2.462h-2.461v2.461h-7.385v-7.384h2.462v-2.462zm0 0v-2.461H7.384v4.923h4.923v-2.462h2.462zm4.923 9.846h2.461v-2.461h2.462v7.384h-4.923v-4.923zm9.846-7.384v2.461h-2.462v9.846h2.462v2.462h4.923v-2.462h2.462V46.77H34.46v-2.461h-4.923zm12.308 4.923v-2.462h-2.462v-2.461h2.462v-2.462h2.461v-2.461h2.462v2.461h2.461v2.462h2.462v7.384h-7.385v-2.461h-2.461zm0 0v2.461h2.461v4.923h-4.923v-7.384h2.462zm9.846-4.923h4.923v-4.923H49.23v2.461h2.462v2.462zm-7.385-9.846h2.462v2.461h9.846v-2.462h2.461V29.54h-2.461v-2.462h-9.846v2.461h-2.462v4.924zm4.923-12.308H46.77v2.461h-2.462v-2.461h-2.461v-2.462h-2.462v-2.461h2.462v-2.462h2.461v-2.461h7.385v7.384H49.23v2.462zm0 0v2.461h7.385v-4.923h-4.923v2.462H49.23zm-4.923-9.846h-2.461v2.461h-2.462V7.385h4.923v4.923z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}