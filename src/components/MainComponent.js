import React, {Component} from 'react'
import Home from './HomeComponent';
import Menu from './MenuComponent.js'
import DishDetail from './DishdetailComponent'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {DISHES} from '../shared/dishes'
import {Switch, Route , Redirect } from 'react-router-dom'

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

    const HomePage = () => {
      return(
        <Home />
      );
    }

  return (
    <div>
      <Header />
      <Switch>
         <Route path='/home' component={HomePage}/>
         <Route exact path='/menu' component={() => <Menu dishes = {this.state.dishes} />}/>
         <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}
}

export default Main;
