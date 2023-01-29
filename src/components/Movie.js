import React from "react";
import ReviewForm from "./ReviewForm";
import StarRating from "./StarRating";
import ReviewList from "./ReviewList";

export default class Movie extends React.Component {
    render() {
        const { movie } = this.props;
        return (<><br></br><div className="card mainschema centered">
            <div className="card-header">
                <h3 className="text-center"><strong><em>{movie.title} ({movie.year})</em></strong></h3>
            </div>
            <div className="card-body"><img src={movie.image} alt={movie.title}></img></div>
            <div className="card-footer"><StarRating /></div>
        </div>
            <div></div></>)
    }
}