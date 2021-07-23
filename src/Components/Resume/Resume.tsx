import React from 'react';
import styled from 'styled-components';

export default function Resume () {
    return (
        <Container>
            <Embed src="https://firebasestorage.googleapis.com/v0/b/rao-kartik.appspot.com/o/Resume%2FKartik%20Resume.pdf?alt=media&token=f17e3865-ff9d-42aa-a241-9c818aa4b787" type="application/pdf" />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: 800px;
`;
    
const Embed = styled.embed`
    width: 100%;
    height: 100%;
    min-height: 810px;
`;