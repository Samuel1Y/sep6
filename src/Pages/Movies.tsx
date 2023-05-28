import { Box, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { MovieCard } from '../Components/MovieCard'
import { MoviesData } from '../Mock/MoviesData'
import { MovieWithouthDetails, getMovies } from '../db/db'
import { useAuth } from '../Contexts/AuthContext'


function Movies() { //need to fix layout

  const [input, setInput] = React.useState('')
  const [filteredList, setFilteredList] = React.useState<MovieWithouthDetails[] | any>(null)
  const [movies, setMovies] = React.useState<MovieWithouthDetails[] | null>(null)

  const navigate = useNavigate()
  const { currentUser } = useAuth()
  
  useEffect(() => {
    if(currentUser)
    {
      const fetchMovies = async () => {
        try {
          const moviesData = await getMovies();
          setFilteredList(moviesData)
          setMovies(moviesData)
        } catch (error) {
          console.error(error);
          setFilteredList(MoviesData)
        }
      };
      fetchMovies()
    }
    else
    {
      navigate('/')
    }
}, []);

  useEffect(() => {
    if(filteredList){
      setFilteredList(filteredList.filter(({ title }) => title.toLowerCase().includes(input.toLowerCase())))
    }
},[filteredList, input, movies])

  return (
    <>
    <Box
    sx={{
      display:'flex',
      height:'4rem',
      width:'100%',
      justifyContent:'center',
      borderBottom:'3px solid gray'
    }}>
      <TextField
      label="Search"
      variant="outlined"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
      />

    </Box>
    <Box
    sx={{
        display:'grid',
        gridTemplateColumns: {
            md:'0fr 0fr 0fr 0fr',
            sm:'0fr 0fr'
        },
        gap:'2rem',
        height:'auto',
        width:'100%',
        alignContent:'center',
        justifyContent:'center',
        overflow:'auto',
    }}>
        {filteredList && filteredList.length > 0 &&
        filteredList?.map((movie, index) => {
              return (
                <MovieCard
                  key={index}
                  id={movie.id}
                  title={movie.title}
                  description={movie.overview}
                  picture={movie.image}
                  onClick={() => navigate(`${movie.id}`)} 
                />
              )
            })}
    </Box>
    </>

  )
}

export default Movies;
