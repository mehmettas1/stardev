import React from "react";
import  {HomeContainer}  from "@/containers/home";

import { movieData } from '../services/MovieData'

async function HomePage() {
  const popularMovies = await movieData();
  // console.log(popularMovies.length);
  
  return (
    <HomeContainer popularMovies={popularMovies}  />
  );
}

export default HomePage;