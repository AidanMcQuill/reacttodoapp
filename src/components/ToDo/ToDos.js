import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Container } from 'react-bootstrap';
import ToDo from '../ToDos/ToDo';
import SingleToDo from './SingleToDo';
import FilterCat from './FilterCat';

export default function ToDos() {
    //LOGIC
    //Hook to store our todo data
    const [toDos, setToDos] = useState([]);
    
    //filter hook 
    const [filter, setFilter] = useState(0);
    //0 is not listed within the index of todo's. so this will "show all"

    const getToDos = () => {
        axios.get('https://localhost:7254/api/ToDoes').then(response => {
            console.log(response)
            setToDos(response.data)
        })
    }

    //This will just run function to grab the ToDo's
    useEffect(() => {
        getToDos()
    }, []);
    
    //UI
  return (
    <section className="resources">
    <article className="bg-info p-5">
        <h1 className="text-center">Resources Dashboard</h1>
    </article>
    <FilterCat setFilter={setFilter}/>
    <Container>
        <article className="resourceGallery row justify-content-center">
            {/* Below we write conditional rendering to see if the user is trying to filter results or not, and display the right resources according to what they want. */}
            {filter === 0 ? toDos.map(t => 
                <SingleToDo key={t.resourceId} todo={t}/>
            ) :
            toDos.filter(t => t.categoryId === filter).map(
                t => <SingleToDo key={t.resourceId} todo={t} /> 
            )}
            {/* If there are no results within the filtered tag */}
            {filter !== 0 &&  toDos.filter(t => t.categoryId === filter).length === 0 &&
                <h2 className='alert alert-warning text-dark'>
                    There are no results for this category
                </h2>
            }
        </article>
    </Container>

</section>
  )
}
