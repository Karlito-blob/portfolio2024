import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from "../components/Header";
import { projects } from "../data/projects";

import {
    GitHub as GitHubIcon,
    PlayCircleFilledWhiteOutlined as PlayCircleFilledWhiteOutlinedIcon,
    PictureAsPdfOutlined as PictureAsPdfOutlinedIcon,
    LanguageOutlined as LanguageOutlinedIcon
} from '@mui/icons-material';

import ds from "../styles/DesignSystem.module.css";
import styles from "../styles/Project.module.css";
import ButtonPrimary from '../components/Fundations/ButtonPrimary';
import ProgressBar from '../components/Fundations/ProgressBar';
import ButtonBack from '../components/Fundations/ButtonBack';
import ButtonSecondary from '../components/Fundations/ButtonSecondary';

function Project() {
    const router = useRouter();
    const [project, setProject] = useState(null);
    const { id } = router.query;

    useEffect(() => {
        if (id) {
            const projectId = parseInt(id);
            const selectedProject = projects.find(project => project.id === projectId);
            if (selectedProject) {
                setProject(selectedProject);
            } else {
                console.error(`Project with ID ${projectId} not found.`);
            }
        }
    }, [id]);

    if (!project) {
        return <p>Loading...</p>; // You can add a loading spinner or message here
    }

    const handleButtonClick = (url) => {
        window.open(url, '_blank');
    };

    const tagsList = (
        <div className={styles.boxTags}>
            {project.tags.map((tagGroup, index) => {
                const tagElements = [];
                Object.entries(tagGroup).forEach(([tagName, tagValue]) => {
                    tagElements.push(
                        <div key={`${index}-${tagName}`} className={styles.simpleTag}>
                            <p className={ds.puceSmall} style={{ width: 72 }}>{`/ ${tagName.charAt(0).toUpperCase() + tagName.slice(1)}`}</p>
                            <p className={ds.puceMedium}>{tagValue.split(', ').map(tag => <span key={tag}>{tag}<br /></span>)}</p>
                        </div>
                    );
                });
                return tagElements;
            })}
        </div>
    );

    const getButtonIcon = (buttonIcon) => {
        switch (buttonIcon) {
            case 'GitHubIcon':
                return GitHubIcon;
            case 'PlayCircleFilledWhiteOutlinedIcon':
                return PlayCircleFilledWhiteOutlinedIcon;
            case 'PictureAsPdfOutlinedIcon':
                return PictureAsPdfOutlinedIcon;
            case 'LanguageOutlinedIcon':
                return LanguageOutlinedIcon;
            default:
                return null;
        }
    };
    
    const buttonsList = (
        <div className={styles.boxButtons}>
            <ButtonPrimary text={project.button1} icon={getButtonIcon(project.button1Icon)} onClick={() => handleButtonClick(project.url1)} />
            <ButtonSecondary text={project.button2} icon={getButtonIcon(project.button2Icon)} onClick={() => handleButtonClick(project.url2)} />
        </div>
    )

    const imagesList = (
        <div className={styles.containerImg}>
            {project.images.map((image, index) => (
                <img key={index} src={image.default.src} alt={`Image ${index}`} className={ds.imgProject} />
            ))}
        </div>
    )

console.log(project.imgBackground.default)

    return (
        <div>
            <ProgressBar />
            <Header />
            <div className={styles.containerFix}>
                <img src={project.cartouche.default.src} alt={project.title} className={ds.cartoucheProjet} />
                <ButtonBack />
            </div>
            <div className={styles.heroSection} style={{ backgroundImage: `url(${project.imgBackground.default.src})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className={styles.containerText}>
                    {tagsList}
                    <div className={styles.boxCategory}>
                        <p className={ds.label}>{project.number}</p>
                        <p className={ds.label}>{project.category}</p>
                    </div>
                    <h1 className={ds.displayLarge} style={{ textAlign: 'right' }}>{project.title}</h1>
                </div>
            </div>
            <div className={styles.sectionDetails}>
                <div className={styles.containerExplication}>
                    <p className={ds.bodyLarge}>{project.description}</p>
                    {buttonsList}
                </div>
                {imagesList}
            </div>
        </div>
    );
}

export default Project;