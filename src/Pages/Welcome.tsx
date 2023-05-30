import { Box, Card, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { DefaultButton } from '../Components/DefaultButton'
import { useAuth } from '../Contexts/AuthContext'
import { useNavigate } from 'react-router-dom'


function Welcome() {
  const [isDisabled, setIsDisabled] = React.useState(false)
  const { logout, currentUser } = useAuth()
  const navigate = useNavigate()


  useEffect(() => {
    if(!currentUser) {
      setIsDisabled(false)
    }
    else setIsDisabled(true)
},[currentUser])

  const handleLogOut = () => {
    setIsDisabled(true)
    logout()
    setTimeout(() => setIsDisabled(false), 1000)
  }

  return (
    <>
      <Card
      sx={{
        display:'flex',
        minHeight:'15rem',
        minWidth:'20rem',
        flexDirection:'column',
        padding:'1rem',
        margin:'0.5rem',
        justifyContent:'space-between'

      }}>
        <Typography
        sx={{
          fontSize:'3rem'
        }}>
          {!currentUser ? 'No one is currently logged in' : 'Logged in as: '+currentUser?.email}
        </Typography>

  
      {isDisabled && <DefaultButton
        label='Log Out'
        onClick={handleLogOut}
      />}
      {!isDisabled &&
      <Box sx={{display:'flex', flexDirection:'row'}}>
        <DefaultButton
          label='Sign In'
          onClick={() => navigate('/sign-in')}
        />
        <DefaultButton
          label='Sign Up'
          onClick={() => navigate('/sign-up')}
        />
      </Box>
      }
      </Card>
      <Box sx={{
        display:'flex',
        flexDirection:'row'
      }}>
  
      </Box>
   </>
  )
}

export default Welcome;
