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

export async function getMovieById(id: number): Promise<MovieWithDetails> {
  const response = await axios.get(`${API_BASE_URL}/movie/${id}`);
  try{
    const data = await response.data;
    return data;
  } catch (eror) {
      throw new Error('Error fetching movie');
  }
}

export async function getMovies(): Promise<MovieWithouthDetails[]> {
  const response = await axios.get(`${API_BASE_URL}/movies`);
  try{
    const data = await response.data;
    return data;
  } catch (eror) {
      throw new Error('Error fetching movie');
  }
}