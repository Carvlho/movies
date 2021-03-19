import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const Card = ({movies}) => {

    

    return (
        <CardList>
            {movies.filter(movie => movie.Poster).map((movie, index) => (
                <CardBoard key={index}>
                    <MovieImage   
                        src={movie.Poster}
                        alt="Capa do Filme"
                        onClick={() => {
                            window.location.replace(`/filme/${movie.Title}`)
                        }}
                    />
                    <FlexCard>
                        <Title>{movie.Title}</Title>
                        <Year>{movie.Year}</Year>
                        <Button onClick={() => {
                            window.location.replace(`/filme/${movie.Title}`)
                        }}>
                            <Linke to={`/filme/${movie.Title}`}>Ver Mais</Linke>
                        </Button>
                        <br />
                    </FlexCard>
                </CardBoard>
            ))}
        </CardList>
    )
}

export const CardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 5px 32px 5px rgba(0, 0, 0, 0.43);
`;

export const CardBoard = styled.div`
    margin-left: 20px;
    border-radius: 4px;
    margin-top: 30px;
    margin-bottom: 20px;
`;

export const MovieImage = styled.img`
    height: 500px;
    width: 350px;
    border-radius: 20px;
    cursor: pointer;

    @media(min-width : 150px) and (max-width : 780px) {
        max-width: 300px;
        max-height: 450px;
    }
`;

export const FlexCard = styled.div`
    background-color: #050404;
    color: #FFFFFF;
    padding: 20px;
    border-radius: 20px;
    margin-top: 10px;
    border: 1px solid #5603AD;

    @media(min-width : 150px) and (max-width : 780px) {
        max-width: 260px;
    }

`;

export const Title = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@800&display=swap');
    font-size: 17px;
    font-weight: bold;
    padding: 5px;
    font-family: 'Nanum Gothic', sans-serif;
`;

export const Year = styled.p`
    padding: 5px;
    color: #5603AD;
    font-weight: bold;
`;

export const Button = styled.button`
    background-color: #5603AD;
    border: none;
    color: white;
    font-weight: bolder;
    font-size: 16px;
    padding: 16px;
    cursor: pointer;
    border-radius: 20px;
`;

export const Linke = styled(Link)`
    font-family: 'Nanun Gothic', sans-serif;
    color: #fff;
    text-decoration: none;
`;

export default Card;