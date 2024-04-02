import React from 'react'

// Element of MUI
import { Box, SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';

// Social iconc List of MUI
import {
    X as XIcon,
    LinkedIn as LinkedInIcon,
    GitHub as GitHubIcon,
    Instagram as InstagramIcon,
    Close as CloseIcon,
} from '@mui/icons-material';

export default function SocialMedias() {

    const actions = [
        { icon: <LinkedInIcon />, name: 'Linkedin' },
        { icon: <GitHubIcon />, name: 'GitHub' },
        { icon: <InstagramIcon />, name: 'Instagram' },
        { icon: <XIcon />, name: 'X' }
    ];

    return (
        <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', bottom: 24, left: 24 }}
                icon={<SpeedDialIcon />}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                    />
                ))}
            </SpeedDial>
        </Box>
    )
}
