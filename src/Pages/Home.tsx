import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useAuth } from '../Contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { ReviewCard } from '../Components/ReviewCard'
import { Review, getReviewsOfFollowers } from '../db/db'


function Home() {
  const [reviews, setReviews] = React.useState<Review[] | null>(null)

  const { currentUser } = useAuth()
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
        {(reviews && reviews.length > 0) ? reviews.map((review, index) => {
              return (
                <ReviewCard
                  key={index}
                  movieId={1}
                  username={review.username}
                  reviewRating={String(review.rating)}
                  reviewText={review.description}
                />
              )
            })
            : <ReviewCard
                  key={0}
                  movieId={-1}
                  username={'no followed users'}
                  reviewRating={'0'}
                  reviewText={'You are not following anyone, this is default review'}
                />
          }
    </Box>
  )
}

export default Home;
