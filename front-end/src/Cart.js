import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'

import CartDetail from 'CartDetail';
import Table from '@material-ui/core/Table'
import { CartContext } from 'CartContext';
import Avatar from '@material-ui/core/Avatar';
import DeleteIcon from '@material-ui/icons/Delete';

import {  IconButton, TableBody, TableCell, TableContainer, TableHead } from '@mui/material';

const Cart = () => {


const {cart,removeFromCart} = useContext(CartContext);
const {items =[]} = cart;


  return (
   <TableContainer component={Paper}>
    <Table aria-label='simple table'>
<TableHead>
    <TableRow>

<TableCell></TableCell>
<TableCell>Element</TableCell>
<TableCell>Quantité</TableCell>
<TableCell>Prix</TableCell>

<TableCell></TableCell>
</TableRow>
</TableHead>
<TableBody>
{items.map(item => (

<TableRow key={item.id}>
    <TableCell><Avatar variant="square" alt={item.designation} src={`./${item.image.slice(item.image.indexOf("public") + 7, item.length)}` }/></TableCell>
<TableCell componenet='th' scope='row'> {item.designation}</TableCell>
<TableCell>{item.qty}</TableCell>
<TableCell>{item.prix * item.qty}</TableCell>


<TableCell>
    <IconButton aria-label="delete" size="small" onClick={() => removeFromCart(item)}>
        <DeleteIcon fontSize="small"/>
    </IconButton>
</TableCell>


</TableRow>

))}


</TableBody>
    </Table>
    <div> 

        <Typography style={{display:"flex",justifyContent:"flex-end",marginTop:"10"}} variant="h5"> Totale: {items.reduce((accumulator,currentValue) => accumulator + currentValue.prix,0)} TND 
</Typography>
        </div>
    </TableContainer>
  );
};

export default Cart;