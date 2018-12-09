import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ""
  }

  handleChange = e => {
    this.setState({ text: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addRestaurant(this.state)
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
            <label><h3>Add a Restaurant:</h3></label>
            <p>
                <input type="text" placeholder="Enter Restaurant Name" value={this.state.text} onChange={e => this.handleChange(e)}/>
            </p>
            <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
