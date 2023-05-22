import { Box, Card, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { DefaultButton } from '../Components/DefaultButton'
import { useAuth } from '../Contexts/AuthContext'
import { MovieCard } from '../Components/MovieCard'
import { useNavigate } from 'react-router-dom'
import { ReviewCard } from '../Components/ReviewCard'


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
    <Box
    sx={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      minHeight:'100vh',
      overflow:'auto'
    }}>
      <Card
      sx={{
        display:'flex',
        minHeight:'15rem',
        minWidth:'20rem',
        flexDirection:'column',
        padding:'1rem',
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
        <DefaultButton
          label='User View'
          onClick={() => navigate('/username')}
        />
      </Box>
      }
      </Card>
      <Box sx={{
        display:'flex',
        flexDirection:'row'
      }}>
      <MovieCard 
      title='Avatar The Way of Water'
      description='Jake Sully lives with his newfound family formed on the extrasolar moon Pandora.
      Once a familiar threat returns to finish what was previously started,
      Jake must work with Neytiri and the army of the Navi race to protect their home.'
      picture='https://prod.cdn.bbaws.net/TDC_Blockbuster_-_Production/853/64/4280011185-po-reg-medium_orig-1679979680767.jpg'
      />
      <MovieCard 
      title='Avatar The Way of Water'
      description='Jake Sully lives with his newfound family formed on the extrasolar moon Pandora.
       Once a familiar threat returns to finish what was previously started,
      Jake must work with Neytiri and the army of the Navi race to protect their home.'
      picture='https://prod.cdn.bbaws.net/TDC_Blockbuster_-_Production/853/64/4280011185-po-reg-medium_orig-1679979680767.jpg'
      />
      <MovieCard 
      title='Avatar The Way of Water'
      description='Jake Sully lives with his newfound family formed on the extrasolar moon Pandora.
       Once a familiar threat returns to finish what was previously started, 
       Jake must work with Neytiri and the army of the Navi race to protect their home.'
      picture='https://prod.cdn.bbaws.net/TDC_Blockbuster_-_Production/853/64/4280011185-po-reg-medium_orig-1679979680767.jpg'
      />
      </Box>

      <Box sx={{
        display:'flex',
        flexDirection:'row'
      }}>
      <ReviewCard 
      username='Movie Reviewer'
      profilePic='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
      reviewRating='7'
      reviewText='dsiasjoj woidjoiw jdwoid iwj oiajdisadjsidj jsidjo asidjid idjis jdsodj isjdisjdsid ji jidojsidasjdsijd
       osidj dsiasjoj woidjoiw jdwoid iwj oiajdisadjsidj jsidjo asidjid idjis jdsodj isjdisjdsid ji jidojsidasjdsijd osidj 
       dsiasjoj woidjoiw jdwoid iwj oiajdisadjsidj jsidjo asidjid idjis jdsodj isjdisjdsid ji jidojsidasjdsijd osidj'
      />
      </Box>
   </Box>
   </>
  )
}

export default Welcome;
