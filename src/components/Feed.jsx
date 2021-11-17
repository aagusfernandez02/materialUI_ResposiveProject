import { makeStyles, Container } from '@material-ui/core';
import Post from './Post';

const useStyles = makeStyles((theme)=>({
  container:{
    paddingTop:theme.spacing(10)
  }
}));

function Feed() {

  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Post 
        title="Example first post"
        description="Example description first post - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias enim deserunt eligendi reiciendis explicabo fugiat qui voluptas quibusdam quas culpa, ex necessitatibus possimus quidem? Vero dicta doloribus unde eos velit reprehenderit enim. Ut, voluptatibus placeat harum dolor explicabo saepe beatae illo voluptas animi, molestias a magni tenetur aperiam ducimus possimus." 
        image="https://www.techneeds.com/wp-content/uploads/2020/08/Blank-1200-x-628-5.jpg"
      />
      <Post 
        title="Example second post"
        description="Example description second post - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias enim deserunt eligendi reiciendis explicabo fugiat qui voluptas quibusdam quas culpa, ex necessitatibus possimus quidem? Vero dicta doloribus unde eos velit reprehenderit enim. Ut, voluptatibus placeat harum dolor explicabo saepe beatae illo voluptas animi, molestias a magni tenetur aperiam ducimus possimus." 
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMAIUs_-Y5b5444VH1YuDh4ppYlHj7dVJSWA&usqp=CAU"
      />
      <Post 
        title="Example third post"
        description="Example description third post - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias enim deserunt eligendi reiciendis explicabo fugiat qui voluptas quibusdam quas culpa, ex necessitatibus possimus quidem? Vero dicta doloribus unde eos velit reprehenderit enim. Ut, voluptatibus placeat harum dolor explicabo saepe beatae illo voluptas animi, molestias a magni tenetur aperiam ducimus possimus." 
        image="https://www.ksportamerica.com/wp-content/uploads/2016/07/blog.jpg"
      />
      <Post 
        title="Example fourth post"
        description="Example description fourth post - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias enim deserunt eligendi reiciendis explicabo fugiat qui voluptas quibusdam quas culpa, ex necessitatibus possimus quidem? Vero dicta doloribus unde eos velit reprehenderit enim. Ut, voluptatibus placeat harum dolor explicabo saepe beatae illo voluptas animi, molestias a magni tenetur aperiam ducimus possimus." 
        image="https://s3.envato.com/files/95683337/Night%20Disco%20Party%2005%20IMAGE.jpg"
      />
      <Post 
        title="Example fifth post"
        description="Example description fifth post - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias enim deserunt eligendi reiciendis explicabo fugiat qui voluptas quibusdam quas culpa, ex necessitatibus possimus quidem? Vero dicta doloribus unde eos velit reprehenderit enim. Ut, voluptatibus placeat harum dolor explicabo saepe beatae illo voluptas animi, molestias a magni tenetur aperiam ducimus possimus." 
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ9wHE7hbT-RpI3BDke2Wk8IVo9vCpv7J7Lo8DBJroyMFbt7bbaCvBra9PO6NFmrWgvF8&usqp=CAU"
      />
      <Post 
        title="Example sixth post"
        description="Example description sixth post - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias enim deserunt eligendi reiciendis explicabo fugiat qui voluptas quibusdam quas culpa, ex necessitatibus possimus quidem? Vero dicta doloribus unde eos velit reprehenderit enim. Ut, voluptatibus placeat harum dolor explicabo saepe beatae illo voluptas animi, molestias a magni tenetur aperiam ducimus possimus." 
        image="https://i2.wp.com/www.dasym.com/wp-content/uploads/2017/07/Cinema-Image-by-Alexandre-Chassignon-on-Flickr.jpg?fit=2304%2C1728&ssl=1"
      />
      
    </Container>
  );
}

export default Feed;

