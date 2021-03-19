import React, {useState, useEffect} from 'react'
import { useSearch } from './SearchContext'
import Axios from 'axios'
import Pagination from './Pagination'


function SearchResults() {

    const search = useSearch()
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postperPage] = useState(3)
    const suggestions = []

    useEffect(() => {
    try {
        Axios.get(`https://images-api.nasa.gov/search?q=${search}&media_type=image`)
        .then((res)=> {
        setData(res.data.collection.items)
        })
    }catch (error) {
        console.error(error);
    }
    },[])


   const indexOfLastPost = currentPage * postperPage
   const indexOfFirstPage = indexOfLastPost - postperPage
   const currentPosts =  data.slice(indexOfFirstPage, indexOfLastPost)

   const paginate  = (pageNumber) => setCurrentPage(pageNumber)

   data.map((item) => suggestions.push(item.data[0].title))
   suggestions.splice(0, suggestions.length-5)
   console.log(suggestions)
   

    return (
        <div className="container">
            <h2>Search Results for {search}</h2>
            {
                 currentPosts.map((item) => {
                     return(
                         <div className="row">
                         <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                            <img key={item.data[0].nasa_id} className="img-fluid search-item" src={item.links[0].href} />
                         </div>
                         <div className="col-lg-10 col-md-9 col-sm-6 col-6">
                             <p className="mb-0 mt-3">{item.data[0].title}</p>
                            <h6 className="mb-3">{item.data[0].date_created.slice(0,10)}</h6>
                         </div>
                         </div>
                     )
                })
            }
            <hr />
                <Pagination postsperPage={postperPage} totalPosts={data.length} paginate={paginate}/>
            <hr />
            <h3>Related Searches</h3>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                    {suggestions.map((item) =>(
                        <p className="suggestion">{item}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SearchResults
