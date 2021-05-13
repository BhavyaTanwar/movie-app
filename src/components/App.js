import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies,setShowFavourites } from '../actions';
import { data as moviesList } from '../data';

class App extends React.Component{
  componentDidMount(){  
    this.props.dispatch(addMovies(moviesList));
  }
  isMovieInFavourite = (movie) => {
    const {movies} = this.props;
    const index = movies.favourites.indexOf(movie);
    if(index!==-1){
      //found the movie
      return true;
    }
    return false;
  }
  changeTab = (val) => {
    this.props.dispatch(setShowFavourites(val))
  }
  render(){
    const {movies,search} = this.props;// will return { movies: {}, search: []}
    console.log('movies',movies);
    const { list,favourites=[],showFavourites=[] } = movies;
    const displayMovies = showFavourites ? favourites : list;
    return (
      <div className="App">
        <Navbar search = {search} />
        <div className = "main">
          <div className="tabs">
            <div 
              className = {`tab${showFavourites ? '' : 'active-tabs'}`} 
              onClick={ () => this.changeTab(false)}
            >
              Movies
            </div>
            <div 
              className = {`tab${showFavourites ?  'active-tabs' : ''}`} 
              onClick={ () => this.changeTab(true)}
            >
              Favourites
            </div>
          </div>
          <div id="list">
            {displayMovies.map((movie) => (
              <MovieCard 
                movie = {movie} 
                key={movie.imdbID} 
                dispatch = {this.props.dispatch}
                isFavourite = {this.isMovieInFavourite(movie)}
              />
            ))}
            {displayMovies.length === 0 ? (
              <div className="no-movies" > No movies to display! </div> 
            ): null}
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state){
  return{
    movies: state.movies,
    search: state.movies
  };
}
const connectedAppComponent = connect(mapStateToProps)(App);
export default connectedAppComponent;