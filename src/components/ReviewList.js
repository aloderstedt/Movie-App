import React from "react";

export default class ReviewList extends React.Component {
    constructor(props) {
        super(props);
        this.reviews = props.reviews;
    }
    //addReview = (review, rating, name) => {

    render() {
        console.log(this.reviews)
        return (
            <div className="review-list">
                {this.reviews.map((review, i) => {
                    return (
                        <div key={i}>
                            <h4>{review.name}</h4>
                            <p>- {review.rating} Stars -</p>
                            <p>{review.review}</p>
                            <hr></hr>
                        </div>
                    )
                })}
            </div>
        )
    }
}
