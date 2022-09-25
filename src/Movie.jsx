import React from 'react';
import movies from "./Movies.jsx";

export default function Movie({ movie }) {
	return (
		<article>
			<div className="max-w-full flex flex-row items-center mx-4 my-6 gap-10">
				<img src={movie.imgUrl} alt={movie.name} className="basis-[15%] rounded-xl object-cover object-center"/>
				<div className="flex flex-col basis-3/4 leading-[2.5rem]">
					<div className="flex flex-row justify-between">
						<div className="text-2xl font-medium">{movie.name}</div>
						<div className="flex flex-row gap-2 items-center">
							<svg width="16" height="20" fill="dodgerblue"><path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" aria-hidden="true"></path>
							</svg>
							<div className="text-md text-slate-500">{movie.rating}</div>
						</div>
					</div>
					<div className="flex flex-row gap-4 items-center">
						<div className="text-md text-slate-500 ring-1 ring-slate-300/50 ring-offset-1 rounded-lg px-2">{movie.rated}</div>
						<div className="text-md text-slate-500">{movie.year}</div>
						<div>
							<svg width="2" height="2" fill="currentColor" className="mx-2 text-slate-300" aria-hidden="true"><circle cx="1" cy="1" r="1"></circle></svg>
						</div>
						<div className="text-md text-slate-500">{movie.genre}</div>
						<div>
							<svg width="2" height="2" fill="currentColor" className="mx-2 text-slate-300" aria-hidden="true"><circle cx="1" cy="1" r="1"></circle></svg>
						</div>
						<div className="text-md text-slate-500">{movie.runtime}</div>
					</div>
					<div className="text-xl text-slate-400">
						{movie.writers}
					</div>
				</div>
			</div>
		</article>
	);
}
