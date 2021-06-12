import React, {Component} from 'react'
import Menu from './MenuComponent.js'
import DishDetail from './DishdetailComponent'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
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
      <Header/>
      <Menu dishes = {this.state.dishes} onClick = {(dishId) => this.onDishSelect(dishId)}/>
      <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
      <Footer />
    </div>
  );
}
}

export default Main;
