import axios from 'axios';
//connection to API on cloud 
const API_BASE_URL = 'https://sep6-383419.ew.r.appspot.com';
export interface MovieWithDetails {
  id: number;
  title: string; 
  language: string;
  release_date: string;
  image: string;
  overview: string; 
  voting_avg: number;
  vote_count: number;
  genres: string[];
  actors: CrewMember[];
  directors: CrewMember[]
  writers: CrewMember[]
}

export interface CrewMember{
  id: number;
  name: string;
  character: string //only for actors
}

export interface MovieWithouthDetails {
  id: number;
  title: string; 
  language: string;
  release_date: string;
  image: string;
  overview: string; 
  voting_avg: number;
  vote_count: number;
}

export interface CreateProfile {
  age: number;
  first_name: string;
  last_name: string;
  username: string;
}

export interface Profile {
  first_name: string;
  last_name: string;
  username: string;
  created_on: string;
  age: number;
  likedMovies: number[]
  likedProfiles: string[]
}

export interface ProfileLikeData {
  current_username: string;
  liked_username: string;
}

export interface MovieLikeData {
  likedMovie: number;
  username: string;
}
export interface CreateReview {
  movie_id: number;
  username: string;
  description: string;
  rating: number;
}

export interface Review {
  movie_id: number;
  username: string;
  description: string;
  created_on: string;
  rating: number;
}
//*********************profiles***********
export async function createUser(profileData: CreateProfile): Promise<string>  {
  const response = await axios.post(`${API_BASE_URL}/profile`, profileData);
  try {
    if (response.status === 201) {
      return 'Profile created';
    } else {
      return response.statusText;
    }
  } catch (error) {
    return ('An error occurred' + error);
  }
}

export async function getProfiles(): Promise<Profile[]> {
  const response = await axios.get(`${API_BASE_URL}/profiles`);
  try{
    const data = await response.data;
    return data;
  } catch (eror) {
      throw new Error('Error fetching profiles');
  }
}

export async function getUserByUsername(username: string): Promise<Profile> {
  const response = await axios.get(`${API_BASE_URL}/profile/${username}`);
  try{
    const data = await response.data;
    return data;
  } catch (eror) {
      throw new Error('Error fetching profile');
  }
}

export async function followUser(likeProfile: ProfileLikeData): Promise<string>  {
  const response = await axios.post(`${API_BASE_URL}/profile/like`, likeProfile);
  try {
    if (response.status === 201) {
      return 'Profile liked';
    } else {
      return response.statusText;
    }
  } catch (error) {
    return ('An error occurred' + error);
  }
}

export async function getLikedProfiles(username: string): Promise<Profile[]> {
  const response = await axios.get(`${API_BASE_URL}/profiles/${username}/liked`);
  try{
    const data = await response.data;
    return data;
  } catch (error) {
      throw new Error('Error fetching profiles');
  }
}

export async function getFavoriteListByUsername(username: string): Promise<MovieWithouthDetails[]> {
  const response = await axios.get(`${API_BASE_URL}/movies/${username}/liked`);
  try{
    const data = await response.data;
    return data;
  } catch (error) {
      throw new Error('Error fetching movies');
  }
}

export async function addMovieToFavoriteList(likeMovie: MovieLikeData): Promise<string>  {
  const response = await axios.post(`${API_BASE_URL}/movie/like`, likeMovie);
  try {
    if (response.status === 201) {
      return 'Movie liked';
    } else {
      return response.statusText;
    }
  } catch (error) {
    return ('An error occurred' + error);
  }
}
//************reviews**********************/
export async function makeReview(reviewData: CreateReview): Promise<string>  {
  const response = await axios.post(`${API_BASE_URL}/review`, reviewData);
  try {
    if (response.status === 201) {
      return 'Review created';
    } else {
      return response.statusText;
    }
  } catch (error) {
    return ('An error occurred' + error);
  }
}

export async function getReviewsByMovie(id: number): Promise<Review[]> {
  const response = await axios.get(`${API_BASE_URL}/reviews/movie/${id}`);
  try{
    const data = await response.data;
    return data;
  } catch (error) {
      throw new Error('Error fetching reviews');
  }
}

export async function getReviewsOfFollowers(username: string): Promise<Review[]> {
  const response = await axios.get(`${API_BASE_URL}/reviews/username/${username}`);
  try{
    const data = await response.data;
    return data;
  } catch (error) {
      throw new Error('Error fetching reviews');
  }
}

export async function getMyReviews(username: string): Promise<Review[]> {
  const response = await axios.get(`${API_BASE_URL}/reviews/username/${username}/mine`);
  try{
    const data = await response.data;
    return data;
  } catch (error) {
      throw new Error('Error fetching reviews');
  }
}

export async function getMyAverageReviewRating(username: string): Promise<string> {
  const response = await axios.get(`${API_BASE_URL}/reviews/username/${username}/average`);
  try{
    const data = await response.data;
    const rating = data[0].avarage
    return rating;
  } catch (error) {
      throw new Error('Error fetching reviews average');
  }
}
//************movies**********************/

export async function getMovieById(id: number): Promise<MovieWithDetails> {
  const response = await axios.get(`${API_BASE_URL}/movie/${id}`);
  try{
    const data = await response.data;
    return data;
  } catch (error) {
      throw new Error('Error fetching movie');
  }
}

export async function getMovies(): Promise<MovieWithouthDetails[]> {
  const response = await axios.get(`${API_BASE_URL}/movies`);
  try{
    const data = await response.data;
    return data;
  } catch (error) {
      throw new Error('Error fetching movies');
  }
}

export async function searchMovies(movie_title: string): Promise<MovieWithouthDetails[]> {
  const response = await axios.get(`${API_BASE_URL}/searchmovie/${movie_title}`);
  try{
    const data = await response.data;
    return data;
  } catch (error) {
      throw new Error('Error fetching movie');
  }
};
 