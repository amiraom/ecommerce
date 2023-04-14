import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


import { CartContext } from 'CartContext';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
    marginLeft:'48%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    
  },
}));

const ProductCard = ({product}) => {
const classes = useStyles();


const {addToCart}= useContext(CartContext);
 var result = product.image.indexOf("public");
// console.log("resultat",result)
var res= product.image.slice(result + 7, product.length);

  return (
    <Card className={classes.root}>
      <CardHeader title={product.designation} subheader={`${product.prix} TND`} />
      <CardMedia
        className={classes.media}
        image={`./${res}` } 
        title={product.designation}
      />
      <CardContent>
       
      </CardContent>
      <CardActions disableSpacing>
        <Button
          color='primary'
          variant='contained'
          fullWidth
          onClick={() => addToCart(product)}
        >
          Add To Cart
        </Button>
      </CardActions>
    </Card>
    
  );
};

export default ProductCard;