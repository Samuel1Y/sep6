import React from 'react'
import { Box } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { Subtitle, Title } from '../Components/Text'
import { DefaultButton } from '../Components/DefaultButton'
import { ReviewsData } from '../Mock/ReviewsData'
import { ReviewCard } from '../Components/ReviewCard'


function ProfileView() {

  const navigate = useNavigate()
  const { pathname } = useLocation()


  return (
    <Box
    sx={{
        display:'flex',
        flexDirection:'column',
        height:'100%',
        width:'90%',
        alignContent:'center',
        justifyContent:'center',
    }}>
        <Box
        sx={{
            display:'flex',
            flexDirection:'row',
            minWidth:'15rem',
            borderBottom:'3px solid black'
        }}>
        <Box
        sx={{
            display:'flex',
            flexDirection:'column',
            minWidth:'15rem'
        }}>
            <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                alt="Title"
                height="auto"
                width="auto"
                style={{ 
                    alignSelf:'center',
                    justifySelf:'center',
                    maxHeight: '100%',
                    maxWidth: '100%',
                    }}
                />
                <Title text={pathname.split('/')[1]} sx={{textAlign:'center'}} />
        </Box>
        <Box
        sx={{
            display:'flex',
            alignItems:'start',
            padding:'1rem'
        }}>
                <Subtitle
                text='Jake Sully lives with his newfound family formed on the extrasolar moon Pandora.
                        Once a familiar threat returns to finish what was previously started, 
                        Jake must work with Neytiri and the army of the Navi race to protect their home.'
        sx={{textAlign:'start'}} />
        </Box>
        </Box>
        <DefaultButton
            label='Follow User'
            onClick={() => console.log('follow')}
        />
        <Box className="Reviews"
        sx={{
            display:'grid',
            gridTemplateColumns:{
                lg:'1fr 1fr',
                md:'1fr',
            },
            borderTop:'3px solid black'
        }}>
            {ReviewsData.filter(({ username }) => username.toLowerCase().match(pathname.split('/')[1]))
            .map((review, index) => {
              return (
                <ReviewCard
                  key={index}
                  username={review.username}
                  profilePic= {review.profilePic}
                  reviewRating={review.reviewRating}
                  reviewText={review.reviewText}
                />
              )
            })}
        </Box>
    </Box>
  )
}

export default ProfileView;
