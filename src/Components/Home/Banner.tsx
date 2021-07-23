import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import styled from 'styled-components';

import { ImageCarousel } from './ImageCarousel';

export const Banner = () => {

    const classes = useStyles();

    return (
        <Container>
            
            <Box className={classes.headCont}>

                <Box className={classes.nameBox}>

                    <img src='' alt='' />

                    <Typography className={classes.name}>Kartik Yadav</Typography>

                    <Typography className={classes.headText}>I am a full-stack web developer based in Gurugram</Typography>

                </Box>

                <Box className={classes.pcImageCont}>

                    <img className={classes.pcImage} src="https://firebasestorage.googleapis.com/v0/b/rao-kartik.appspot.com/o/Pictures%2Fpc.webp?alt=media&token=18132b6b-310e-4981-804e-8b09c9e7c936" alt='' />

                    <Box className={classes.carouselBox}>

                        <ImageCarousel />
                        
                    </Box>

                </Box>

            </Box>

        </Container>
    )
}

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const useStyles = makeStyles(theme=>({

    headCont: {
        display: 'flex',
        width: '70%',
        alignItems: 'center',
        margin: 'auto',
        borderBottom: '1px solid #424242',

        [theme.breakpoints.down(500)]: {
            width: '90%'
        }
    },
    
    nameBox: {
        width: '100%',
        height: '600px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

        [theme.breakpoints.down(500)]: {
            height: '200px',
            padding: theme.spacing(0, 1),
        },

        [theme.breakpoints.down(770)]: {
            height: '400px'
        },

        [theme.breakpoints.down(1030)]: {
            height: '500px',
            paddingRight: '30px'
        }
    },

    name: {
        color: '#58ba9d',
        fontSize: '70px',
        fontWeight: 600,

        [theme.breakpoints.down(550)]: {
            lineHeight: '72px',
            textAlign: 'center'
        },

        [theme.breakpoints.up(550)]: {
            marginTop: '-80px'
        },

        [theme.breakpoints.down(1030)]: {
            lineHeight: '72px',
        },
    },

    headText: {
        color: '#a9a9a9',

        [theme.breakpoints.down(550)]: {
            textAlign: 'center'
        },
    },

    pcImageCont: {
        minWidth: '400px',
        width: '600px',
        height: '400px',
        position: 'relative',

        [theme.breakpoints.down(770)]: {
            display: 'none'
        },

        [theme.breakpoints.down(1025)]: {
            height: '300px'
        },
    },

    pcImage: {
        // minWidth: '100%',
        width: '100%',
        height: '100%'
    },

    carouselBox: {
        position: 'absolute',
        minWidth: '335px',
        width: '355px',
        height: '250px',
        top: '24px',
        right: '22px',
    }
}));