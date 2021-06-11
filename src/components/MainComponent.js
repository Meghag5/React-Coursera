import React, {Component} from 'react'
import {Navbar, NavbarBrand} from 'reactstrap'
import Menu from './MenuComponent.js'
import DishDetail from './DishdetailComponent'
import {DISHES} from '../shared/dishes'

class Main extends Component {

  constructor(props){
    super(props);

    // The state stores in the properties related to this component that we can make use of
    this.state = {
      dishes: DISHES,
      selectedDish: null
    }
  }

    //on clicking this will show description
    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId});
    }

  render(){
  return (
    <div>
      <Navbar dark color="primary">
      <div className="container">
        <NavbarBrand href="/">Ristorante Con fuson</NavbarBrand>
      </div>
      </Navbar>
      <Menu dishes = {this.state.dishes} onClick = {(dishId) => this.onDishSelect(dishId)}/>
      <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
    </div>
  );
}
}

export default Main;
