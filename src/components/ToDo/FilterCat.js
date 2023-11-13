import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function FilterCat(props) {
    //Logic
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:7254/api/Categories').then(response => {
            console.log(response)
            setCategories(response.data)
          })
    }, []);



    //UI
  return (
    <div className='text-center mt-5'>
        <button onClick={() => props.setFilter(0)} className="btn filter-btn bg-dark m-1">All</button>
        {categories.map(c => 
            <button key={c.categoryId} onClick={() => props.setFilter(+c.categoryId)} className="btn filter-btn bg-dark m-1">
                {c.catName}
            </button>    
        )}
    </div>
  )
}
