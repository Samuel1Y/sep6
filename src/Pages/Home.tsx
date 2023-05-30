import { Box, Card, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { DefaultButton } from '../Components/DefaultButton'
import { useAuth } from '../Contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { ReviewCard } from '../Components/ReviewCard'
import { ReviewsData } from '../Mock/ReviewsData'
import { Review, getReviewsOfFollowers } from '../db/db'


function Home() {
  const [isDisabled, setIsDisabled] = React.useState(false)
  const [reviews, setReviews] = React.useState<Review[] | null>(null)

  const { logout, currentUser } = useAuth()
  const navigate = useNavigate()

  
  useEffect(() => {
    if(currentUser)
    {
        const fetchReviews = async () => {
            try {
            const reviewsData = await getReviewsOfFollowers(currentUser.displayName || 'username');
            setReviews(reviewsData);
            } catch (error) {
            console.error(error);
            }
        };
        fetchReviews();
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
        {reviews && reviews.map((review, index) => {
              return (
                <ReviewCard
                  key={index}
                  movieId={1}
                  username={review.username}
                  reviewRating={String(review.rating)}
                  reviewText={review.description}
                />
              )
            })}
    </Box>
  )
}

export default Home;
