import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { setUser } from '../store/authSlice';
import { useParams } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import Header from './Header';
import DemoFooter from './Footers/DemoFooter';

const Update = () => {
const {id} = useParams()
console.log(id);

  const [value,setValue] = useState()
  const navigate = useNavigate()
//   const User =useSelector(state=>state.user)
  
//   console.log(User);
  
//   console.log(User._id);
// const token =localStorage.getItem('token');
const handelUpdate = async () =>
{
    await axios.put(`http://localhost:5011/api/update/${id}`,{...value})
    .then((response)=>{
        console.log(response.data);
        navigate('/list')
    }).catch((err)=>{console.log(err);})
}
  return (
    <div>
       <Header/>
<div style={{marginLeft:"400px",marginTop:"50px"}}>
<h1>Update Page</h1>
<label>Prenom</label>
<input type="text" name="name" onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})}/>
<br/>
<label>Nom</label>

<input type="text" name="surname" onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})}/>
<br/>
<label>Email</label>
<input type="email" name="email" onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})}/>
<br/>
<label>Mot de passe</label>
<input type="text" name="password" onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})}/>
<br/>
<button onClick={()=>handelUpdate()}>Send</button>
</div>
    </div>
  )
}

export default Update