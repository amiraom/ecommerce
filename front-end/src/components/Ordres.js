import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import Header from './Header';
import Table from 'react-bootstrap/Table';
import { useNavigate} from 'react-router-dom';
import {Link } from 'react-router-dom'
import Update from '../components/Update';


import {
  Button,

} from "reactstrap";
import DemoFooter from './Footers/DemoFooter';

const Ordres = () => {

    const [list,setList]=useState([]);
    
   
    const navigate = useNavigate()
    const getData = async()=>
    {
        await axios.get("http://localhost:5011/api/listOrder")
        .then((response)=>{
            setList(response.data.orders)   
            console.log(response);
        })
           .catch((err)=>console.log(err))
    }
  
    useEffect(()=>{getData()},[list])
    console.log(list[0]
        );


    
    // const deleteUser= async(id)=>
    // {

    //   // await axios.delete(`http://localhost:5011/api/delete/${id}`,{headers:{Authorization:token}})

    //     await axios.delete(`http://localhost:5011/api/delete/${id}`)
    //     .then((response)=>
    //     {
    //         console.log(response);
    //         console.log("deleted")
    //     }).catch((err)=>
    //     console.log(err))

    // }
 
  return (
    <div>
      <Header/>
      <div style={{marginLeft:"300px",marginTop:"50px",marginBottom:"400px"}}>
    <h3>Ordre List</h3>
  
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
        
          <th>UserName</th>
          <th>Name product</th>
          <th>Quantity</th>
          
        </tr>
      </thead>
      <tbody>
      {list.map((elem) => (<tr>
        <td>{elem.orderItems[0].price}</td>

        <td>{elem.createdAt
} 

        </td>
        <td>{elem.isPaid} 

</td>
        <td>{elem.totalPrice}</td>
        <td>{elem.paymentMethod}</td>

        
        
        {/* <td>  <Button
                  className="btn-round mr-1"
                  color="warning"
                  outline
                  type="button" onClick={()=>navigate(`/update/${elem._id}`)}
                >Modifier
                  </Button>

                  <Link to={{
                    pathname:'/update',
                    state:{ elem }
                  }}></Link>
                  </td> */}
        {/* <td>

        <Button
                  color="danger"
                  outline
                  size="sm"
                  type="button"
                  className="mr-1" onClick={()=>deleteUser(elem._id)}
                >
                 Supprimer
                </Button>
          </td> */}
         </tr>
            ))}
      </tbody>
    </Table>
   
    </div>
    <DemoFooter/>
  </div>
  )
}

export default Ordres