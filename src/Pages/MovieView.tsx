import React from 'react'
import { Box } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { Subtitle, Title } from '../Components/Text'
import { isDisabled } from '@testing-library/user-event/dist/utils'
import { DefaultButton } from '../Components/DefaultButton'
import { ReviewsData } from '../Mock/ReviewsData'
import { ReviewCard } from '../Components/ReviewCard'


function MovieView() {

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
                    src="https://prod.cdn.bbaws.net/TDC_Blockbuster_-_Production/853/64/4280011185-po-reg-medium_orig-1679979680767.jpg"
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
                <Title text='Title' sx={{textAlign:'center'}} />
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
            label='Make review'
            onClick={() => navigate(pathname+'/make-review')}
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
            {ReviewsData.map((review, index) => { //get reviews of the specific movie
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

export default MovieView;
