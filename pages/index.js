import React from 'react'
import Header from "../components/Header";
import { projects } from "../data/projects"
import { useRouter } from 'next/router';
import Footer from '../components/Footer';

import ds from '../styles/DesignSystem.module.css'
import styles from '../styles/Home.module.css'



function Index() {

  const router = useRouter();

  const handleNavigation = (path, projectID) => {
    router.push(`/${path}?id=${projectID}`);
  }

  const cartouches = projects.map((project, index) => (
    <img className={ds.cartouche} src={project.cartouche.default.src} alt={project.title} onClick={() => { handleNavigation('project', project.id) }} />
  ));

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.boxTitle}>
        <h1 className={ds.displayLarge}>Karl Chareyre</h1>
        <p className={ds.bodyMedium}>J’identifie et conçois des expériences<br />qui offrent de l'amusement à mes utilisateurs !</p>
      </div>
      <div className={styles.boxCartouches}>
        {cartouches}
      </div>
      <Footer />
    </div>
  );
}

export default Index;
