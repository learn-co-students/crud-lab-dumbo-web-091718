import React, { Component } from 'react';
import Restaurant from "./Restaurant"

class Restaurants extends Component {
  render() {
    const allRestaurants = this.props.restaurants.map(restaurant => {
      return <Restaurant 
              key={restaurant.id}
              restaurant={restaurant}
              deleteRestaurant={this.props.deleteRestaurant}
              />
    })
    return(
      <div>
      <h3>Restaurants:</h3>
        <ul>
          {allRestaurants}
        </ul>
      </div>
    );
  }
};

export default Restaurants;