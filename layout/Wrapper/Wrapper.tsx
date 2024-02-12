import React from 'react'
import Header from '../Header/Header';
import { Box } from '@mui/material';
import { useThemeContext } from '@/muitheme/ThemeContextProvider';


interface wrapperProps {
    children: JSX.Element | JSX.Element[];
}

const Wrapper = (props: wrapperProps) => {
    const { children } = props;
    const { mode } = useThemeContext()
    const wrapperStyles = {
        color: mode === 'dark' ? '#2C3E50' : '#2C3E50',
        background: mode === 'dark' ? '#2C3E50' : 'rgb(245, 248, 250)',
        Height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        width: '100%', 
    };
    return (
        <>
            <Box className="main-body" sx={wrapperStyles}>
                <Header />
                <Box className="bodycontent" sx={wrapperStyles}>
                    {children}
                </Box>
            </Box>
        </>
    )
}

export default Wrapper