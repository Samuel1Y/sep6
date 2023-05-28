import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { Subtitle, Title } from '../Components/Text'
import { DefaultButton } from '../Components/DefaultButton'
import { ReviewsData } from '../Mock/ReviewsData'
import { ReviewCard } from '../Components/ReviewCard'
import { MovieCard } from '../Components/MovieCard'
import { MovieWithouthDetails } from '../db/db'
import { MoviesData } from '../Mock/MoviesData'
import { useAuth } from '../Contexts/AuthContext'


function ProfileView() {


    const [favoriteMovies, setFavoriteMovies] = React.useState<MovieWithouthDetails[] | null>(null)

    const navigate = useNavigate()
    const { pathname } = useLocation()
    const { currentUser } = useAuth()

    useEffect(() => {
      if(currentUser)
      {
        /* get user profile
        const fetchUser = async () => {
          try {
            const userData = await getUserByUsername(parseInt(pathname.split('/')[1]));
            setUser(userData);
          } catch (error) {
            console.error(error);
          }
        };
        fetchUser();*/
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
                alt={currentUser?.displayName || 'profile picture'}
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
        <Box
        sx={{
            display:'flex',
            flexDirection:'row',
            borderBottom:'3px solid black',
            borderTop:'3px solid black',
            overflow:'auto'
        }}>
        {MoviesData &&
        MoviesData?.map((movie, index) => { //replace mock with real data
              return (
                <MovieCard
                  key={index}
                  id={5}
                  title={movie.title}
                  description={movie.overview}
                  picture={movie.image}
                  onClick={() => navigate(`${5}`)} 
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
