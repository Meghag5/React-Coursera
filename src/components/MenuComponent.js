import React from 'react'
// for constructing menu component
import { Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap'

        function RenderMenuItem({ dish, onClick}) {
            return(
                <Card onClick = {() => onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay body className="ml-5">
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                </Card>
            );
        }
      
        const Menu = (props) => {
        // for iterating over all the elements in objects we will use map
        // dish in circle brackets means we are iterating over every dish
        // Whenever we construct list of items in react every item require key attribute to be specified for it
        const menu = props.dishes.map((dish) => {
            return(
                // To render list of items in menu we are going to use media
                // the tag = li will going to specify list
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <RenderMenuItem dish={dish} onClick={props.onClick}/>
                </div>
            );
        });

        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );

        }
        
export default Menu;