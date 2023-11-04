import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import ToDo from './components/ToDos/ToDo';
import Categories from './components/Categories/Categories';
import Navigation from './components/Navigation';





function App() {
    return (
        <div className='App'>
            <Router>
                {/* NAV */}
                <Navigation/>
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/categories' element={<Categories/>}/>
                    <Route path='/todo' element={<ToDo/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App
