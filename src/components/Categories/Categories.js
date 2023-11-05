import React, {useEffect, useState} from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import SingleCategory from './SingleCategory';

export default function Categories() {
    //LOGIC
    //hook to store categories
    const [categories, setCategories] = useState([]);

    const getCategories = () => {
        axios.get('https://localhost:7254/api/Categories').then(response => {
            console.log(response)
            setCategories(response.data)
        })
    }
    
    //use effect to get categories
    useEffect(() => {
        getCategories()
    }, []);


    //UI
  return (
    <section className="categories">
    <article className="bg-info p-5">
        <h1 className='text-center'>
            Categories Dashboard
        </h1>
    </article>
    <Container className="p-2">
        <table className="table bg-info my-3">
            <thead className="table-secondary text-uppercase">
                <tr> {/*Table Row*/}
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {/* READ UI */}
                {categories.map(c => 
                    <SingleCategory key={c.categoryId} category = {c}/>
                )}
            </tbody>
        </table>
    </Container>
</section>
  )
}
