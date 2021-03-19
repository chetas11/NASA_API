import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import { useHistory } from "react-router-dom";
import {useSearch, useUpdateSearch} from './SearchContext'

function Home() {

    const [data, setData] = useState({})
    const search = useSearch()
    const setSearch = useUpdateSearch()
    const history = useHistory();

    const API_KEY = ""

    useEffect(() => {
    try {
        Axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
        .then((res)=> {
        setData(res.data)
        })
    }catch (error) {
        console.error(error);
    }
    },[])

    const handleClick = () =>{
        history.push("/searchresult")
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 order-md-1 order-lg-1 order-sm-2 order-2">
                    <h3 className="title">{data.title}</h3>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 order-md-2 order-lg-2 order-sm-1 order-1">
                    <button onClick={handleClick} className="btn btn-sm btn-secondary">Search</button>
                    <input value={search} onChange={(e)=> {setSearch(e.target.value)}} className="px-2" placeholder="Search" />    
                </div>
            </div>
            <div className="row text-center">
                <img src={data.hdurl} alt="..." /> 
            </div>
            <div className="row text-center">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <p>{data.explanation}</p>
                    <p className="mb-0">{data.date}</p>
                    <small>&#169; {data.copyright}</small>
                </div>
            </div>
        </div>
    )
}

export default Home
