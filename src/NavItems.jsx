import React from 'react';

function NavItems() {
	return (
		<nav className="mx-4">
			<ul className="flex items-center py-4 decoration-0 space-x-4">
				<li className="inline-block text-xl font-medium bg-blue-400 text-white px-4 py-2 rounded-lg cursor-pointer">New Releases</li>
				<li className="inline-block text-xl font-medium text-slate-400 bg-slate-100/50 px-4 py-2 rounded-lg cursor-pointer">Top Rated</li>
				<li className="inline-block text-xl font-medium text-slate-400 bg-slate-100/50 px-4 py-2 rounded-lg cursor-pointer">Vincent's Picks</li>
			</ul>
		</nav>
	);
}

export default NavItems;
