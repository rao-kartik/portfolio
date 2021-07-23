import React from 'react';
import styled from 'styled-components';

import { Banner } from './Banner';
import { Projects } from './Projects';
import { TechStack } from './TechStack';

export default function Home () {

    return (
        <Container>

            <Banner />

            <Projects />

            <TechStack />

        </Container>
    )
};

const Container = styled.div`
    position: relative;
    background: #222222;
    width: 100%;
    color: #fff;
`;