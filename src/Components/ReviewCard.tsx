import React from 'react'
import Button from '@mui/material/Button'

import { ReviewCardProps } from './Types'
import { Box, Card } from '@mui/material'
import { DefaultText, Subtitle } from './Text'

export const ReviewCard: React.FC<ReviewCardProps> = ({
    username,
    profilePic,
    reviewRating,
    reviewText,
}) => (
    <Card
        sx={{
            display:'flex',
            flexDirection:'column',
            height:'auto',
            width:'auto',
            minHeight:'10rem',
            minWidth:'30rem',
            maxHeight:'15rem',
            maxWidth:'30rem',
            margin:'0.5rem',
            padding:'0.5rem',
            alignText:'center',
            justifyContent:'center'
        }}>
        <Box
        sx={{
            flex:2,
            display:'grid',
            gridTemplateColumns:'1fr 5fr 3fr',
            textAlign:'start',
            borderBottom:'2px solid black',
            marginBottom:'1rem'
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
            overflow:'auto'
        }}>
            <DefaultText text={reviewText} sx={{textAlign:'left'}}/>
        </Box>
    </Card>
)
