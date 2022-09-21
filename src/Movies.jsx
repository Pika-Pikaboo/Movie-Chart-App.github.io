import { v4 } from "uuid";

const movies = [{
		name: "Prognosis Negative",
		writers: "Simon Pegg, Zach Galifianakis",
		rated: "PG-13",
		year: "2021",
		genre: "Comedy",
		runtime: "1h 46m",
		imgUrl: "Images/1.jpg",
		rating: "2.66",
		id: v4(),
	},
	{
		name: "Rochelle, Rochelle",
		writers: "Emilia Clarke",
		rated: "R",
		year: "2020",
		genre: "Romance",
		runtime: "1h 56m",
		imgUrl: "Images/2.jpg",
		rating: "3.25",
		id: v4(),
	},
	{
		name: "Death Blow",
		writers: "Idris Elba, John Cena, Thandiwe Newton",
		rated: "18A",
		year: "2019",
		genre: "Action",
		runtime: "2h 5m",
		imgUrl: "Images/3.jpg",
		rating: "4.96",
		id: v4(),
	}
];

export { movies };
