import { Box, Card, FormControl, TextField } from '@mui/material'
import React from 'react'
import { DefaultButton } from '../Components/DefaultButton'
import { useAuth } from '../Contexts/AuthContext'
import { DefaultText, Title } from '../Components/Text'
import { useNavigate } from 'react-router-dom'


function SignIn() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [errorMessage, setErrorMessage] = React.useState('')
  
  const [isDisabled, setIsDisabled] = React.useState(false)

  const { signIn } = useAuth()
  const navigate = useNavigate()


  const handleSignIn = () => {
    setIsDisabled(true)
    if(email !== '' && password !== '')
    {
      signIn(email, password)
      .then((message) => {
        setErrorMessage(message)
        navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(error.message);
        return error.message
      });
    }
    else
    {
      setErrorMessage('Please fill all fields')
      setTimeout(() => setErrorMessage(''), 5000)
    }
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
        text='Sign In'
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
        </FormControl>

        <Box
        sx={{minHeight:'2rem', maxWidth:'15rem', alignSelf:'center'}}>
          <DefaultText
          text={errorMessage}
          sx={{
            color:'red',
          }}/>
        </Box>

        <DefaultButton
      label='Sign In'
      onClick={handleSignIn}
      disabled={isDisabled}
      />
      </Card>
  )
}

export default SignIn;
