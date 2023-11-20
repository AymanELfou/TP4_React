import axios from 'axios';
import React from 'react';
import { useEffect,useState } from 'react';
import './Paginat.css';

export default function Pagination() {

    const [users,setUsers] = useState([])
    const [page,setPage] = useState(1)

    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`)
        .then((res) => { setUsers(res.data)} )
        .catch((err) => {console.error('Error fetching data:',err);})
    },[page])
        


    useEffect(() => {
        if(users.length>0){
            console.log(users);
        }
    },[users])


    const handlNextPage = () =>{
        setPage(page + 1)
    }

    const handlPrevPage = () =>{
        if(page > 1){
            setPage(page - 1)
        }
    }



    return(
        <div className='SuperstarApp'>
           <h1>Pagination: </h1>
           <ul>
           {
            users.map((el)=>{
                return <li className='newli' key={el.id}>Title: {el.title}</li>
            })
           }
           </ul>
           
           <button onClick={handlPrevPage}>Previous</button>
           <button onClick={handlNextPage}>Next</button>

        </div>
    )
}
