import React from "react";
import StarRating from "./StarRating";
import ReviewList from "./ReviewList";

export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            review: '',
            rating: 0
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleStarClick = this.handleStarClick.bind(this);
        this.reviews = [];
    }

    handleStarClick(rating) {
        this.setState({ rating });
    }


    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { name, review } = this.state;
        const rating = this.state.rating;
        const reviewObject = { name, review, rating };
        this.reviews.push(reviewObject);
        this.setState({ name: '', review: '', rating: 0 });
    }

    render() {
        return (
            <div className="mainschema card col-4 centered text-center text-dark">
                <form id="reviewForm" onSubmit={this.handleSubmit}>
                    <div className="card-header">
                        <h3><strong>Leave a Review!</strong></h3> <br></br>
                        <StarRating handleClick={this.handleStarClick} />
                    </div>
                    <div className="card-body">
                        <input type="text" name="name" placeholder="Your Name" value={this.state.name} onChange={this.handleInputChange}></input>
                    </div>
                    <div className="card-body">
                        <input className="form-control" type="text" name="review" placeholder="Your words..." value={this.state.review} onChange={this.handleInputChange}></input>
                    </div>
                    <div className="card-footer">
                        <button id="reviewButton" type="submit" form="reviewForm" value="Submit to object" className="btn btn-dark">Submit Review</button>
                    </div>
                </form>
                <ReviewList reviews={this.reviews} className="review-list" />
            </div>
        )
    }
}