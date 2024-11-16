import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = ( movieId ) => {
  const dispatch = useDispatch();

  //fetch trailer videos

  const getMoviesVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();
    console.log(json);

    // const results = Array.isArray(json.results) ? json.results : [];

    const filterData = json.results.filter((video) => video.type === "Trailer");

    const trailer = filterData.length ? filterData[0] : json.results[0];
     
    // const trailer = json.results[6]


    console.log(trailer);
    dispatch(addTrailerVideo(trailer));

    // setTrailerId(trailer.key)
  };

  useEffect(() => {
    getMoviesVideos();
  }, []);
};

export default useMovieTrailer;

