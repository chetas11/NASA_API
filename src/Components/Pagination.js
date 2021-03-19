import React, {useState} from 'react'

function Pagination({postsperPage, totalPosts, paginate}) {
    const pageNumbers = [];
    const [maxPageNumber, setMaxPageNumber] = useState(5)
    const [minPageNumber, setMinPageNumber] = useState(0)

    const styles = {
        hide:{
            display : 'none'
        }
    }
    
    for(let i=1; i<=Math.ceil(totalPosts/postsperPage); i++){
        pageNumbers.push(i)
    }

    const nextClick = () => {
        setMinPageNumber(minPageNumber+5)
        setMaxPageNumber(maxPageNumber+5)

    }

    const prevClick = () => {
        setMinPageNumber(minPageNumber-5)
        setMaxPageNumber(maxPageNumber-5)
    }

    return (
        <nav>
            <ul className="pagination">
                <li style={minPageNumber > 0 ? null :  styles.hide } className="page-item">
                    <a onClick={prevClick} className="page-link">
                        Previous
                    </a>
                </li>
                { 
                    pageNumbers.map((number) =>(
                        number < maxPageNumber+1 && number > minPageNumber ? 
                        <li key={number} className="page-item">
                            <a onClick={() => paginate(number)} className="page-link">
                                {number}
                            </a>
                        </li> : null
                    ))
                }
                <li style={maxPageNumber < Math.ceil(totalPosts/3) ? null :  styles.hide } className="page-item">
                    <a onClick={nextClick} className="page-link">
                        Next
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination
