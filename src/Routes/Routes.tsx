import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import Home from '../Pages/Home';
import styled from 'styled-components';
import Footer from './Footer/Footer';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Resume from '../Pages/Resume';

export default function Routes () {
    return (
        <Container>
            <Navbar />

            <Switch>
                
                <Route path='/' exact>

                    <Home />

                </Route>

                <Route path='/about' exact>

                    <About />

                </Route>

                <Route path='/contact' exact>

                    <Contact />

                </Route>

                <Route path='/resume' exact>

                    <Resume />

                </Route>

            </Switch>

            <Footer />

        </Container>
    )
};

const Container = styled.div`
    position: relative;
`;
