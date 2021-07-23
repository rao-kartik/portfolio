import React from 'react';
import styled from 'styled-components';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

import { IProjectList } from './Projects';
import { Link } from 'react-router-dom';

export const SingleProjectComp = ({title, imageTitle, imageUrl, description, githubLink}: IProjectList) => {

    const classes = useStyles();
    
    return (
        <Container>

            <Card className={classes.root}>

                <CardActionArea>

                    <CardMedia
                    className={classes.media}
                    image={imageUrl}
                    title= {imageTitle}
                    />

                    <CardContent>

                        <Typography gutterBottom variant="h5" component="h2" className={classes.head}>

                            {title}

                        </Typography>

                        <Typography variant="body2" color="textSecondary" component="p">

                            {description}

                        </Typography>

                    </CardContent>

                </CardActionArea>

                <CardActions className={classes.githubCont}>

                    <Link to={{pathname: githubLink}}
                          target= '_blank'
                          className={classes.github}>

                        <GitHubIcon className={classes.head} />

                        <Typography className={classes.githubText}>Github</Typography>

                    </Link>

                </CardActions>

            </Card>

        </Container>
    )
}

const Container = styled.div`
    position: relative;
    margin: 20px;
`;

const useStyles = makeStyles({
    root: {
      maxWidth: 330,
      paddingTop: 5,
    },

    media: {
      height: 240,
      cursor: 'default'
    },

    head: {
        color: '#58ba9d'
    },

    githubCont: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    github: {
        color: '#58ba9d',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        textDecoration: 'none'
    },

    githubText: {
        marginLeft: 10
    }
  });