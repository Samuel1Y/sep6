import { Box, Card, FormControl, TextField } from '@mui/material'
import React from 'react'
import { DefaultButton } from '../Components/DefaultButton'
import { useAuth } from '../Contexts/AuthContext'
import { DefaultText, Title } from '../Components/Text'
import { useNavigate } from 'react-router-dom'


function SignUp() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [passwordConfirm, setPasswordConfirm] = React.useState('')
  const [errorMessage, setErrorMessage] = React.useState('')
  const [isDisabled, setIsDisabled] = React.useState(false)

  const { signUp } = useAuth()
  const navigate = useNavigate()


  const handleSignUp = () => {
    setIsDisabled(true)
    if(email !== '' && password !== '' && passwordConfirm !== '')
    {
      if(password === passwordConfirm)
      {
        signUp(email, password)
        .then((message) => {
          setErrorMessage(message)
          navigate('/')
        })
        .catch((error) => {
          console.log(error.message);
          return error.message
        });
      }
      else
    {
      setErrorMessage('Passwords do not match')
      setTimeout(() => setErrorMessage(''), 5000)
    }
    }
    else
    {
      setErrorMessage('Please fill all fields')
      setTimeout(() => setErrorMessage(''), 5000)
    }
   // _signIn(email, password)
    setTimeout(() => setIsDisabled(false), 1000)
  }

  return (
    <Box
    sx={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      height:'100vh'
    }}>
      <Card
      sx={{
        display:'flex',
        minHeight:'25rem',
        minWidth:'20rem',
        flexDirection:'column',
        padding:'1rem',
        justifyContent:'space-between'

      }}>
        <Title
        text='Sign Up'
        sx={{
          fontSize:'3rem'
        }}/>

        <FormControl
        sx={{
          margin:'1rem',
          gap:'1rem'
        }}>
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
        label='Password Again '
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
   </Box>
  )
}

export default SignUp;
