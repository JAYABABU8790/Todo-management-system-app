import './App.css';
import TodoList from './Components/TodoList';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Todo from './Components/Todo';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        {'http://localhost:8080'}
        <Route path='/' element = { <TodoList/> }></Route>
        {'http://localhost:8080/todos'}
        <Route path='/todos' element = { <TodoList/> }></Route>
        {'http://localhost:8080/add-todo'}
        <Route path='/add-todo' element = { <Todo/> }></Route>
        {'http://localhost:8080/update-todo'}
        <Route path='/update-todo/:id' element = { <Todo/> }></Route>

      </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App;
