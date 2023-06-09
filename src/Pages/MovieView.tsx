import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { DefaultText, Subtitle, Title } from '../Components/Text'
import { DefaultButton } from '../Components/DefaultButton'
import { ReviewCard } from '../Components/ReviewCard'
import { MovieWithDetails, Review, addMovieToFavoriteList, getMovieById, getReviewsByMovie } from '../db/db'
import { useAuth } from '../Contexts/AuthContext'


function MovieView() {

    const [movie, setMovie] = useState<MovieWithDetails | null>(null)
    const [reviews, setReviews] = React.useState<Review[] | null>(null)
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const { currentUser } = useAuth()

    const likeMovie = {
      likedMovie: parseInt(pathname.split('/')[2]),
      username: currentUser?.displayName || 'username'
    }

useEffect(() => {
    if(currentUser)
    {
      const fetchMovie = async () => {
        try {
          const movieData = await getMovieById(parseInt(pathname.split('/')[2]))
          const reviewData = await getReviewsByMovie(parseInt(pathname.split('/')[2]))
          setMovie(movieData)
          setReviews(reviewData)
        } catch (error) {
          console.error(error)
        }
      };
      fetchMovie();
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
        height:'100%',
        width:'90%',
        alignContent:'center',
        justifyContent:'center',
    }}>
        <Box
        className="Movie"
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
                    src={movie?.image}
                    alt={movie?.title}
                    height="auto"
                    width="auto"
                    style={{ 
                        alignSelf:'center',
                        justifySelf:'center',
                        maxHeight: '30rem',
                        maxWidth: '100%',
                    }}
                />
                <Title text={movie?.title} sx={{textAlign:'center', lineHeight:'2.5rem'}} />
        </Box>
        <Box
        sx={{
            display:'flex',
            alignItems:'start',
            padding:'1rem'
        }}>
                <Subtitle
                text={movie?.overview}
        sx={{textAlign:'start'}} />
        </Box>
        </Box>
        <Box
        className="extra info"
        sx={{
            display:'flex',
            flexDirection:'column',
            borderBottom:'3px solid black',
            textAlign:'start',
            padding:'1rem',
            gap:'0.5rem'
        }}>
            <DefaultText text={'Actors: '+movie?.actors.map((crewMember) => crewMember.name)}/>
            <DefaultText text={'Directors: ' + movie?.directors.map((crewMember) => crewMember.name)} />
            <DefaultText text={'Writers: '+ movie?.writers.map((crewMember) => crewMember.name)} />
        </Box>
        <Box
        className="extra info"
        sx={{
            display:'flex',
            flexDirection:'row',
            borderBottom:'3px solid black',
        }}>
            <DefaultButton
            label='Make review'
            onClick={() => navigate(pathname+'/make-review')}
            />
            <DefaultButton
            label='Add to Favorite'
            onClick={() => addMovieToFavoriteList(likeMovie)}
            />
        </Box>
        
        <Box className="Reviews"
        sx={{
            display:'grid',
            gridTemplateColumns:{
                lg:'1fr 1fr',
                md:'1fr',
            },
        }}>
            {reviews && reviews.map((review, index) => {
              return (
                <ReviewCard
                  key={index}
                  movieId={review.movie_id}
                  username={review.username}
                  reviewRating={String(review.rating)}
                  reviewText={review.description}
                />
              )
            })}
        </Box>
    </Box>
  )
}

export default MovieView;
