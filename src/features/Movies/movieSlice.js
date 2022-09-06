import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {APIkey} from "../../common/Apis/MovieApiKey";
import MoviesApi from "../../common/Apis/MoviesAPi";

// To get all movies
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async ()=>{
        const MovieText="Harry";
        const response = await MoviesApi.get(`?apikey=${APIkey}&s=${MovieText}&type=movie&page=10`)
        return response.data
})

// To get all shows
export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async ()=>{
    const seriesText="Friends";
    const response = await MoviesApi.get(`?apikey=${APIkey}&s=${seriesText}&type=series`)
    return response.data
})

// To get selecteMovieOrShow
export const fetchAsyncMovieOrShowDetails = createAsyncThunk('movies/fetchAsyncMovieOrShowDetails', async (id)=>{
    const response = await MoviesApi.get(`?apikey=${APIkey}&i=${id}&plot=full`)
    return response.data
})

const initialState={
    movies:{},
    shows:{},
    selectedMovieOrShow:{}
}

const moviesSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{
      
        removeSelectedMovieOrShow:(state)=>{
            state.movies.selectedMovieOrShow={};
        }
    },
    extraReducers:{
        [fetchAsyncMovies.pending]:()=>{
            console.log("pending");
        },

        [fetchAsyncMovies.fulfilled]:(state, {payload})=>{
            console.log("Fetched succesfully")
            return {...state, movies:payload}
        },

        
        [fetchAsyncMovies.rejected]:()=>{
            console.log("rejected");
        },

        [fetchAsyncShows.fulfilled]:(state, {payload})=>{
            console.log("Fetched succesfully1")
            return {...state, shows:payload}
        },
        [fetchAsyncMovieOrShowDetails.fulfilled]:(state, {payload})=>{
            console.log("Fetched succesfully selected show")
            return {...state, selectedMovieOrShow:payload}
        },
     
        

    }
});

export const {removeSelectedMovieOrShow} = moviesSlice.actions;

export const getAllMovies=(state)=> state.movies.movies;
export const getAllShows=(state)=> state.movies.shows;
export const getSelectedMovieOrShow=(state)=> state.movies.selectedMovieOrShow;

export default moviesSlice.reducer;