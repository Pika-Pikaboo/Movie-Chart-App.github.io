import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function NavItems() {
	return (
		<nav className="mx-4">
			<ul className="flex items-center py-4 decoration-0 space-x-4">
				<li className="inline-block text-xl font-medium bg-blue-400 text-white px-4 py-2 rounded-lg cursor-pointer" aria-label="New Releases">
					<Link to="/newReleases">New Releases</Link>
				</li>
				<li className="inline-block text-xl font-medium text-slate-400 bg-slate-100/50 px-4 py-2 rounded-lg cursor-pointer" aria-label="Top Rated">
					<Link to="/topRated">Top Rated</Link>
				</li>
				<li className="inline-block text-xl font-medium text-slate-400 bg-slate-100/50 px-4 py-2 rounded-lg cursor-pointer" aria-label="Vincent's Picks">
					<Link to="/picks">Vincent's Picks</Link>
				</li>
			</ul>
		</nav>
	);
}

export default NavItems;
