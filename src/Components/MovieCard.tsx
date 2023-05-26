import React from 'react'
import Button from '@mui/material/Button'

import { MovieCardProps } from './Types'
import { Box, Card } from '@mui/material'
import { DefaultText } from './Text'

export const MovieCard: React.FC<MovieCardProps> = ({
    id,
    title,
    description,
    picture,
    onClick
}) => (
    <Card
        onClick={onClick}
        sx={{
            display:'grid',
            gridTemplateRows:'8fr 2fr',
            height:'17.5rem',
            width:'11rem',
            minWidth:'11rem',
            minHeight:'17.5rem',
            margin:'0.5rem',
            marginY:'1rem',
            ':hover': {
                transition:'ease-in-out',
                transitionDuration:'0.1s',
                scale:'1.1'
            },
            alignText:'center',
            justifyContent:'center'
        }}>
        <Box sx={{
            height:'auto',
            maxHeight:{
                lg:'15rem',
                md:'13rem'
            },
            paddingBottom:'0.3rem',
        }}>
            <img
                src={picture}
                alt={title}
                height="auto"
                width="auto"
                style={{ 
                    alignSelf:'center',
                    justifySelf:'center',
                    maxHeight: '98%',
                    maxWidth: '95%',
                    marginTop:'0.3rem'
                }}
            />
                <Box
                sx={{
                    position:'relative',
                    top:{
                        lg:'-15rem',
                        md:'-13rem',
                        sm:'-16rem',
                        xs:'-16rem'
                    },
                    padding:'0.5rem',
                    lineBreak:'loose',
                    textAlign:'left',
                    backgroundColor:'black',
                    opacity:'0',
                    height:'12rem',
                    overflow:'hidden',
                    ':hover': {
                        transition: `opacity ease-in-out`,
                        transitionDuration:'0.3s',
                        opacity:'0.75',
                        minHeight:'14rem',
                },
                }}>
                <DefaultText 
                    text={description}
                    sx={{
                        position:'relative',
                        color:'white',
                    }}/>
                </Box>
            </Box>
            <Box sx={{
                display:'flex',
                justifyContent:'center',
                alignItems:'start',
                height:'min-content',
                padding:'auto',
                overflow:'hidden',
            }}>
                <DefaultText text={title} sx={{fontSize:'1rem', fontWeight:'bold'}} />
        </Box>
    </Card>
)
