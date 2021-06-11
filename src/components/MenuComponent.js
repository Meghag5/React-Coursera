import React, { Component } from 'react'
// for constructing menu component
import { Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap'

//Name of new component is menu
class Menu extends Component {
     
    // It is compulsory to write for class components
    constructor(props){
        // we need to supply the props to the super class
        super(props);
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
                    <Card onClick = {() => this.props.onClick(dish.id)}>
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
            </div>
        );
    }
}

export default Menu;