import React from 'react'
// for constructing menu component
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap'

    function RenderDish({dish}){
    if(dish!=null){
        return(
        <div className="col-12 col-md-5 m-1 ml-5">
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

    function RenderComments({comments}){
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

    const DishDetail = (props) => {
    //const dish = props.dish;

    if(props.dish == null){
        return(
            <div></div>
        );
    }

    //const dishItem = <RenderDish dish = {props.dish} />;
    //const comment = <RenderComments comments = {props.dish.comments}/>;

    return(
        <div className="row">
         <RenderDish dish = {props.dish} />
         <RenderComments comments = {props.dish.comments}/>
        </div>
    );
    }

export default DishDetail;