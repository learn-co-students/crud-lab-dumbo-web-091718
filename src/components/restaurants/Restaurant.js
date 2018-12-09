import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  clickHandler = (restaurant) => {
    this.props.deleteRestaurant(restaurant)
  }

  render() {
    const { restaurant } = this.props;
    return (
      <div>
        <li>
          <p>
            {restaurant.text}
            <button onClick={() => this.clickHandler(restaurant)}> X </button>
          </p>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
