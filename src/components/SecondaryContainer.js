import React from 'react'
import {useSelector} from 'react-redux'
import MovieList from './MovieList'
import MovieCard from './MovieCard'

const SecondaryContainer = () => {
 
  const movies = useSelector(store=>store.movies)

  return (
    movies.nowPlayingMovies && (
    <div className=' bg-black'>
      <div className='-mt-51 pl-12 relative z-20'>
      <MovieList title={"Now Playing"} movies ={movies.nowPlayingMovies}/>
      <MovieList title={"Trending"} movies ={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies ={movies.popularMovies}/>
      <MovieList title={"Top Rated"} movies ={movies.topRatedMovies}/>
      <MovieList title={"Upcoming"} movies ={movies.upcomingMovies }/>



       {/* <MovieCard/>      */}
       </div>
    </div>
  )
)
}

export default SecondaryContainer



//  {/*
//   movieList - popular
//             -Now playing
//             - 
      
      
//        */}

       //2:42:00


       