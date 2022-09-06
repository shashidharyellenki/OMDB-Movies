import './App.scss';
import Header from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import Home from './components/Home/Home';
// import MovieCard from './components/MovieCard/MovieCard';
// import MovieListing from './components/MovieListing/MovieListing';
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import PageNotFound from './components/PageNotFound/PageNotFound';
import MovieDetails from './components/MovieDetails/MovieDetails';

function App() {
  return (
    <div className="App">
     <Router>
      <Header/>
      <div className='container'>
      <Routes>
            <Route path='/'  element={<Home/>}/>
            <Route path="/movie/:imdbID" element={<MovieDetails/>}/>
            <Route element={<PageNotFound/> }/>
      </Routes>
      </div>
      <Footer/>
      
     </Router>
    </div>
  );
}

export default App;
