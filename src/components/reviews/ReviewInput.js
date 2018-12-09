import React, { Component } from 'react';
import Restaurant from '../restaurants/Restaurant';

class ReviewInput extends Component {
  state = {
    text: ""
  }

  handleChange = e => {
    this.setState({text: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
    this.setState({
      text: ""
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
        <label><h3>Add a Review</h3></label>
        <p>
          <input type="text" placeholder="Review" value={this.state.text} onChange={e => this.handleChange(e)}/>
        </p>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
