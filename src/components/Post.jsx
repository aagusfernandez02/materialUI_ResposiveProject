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

function Post({title,description,image}) {

  const classes = useStyles();

  return (
    <Card className={classes.card} >
        <CardActionArea>
            <CardMedia 
                className={classes.media} 
                image={image}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">My first post</Typography>
                <Typography variant="body2"> {description} </Typography>
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

