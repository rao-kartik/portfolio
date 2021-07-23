import React from 'react';
import { AppBar, Box, makeStyles, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import styled from 'styled-components';
import clsx from 'clsx';
import { HamburgerNavbar } from './HamburgerDrawer';

import { NavLink } from 'react-router-dom';

export default function Navbar () {

    const classes = useStyles();
    
    const [ open, setOpen ] = React.useState(false);

    const handleDrawerOpen: React.MouseEventHandler<SVGSVGElement> = () => {
        setOpen(true);
    };

    const handleDrawerClose: React.MouseEventHandler<SVGSVGElement> = () => {
        setOpen(false)
    }

    return (
        <Container>
            <HamburgerNavbar open={open} handleDrawerClose={handleDrawerClose} />
            
            <AppBar position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}>
                        
                    <MenuIcon className={classes.menuIcon} 
                                    onClick={handleDrawerOpen} />

                    <Box className={classes.mainCont}>
                            

                            <Box className={classes.imageBox}>
                                
                                <img className={classes.image} src="https://firebasestorage.googleapis.com/v0/b/rao-kartik.appspot.com/o/Logo%2FwhiteLogo.png?alt=media&token=faa28b65-bac4-4a80-9f48-cfeba46a9db3" alt='Kartik' />

                            </Box>

                            <NavLink to='/' className={classes.tagCont} exact activeClassName={classes.activeTag} >

                                    <Typography className={classes.tags}>Home</Typography>

                            </NavLink>

                            <NavLink to='/about' className={classes.tagCont} exact activeClassName={classes.activeTag} >

                                <Typography className={classes.tags}>About</Typography>
                                
                            </NavLink>

                            <NavLink to='/contact' className={classes.tagCont} exact activeClassName={classes.activeTag} >

                                <Typography className={classes.tags}>Contact me</Typography>
                                
                            </NavLink>

                            <NavLink to='/resume' className={classes.tagCont} exact activeClassName={classes.activeTag} >

                                <Typography className={classes.tags}>Resume</Typography>
                                
                            </NavLink>

                    </Box>
            </AppBar>
            
        </Container>
    )
};

const Container = styled.div`
    position: relative;
`;

const drawerWidth = 260;

const useStyles = makeStyles(theme=>({
    appBar: {
        background: '#121212',
        height: '70px',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },

    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },

    menuIcon: {
        cursor: 'pointer',
        fontSize: '36px',
        marginLeft: '30px',

        [theme.breakpoints.up(960)]: {
            display: 'none'
        },
    },
    
    mainCont: {
        minWidth: '900px',
        width: '70%',
        height: '100%',
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',

        [theme.breakpoints.down(960)]: {
            display: 'none'
        }
    },

    imageBox: {
        width: '50px'
    },

    image: {
        width: '100%',
        height: '100%'
    },

    tagCont: {
        marginLeft: '30px',
        textDecoration: 'none',
        color: '#fff',
        height: '100%',
        display: 'flex',
        alignItems: 'center',

        '&:hover': {
            borderBottom: '2px solid #58ba9d'
        }
    },

    activeTag: {
        borderBottom: '2px solid #58ba9d',
        color: '#58ba9d'
    },

    tags: {
        fontSize: '20px',
    }
}));