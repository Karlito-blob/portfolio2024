import React from 'react'
import { useRouter } from 'next/router';
import ds from "../../styles/DesignSystem.module.css"
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


export default function ButtonBack() {

    const router = useRouter();
    
    const handleBackNavigation = () => {
        router.push('/');
    }
    return (
        <button className={ds.buttonBack} onClick={() => handleBackNavigation()}>
            <CloseOutlinedIcon fontSize='small'/>
        </button>
    )
}