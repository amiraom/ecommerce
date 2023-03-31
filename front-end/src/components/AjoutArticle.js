import React , { useState }   from "react";
import axios from "axios";
// nodejs library that concatenates strings
import classnames from "classnames";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useSelector}  from 'react-redux'
import { selectCurrentToken} from "../store/authSlice"
import jwtDecode from 'jwt-decode';

import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button
} from '@material-ui/core';
import { Link ,useNavigate   } from "react-router-dom";
import Header from "./Header";
import {Formik} from 'formik';



    const AjoutArticle =() => {
        
    const [values,setValues]=useState({designation: "",image: "",prix: "",quantite: ""});
    
 
    const navigate =useNavigate();
    const generateError= (error) =>
    {
    toast.error(error,{
        position:"top-right"
    })

    }
    console.log(values.image);
    const handelSubmit = async (event) =>
    {
      event.preventDefault();
   
const formData = new FormData();

formData.append('designation',values.designation);

formData.append('prix',values.prix);

formData.append('quantite',values.quantite);

formData.append('im',values.image);

// console.log(values);
console.log(values.image);
console.log(values.prix);
console.log(values);
const config = {
    headers:{
        'Content-Type': 'multipart/form-data',
        // 'Authorization':token
        
    }
} 
      await axios.post("http://localhost:5011/api/addProduct",{formData},{withCredentials:true}).then((response)=>{

        console.log(response)
  
    
      }).catch((err=>{console.log('err');
      
      if(err.response.data.errors){
        err.response.data.errors.map(el=>{
            return generateError(el.msg)
        })
    }
   
      }))
    }
  return (

    <div>
        <Header/>    <div  style={{marginTop:"200px",paddingBottom:"200px",display:"flex",flexDirection:"row",justifyContent:"center",heigth:"1400px"}}>
    
    <form  onSubmit={(e)=>handelSubmit(e)}>
        <div>
      <h2 style={{marginLeft:"  px",fontWeight:"bold",marginBottom: "30px",fontSize:"var(--font-size-heading-m-highlight)",fontWeight:"var(--font-weight-medium)",fontStretch:"var(--font-stretch-normal)"
}
}>
    <span style={{verticalAlign:"baseline",fontWeight:"bold"}}>AJOUTER UN NOUVEAU ARTICLE</span></h2>
    </div>
    <div>
      <Paper>
        <Grid style={{paddingBottom:"200px"}}
          container
          spacing={3}
          direction={'column'}
          justify={'center'}
          alignItems={'center'}
        >
          <Grid item xs={12}>
            <TextField style={{width:"390px"}} label="DESIGNATION" name="designation" onChange= {(e)=>setValues({...values,[e.target.name]:e.target.value})}></TextField>
          </Grid>
          <Grid item xs={12}>
          </Grid>
          <Grid item xs={12}>
            <TextField style={{width:"390px"}} label="PRIX"  name="prix" onChange= {(e)=>setValues({...values,[e.target.name]:e.target.value})}></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField style={{width:"390px"}} label="QUANTITÉ"  name="quantite" onChange= {(e)=>setValues({...values,[e.target.name]:e.target.value})}></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField style={{width:"390px"}} label="IMAGE"  name="im" type="file" onChange= {(e)=>setValues({...values,image:e.target.value})}></TextField>
          </Grid>          <Grid item xs={12}>
      
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth type="submit" style={{backgroundColor:"black",padding:"10px 140px",marginTop: "30px"}}> <span style={{color:"#fff"}}>AJOUTER</span> </Button>

          </Grid>
          
        </Grid>
      </Paper>
      </div>
    
    </form>
   
    </div></div>


  )
}
export default AjoutArticle
