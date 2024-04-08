import React from 'react'
import { useRouter } from 'next/router';
import ds from "../styles/DesignSystem.module.css"

import {
    LinkedIn as LinkedInIcon,
    GitHub as GitHubIcon,
    Instagram as InstagramIcon,
    SportsBasketball as SportsBasketballIcon,
} from '@mui/icons-material';

export default function Footer() {

    const router = useRouter();

    const handleNavigationGitHub = () => {
        const gitHubProfileURL = "https://github.com/Karlito-blob";
        window.open(gitHubProfileURL, "_blank");
    }

    const handleNavigationLinkedin = () => {
        const linkedinProfileURL = "https://www.linkedin.com/in/karlchareyre/";
        window.open(linkedinProfileURL, "_blank");
    }

    const handleNavigationInstagram = () => {
        const instagramProfileURL = "https://www.instagram.com/_sunny_colors/∑";
        window.open(instagramProfileURL, "_blank");
    }

    const handleNavigationDribbble = () => {
        const dribbbleProfileURL = "https://dribbble.com/sunny_colors";
        window.open(dribbbleProfileURL, "_blank");
    }

    return (
        <div className={ds.footer}>
            <p className={ds.bodySmall}>@2024 - Karl chareyre Portfolio</p>
            <div className={ds.container}>
                <SportsBasketballIcon className={ds.buttonIcon} onClick={() => handleNavigationDribbble()} />
                {/* <InstagramIcon className={ds.buttonIcon} onClick={() => handleNavigationInstagram()} /> */}
                <GitHubIcon className={ds.buttonIcon} onClick={() => handleNavigationGitHub()} />
                <LinkedInIcon className={ds.buttonIcon} onClick={() => handleNavigationLinkedin()} />
            </div>
        </div>
    )
}