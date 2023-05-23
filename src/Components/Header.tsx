import React from 'react'

import { HeaderProps } from './Types'
import { Box } from '@mui/material'
import { Subtitle } from './Text'
import { DefaultButton } from './DefaultButton'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../Contexts/AuthContext'

export const Header: React.FC<HeaderProps> = ({
}) => {
    const navigate = useNavigate()
    const { currentUser } = useAuth()

    return (
    <Box
    className="Header"
    sx={{
        display:'flex',
        height:'4rem',
        width:'100%',
        marginBottom:'1rem',
        overflow:'hidden',
        boxSizing: 'border-box',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'gray'
    }}>
        <img
            src="https://png.pngtree.com/element_our/png/20181113/clapperboard-film-logo-icon-design-template-vector-isolated-png_236642.jpg"
            alt="logo"
            height="auto"
            width="auto"
            style={{ 
                alignSelf:'center',
                justifySelf:'center',
                maxHeight: '100%',
                maxWidth: '100%',
            }}
        />
        <DefaultButton label='Home' onClick={() => navigate('')}
        sx={{
            backgroundColor:'gray',
            ':hover': {
                backgroundColor:'darkgray',
              },
        }} />
        <DefaultButton label='Movies' onClick={() => navigate('/movies')}
        sx={{
            backgroundColor:'gray',
            ':hover': {
                backgroundColor:'darkgray',
              },
        }} />
        {currentUser && <>
        <Subtitle text={currentUser.displayName || 'username'} />
        <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt="logo"
            height="auto"
            width="auto"
            onClick={() => navigate('/username')} //change to logged in user username
            style={{ 
                cursor:'pointer',
                alignSelf:'center',
                justifySelf:'center',
                maxHeight: '100%',
                maxWidth: '100%',
                paddingLeft: '0.5rem'
            }}
        />
        </>}
    </Box>
)}
