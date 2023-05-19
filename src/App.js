import React from 'react';
import { useEffect , useState} from 'react';
import './App.css'
import SearchIcon from './search.svg'
//e93b2216

import MovieCard from './MovieCard';


const movieAPI_url = 'http://www.omdbapi.com?apikey=e93b2216';
const App = () => {

	const [movies, setMovies] = useState([])

	const [searchTerm, setSearchTerm] = useState([''])


	const searchMovies = async (title) => {

	
		const response = await fetch(`${movieAPI_url}&s=${title}`)
		const data = await response.json()
		setMovies(data.Search)
	}

		const movie1 = {
			"Title": "Batman v Superman: Dawn of Justice (Ultimate Edition)",
			"Year": "2016",
			"imdbID": "tt18689424",
			"Type": "movie",
			"Poster": "https://m.media-amazon.com/images/M/MV5BOTRlNWQwM2ItNjkyZC00MGI3LThkYjktZmE5N2FlMzcyNTIyXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg"
		}

	useEffect(() => {
		searchMovies("Fast and Furious")
	},[])

	return (
		<div className='app'>
			<h1>Moviefy</h1>
			<div className='search'>
				<input
				placeholder='Search for movies'
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}></input>
				<img
				src={SearchIcon}
				alt='Search something'
				onClick={() => searchMovies(searchTerm)}>
				</img>
			</div>

			{
				movies?.length > 0
				?(
				<div className='container'>
				{movies.map((movie) => (
					<MovieCard movie={movie}/>
				))}
			</div>
			) :
			(
				<div className='empty'>
					<h2> No movies found :c </h2>
				</div>
			)
			}
			
			
		</div>
	)
	}

export default App