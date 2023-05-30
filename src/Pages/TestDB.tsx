import { Box, Card, Typography } from '@mui/material'
import { DefaultButton } from '../Components/DefaultButton'
import { getMovieById, getMovies, MovieWithDetails, MovieWithouthDetails, searchMovies } from '../db/db';
import { createUser, CreateProfile, getProfiles,Profile, getLikedProfiles, 
  getUserByUsername, ProfileLikeData,followUser, getFavoriteListByUsername, 
  addMovieToFavoriteList, MovieLikeData, CreateReview, makeReview, getReviewsByMovie, 
  getReviewsOfFollowers } from '../db/db';


function TestDB() {

  const testDBmethod = async () => {
    const profileData: CreateProfile = {
      age: 25,
      first_name: 'John',
      last_name: 'Doe',
      username: 'johndoe',
    };
    try {
      const response = await createUser(profileData);
      console.log(response); // 'Profile created' or 'Profile creation failed'
      // Handle success or failure accordingly
    } catch (error) {
      console.error('An error occurred:', error);
      // Handle error
    }

    const profiles = await getProfiles();
    const likedProfiles = await getLikedProfiles("terezka1");
    const getUser = await getUserByUsername('terezka');
    
    const profileLikeData: ProfileLikeData = {
      current_username: 'terezka',
      liked_username: 'johndoe'
    };
  
    try {
      const response = await followUser(profileLikeData);
      console.log(response); // followed profile
    } catch (error) {
      console.error('An error occurred:', error);
      // Handle error
    }

    const getFavoriteMovies = await getFavoriteListByUsername('terezka');

    const movieLike: MovieLikeData = {
      username: 'johndoe',
      likedMovie: 550
    };
  
    try {
      const response = await addMovieToFavoriteList(movieLike);
      console.log(response); // movie added to profile
    } catch (error) {
      console.error('An error occurred:', error);
      // Handle error
    }

    //reviews

    const reviewLike: CreateReview = {
      movie_id: 550,
      username: 'terezka1',
      description: 'goooooooood',
      rating: 8
    };
  
    try {
      const response = await makeReview(reviewLike);
      console.log(response); // movie added to reviews
    } catch (error) {
      console.error('An error occurred:', error);
      // Handle error
    }

    const reviewsMovie = await getReviewsByMovie(550);
    const reviewsFollowers = await getReviewsOfFollowers('terezka')
    const searchMov = await searchMovies('avengers')
    const movies = await getMovies();

  }
  
  return (
    <>

      <Box sx={{
        display:'flex',
        flexDirection:'row'
      }}>
      <DefaultButton
        label='Test'
        onClick={testDBmethod}
      />
      </Box>
   </>
  )
}

export default TestDB;