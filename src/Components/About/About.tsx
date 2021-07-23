import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import styled from 'styled-components';

export default function About () {

    const classes = useStyles();
    
    return (
        <Container>
            
            <Box className={classes.mainCont}>

                <Typography variant='h3' className={classes.about}>About <span className={classes.me}>Me</span></Typography>

                <Box className={classes.quoteBox}>

                    <Typography className={classes.quote}>"A DESIGNER IS A PLANNER WITH AN AESTHETIC SENSE." - BRUNO MUNARI</Typography>

                </Box>

                <Box className={classes.contentBox}>

                    <Box className={classes.imageBox}>

                        <img className={classes.image} src='https://firebasestorage.googleapis.com/v0/b/rao-kartik.appspot.com/o/Resume%2FPic.jpg?alt=media&token=2d7267e1-bc04-4765-8125-82ea3381876e' alt='' />

                    </Box>

                    <Box className={classes.description}>

                        <Typography variant='h1' className={classes.iam}><span className={classes.i}>I</span> am</Typography>

                        <Typography variant='h4' className={classes.iam}> A FULL STACK WEB-DEVELOPER</Typography>

                        <Typography className={classes.content}>

                            always eager to engage in new and exciting projects and if you want to build something together, get in touch.

                        </Typography>

                    </Box>

                </Box>

            </Box>

        </Container>
    )
}

const Container = styled.div`,
    width: 100%;
    height: 800px;
    background: #222222;

    @media (max-width: 800px) {
        height: auto;
    }
`;

const useStyles = makeStyles(theme=>({
    mainCont: {
        width: '70%',
        margin: 'auto',
        paddingTop: 40,
    },

    about: {
        color: '#fff',
        marginBottom: 20,

        [theme.breakpoints.down(500)]: {
            textAlign: 'center'
        }
    },

    me: {
        color: '#58ba9d'
    },

    quoteBox: {
        borderTop: '1px solid #424242',
        borderBottom: '1px solid #424242',
        padding: 17,
    },

    quote: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 22
    },

    description: {
        [theme.breakpoints.down(800)]: {
            marginTop: 60
        }
    },

    contentBox: {
        display: 'flex',
        height: 600,
        justifyContent: 'center',
        alignItems: 'center',
        // padding: theme.spacing(0, 10),

        [theme.breakpoints.down(800)]: {
            flexDirection: 'column',
            height: 'auto',
            marginTop: 30
        }
    },

    imageBox: {
        height: 270,
        width: 270,
        borderRadius: '50%',
        marginRight: 20,
    },

    image: {
        width: '100%',
        heught: '70%',
        borderRadius: '50%',
    },

    iam: {
        color: '#fff',
        paddingLeft: 20,

        [theme.breakpoints.down(500)]: {
            fontSize: 30
        },

        [theme.breakpoints.down(800)]: {
            fontSize: 40
        },

        [theme.breakpoints.between(800, 1070)]: {
            fontSize: 50
        }
    },

    i: {
        color: '#58ba9d',
        fontWeight: 600
    },

    content: {
        color: '#fff',
        textAlign: 'left',
        fontSize: 20,
        width: 500,
        paddingLeft: 20,
        lineHeight: 1.5,
        marginBottom: 30,

        [theme.breakpoints.down(550)]: {
            width: 300,
        },

        [theme.breakpoints.between(800, 1070)]: {
            width: 250
        }
    }
}));