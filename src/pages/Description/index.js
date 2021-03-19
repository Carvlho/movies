import React, { Component } from 'react'
import styled from 'styled-components';

import './style.css';

export class Description extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filme: []
        }
    }

    componentDidMount() {
        
        const API_KEY = 'ca639ea2';
        const {nomefilme} = this.props.match.params;
        let url = `http://www.omdbapi.com/?t=${nomefilme}&apikey=${API_KEY}`;
        fetch(url)
        .then((r) => r.json())
        .then((json) => {
            this.setState({filme: json});
            console.log(json);
        })
    }

    render() {

        const votes = this.state.filme.imdbRating;

        function getClassByRate(votes) {
            if (votes >= 8) {
                return "green";
            } else if (votes >= 5) {
                return "orange";
            } else {
                return "red";
            }
        }

        return (
            <tbody>
                <Body>
                    <td>
                        <Poster src={this.state.filme.Poster} alt="Capa do Filme" />
                        <Genre>Gêneros:</Genre>
                        <Genre>{this.state.filme.Genre}</Genre>
                    </td>
                    <Details>
                        <h2>{this.state.filme.Title} <span>({this.state.filme.Year})</span></h2> 
                        <h3>Nota: <span className={getClassByRate(votes)}>{votes}</span></h3>
                        <h3>Sinopse</h3>
                        <p>{this.state.filme.Plot}</p>
                    </Details>
                </Body>
            </tbody>
        )
    }
}

const Body = styled.tr`
    @media(max-width: 768px) {
        display: flex;
        flex-direction: column;
        text-align: center;
    }
`;

const Details = styled.td`
    padding: 0px 10px 150px 10px;
`;

const Genre = styled.p`
    text-align: center;
`;

const Poster = styled.img`
    border-radius: 20px;
    border: 1px solid #5603AD;
    margin: 15px;
`;


export default Description
