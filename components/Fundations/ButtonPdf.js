import React from 'react'
import ds from "../../styles/DesignSystem.module.css"


export default function ButtonPdf() {

    const openPDFWindow = () => {
        // Spécifiez le chemin de votre fichier PDF
        const pdfFilePath = '/karlchareyre.pdf';

        // Ouvre une nouvelle fenêtre avec le PDF
        window.open(pdfFilePath, '_blank');
    };

    return (
        <button className={ds.buttonPdf} onClick={() => openPDFWindow()}>
            <p className={ds.buttonTxtSecondary}>
                🌻
            </p>
            <p className={ds.buttonTxtSecondary}>
                Mon CV
            </p>
        </button>
    )
}