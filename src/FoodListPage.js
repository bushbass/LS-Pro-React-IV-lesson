import React, { Component } from 'react';
import FoodItem from './FoodItem';

class FoodListPage extends Component {
  render () {
    return (
      <div>
        <h1>My favorite foods</h1>
        <ul>
          <FoodItem foodItem='Pizza' />
          <FoodItem foodItem='Steak' />
          <FoodItem foodItem='Nachos' />
          <FoodItem foodItem='Burger' />
        </ul>
      
      </div>
      
    )
  }
}


export default FoodListPage