import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
   
  useNowPlayingMovies();
 
  return (
    <div>
      <Header />
       <MainContainer/>
       <SecondaryContainer/>


      Brows
    </div>
  );
};

export default Browse;


//everything is happen 2 times in react because of strict mode . this will check once agin 
//a lot of things call twice 