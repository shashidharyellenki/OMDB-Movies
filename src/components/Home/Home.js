import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux';
import MovieListing from '../MovieListing/MovieListing';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/Movies/movieSlice';
export default function Home() {
 const Dispatch= useDispatch();
  useEffect(()=>{
    const fetchMovies= async()=>{
   Dispatch(fetchAsyncMovies());
   Dispatch(fetchAsyncShows());
    }
    fetchMovies()

},[])
  return (
    <div>
      <MovieListing/>
    </div>
  )
}
 