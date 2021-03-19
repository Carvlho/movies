import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';



export class Header extends Component {
    render() {
        return (
            <Head>
                <Title to="/">Movie-Search</Title>
            </Head>
        )
    }
}

export const Title = styled(Link)`
    @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

    font-family: 'Pacifico', cursive;
    color: #FFF;
    font-size: 25px;
    text-decoration: none;

    :hover  {
        color: #5603AD;
    }
`;

export const Head = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    justify-content: center;
`;

export default Header;
