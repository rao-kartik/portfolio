import React from 'react';
import styled from 'styled-components';
import { Box, Drawer, makeStyles, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import HomeIcon from '@material-ui/icons/Home';
import CallIcon from '@material-ui/icons/Call';
import PersonIcon from '@material-ui/icons/Person';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from 'react-router-dom';

interface IHamburgerDrawerProps {
    open: boolean;
    handleDrawerClose: any;
}

export const HamburgerNavbar = ({open, handleDrawerClose}: IHamburgerDrawerProps) => {

    const classes = useStyles();

    return (
        <Container>

            <Drawer
                className={classes.drawer}
                variant="temporary"
                anchor="left"
                open={open}
                onClose={handleDrawerClose}
                classes={{
                paper: classes.drawerPaper,
                }}
            >
                <CloseIcon className={`${classes.closeIcon} ${classes.drawerClose}`} 
                            onClick={handleDrawerClose} />

                <Box className={classes.tagsBox}>

                    <Link to='/' style={{textDecoration: 'none'}}>

                        <Box className={classes.tagCont} onClick={handleDrawerClose} >

                            <HomeIcon className={classes.tagIcon} />

                            <Typography className={classes.drawerTags}>Home</Typography>

                        </Box>

                    </Link>

                    <Link to='/about' style={{textDecoration: 'none'}}>

                        <Box className={classes.tagCont} onClick={handleDrawerClose} >

                            <PersonIcon className={classes.tagIcon} />
                            
                            <Typography className={classes.drawerTags}>About</Typography>

                        </Box>

                    </Link>

                    <Link to='/contact' style={{textDecoration: 'none'}}>

                        <Box className={classes.tagCont} onClick={handleDrawerClose} >

                            <CallIcon className={classes.tagIcon} />

                            <Typography className={classes.drawerTags}>Contact</Typography>

                        </Box>

                    </Link>

                    <Link to='/resume' style={{textDecoration: 'none'}}>

                        <Box className={classes.tagCont} onClick={handleDrawerClose} >

                            <AssignmentIcon className={classes.tagIcon} />

                            <Typography className={classes.drawerTags}>Resume</Typography>

                        </Box>

                    </Link>

                </Box>
                
            </Drawer>

        </Container>
    )
};

const Container = styled.div`

`;

const drawerWidth = 260;

const useStyles = makeStyles(theme=>({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        position: 'relative',
    },

    drawerPaper: {
        width: drawerWidth,
        padding: theme.spacing(7,0, 4),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },

    drawerIcon: {
        fontSize: '2rem',
    },

    drawerClose: {
        position: 'absolute',
        right: theme.spacing(2),
        top: theme.spacing(2),
        fontSize: '1.5rem'
    },

    closeIcon: {
        color: '#000',
        fontSize: '2rem',
        marginLeft: '10%',
        cursor: 'pointer'
    },

    tagsBox: {
        width: '100%',
        padding: theme.spacing(4, 0, 8, 4)
    },

    tagCont: {
        display: 'flex',
    },

    drawerTags: {
        fontSize: 25,
        color: '#9e9e9e'
    },

    tagIcon: {
        color: '#9e9e9e',
        marginRight: theme.spacing(2),
        fontSize: 30,
        position: 'relative',
        top: '3px'
    }
}));