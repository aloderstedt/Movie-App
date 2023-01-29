import React from "react";
import hollowStar from "../images/hollowStar.GIF";
import rainStar from "../images/rainStar.GIF";
import glowStar from "../images/glowStar.GIF";

export default class StarRating extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 5,
            hoverRating: 0
        };
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseOver(rating) {
        this.setState({ hoverRating: rating });
    }

    handleClick(rating) {
        this.setState({ rating: rating });
        this.props.handleClick(rating);
    }


    handleMouseLeave() {
        this.setState({ hoverRating: 0 });
    }

    render() {
        const { rating, hoverRating } = this.state;
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            let image;
            if (i <= hoverRating) {
                image = <img src={rainStar} alt="star-hover" />;
            } else if (i <= rating) {
                image = <img src={glowStar} alt="star" />;
            } else {
                image = <img src={hollowStar} alt="star-outline" />;
            }
            stars.push(
                <div key={i} onMouseOver={() => this.handleMouseOver(i)} onClick={() => this.handleClick(i)}>
                    {image}
                </div>
            );
        }
        return (
            <div className="star-rating" onMouseLeave={this.handleMouseLeave}>
                <div className="star-container" style={{ display: "flex", justifyContent: "center" }}>
                    {stars}
                </div>
            </div>
        );
    }
}