import './App.css';
import BookList from './components/BookList';
import BookContextProvider from './components/contexts/BookContext';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <BookList />
      </BookContextProvider>
    </div>
  );
}

export default App;
