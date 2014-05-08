// http://www.highprogrammer.com/alan/games/100-best/hobby/contents.html

/* extraction code

var script= document.createElement('script');
script.type= 'text/javascript';
script.src= 'http://d3js.org/d3.v3.min.js';
document.head.appendChild(script);

// note data[0] is dummy data with the column headers
var data = d3.selectAll('tr')[0].filter(function(r){
	return r.cells.length === 6;
}).map(function(r){
	return {
		game: r.cells[0].outerText,
		edition: r.cells[1].outerText,
		year: r.cells[2].outerText,
		publisher: r.cells[3].outerText,
		designers: r.cells[4].outerText,
		essayAuthor: r.cells[5].outerText,
		gameType: 'To do!',
		rating: 'To do!'
	};
});

d3.select('body').append('div').text(JSON.stringify(data));

*/

var data = [{
    "game": "Acquire",
    "edition": "Second Edition",
    "year": "1966",
    "publisher": "3M",
    "designers": "Sid Sackson",
    "essayAuthor": "Bruce C. Shelley",
    "gameType": "Board Game",
    "rating": 7.4 // bgg 2014-04-30
}, {
    "game": "Amber Diceless",
    "edition": "",
    "year": "1991",
    "publisher": "Phage Press",
    "designers": "Erick Wujcik",
    "essayAuthor": "Nicole Lindroos",
    "gameType": "Roleplaying Game",
    "rating": 6.9 // rpggeek 2014-04-30
}, {
    "game": "Amun-Re",
    "edition": "English Edition",
    "year": "2003",
    "publisher": "Rio Grande Games",
    "designers": "Reiner Knizia",
    "essayAuthor": "Ian Livingstone",
    "gameType": "Board Game",
    "rating": 7.4 // bgg 2014-04-30
}, {
    "game": "Ars Magica",
    "edition": "First Edition",
    "year": "1987",
    "publisher": "Lion Rampant",
    "designers": "Jonathan Tweet, Mark Rein-Hagen",
    "essayAuthor": "Stewart Wieck",
    "gameType": "Roleplaying Game",
    "rating": "N/A"
}, {
    "game": "Axis & Allies",
    "edition": "Second Edition",
    "year": "1984",
    "publisher": "Milton Bradley",
    "designers": "Larry Harris",
    "essayAuthor": "Thomas M. Reid",
    "gameType": "Board Game",
    "rating": 6.5 // bgg 2014-04-30
}, {
    "game": "Battle Cry",
    "edition": "",
    "year": "2000",
    "publisher": "Avalon Hill",
    "designers": "Richard Borg",
    "essayAuthor": "Tracy Hickman",
    "gameType": "Board Game",
    "rating": 7.2 // bgg 2014-04-30
}, {
    "game": "BattleTech",
    "edition": "Second Edition",
    "year": "1985",
    "publisher": "FASA Corporation",
    "designers": "Jordan Weisman, L. R. \"Butch\" Leeper, Forest G. Brown, Wm. John Wheeler, L. Ross Babcock III",
    "essayAuthor": "Philip Reed",
    "gameType": "Board Game",
    "rating": 6.9 // bgg 2014-04-30
}, {
    "game": "Blood Bowl",
    "edition": "Third Edition",
    "year": "1994",
    "publisher": "Games Workshop",
    "designers": "Jervis Johnson",
    "essayAuthor": "Justin Achilli",
    "gameType": "Board Game",
    "rating": 7.6 // bgg 2014-05-02
}, {
    "game": "Bohnanza",
    "edition": "English Edition",
    "year": "1997",
    "publisher": "Rio Grande Games",
    "designers": "Uwe Rosenberg",
    "essayAuthor": "Mike Selinker",
    "gameType": "Card Game",
    "rating": 7.1 // bgg 2014-05-02
}, {
    "game": "Britannia",
    "edition": "Revised Edition",
    "year": "2005",
    "publisher": "Fantasy Flight Games",
    "designers": "Lewis Pulsipher",
    "essayAuthor": "Tom Dalgliesh",
    "gameType": "Board Game",
    "rating": 7.3 // bgg 2014-05-02
}, {
    "game": "Button Men",
    "edition": "",
    "year": "1999",
    "publisher": "Cheapass Games",
    "designers": "James Ernest",
    "essayAuthor": "Greg Stolze",
    "gameType": "Dice Game",
    "rating": 6.3 // bgg 2014-05-07
}, {
    "game": "Call of Cthulhu",
    "edition": "First Edition",
    "year": "1981",
    "publisher": "Chaosium",
    "designers": "Sandy Petersen",
    "essayAuthor": "Monte Cook",
    "gameType": "Roleplaying Game",
    "rating": 7.7 // rpggeek 2014-05-07
}, {
    "game": "Carcassonne",
    "edition": "English Edition",
    "year": "2000",
    "publisher": "Rio Grande Games",
    "designers": "Klaus-Jürgen Wrede",
    "essayAuthor": "Steven E. Schend",
    "gameType": "Board Game",
    "rating": 7.4 // bgg 2014-05-07
}, {
    "game": "Car Wars",
    "edition": "Second Edition Compendium",
    "year": "1990",
    "publisher": "Steve Jackson Games",
    "designers": "Chad Irby, Steve Jackson (US)",
    "essayAuthor": "Jeff Tidball",
    "gameType": "Board Game",
    "rating": 6.3 // bgg 2014-05-07
}, {
    "game": "Champions",
    "edition": "Revised Edition",
    "year": "1982",
    "publisher": "Hero Games",
    "designers": "Steve Peterson, George MacDonald",
    "essayAuthor": "Bill Bridges",
    "gameType": "Roleplaying Game",
    "rating": 6.7 // rpggeek 2014-05-07
}, {
    "game": "Circus Maximus",
    "edition": "Revised Edition",
    "year": "1980",
    "publisher": "Avalon Hill",
    "designers": "Michael Matheny, Don Greenwood",
    "essayAuthor": "Stan!",
    "gameType": "Board Game",
    "rating": 6.7 // bgg 2014-05-07
}, {
    "game": "Citadels",
    "edition": "English Edition",
    "year": "2002",
    "publisher": "Fantasy Flight Games",
    "designers": "Bruno Faidutti",
    "essayAuthor": "Tom Jolly",
    "gameType": "Card Game",
    "rating": 7.2 // bgg 2014-05-08
}, {
    "game": "Civilization",
    "edition": "First U.S. Edition",
    "year": "1981",
    "publisher": "Avalon Hill",
    "designers": "Francis Tresham",
    "essayAuthor": "Steven Savile",
    "gameType": "Board Game",
    "rating": 7.6 // bgg 2014-05-08
}, {
    "game": "Cosmic Encounter",
    "edition": "First Edition",
    "year": "1977",
    "publisher": "Eon",
    "designers": "Bill Eberle, Jack Kittredge, Peter Olotka",
    "essayAuthor": "Bruno Faidutti",
    "gameType": "Board Game",
    "rating": 7.0 // bgg 2014-05-08
}, {
    "game": "Cosmic Wimpout",
    "edition": "",
    "year": "1976",
    "publisher": "C3, Inc",
    "designers": "The Cosmic Wimpout Clubhouse",
    "essayAuthor": "Andrew Looney",
    "gameType": "Dice Game",
    "rating": 5.9 // bgg 2014-05-08
}, {
    "game": "Dawn Patrol",
    "edition": "Seventh Edition",
    "year": "1982",
    "publisher": "TSR, Inc.",
    "designers": "Mike Carr",
    "essayAuthor": "Skip Williams",
    "gameType": "To do!",
    "rating": 6.8 // bgg 2014-05-08
}, {
    "game": "Descent",
    "edition": "",
    "year": "2005",
    "publisher": "Fantasy Flight Games",
    "designers": "Kevin Wilson",
    "essayAuthor": "Alan R. Moon",
    "gameType": "Board Game",
    "rating": 7.4 // bgg 2014-05-08
}, {
    "game": "Diplomacy",
    "edition": "",
    "year": "1959",
    "publisher": "Avalon Hill",
    "designers": "Allan B. Calhamer",
    "essayAuthor": "Larry Harris",
    "gameType": "Board Game",
    "rating": 7.1 // bgg 2014-05-08
}, {
    "game": "Dungeons & Dragons",
    "edition": "First Edition",
    "year": "1974",
    "publisher": "TSR, Inc.",
    "designers": "Gary Gygax, Dave Arneson",
    "essayAuthor": "Richard Garfield",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Dynasty League Baseball",
    "edition": "",
    "year": "1995",
    "publisher": "Design Depot",
    "designers": "Michael Cieslinski",
    "essayAuthor": "William W. Connors",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "El Grande",
    "edition": "English Edition",
    "year": "2001",
    "publisher": "Rio Grande Games",
    "designers": "Wolfgang Kramer, Richard Ulrich",
    "essayAuthor": "Christian T. Petersen",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Empires in Arms",
    "edition": "Revised Edition",
    "year": "1985",
    "publisher": "Avalon Hill",
    "designers": "Harry Rowland, Greg Pinder",
    "essayAuthor": "Alessio Cavatore",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Empires of the Middle Ages",
    "edition": "First Edition",
    "year": "1980",
    "publisher": "Simulations Publications, Inc.",
    "designers": "James F. Dunnigan, Redmond A. Simonsen, Anthony F. Buccini",
    "essayAuthor": "Timothy Brown",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "The Extraordinary Adventures of Baron Munchausen",
    "edition": "",
    "year": "1998",
    "publisher": "Hogshead Publishing",
    "designers": "James Wallis",
    "essayAuthor": "Allen Varney",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Fire and Fury",
    "edition": "",
    "year": "1990",
    "publisher": "Dave Waxtel and Quantum Publishing",
    "designers": "Richard W. Hasenauer",
    "essayAuthor": "Phil Yates",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Flames of War",
    "edition": "Second Edition",
    "year": "2006",
    "publisher": "Battlefront Miniatures",
    "designers": "Phil Yates",
    "essayAuthor": "William Jones",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Fluxx",
    "edition": "",
    "year": "1997",
    "publisher": "Looney Labs",
    "designers": "Andrew Looney",
    "essayAuthor": "Rick Loomis",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Formula Dé",
    "edition": "English Edition",
    "year": "1991",
    "publisher": "Asmodée Editions",
    "designers": "Laurent Lavaur, Eric Randall",
    "essayAuthor": "John Kovalic",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "The Fury of Dracula",
    "edition": "First Edition",
    "year": "1987",
    "publisher": "Games Workshop",
    "designers": "Stephen Hand",
    "essayAuthor": "Anothy J. Gallela",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "A Game of Thrones",
    "edition": "",
    "year": "2003",
    "publisher": "Fantasy Flight Games",
    "designers": "Christian T. Petersen",
    "essayAuthor": "Jesse Scoble",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Gettysburg",
    "edition": "First Edition",
    "year": "1958",
    "publisher": "Avalon Hill",
    "designers": "Charles S. Roberts",
    "essayAuthor": "Lou Zocchi",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Ghostbusters",
    "edition": "",
    "year": "1986",
    "publisher": "West End Games",
    "designers": "Sandy Petersen, Lynn Willis, Greg Stafford, Greg Costikyan",
    "essayAuthor": "James Wallis",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "The Great Khan Game",
    "edition": "",
    "year": "1989",
    "publisher": "TSR, Inc.",
    "designers": "Tom Wham, Richard Hamblen",
    "essayAuthor": "James M. Ward",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Hammer of the Scots",
    "edition": "",
    "year": "2002",
    "publisher": "Columbia Games",
    "designers": "Jerry Taylor, Tom Dalgliesh",
    "essayAuthor": "Gav Thorpe",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Here I Stand",
    "edition": "",
    "year": "2006",
    "publisher": "GMT Games",
    "designers": "Ed Beach, Matthew Beach, Ananda Gupta, Dave Cross",
    "essayAuthor": "Uli Blennemann",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "A House Divided",
    "edition": "First Edition",
    "year": "1981",
    "publisher": "Game Designers' Workshop",
    "designers": "Frank Chadwick",
    "essayAuthor": "S. Craig Taylor Jr.",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Illuminati",
    "edition": "First Edition",
    "year": "1982",
    "publisher": "Steve Jackson Games",
    "designers": "Steve Jackson (US)",
    "essayAuthor": "Scott Haring",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Johnny Reb",
    "edition": "Third Edition",
    "year": "1996",
    "publisher": "The Johnny Reb Game Company",
    "designers": "John Hill, Steve St. Clair, Bernie Kempinski",
    "essayAuthor": "Dana Lombardy",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Junta",
    "edition": "Second Edition",
    "year": "1985",
    "publisher": "West End Games",
    "designers": "Vincent Tsao, Eric Goldberg, Ben Grossman",
    "essayAuthor": "Darren Watts",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Kingmaker",
    "edition": "Revised Edition",
    "year": "1975",
    "publisher": "Avalon Hill",
    "designers": "Andrew McNeil, Mick (Mike) Uhl, Don Turnbull",
    "essayAuthor": "Greg Stafford",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Kremlin",
    "edition": "English Edition",
    "year": "1988",
    "publisher": "Avalon Hill",
    "designers": "Urs Hostettler, Stefan Hosli",
    "essayAuthor": "Lester Smith",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Legend of the Five Rings",
    "edition": "",
    "year": "1995",
    "publisher": "Alderac Entertainment Group",
    "designers": "David Williams, John Wick, Matt Staroscik, John Zinser, Ryan S. Dancey, David Seay, Matt Wilson",
    "essayAuthor": "Wolfgang Baur",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Lensman",
    "edition": "Second Edition",
    "year": "1969",
    "publisher": "Spartan International",
    "designers": "Philip N. Pritchard",
    "essayAuthor": "Marc W. Miller",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "London's Burning",
    "edition": "",
    "year": "1995",
    "publisher": "Avalon Hill",
    "designers": "Ben Knight, Mark Simonitch",
    "essayAuthor": "Ted S. Raicer",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Lord of the Rings",
    "edition": "",
    "year": "2000",
    "publisher": "Fantasy Flight Games",
    "designers": "Reiner Knizia",
    "essayAuthor": "Teeuwynn Woodruff",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Machiavelli",
    "edition": "First Edition",
    "year": "1977",
    "publisher": "Battleline Publications",
    "designers": "James G. Woods, S. Craig Taylor Jr.",
    "essayAuthor": "Mike Breault",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Magic: The Gathering",
    "edition": "",
    "year": "1993",
    "publisher": "Wizards of the Coast",
    "designers": "Richard Garfield",
    "essayAuthor": "Jordan Weisman",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Marvel Super Heroes",
    "edition": "Basic Set",
    "year": "1984",
    "publisher": "TSR, Inc.",
    "designers": "Jeff Grubb, Steve Winter",
    "essayAuthor": "Steve Kenson",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Metamorphosis Alpha",
    "edition": "Fourth Edition",
    "year": "2006",
    "publisher": "Mudpuppy Games",
    "designers": "James M. Ward",
    "essayAuthor": "Gary Gygax",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "My Life with Master",
    "edition": "",
    "year": "2003",
    "publisher": "Half-Meme Press",
    "designers": "Paul Czege",
    "essayAuthor": "Greg Costikyan",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Mythos",
    "edition": "",
    "year": "1996",
    "publisher": "Chaosium",
    "designers": "Charlie Krank",
    "essayAuthor": "John D. Rateliff",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Napoleon's Last Battles",
    "edition": "First Edition",
    "year": "1976",
    "publisher": "Simulations Publications, Inc.",
    "designers": "Kevin Zucker, J. A. Nelson",
    "essayAuthor": "Chris \"Gerry\" Klug",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Naval War",
    "edition": "First Edition",
    "year": "1979",
    "publisher": "Battleline Publications",
    "designers": "S. Craig Taylor Jr., Nel Zimmerer",
    "essayAuthor": "John Scott Tynes",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Ogre",
    "edition": "First Edition",
    "year": "1977",
    "publisher": "Metagaming",
    "designers": "Steve Jackson (US)",
    "essayAuthor": "Erick Wujcik",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Once Upon a Time",
    "edition": "Second Edition",
    "year": "1995",
    "publisher": "Atlas Games",
    "designers": "Richard Lambert, Andrew Rilestone, James Wallis",
    "essayAuthor": "Marc Gascoigne",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "PanzerBlitz",
    "edition": "First Edition",
    "year": "1970",
    "publisher": "Avalon Hill",
    "designers": "James F. Dunnigan",
    "essayAuthor": "Mike Bennighof",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Paranoia",
    "edition": "First Edition",
    "year": "1984",
    "publisher": "West End Games",
    "designers": "Greg Costikyan, Dan Gelber, Eric Goldberg, Ken Rolston",
    "essayAuthor": "Steve Jackson (US)",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Pendragon",
    "edition": "Fifth Edition",
    "year": "2006",
    "publisher": "White Wolf",
    "designers": "Greg Stafford",
    "essayAuthor": "Shannon Appelcline",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Pirate's Cove",
    "edition": "English Edition",
    "year": "2003",
    "publisher": "Days of Wonder",
    "designers": "Paul Randles, Daniel Stahl",
    "essayAuthor": "JD Wiker",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Plague!",
    "edition": "",
    "year": "1991",
    "publisher": "B&B Productions",
    "designers": "Steven Barsky",
    "essayAuthor": "Richard H. Berg",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Power Grid",
    "edition": "English Edition",
    "year": "2004",
    "publisher": "Rio Grande Games",
    "designers": "Friedemann Friese",
    "essayAuthor": "Martin Wallace",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Puerto Rico",
    "edition": "English Edition",
    "year": "2002",
    "publisher": "Rio Grande Games",
    "designers": "Andreas Seyfarth",
    "essayAuthor": "Tom Wham",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Renaissance of Infantry",
    "edition": "Strategy & Tactics #22 July/Aug 1970",
    "year": "1970",
    "publisher": "Simulations Publications, Inc.",
    "designers": "Albert A. Nofi, Redmond A. Simonsen",
    "essayAuthor": "Joseph Miranda",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "RoboRally",
    "edition": "First Edition",
    "year": "1994",
    "publisher": "Wizards of the Coast",
    "designers": "Richard Garfield",
    "essayAuthor": "James Ernest",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "RuneQuest",
    "edition": "First Edition",
    "year": "1978",
    "publisher": "Chaosium",
    "designers": "Steve Perrin, Ray Turney, Steve Henderson, Warren James, Greg Stafford",
    "essayAuthor": "Paul Jaquays",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "The Settlers of Catan",
    "edition": "English Edition",
    "year": "1995",
    "publisher": "Mayfair Games",
    "designers": "Klaus Teuber",
    "essayAuthor": "Richard Dansky",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Shadowfist",
    "edition": "",
    "year": "1995",
    "publisher": "Daedalus Entertainment",
    "designers": "Robin D. Laws, Jose Garcia",
    "essayAuthor": "Ken St. Andre",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Shadowrun",
    "edition": "Second Edition",
    "year": "1992",
    "publisher": "FASA Corporation",
    "designers": "Jordan Weisman, Bob Charrette, Paul Hume, Tom Dowd, L. Ross Babcock III, Sam Lewis, Dave Wylie",
    "essayAuthor": "Steven S. Long",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Shadows over Camelot",
    "edition": "English Edition",
    "year": "2005",
    "publisher": "Days of Wonder",
    "designers": "Serge Laget, Bruno Cathala",
    "essayAuthor": "Peter Corless",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Silent Death: The Next Millennium",
    "edition": "",
    "year": "1995",
    "publisher": "Iron Crown Enterprises",
    "designers": "Kevin Barrett, Matt Forbeck",
    "essayAuthor": "Dale Donovan",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Space Hulk",
    "edition": "First Edition",
    "year": "1989",
    "publisher": "Games Workshop",
    "designers": "Richard Halliwell",
    "essayAuthor": "Matt Forbeck",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Squad Leader",
    "edition": "",
    "year": "1977",
    "publisher": "Avalon Hill",
    "designers": "John Hill, Don Greenwood",
    "essayAuthor": "Ray Winninger",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Stalingrad",
    "edition": "First Edition",
    "year": "1963",
    "publisher": "Avalon Hill",
    "designers": "Thomas Shaw, Lindsley Schutz",
    "essayAuthor": "Lewis Pulsipher",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Star Fleet Battles",
    "edition": "Designer's Edition",
    "year": "1979",
    "publisher": "Task Force Games",
    "designers": "Stephen V. Cole",
    "essayAuthor": "Bruce Nesmith",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "The Sword and the Flame",
    "edition": "",
    "year": "1979",
    "publisher": "Yaquinto Publications",
    "designers": "Larry V. Brom",
    "essayAuthor": "Steve Winter",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Tales of the Arabian Nights",
    "edition": "",
    "year": "1985",
    "publisher": "West End Games",
    "designers": "Eric Goldberg",
    "essayAuthor": "Jeff Grubb",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Talisman",
    "edition": "Second Edition",
    "year": "1985",
    "publisher": "Games Workshop",
    "designers": "Robert Harris",
    "essayAuthor": "Shane Lacy Hensley",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Terrible Swift Sword",
    "edition": "First Edition",
    "year": "1976",
    "publisher": "Simulations Publications, Inc.",
    "designers": "Richard H. Berg",
    "essayAuthor": "Douglas Niles",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Thurn and Taxis",
    "edition": "English Edition",
    "year": "2006",
    "publisher": "Rio Grande Games",
    "designers": "Karen Seyfarth, Andreas Seyfarth",
    "essayAuthor": "Ed Greenwood",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Ticket to Ride",
    "edition": "English Edition",
    "year": "2004",
    "publisher": "Days of Wonder",
    "designers": "Alan R. Moon",
    "essayAuthor": "Mike Fitzgerald",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Tigris & Euphrates",
    "edition": "English Edition",
    "year": "1999",
    "publisher": "Mayfair Games",
    "designers": "Reiner Knizia",
    "essayAuthor": "Thomas Lehmann",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Tikal",
    "edition": "English Edition",
    "year": "1999",
    "publisher": "Rio Grande Games",
    "designers": "Michael Kiesling, Wolfgang Kramer",
    "essayAuthor": "Warren Spector",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Toon",
    "edition": "",
    "year": "1984",
    "publisher": "Steve Jackson Games",
    "designers": "Greg Costikyan, Warren Spector",
    "essayAuthor": "David \"Zeb\" Cook",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Traveller",
    "edition": "First Edition",
    "year": "1977",
    "publisher": "Game Designers' Workshop",
    "designers": "Marc W. Miller",
    "essayAuthor": "Mike Pondsmith",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Twilight Struggle",
    "edition": "",
    "year": "2005",
    "publisher": "GMT Games",
    "designers": "Ananda Gupta, Jason Matthews",
    "essayAuthor": "Zev Shlasigner",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Unknown Armies",
    "edition": "First Edition",
    "year": "1998",
    "publisher": "Atlas Games",
    "designers": "Greg Stolze, John Scott Tynes",
    "essayAuthor": "Kenneth Hite",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Up Front",
    "edition": "",
    "year": "1983",
    "publisher": "Avalon Hill",
    "designers": "Courtney F. Allen",
    "essayAuthor": "Sandy Petersen",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Vampire: The Eternal Struggle",
    "edition": "Third Edition",
    "year": "2006",
    "publisher": "White Wolf",
    "designers": "Richard Garfield, L. Scott Johnson, Robert Goudie",
    "essayAuthor": "R. Hyrum Savage",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Vampire: The Masquerade",
    "edition": "First Edition",
    "year": "1991",
    "publisher": "White Wolf",
    "designers": "Mark Rein-Hagen",
    "essayAuthor": "George Vasilakos",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Vinci",
    "edition": "",
    "year": "1999",
    "publisher": "Descartes Editeur",
    "designers": "Philippe Keyaerts",
    "essayAuthor": "Kevin Wilson",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "War and Peace",
    "edition": "",
    "year": "1980",
    "publisher": "Avalon Hill",
    "designers": "Mark D. McLaughlin",
    "essayAuthor": "R. A. Salvatore",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Warhammer 40,000",
    "edition": "Fourth Edition",
    "year": "2004",
    "publisher": "Games Workshop",
    "designers": "Rick Priestly, Andy Chambers, Gav Thorpe",
    "essayAuthor": "Jack Emmert",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "The Warlock of Firetop Mountain",
    "edition": "First Edition",
    "year": "1982",
    "publisher": "Puffin Books",
    "designers": "Steve Jackson (UK), Ian Livingstone",
    "essayAuthor": "Chris Pramas",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "The Warlord",
    "edition": "Red Box Edition",
    "year": "1966",
    "publisher": "Self-published",
    "designers": "Mike Hayes",
    "essayAuthor": "Steve Jackson (UK)",
    "gameType": "To do!",
    "rating": "To do!"
}, {
    "game": "Wiz-War",
    "edition": "Fifth Edition",
    "year": "1991",
    "publisher": "Jolly Games",
    "designers": "Tom Jolly",
    "essayAuthor": "John Wick",
    "gameType": "To do!",
    "rating": "To do!"
}]
