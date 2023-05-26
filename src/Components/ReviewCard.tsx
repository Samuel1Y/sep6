import React from 'react'

import { ReviewCardProps } from './Types'
import { Box, Card, Modal, colors } from '@mui/material'
import { DefaultText, Subtitle } from './Text'
import { DefaultButton } from './DefaultButton'
import { useNavigate } from 'react-router-dom'

export const ReviewCard: React.FC<ReviewCardProps> = ({
    movieId,
    username,
    profilePic,
    reviewRating,
    reviewText,
}) => {

    const [open, setOpen] = React.useState(false)
    const navigate = useNavigate()

return (
    <>
    <Card
        sx={{
            display:'flex',
            flexDirection:'column',
            height:'auto',
            width:'auto',
            minHeight:'15rem',
            minWidth:'30rem',
            maxHeight:'20rem',
            maxWidth:'30rem',
            margin:'0.5rem',
            padding:'0.5rem',
            alignText:'center',
            justifyContent:'center',
            border:(parseInt(reviewRating) === 10) ? '2px solid gold' : 'unset'
        }}>
        <Box
        onClick={() => setOpen(true)}
        sx={{
            cursor:'pointer',
            flex:2,
            display:'grid',
            gridTemplateColumns:'1fr 5fr 3fr',
            textAlign:'start',
            borderBottom:'2px solid black',
            marginBottom:'1rem',
        }}>
            <Box sx={{
                flex:1,
                display:'flex',
                height:'3rem',
                width:'3rem'
            }}>
                <img
                    src={profilePic}
                    alt={username}
                    height="100%"
                    width="100%"
                    style={{ 
                        alignSelf:'center',
                        justifySelf:'center',
                    }}
                />
            </Box>
            <Subtitle text={username} />
            <Subtitle text={'Rating: '+reviewRating+'/10'} sx={{textAlign:'right'}} />
        </Box>
        <Box
        sx={{
            flex:8,
            maxWidth:'fill-content',
            minHeight:'min-content',
            overflow:'auto'
        }}>
            <DefaultText text={reviewText} sx={{textAlign:'left'}}/>
        </Box>
        <Box
        sx={{
            flex:1,
            display:'flex',
            maxWidth:'fill-content',
            minHeight:'min-content',
            overflow:'hidden',
            justifyContent:'end',
            alignItems:'center',
            paddingTop:'0.4rem',
        }}>
            <img
            src="like_button.png"
            alt="like"
            height="auto"
            width="auto"
            onClick={() => console.log('like')}
            style={{ 
                cursor:'pointer',
                alignSelf:'center',
                justifySelf:'center',
                maxHeight: '2rem',
                maxWidth: '2rem',
                padding:'0.5rem',
            }}
            />
            <DefaultText text={'488'} //replace with number of likes
            />
        </Box>
    </Card>
    <Modal
        open={open}
        onClose={() => setOpen(false)}
    >
    <Box sx={{
      alignItems: 'center',
      bgcolor: 'white',
      borderRadius: '5px',
      display: 'flex',
      flexDirection: 'column',
      height: '15rem',
      width:'30rem',
      left: '50%',
      padding: '1rem',
      position: 'absolute',
      top: '50%',
      transform: 'translate(-50%, -50%)',
    }}>
        <Box
        sx={{
            display:'flex',
            flexDirection:'row',
            minWidth:'15rem',
            borderBottom:'3px solid black'
        }}>
        <Box
        sx={{
            display:'flex',
            flexDirection:'column',
            minWidth:'5rem'
        }}>
            <img
                src="profile_picture.png"
                alt={username}
                height="auto"
                width="auto"
                style={{ 
                    alignSelf:'center',
                    justifySelf:'center',
                    maxHeight: '100%',
                    maxWidth: '100%',
                    }}
                />
                <DefaultText text='Movie Reviewer' sx={{textAlign:'center', fontSize:'1rem', padding:'0.2rem'}} />
        </Box>
        <Box
        sx={{
            display:'flex',
            alignItems:'start',
            padding:'1rem',
            paddingTop:'0'
        }}>
                <DefaultText
                text='Movie Reviewer lives with his newfound family formed on the extrasolar moon Pandora.
                        Once a familiar threat returns to finish what was previously started, 
                        Jake must work with Neytiri and the army of the Navi race to protect their home.'
        sx={{textAlign:'start'}} />
        </Box>
        </Box>
        <Box
        sx={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            width:'inherit'
        }}>
        <DefaultButton
            label='Follow User'
            onClick={() => console.log('follow')}
            sx={{
                fontSize:'1rem'
            }}
        />
        <DefaultButton
            label='Go to profile page'
            onClick={() => navigate('/username')} //change to username of review creator
            sx={{
                fontSize:'1rem'
            }}
        />
        </Box>
        </Box>
  </Modal>
  </>
)}
