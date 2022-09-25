import React from 'react';
import { movies } from "./Movies.jsx";
import List from "./List.jsx";
import Movie from "./Movie.jsx";

export default function TopRated() {
	return (
		<List>
			{movies.filter((movie) => movie.rating >= 3).map((movie) => (
					<Movie key={movie.id} movie={movie}/>
				))}
		</List>
	);
}
