import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper'
import CartDetail from 'CartDetail';
import Table from '@material-ui/core/Table'
import { CartContext } from 'CartContext';


import {  TableBody, TableCell, TableContainer, TableHead } from '@mui/material';

const Cart = () => {


const {cart} = useContext(CartContext);
const {items =[]} = cart;

  return (
   <TableContainer component={Paper}>
    <Table aria-label='simple table'>
<TableHead>
    <TableRow>

<TableCell>Element</TableCell>
<TableCell>Prix</TableCell>
<TableCell>Quantité</TableCell>
<TableCell>Totale</TableCell>
<TableCell></TableCell>
</TableRow>
</TableHead>
<TableBody>
{items.map(item => (

<TableRow key={item.id}>
<TableCell componenet='th' scope='row'> {item.designation}</TableCell>
<TableCell>{item.prix}</TableCell>
<TableCell>{item.qty}</TableCell>
<TableCell>{item.prix * item.qty}</TableCell>
<TableCell></TableCell>


</TableRow>

))}


</TableBody>
    </Table>
    </TableContainer>
  );
};

export default Cart;