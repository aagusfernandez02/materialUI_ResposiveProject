import { makeStyles, Container, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
  card:{
      marginBottom: theme.spacing(5)
  },
  media:{
      height: 250,
      [theme.breakpoints.down("sm")]:{
          height:150
      }
  }
}));

function Post() {

  const classes = useStyles();

  return (
    <Card className={classes.card} >
        <CardActionArea>
            <CardMedia 
                className={classes.media} 
                image="https://blog.hubspot.com/hubfs/how-long-blog-posts.jpg"
                title="My Post"
            />
            <CardContent>
                <Typography gutterBottom variant="h5">My first post</Typography>
                <Typography variant="body2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis earum natus id veniam itaque laudantium dolore officia atque ducimus ipsam alias optio ab laboriosam perferendis debitis, temporibus accusantium exercitationem?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis earum natus id veniam itaque laudantium dolore officia atque ducimus ipsam alias optio ab laboriosam perferendis debitis, temporibus accusantium exercitationem?
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">Learn More</Button>
            <Button size="small" color="primary">Share</Button>
        </CardActions>
    </Card>
  );
}

export default Post;

