import { Box, Card, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { DefaultButton } from '../Components/DefaultButton'
import { useAuth } from '../Contexts/AuthContext'
import { DefaultText, Title } from '../Components/Text'
import { useLocation, useNavigate } from 'react-router-dom'
import { makeReview } from '../db/db'


function MakeReview() {
  const [review, setReview] = React.useState('')
  const [rating, setRating] = React.useState('')
  const [errorMessage, setErrorMessage] = React.useState('')
  const [isDisabled, setIsDisabled] = React.useState(false)

  const { currentUser } = useAuth()
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if(!currentUser)
    {
      navigate('/')
    }
}, []);


  const handleMakeReview = () => {
    setIsDisabled(true)
    if(review !== '' && rating !== '')
    {
     const reviewData = {
        movie_id: parseInt(pathname.split('/')[2]),
        username: currentUser?.displayName || 'username',
        description: review,
        rating: parseInt(rating)}
      makeReview(reviewData)
    }
    else
    {
      setErrorMessage('Please fill all fields')
      setTimeout(() => setErrorMessage(''), 5000)
    }
    setTimeout(() => setIsDisabled(false), 1000)
  }

  const ratingValues = [
    1,2,3,4,5,6,7,8,9,10
  ]

  return (

      <Card
      sx={{
        display:'flex',
        width:'35rem',
        minHeight:'25rem',
        minWidth:'20rem',
        flexDirection:'column',
        padding:'1rem',
        margin:'0.5rem',
        justifyContent:'space-between'

      }}>
        <Title
        text='Make a Review'
        sx={{
          fontSize:'3rem'
        }}/>

        <FormControl
        sx={{
          margin:'1rem',
          gap:'1rem'
        }}>
            <InputLabel htmlFor="rating-id"
            sx={{
              margin:'0.5rem'
            }}
            >Rating</InputLabel>
            <Select
            id="rating-id"
            value={rating}
            label="Rating"
            required
            onChange={(e: SelectChangeEvent) => setRating(e.target.value)}
            sx={{
              width:'6rem',
              margin:'0.5rem'
            }}>
              {ratingValues.map((rating, index) => {
              return (
                <MenuItem
                  key={index}
                  value={rating}
                >
                  {rating}
                </MenuItem>
              )
            })}
            </Select>
        <TextField
        label='Review'
        type='text'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setReview(e.target.value)}
        multiline
        rows={8}
      sx={{
        margin:'0.5rem'
      }}
    />
        </FormControl>
        <Box
        sx={{minHeight:'2rem', maxWidth:'15rem', alignSelf:'center'}}>
          <DefaultText
          text={errorMessage}
          sx={{
            color:'red',
            fontSize:'1rem'
          }}/>
        </Box>
      <Box
      sx={{
        display:'flex',
        flexDirection:'row'
      }}>
        <DefaultButton
          label='Cancel'
          onClick={() => navigate(pathname.substring(0, pathname.length - 12))}
          disabled={isDisabled}
          sx={{
            backgroundColor:'gray',
            ':hover': {
              backgroundColor:'darkred',
            },
          }}
        />
        <DefaultButton
          label='Submit'
          onClick={handleMakeReview}
          disabled={isDisabled}
        />
      </Box>
      </Card>
  )
}

export default MakeReview;
