import React from "react";
import { MovieContainer } from "@/containers/movie";
import { movieData } from '@/services/MovieData'
// import { fetchSingleMovie } from "@/services/movie";


async function MoviePage({ params }) {
    const popularMovies = await movieData();
    console.log(params.id);
    const movieDetail = popularMovies.find(movie => movie.id === params.id)
    // const movieDetail = await fetchSingleMovie(params.id);

    return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;