import './App.css';
import BookList from './components/BookList';
import { Routes, Route } from 'react-router-dom';
import EditBook from './components/EditBook';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<BookList/>} />
        <Route path='/:id/edit' element={<EditBook/>} />
      </Routes>
    </div>
  );
}

export default App;
