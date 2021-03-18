import React, {useState, useEffect} from 'react'
import Axios from 'axios'


function Home() {

    const [data, setData] = useState({})
    const [search, setSearch] = useState("")

    useEffect(() => {
    try {
        Axios.get("https://api.nasa.gov/planetary/apod?api_key=eL2khJdIyeie59j5W0qijIS36w8ntjxjqzGoPoab")
        .then((res)=> {
        setData(res.data)
        })
    }catch (error) {
        console.error(error);
    }
    },[])

    return (
        <div className="container">
            <h3 className="title">{data.title}</h3>
            <button className="btn btn-sm btn-secondary">Search</button>
            <input value={search} onChange={(e)=> {setSearch(e.target.value)}} className="px-2" placeholder="Search" />
            <div className="row text-center">
                <img src={data.url} alt="..." />
                <p>{data.explanation}</p>
                <p className="mb-0">{data.date}</p>
                <small>&#169; {data.copyright}</small>
            </div>
        </div>
    )
}

export default Home
