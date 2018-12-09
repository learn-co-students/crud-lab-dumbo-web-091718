import React, { Component } from 'react';

class Review extends Component {

  clickHandler = (review) => {
    this.props.deleteReview(review)
  }

  render() {
    const { review } = this.props

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={() => this.clickHandler(review)}> X </button>
      </div>
    );
  }

};

export default Review;
