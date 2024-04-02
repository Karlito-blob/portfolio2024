import React from 'react'
import ds from "../../styles/DesignSystem.module.css"
import { motion, useScroll } from "framer-motion"

export default function ProgressBar() {
    const { scrollYProgress } = useScroll();
    return (
        <motion.div className={ds.progressBar} style={{ scaleX: scrollYProgress }} />
    )
}