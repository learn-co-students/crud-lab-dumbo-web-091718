import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const allReviews = this.props.reviews
    const restaurantId = this.props.restaurantId
    const relevantReviews = allReviews.filter(review => {
      return review.restaurantId === restaurantId
    })
    const renderReviews = relevantReviews.map(review => {
      return <Review
              key={review.id}
              review={review}
              deleteReview={this.props.deleteReview}
              />
    })

    // console.log(restaurantId, relevantReviews)
    return (
      <ul>
        {renderReviews}
      </ul>
    );
  }
};

export default Reviews;