import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import Header from './Header';
import Table from 'react-bootstrap/Table';
import Update from '../components/Update';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from "react-router-dom";



import {
  Button,

} from "reactstrap";

const ListProduit = () => {

    const [list,setList]=useState([]);
    const token =localStorage.getItem('token');
    const getData = async()=>
    {
        await axios.get("http://localhost:5011/api/listProduct",{headers:{Authorization:token}})
        .then((response)=>{
            setList(response.data.listProduct)           
            console.log(response.data);
        })
           .catch((err)=>console.log(err))
    }
  
    useEffect(()=>{getData()},[list])
    console.log(list);
 
  return (
    <div>
      <Header/>
      <div style={{marginLeft:"300px",marginTop:"50px"}}>
        <div style={{width:"400px",display:"flex",flexDirection:"row",justifyContent:"space-evenly",height:"100px"}}><h3>Liste des articles</h3>
    <Link to="/addProduct" ><AddCircleIcon   style={{color:"#007bff",fontSize: "3rem"}}></AddCircleIcon></Link></div>
    
  
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
        
          <th>Desingnation</th>
          <th>Prix</th>
          <th>Quantité</th>
          <th>Action</th>
          
        </tr>
      </thead>
      <tbody>
      {list.map((elem) => (<tr>
        <td>{elem.designation} 

        </td>
        <td>{elem.prix} 

</td>
<td>{elem.quantite} 

</td>
        {/* <td>{elem.image}</td> */}
        <td>  <Button
                  className="btn-round mr-1"
                  color="warning"
                  outline
                  type="button" 
                >Modifier
                  </Button></td>
        <td>

        <Button
                  color="danger"
                  outline
                  size="sm"
                  type="button"
                  className="mr-1" 
                >
                 Supprimer
                </Button>
          </td>
         </tr>
            ))}
      </tbody>
    </Table>
   
    </div>
  </div>
  )
}
export default ListProduit