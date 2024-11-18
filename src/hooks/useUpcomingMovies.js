import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addUpcomingMovies } from "../utils/movieSlice"


const usePopularMovies = ()=>{

  const dispatch = useDispatch()

  const getUpcomingMovies = async()=>{

    const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1",API_OPTIONS)
    const json = await data.json()
    console.log(json)
    dispatch(addUpcomingMovies(json.results))

  }

  useEffect(()=>{
    getUpcomingMovies()
  })
}


export default usePopularMovies;



// const useTopRatedMovies=()=>{

//   const dispatch  =  useDispatch()

//   const getTopRatedMovies = async () => {
//     const data = await fetch("https://api.themoviedb.org/3/movie/top_rated",API_OPTIONS)
//     const json = await data.json()
//     console.log(json)
//     dispatch(addTopRatedMovies(json.results))
//   }


//   useEffect(()=>{
//     getTopRatedMovies();
//   },[])

// }