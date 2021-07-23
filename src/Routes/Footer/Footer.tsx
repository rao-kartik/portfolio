import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import styled from 'styled-components'

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link } from 'react-router-dom';

export default function Footer () {

    const classes = useStyles();

    return (
        <Container>
            
            <Box className={classes.iconCont}>

                <Link to={{pathname: 'https://github.com/rao-kartik'}} 
                      target='_blank'
                      className={classes.iconLink} >
                
                    <GitHubIcon className={classes.githubIcon} />

                </Link>

                <Link to={{pathname: 'https://www.linkedin.com/in/kartik-yadav-r/'}} 
                      target='_blank'
                      className={classes.iconLink} >
                
                    <LinkedInIcon className={classes.linkedIcon} />

                </Link>

            </Box>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 70px;
    background: #222222;
`;

const useStyles = makeStyles(theme=>({
    iconCont: {
        width: '70%',
        height: '100%',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'row-reverse',
        borderTop: '1px solid #424242'
    },
    iconLink: {
        color: '#58ba9d',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
    },
    linkedIcon: {
        fontSize: 40
    },
    githubIcon: {
        fontSize: 33,
        marginLeft: 10
    }
}));
