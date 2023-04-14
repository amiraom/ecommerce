
import axios from 'axios';
import DemoFooter from 'components/Footers/DemoFooter'
import HeaderUser from 'components/HeaderUser'

import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import ProductCard from 'components/ProductCard';
// import { fetchProducts } from '../services/api';

const User = () => {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await fetchProducts();
  //       setProducts(data);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   };
  //   fetchData();
  // }, []);



  const [list,setList]=useState([]);
  // const token =localStorage.getItem('token');
  const getData = async()=>
  {
    
      await axios.get("http://localhost:5011/api/listProduct")
      .then((response)=>{
          setList(response.data.listProduct)           
          // console.log(response.data);
      })
         .catch((err)=>console.log(err))
  }

  useEffect(()=>{getData()},[list])
  // console.log(list);
  return (
    <div>
      <HeaderUser/>
      <Grid container spacing={2}>
      {list.map(product => (
        <Grid key={product.id} xs={12} md={4} item>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
    
    </div>
   
  );
};

User.propTypes = {};

export default User;