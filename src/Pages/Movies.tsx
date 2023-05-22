import { Box, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { MovieCard } from '../Components/MovieCard'
import { MoviesData } from '../Mock/MoviesData'


function Movies() {

  const [input, setInput] = React.useState('')
  const [filteredList, setFilteredList] = React.useState(MoviesData) //get array of movies here

  const navigate = useNavigate()

  useEffect(() => {
    setFilteredList(MoviesData.filter(({ title }) => title.toLowerCase().includes(input.toLowerCase())))
},[filteredList, input])

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
        height:'100%',
        width:'90%',
        maxHeight:'38rem',
        alignContent:'center',
        justifyContent:'center',
    }}>
        {filteredList.map((movie, index) => {
              return (
                <MovieCard
                  key={index}
                  title={movie.title}
                  description={movie.description}
                  picture={movie.picture}
                  onClick={() => navigate(`${movie.title}`)} 
                  //use ID here, then in MoviesView use the ID from url to get data of the movie
                />
              )
            })}
    </Box>
    </>

  )
}

export default Movies;
