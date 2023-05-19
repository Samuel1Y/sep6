import axios from 'axios';
//connection to API on cloud 
const API_BASE_URL = 'http://sep6-383419.ew.r.appspot.com';
export interface Movie {
  id: number;
  title: string; 
  year: number;
}

export async function getMovieById(id: number): Promise<Movie> {
  const response = await axios.get(`${API_BASE_URL}/movie/${id}`);
  try{
    const data = await response.data;
    return data;
  } catch (eror) {
      throw new Error('Error fetching movie');
  }
}