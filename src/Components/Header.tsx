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
    const { currentUser, logout } = useAuth()

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
        src="logo.jpg"
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
        <DefaultButton label='Home' disabled={currentUser === null} onClick={() => navigate('/home')}
        sx={{
            backgroundColor:'gray',
            ':hover': {
                backgroundColor:'darkgray',
              },
        }} />
        <DefaultButton label='Movies' disabled={currentUser === null} onClick={() => navigate('/movies')}
        sx={{
            backgroundColor:'gray',
            ':hover': {
                backgroundColor:'darkgray',
              },
        }} />
        {currentUser && <>
        <Box
        sx={{
            display:'flex',
            flexDirection:'column',
            marginTop:'2rem',
            justifyContent:'center'
        }}>
        <Subtitle text={currentUser.displayName || 'username'} sx={{lineHeight:'1rem'}} />
        <DefaultButton
        label='Log out'
        onClick={() => logout()}
        sx={{
            scale:'0.5',
            margin:'0',
            padding:'0',
            marginBottom:'1rem',
            }} />
        </Box>
        <img
            src="profile_picture.png"
            alt={currentUser.displayName || 'profile picture'}
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
