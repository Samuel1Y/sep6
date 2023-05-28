import { Box, Card, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { DefaultButton } from '../Components/DefaultButton'
import { useAuth } from '../Contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { ReviewCard } from '../Components/ReviewCard'
import { ReviewsData } from '../Mock/ReviewsData'


function Home() {
  const [isDisabled, setIsDisabled] = React.useState(false)
  const { logout, currentUser } = useAuth()
  const navigate = useNavigate()

  
  useEffect(() => {
    if(currentUser)
    {
        /*
        const fetchReviews = async () => {
            try {
            const reviewsData = await getReviewsOfFollowers(currentUser?.displayName);
            setReviews(reviewsData);
            } catch (error) {
            console.error(error);
            }
        };
        fetchReviews();
        */
    }
    else
    {
        navigate('/')
    }
  }, []);

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
    <Box
    sx={{
        display:'flex',
        flexDirection:'column',
        gap:'1rem',
        flex:1,
        borderLeft:'3px solid black',
        borderRight:'3px solid black',
        paddingX:'1rem',
        maxHeight:'89vh',
        overflow:'auto'
    }}>
        {ReviewsData.map((review, index) => {
              return (
                <ReviewCard
                  key={index}
                  movieId={1}
                  username={review.username}
                  profilePic= {review.profilePic}
                  reviewRating={review.reviewRating}
                  reviewText={review.reviewText}
                />
              )
            })}
    </Box>
  )
}

export default Home;
