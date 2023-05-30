import { Box, Card, FormControl, TextField } from '@mui/material'
import React from 'react'
import { DefaultButton } from '../Components/DefaultButton'
import { useAuth } from '../Contexts/AuthContext'
import { DefaultText, Title } from '../Components/Text'
import { useNavigate } from 'react-router-dom'
import { createUser } from '../db/db'


function SignUp() {
  const [email, setEmail] = React.useState('')
  const [username, setUsername] = React.useState('')
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [age, setAge] = React.useState('-1')
  const [password, setPassword] = React.useState('')
  const [passwordConfirm, setPasswordConfirm] = React.useState('')
  const [errorMessage, setErrorMessage] = React.useState('')
  const [isDisabled, setIsDisabled] = React.useState(false)

  const { signUp } = useAuth()
  const navigate = useNavigate()


  const handleSignUp = () => {
    setIsDisabled(true)
    if(username !== '' && firstName !== '' && lastName !== ''  && email !== '' 
      && password !== '' && passwordConfirm !== '' && age !== '' && parseInt(age) > 0) 
    {
      if(password === passwordConfirm)
      {
        signUp(username, email, password)
        .then((message) => {
          setErrorMessage(message)
          navigate('/')
        })
        .catch((error) => {
          console.log(error.message);
          return error.message
        });
        const profileData = {
          age: parseInt(age),
          first_name: firstName,
          last_name: lastName,
          username: username
        }
        createUser(profileData)
      }
      else
      {
        setErrorMessage('Passwords do not match')
        setTimeout(() => setErrorMessage(''), 5000)
      }
    }
    else
    {
      setErrorMessage('Please fill all fields correctly')
      setTimeout(() => setErrorMessage(''), 5000)
    }
   // _signIn(email, password)
    setTimeout(() => setIsDisabled(false), 1000)
  }

  return (
      <Card
      sx={{
        display:'flex',
        height:'auto',
        width:'20rem',
        flexDirection:'column',
        padding:'1rem',
        margin:'0.5rem',
        justifySelf:'center',
        justifyContent:'space-between'

      }}>
        <Title
        text='Sign Up'
        sx={{
          fontSize:'3rem',
          lineHeight:'3rem',
          paddingBottom:'2rem'
        }}/>

        <FormControl
        sx={{
          margin:'1rem',
          gap:'1rem'
        }}>
          <Box
    sx={{
      display:'flex',
    }}>
        <TextField
        label='Username'
        type='text'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername (e.target.value)}
      sx={{
        margin:'0.5rem',
        flex:7
      }}
    />
    <TextField
        label='Age'
        type='number'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAge(e.target.value)}
      sx={{
        margin:'0.5rem',
        flex:3
      }}
    />
    </Box>
    <Box
    sx={{
      display:'flex',
    }}>
    <TextField
        label='First Name'
        type='text'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
      sx={{
        margin:'0.5rem'
      }}
    />
    <TextField
        label='Last Name'
        type='text'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
      sx={{
        margin:'0.5rem'
      }}
    />
    </Box>
        <TextField
        label='Email'
        type='email'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
      sx={{
        margin:'0.5rem'
      }}
    />
    <TextField
        label='Password'
        type='password'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
      sx={{
        margin:'0.5rem'
      }}
    />
    <TextField
        label='Confirm Password'
        type='password'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswordConfirm(e.target.value)}
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

      <DefaultButton
      label='Sign up'
      onClick={handleSignUp}
      disabled={isDisabled}
      />
      </Card>
  )
}

export default SignUp;
