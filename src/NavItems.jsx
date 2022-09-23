import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function NavItems() {
	return (
		<nav className="mx-4">
			<ul className="flex items-center py-4 decoration-0 space-x-4">
				<li className="inline-block text-xl font-medium bg-blue-400 text-white px-4 py-2 rounded-lg cursor-pointer" aria-label="New Releases">
					New Releases
				</li>
				<li className="inline-block text-xl font-medium text-slate-400 bg-slate-100/50 px-4 py-2 rounded-lg cursor-pointer" aria-label="Top Rated">
					Top Rated
				</li>
				<li className="inline-block text-xl font-medium text-slate-400 bg-slate-100/50 px-4 py-2 rounded-lg cursor-pointer" aria-label="Vincent's Picks">
					Vincent's Picks
				</li>
			</ul>
		</nav>
	);
}

export default NavItems;
