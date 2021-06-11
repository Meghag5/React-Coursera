import React, { Component } from 'react'
// for constructing menu component
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap'
import DishDetail from './DishdetailComponent.js'

//Name of new component is menu
class Menu extends Component {
     
    // It is compulsory to write for class components
    constructor(props){
        // we need to supply the props to the super class
        super(props);
        // The state stores in the properties related to this component that we can make use of
        this.state = {
           selectedDish: null
        }
        console.log('Menu Component constructor is invoked.');
    }

    //This method will be invoked again and will test when above method is invoked
    componentDidMount(){
        console.log('Menu Component componentDidMount is invoked.');
    }

    //on clicking this will show description
    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    renderDish(dish){
        if(dish != null){
            return (
                <DishDetail dish={dish}/>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    // Now, we will create render which will return the corresponding view of this component
    // Media will going to show list of items in our restaurant
    render(){
        // for iterating over all the elements in objects we will use map
        // dish in circle brackets means we are iterating over every dish
        // Whenever we construct list of items in react every item require key attribute to be specified for it
        const menu = this.props.dishes.map((dish) => {
            return(
                // To render list of items in menu we are going to use media
                // the tag = li will going to specify list
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick = {() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay body className="ml-5">
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        console.log('Menu Component render is invoked.');

        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Menu;