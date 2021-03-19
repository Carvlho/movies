import React, { Fragment } from 'react';

import Card from '../Card/Card';

import styled from 'styled-components';

const Search = ({searchMovie, query, setQuery, movies}) => {
    return(
        <Fragment>
            <Header>
                <Searching>
                    <Form className="search-movie" onSubmit={searchMovie}>
                        <label
                            htmlFor="query"
                            className="name"
                        />
                        <input
                            type="text"
                            name="query"
                            placeholder="Busque um filme"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <Button type="submit">Buscar</Button>
                    </Form>
                </Searching>
            </Header>
            <div className="list-movie">
                <Card movies={movies} />
            </div>

        </Fragment>
    );
}

export const Header = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@800&display=swap');
    font-size: 17px;
    font-weight: bolder;
    font-family: 'Nanum Gothic', sans-serif;
    color: #5603AD;
    
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

export const Searching = styled.div`
    color: white;
    font-weight: bolder;

    input[type="text"]{
        border: 1px solid #5603AD;
        background-color: black;
        color: white;
        text-transform: uppercase;
        font-weight: bolder;
        border-radius: 20px;
        width: 40em;
        padding: 20px;
}

    input[type="text"]:focus {
        outline: 0;
    }

    @media(min-width : 150px) and (max-width : 780px) {
        width: 40em;
        margin: 0 auto;
        text-align: center;

        input[type="text"] {
            width: 20em;
            margin-bottom: 1em;
        }

    }
`;

export const Button = styled.button`

    background-color: #5603AD;
    border: none;
    color:white;
    font-weight: bolder;
    font-size: 16px;
    padding: 16px;
    margin-left: 15px;
    cursor: pointer;
    border-radius: 20px;


    button:hover {
        background-color: #8367C7;
    }
`;

export const Form = styled.form`

`;

export default Search;