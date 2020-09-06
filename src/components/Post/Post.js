import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Post.css';
import { Link } from 'react-router-dom';



const Post = (props) => {
    const { body, id} = props.post
    

    

    return (
     <div className="body-color">
            <Card  id="post-body">
            <CardContent>
                <Typography variant="body2" component="p">
                   <p > {body}</p>
                </Typography>
            </CardContent>
            <CardActions >
                <Link className="more-button" to={`/post/${id}/comment${id}`}><Button size="small">More Info</Button></Link>
            </CardActions>
        </Card>
     </div>
    );
};

export default Post;





