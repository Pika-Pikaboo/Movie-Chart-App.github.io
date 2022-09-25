import React from 'react';
import { movies } from "./Movies.jsx";
import List from "./List.jsx";

export default function Picks() {
	return (
		<List>
			{
				movies
				.filter((movie) => (movie.genre.toLowerCase() === 'romance'))
				.map((movie) => (<Movie key={movie.id} movie={movie}/>))
			}
		</List>
	)
}
