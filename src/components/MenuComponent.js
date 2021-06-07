import React, { Component } from 'react'
// for constructing menu component
import { Media } from 'reactstrap'

//Name of new component is menu
class Menu extends Component {
     
    // It is compulsory to write for class components
    constructor(props){
        // we need to supply the props to the super class
        super(props);
        // The state stores in the properties related to this component that we can make use of
        this.state = {
            dishes: [
                {
                  id: 0,
                  name:'Uthappizza',
                  image: 'assets/images/uthappizza.png',
                  category: 'mains',
                  label:'Hot',
                  price:'4.99',
                  description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        },
               {
                  id: 1,
                  name:'Zucchipakoda',
                  image: 'assets/images/zucchipakoda.png',
                  category: 'appetizer',
                  label:'',
                  price:'1.99',
                  description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                        },
               {
                  id: 2,
                  name:'Vadonut',
                  image: 'assets/images/vadonut.png',
                  category: 'appetizer',
                  label:'New',
                  price:'1.99',
                  description:'A quintessential ConFusion experience, is it a vada or is it a donut?'                        },
               {
                  id: 3,
                  name:'ElaiCheese Cake',
                  image: 'assets/images/elaicheesecake.png',
                  category: 'dessert',
                  label:'',
                  price:'2.99',
                  description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                        }
               ],
        }
    }

    // Now, we will create render which will return the corresponding view of this component
    // Media will going to show list of items in our restaurant
    render(){
        // for iterating over all the elements in objects we will use map
        // dish in circle brackets means we are iterating over every dish
        // Whenever we construct list of items in react every item require key attribute to be specified for it
        const menu = this.state.dishes.map((dish) => {
            return(
                // To render list of items in menu we are going to use media
                // the tag = li will going to specify list
                <div key={dish.id} className="col-12 mt-5">
                    <Media tag = "li">
                        <Media left middle>
                            <Media object src={dish.image} alt={dish.name}></Media>
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{dish.name}</Media>
                            <p>{dish.description}</p>
                        </Media>
                    </Media>
                </div>
            );
        });

        return(
            <div className="container">
                <div className="row">
                    <Media list>
                        {menu}
                    </Media>
                </div>
            </div>
        );
    }
}

export default Menu;