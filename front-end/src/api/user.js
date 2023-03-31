import axios from 'axios'
const token =localStorage.getItem('token');
// get all products

const createAxios =() => {

    const params ={

        baseURL: 'http://localhost:5011',

    };
    return axios.create(params);
}
export const fetchUser= async()=>{
    const {data} = await createAxios().get('/list',{headers:{Authorization:token}});

    return data
}




