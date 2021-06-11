import React, { Component } from 'react'
// for constructing menu component
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap'

class DishDetail extends Component{
    constructor(props){
        super(props);
    }

    renderDish(dish){
    if(dish!=null){
        return(
        <div className="col-12 col-md-5 m-1">
            <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
            </CardBody>
            </Card>
        </div>
        );
    }
    else{
        return(
            <div></div>
        );
    }
    }

    renderComments(comments){
        if(comments == null){
            return(<div></div>);
        }

        const com = comments.map((comment) => {
            return(
                <div className="container">
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>--{comment.author} , {new Intl.DateTimeFormat('en-US',{ year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                </li>
                </div>
            )
        })

        return(
            <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">{com}</ul> 
            </div>
        )
    }

    render(){
        const dish = this.props.dish;
        const dishItem = this.renderDish(dish);
        const comment = this.renderComments(dish.comments);

    if(dish != null){
        return(
            <div className="row">
             { dishItem } 
             { comment }
            </div>
        )
    }
    else{
        return(
            <div></div>
        );
    }
    }
}

export default DishDetail;