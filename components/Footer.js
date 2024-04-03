import React from 'react'
import { useRouter } from 'next/router';
import ds from "../styles/DesignSystem.module.css"

import {
    LinkedIn as LinkedInIcon,
    GitHub as GitHubIcon,
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

    return (
        <div className={ds.footer}>
            <p className={ds.bodySmall}>@2024 - Karl chareyre Portfolio</p>
            <div className={ds.container}>
                <GitHubIcon className={ds.buttonIcon} onClick={() => handleNavigationGitHub()} />
                <LinkedInIcon className={ds.buttonIcon} onClick={() => handleNavigationLinkedin()} />
            </div>
        </div>
    )
}