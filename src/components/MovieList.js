import React from "react";
import FightClub from "../images/movies/FightClub.jpg"
import HPGoblet from "../images/movies/HPGoblet.jpg"
import KnivesOut from "../images/movies/KnivesOut.jpg"
import Life from "../images/movies/LifeMovie.jpg"
import TurningRed from "../images/movies/TurningRed.jpg"
import Movie from "./Movie";
import ReviewForm from "./ReviewForm";

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [
                {
                    title: "Fight Club",
                    year: 1999,
                    image: FightClub
                },
                {
                    title: "Harry Potter and the Goblet of Fire",
                    year: 2005,
                    image: HPGoblet
                },
                {
                    title: "Knives Out",
                    year: 2019,
                    image: KnivesOut
                },
                {
                    title: "Life",
                    year: 2017,
                    image: Life
                },
                {
                    title: "Turning Red",
                    year: 2022,
                    image: TurningRed
                }
            ]
        }
    }

    render() {

        return (
            <div>
                <br></br><h1 className="text-light text-center">Wacky Zany Movie Review Site Wow!!</h1> <br></br>
                {this.state.movies.map((movie, i) => {
                    return (<div key={i}> <Movie key={movie.title} movie={movie} /><ReviewForm /></div>)
                })};
            </div>
        )
    }
}