import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { Subtitle, Title } from '../Components/Text'
import { DefaultButton } from '../Components/DefaultButton'
import { ReviewCard } from '../Components/ReviewCard'
import { MovieCard } from '../Components/MovieCard'
import { MovieWithouthDetails, Profile, followUser, getFavoriteListByUsername, getUserByUsername, getMyAverageReviewRating, Review, getMyReviews } from '../db/db'
import { useAuth } from '../Contexts/AuthContext'


function ProfileView() {


    const [favoriteMovies, setFavoriteMovies] = React.useState<MovieWithouthDetails[] | null>(null)
    const [reviews, setReviews] = React.useState<Review[] | null>(null)
    const [user, setUser] = React.useState<Profile | null>(null)
    const [avarageRating, setAvarageRating] = React.useState<string | null>(null)


    const navigate = useNavigate()
    const { pathname } = useLocation()
    const { currentUser } = useAuth()
    const likeProfile = {
      current_username: currentUser?.displayName || 'username',
      liked_username: pathname.split('/')[1]
    }

    useEffect(() => {
      if(currentUser)
      {
        const fetchUserData = async () => {
          try {
            const userData = await getUserByUsername(pathname.split('/')[1]);
            const favoriteMoviesData = await getFavoriteListByUsername(pathname.split('/')[1]);
            const reviewsData = await getMyReviews(pathname.split('/')[1])
            const avarageRatingRaw = await getMyAverageReviewRating(pathname.split('/')[1] || 'username');
            setAvarageRating(avarageRatingRaw);
            setUser(userData);
            setFavoriteMovies(favoriteMoviesData)
            setReviews(reviewsData)
          } catch (error) {
            console.error(error);
          }
        };
        fetchUserData()
      }
      else
      {
        navigate('/')
      }
}, [currentUser, navigate, pathname]);

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
                src="profile_picture.png"
                alt="profile pic"
                height="auto"
                width="auto"
                style={{ 
                    alignSelf:'center',
                    justifySelf:'center',
                    maxHeight: '10rem',
                    maxWidth: '10rem',
                    }}
                />
                {user && <Title text={user.username || 'username'} sx={{textAlign:'center'}} />}
        </Box>
        <Box
        sx={{
            display:'flex',
            alignItems:'start',
            padding:'1rem'
        }}>
                <Subtitle
                text={`age:${user?.age}, avarage rating:${avarageRating}`}
        sx={{textAlign:'start'}} />
        </Box>
        </Box>
        <DefaultButton
            label='Follow User'
            onClick={() => followUser(likeProfile)}
        />
        <Box
        sx={{
            display:'flex',
            flexDirection:'row',
            borderBottom:'3px solid black',
            borderTop:'3px solid black',
            overflow:'auto'
        }}>
        {favoriteMovies &&
        favoriteMovies.map((movie, index) => {
              return (
                <MovieCard
                  key={index}
                  id={5}
                  title={movie.title}
                  description={movie.overview}
                  picture={movie.image}
                  onClick={() => navigate(`/movies/${movie.id}`)} 
                />
              )
            })}
        </Box>
        <Box className="Reviews"
        sx={{
            display:'grid',
            gridTemplateColumns:{
                lg:'1fr 1fr',
                md:'1fr',
            },
        }}>
            {reviews && 
            reviews.map((review, index) => {
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

export default ProfileView;
