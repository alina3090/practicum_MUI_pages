
const movies = [
    {
        "id": 1,
        "title": "The Shawshank Redemption",
        "year": 1995,
        "rating": 9.3,
        "director_id": 1
    },
    {
        "id": 2,
        "title": "The Godfather",
        "year": 1972,
        "rating": 9.2,
        "director_id": 2
    },
    {
        "id": 3,
        "title": "The Dark Knight",
        "year": 2008,
        "rating": 9.0,
        "director_id": 3
    },
    {
        "id": 4,
        "title": "The Godfather: Part II",
        "year": 1974,
        "rating": 9.0,
        "director_id": 2
    },
    {
        "id": 5,
        "title": "12 Angry Men",
        "year": 1957,
        "rating": 9.0,
        "director_id": 4
    },
    {
        "id": 6,
        "title": "The Lord of the Rings: The Return of the King",
        "year": 2003,
        "rating": 8.9,
        "director_id": 5
    },
    {
        "id": 7,
        "title": "Pulp Fiction",
        "year": 1994,
        "rating": 8.9,
        "director_id": 6
    },
    {
        "id": 8,
        "title": "Schindler's List",
        "year": 1993,
        "rating": 8.9,
        "director_id": 7
    },
    {
        "id": 9,
        "title": "Inception",
        "year": 2010,
        "rating": 8.8,
        "director_id": 3
    },
    {
        "id": 10,
        "title": "Fight Club",
        "year": 1999,
        "rating": 8.8,
        "director_id": 8
    },
    {
        "id": 11,
        "title": "The Lord of the Rings: The Fellowship of the Ring",
        "year": 2001,
        "rating": 8.8,
        "director_id": 5
    },
    {
        "id": 12,
        "title": "Forrest Gump",
        "year": 1994,
        "rating": 8.8,
        "director_id": 9
    },
    {
        "id": 13,
        "title": "Il buono, il brutto, il cattivo",
        "year": 1966,
        "rating": 8.8,
        "director_id": 10
    },
    {
        "id": 14,
        "title": "The Lord of the Rings: The Two Towers",
        "year": 2002,
        "rating": 8.7,
        "director_id": 5
    },
    {
        "id": 15,
        "title": "The Matrix",
        "year": 1999,
        "rating": 8.7,
        "director_id": 11
    },
    {
        "id": 16,
        "title": "Goodfellas",
        "year": 1990,
        "rating": 8.7,
        "director_id": 12
    },
    {
        "id": 17,
        "title": "Star Wars: Episode V - The Empire Strikes Back",
        "year": 1980,
        "rating": 8.7,
        "director_id": 13
    },
    {
        "id": 18,
        "title": "One Flew Over the Cuckoo's Nest",
        "year": 1975,
        "rating": 8.7,
        "director_id": 14
    },
    {
        "id": 19,
        "title": "Hamilton",
        "year": 2020,
        "rating": 8.6,
        "director_id": 15
    },
    {
        "id": 20,
        "title": "Gisaengchung",
        "year": 2019,
        "rating": 8.6,
        "director_id": 16
    },
    {
        "id": 21,
        "title": "Soorarai Pottru",
        "year": 2020,
        "rating": 8.6,
        "director_id": 17
    },
    {
        "id": 22,
        "title": "Interstellar",
        "year": 2014,
        "rating": 8.6,
        "director_id": 3
    },
    {
        "id": 23,
        "title": "Cidade de Deus",
        "year": 2002,
        "rating": 8.6,
        "director_id": 18
    },
    {
        "id": 24,
        "title": "Sen to Chihiro no kamikakushi",
        "year": 2001,
        "rating": 8.6,
        "director_id": 19
    },
    {
        "id": 25,
        "title": "Saving Private Ryan",
        "year": 1998,
        "rating": 8.6,
        "director_id": 7
    },
    {
        "id": 26,
        "title": "The Green Mile",
        "year": 1999,
        "rating": 8.6,
        "director_id": 1
    },
    {
        "id": 27,
        "title": "La vita è bella",
        "year": 1997,
        "rating": 8.6,
        "director_id": 20
    },
    {
        "id": 28,
        "title": "Se7en",
        "year": 1995,
        "rating": 8.6,
        "director_id": 8
    },
    {
        "id": 29,
        "title": "The Silence of the Lambs",
        "year": 1991,
        "rating": 8.6,
        "director_id": 21
    },
    {
        "id": 30,
        "title": "Star Wars",
        "year": 1977,
        "rating": 8.6,
        "director_id": 22
    },
    {
        "id": 31,
        "title": "Seppuku",
        "year": 1962,
        "rating": 8.6,
        "director_id": 23
    },
    {
        "id": 32,
        "title": "Shichinin no samurai",
        "year": 1954,
        "rating": 8.6,
        "director_id": 24
    },
    {
        "id": 33,
        "title": "It's a Wonderful Life",
        "year": 1946,
        "rating": 8.6,
        "director_id": 25
    },
    {
        "id": 34,
        "title": "Joker",
        "year": 2019,
        "rating": 8.5,
        "director_id": 26
    },
    {
        "id": 35,
        "title": "Whiplash",
        "year": 2014,
        "rating": 8.5,
        "director_id": 27
    },
    {
        "id": 36,
        "title": "The Intouchables",
        "year": 2011,
        "rating": 8.5,
        "director_id": 28
    },
    {
        "id": 37,
        "title": "The Prestige",
        "year": 2006,
        "rating": 8.5,
        "director_id": 3
    },
    {
        "id": 38,
        "title": "The Departed",
        "year": 2006,
        "rating": 8.5,
        "director_id": 12
    },
    {
        "id": 39,
        "title": "The Pianist",
        "year": 2002,
        "rating": 8.5,
        "director_id": 29
    },
    {
        "id": 40,
        "title": "Gladiator",
        "year": 2000,
        "rating": 8.5,
        "director_id": 30
    },
    {
        "id": 41,
        "title": "American History X",
        "year": 1998,
        "rating": 8.5,
        "director_id": 31
    },
    {
        "id": 42,
        "title": "The Usual Suspects",
        "year": 1995,
        "rating": 8.5,
        "director_id": 32
    },
    {
        "id": 43,
        "title": "Léon",
        "year": 1994,
        "rating": 8.5,
        "director_id": 33
    },
    {
        "id": 44,
        "title": "The Lion King",
        "year": 1994,
        "rating": 8.5,
        "director_id": 34
    },
    {
        "id": 45,
        "title": "Terminator 2: Judgment Day",
        "year": 1991,
        "rating": 8.5,
        "director_id": 35
    },
    {
        "id": 46,
        "title": "Nuovo Cinema Paradiso",
        "year": 1988,
        "rating": 8.5,
        "director_id": 36
    },
    {
        "id": 47,
        "title": "Hotaru no haka",
        "year": 1988,
        "rating": 8.5,
        "director_id": 37
    },
    {
        "id": 48,
        "title": "Back to the Future",
        "year": 1985,
        "rating": 8.5,
        "director_id": 9
    },
    {
        "id": 49,
        "title": "Once Upon a Time in the West",
        "year": 1968,
        "rating": 8.5,
        "director_id": 10
    },
    {
        "id": 50,
        "title": "Psycho",
        "year": 1960,
        "rating": 8.5,
        "director_id": 38
    },
    {
        "id": 51,
        "title": "Casablanca",
        "year": 1942,
        "rating": 8.5,
        "director_id": 39
    },
    {
        "id": 52,
        "title": "Modern Times",
        "year": 1936,
        "rating": 8.5,
        "director_id": 40
    },
    {
        "id": 53,
        "title": "City Lights",
        "year": 1931,
        "rating": 8.5,
        "director_id": 40
    },
    {
        "id": 54,
        "title": "Capharnaüm",
        "year": 2018,
        "rating": 8.4,
        "director_id": 41
    },
    {
        "id": 55,
        "title": "Ayla: The Daughter of War",
        "year": 2017,
        "rating": 8.4,
        "director_id": 42
    },
    {
        "id": 56,
        "title": "Vikram Vedha",
        "year": 2017,
        "rating": 8.4,
        "director_id": 43
    },
    {
        "id": 57,
        "title": "Kimi no na wa.",
        "year": 2016,
        "rating": 8.4,
        "director_id": 44
    },
    {
        "id": 58,
        "title": "Dangal",
        "year": 2016,
        "rating": 8.4,
        "director_id": 45
    },
    {
        "id": 59,
        "title": "Spider-Man: Into the Spider-Verse",
        "year": 2018,
        "rating": 8.4,
        "director_id": 46
    },
    {
        "id": 60,
        "title": "Avengers: Endgame",
        "year": 2019,
        "rating": 8.4,
        "director_id": 47
    },
    {
        "id": 61,
        "title": "Avengers: Infinity War",
        "year": 2018,
        "rating": 8.4,
        "director_id": 47
    },
    {
        "id": 62,
        "title": "Coco",
        "year": 2017,
        "rating": 8.4,
        "director_id": 48
    },
    {
        "id": 63,
        "title": "Django Unchained",
        "year": 2012,
        "rating": 8.4,
        "director_id": 6
    },
    {
        "id": 64,
        "title": "The Dark Knight Rises",
        "year": 2012,
        "rating": 8.4,
        "director_id": 3
    },
    {
        "id": 65,
        "title": "3 Idiots",
        "year": 2009,
        "rating": 8.4,
        "director_id": 49
    },
    {
        "id": 66,
        "title": "Taare Zameen Par",
        "year": 2007,
        "rating": 8.4,
        "director_id": 50
    },
    {
        "id": 67,
        "title": "WALL·E",
        "year": 2008,
        "rating": 8.4,
        "director_id": 51
    },
    {
        "id": 68,
        "title": "The Lives of Others",
        "year": 2006,
        "rating": 8.4,
        "director_id": 52
    },
    {
        "id": 69,
        "title": "Oldeuboi",
        "year": 2003,
        "rating": 8.4,
        "director_id": 53
    },
    {
        "id": 70,
        "title": "Memento",
        "year": 2000,
        "rating": 8.4,
        "director_id": 3
    },
    {
        "id": 71,
        "title": "Mononoke-hime",
        "year": 1997,
        "rating": 8.4,
        "director_id": 19
    },
    {
        "id": 72,
        "title": "Once Upon a Time in America",
        "year": 1984,
        "rating": 8.4,
        "director_id": 10
    },
    {
        "id": 73,
        "title": "Raiders of the Lost Ark",
        "year": 1981,
        "rating": 8.4,
        "director_id": 7
    },
    {
        "id": 74,
        "title": "The Shining",
        "year": 1980,
        "rating": 8.4,
        "director_id": 54
    },
    {
        "id": 75,
        "title": "Apocalypse Now",
        "year": 1979,
        "rating": 8.4,
        "director_id": 2
    },
    {
        "id": 76,
        "title": "Alien",
        "year": 1979,
        "rating": 8.4,
        "director_id": 30
    },
    {
        "id": 77,
        "title": "Anand",
        "year": 1971,
        "rating": 8.4,
        "director_id": 55
    },
    {
        "id": 78,
        "title": "Tengoku to jigoku",
        "year": 1963,
        "rating": 8.4,
        "director_id": 24
    },
    {
        "id": 79,
        "title": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
        "year": 1964,
        "rating": 8.4,
        "director_id": 54
    },
    {
        "id": 80,
        "title": "Witness for the Prosecution",
        "year": 1957,
        "rating": 8.4,
        "director_id": 56
    },
    {
        "id": 81,
        "title": "Paths of Glory",
        "year": 1957,
        "rating": 8.4,
        "director_id": 54
    },
    {
        "id": 82,
        "title": "Rear Window",
        "year": 1954,
        "rating": 8.4,
        "director_id": 38
    },
    {
        "id": 83,
        "title": "Sunset Blvd.",
        "year": 1950,
        "rating": 8.4,
        "director_id": 56
    },
    {
        "id": 84,
        "title": "The Great Dictator",
        "year": 1940,
        "rating": 8.4,
        "director_id": 40
    },
    {
        "id": 85,
        "title": "1917",
        "year": 2019,
        "rating": 8.3,
        "director_id": 57
    },
    {
        "id": 86,
        "title": "Tumbbad",
        "year": 2018,
        "rating": 8.3,
        "director_id": 58
    },
    {
        "id": 87,
        "title": "Andhadhun",
        "year": 2018,
        "rating": 8.3,
        "director_id": 59
    },
    {
        "id": 88,
        "title": "Drishyam",
        "year": 2013,
        "rating": 8.3,
        "director_id": 60
    },
    {
        "id": 89,
        "title": "Jagten",
        "year": 2012,
        "rating": 8.3,
        "director_id": 61
    },
    {
        "id": 90,
        "title": "Jodaeiye Nader az Simin",
        "year": 2011,
        "rating": 8.3,
        "director_id": 62
    },
    {
        "id": 91,
        "title": "Incendies",
        "year": 2010,
        "rating": 8.3,
        "director_id": 63
    },
    {
        "id": 92,
        "title": "Miracle in cell NO.7",
        "year": 2019,
        "rating": 8.3,
        "director_id": 64
    },
    {
        "id": 93,
        "title": "Babam ve Oglum",
        "year": 2005,
        "rating": 8.3,
        "director_id": 65
    },
    {
        "id": 94,
        "title": "Inglourious Basterds",
        "year": 2009,
        "rating": 8.3,
        "director_id": 6
    },
    {
        "id": 95,
        "title": "Eternal Sunshine of the Spotless Mind",
        "year": 2004,
        "rating": 8.3,
        "director_id": 66
    },
    {
        "id": 96,
        "title": "Amélie",
        "year": 2001,
        "rating": 8.3,
        "director_id": 67
    },
    {
        "id": 97,
        "title": "Snatch",
        "year": 2000,
        "rating": 8.3,
        "director_id": 68
    },
    {
        "id": 98,
        "title": "Requiem for a Dream",
        "year": 2000,
        "rating": 8.3,
        "director_id": 69
    },
    {
        "id": 99,
        "title": "American Beauty",
        "year": 1999,
        "rating": 8.3,
        "director_id": 57
    },
    {
        "id": 100,
        "title": "Good Will Hunting",
        "year": 1997,
        "rating": 8.3,
        "director_id": 70
    },
    {
        "id": 101,
        "title": "Bacheha-Ye aseman",
        "year": 1997,
        "rating": 8.3,
        "director_id": 71
    },
    {
        "id": 102,
        "title": "Toy Story",
        "year": 1995,
        "rating": 8.3,
        "director_id": 72
    },
    {
        "id": 103,
        "title": "Braveheart",
        "year": 1995,
        "rating": 8.3,
        "director_id": 73
    },
    {
        "id": 104,
        "title": "Reservoir Dogs",
        "year": 1992,
        "rating": 8.3,
        "director_id": 6
    },
    {
        "id": 105,
        "title": "Full Metal Jacket",
        "year": 1987,
        "rating": 8.3,
        "director_id": 54
    },
    {
        "id": 106,
        "title": "Idi i smotri",
        "year": 1985,
        "rating": 8.3,
        "director_id": 74
    },
    {
        "id": 107,
        "title": "Aliens",
        "year": 1986,
        "rating": 8.3,
        "director_id": 35
    },
    {
        "id": 108,
        "title": "Amadeus",
        "year": 1984,
        "rating": 8.3,
        "director_id": 14
    },
    {
        "id": 109,
        "title": "Scarface",
        "year": 1983,
        "rating": 8.3,
        "director_id": 75
    },
    {
        "id": 110,
        "title": "Star Wars: Episode VI - Return of the Jedi",
        "year": 1983,
        "rating": 8.3,
        "director_id": 76
    },
    {
        "id": 111,
        "title": "Das Boot",
        "year": 1981,
        "rating": 8.3,
        "director_id": 77
    },
    {
        "id": 112,
        "title": "Taxi Driver",
        "year": 1976,
        "rating": 8.3,
        "director_id": 12
    },
    {
        "id": 113,
        "title": "The Sting",
        "year": 1973,
        "rating": 8.3,
        "director_id": 78
    },
    {
        "id": 114,
        "title": "A Clockwork Orange",
        "year": 1971,
        "rating": 8.3,
        "director_id": 54
    },
    {
        "id": 115,
        "title": "2001: A Space Odyssey",
        "year": 1968,
        "rating": 8.3,
        "director_id": 54
    },
    {
        "id": 116,
        "title": "Per qualche dollaro in più",
        "year": 1965,
        "rating": 8.3,
        "director_id": 10
    },
    {
        "id": 117,
        "title": "Lawrence of Arabia",
        "year": 1962,
        "rating": 8.3,
        "director_id": 79
    },
    {
        "id": 118,
        "title": "The Apartment",
        "year": 1960,
        "rating": 8.3,
        "director_id": 56
    },
    {
        "id": 119,
        "title": "North by Northwest",
        "year": 1959,
        "rating": 8.3,
        "director_id": 38
    },
    {
        "id": 120,
        "title": "Vertigo",
        "year": 1958,
        "rating": 8.3,
        "director_id": 38
    },
    {
        "id": 121,
        "title": "Singin' in the Rain",
        "year": 1952,
        "rating": 8.3,
        "director_id": 80
    },
    {
        "id": 122,
        "title": "Ikiru",
        "year": 1952,
        "rating": 8.3,
        "director_id": 24
    },
    {
        "id": 123,
        "title": "Ladri di biciclette",
        "year": 1948,
        "rating": 8.3,
        "director_id": 81
    },
    {
        "id": 124,
        "title": "Double Indemnity",
        "year": 1944,
        "rating": 8.3,
        "director_id": 56
    },
    {
        "id": 125,
        "title": "Citizen Kane",
        "year": 1941,
        "rating": 8.3,
        "director_id": 82
    },
    {
        "id": 126,
        "title": "M - Eine Stadt sucht einen Mörder",
        "year": 1931,
        "rating": 8.3,
        "director_id": 83
    },
    {
        "id": 127,
        "title": "Metropolis",
        "year": 1927,
        "rating": 8.3,
        "director_id": 83
    },
    {
        "id": 128,
        "title": "The Kid",
        "year": 1921,
        "rating": 8.3,
        "director_id": 40
    },
    {
        "id": 129,
        "title": "Chhichhore",
        "year": 2019,
        "rating": 8.2,
        "director_id": 45
    },
    {
        "id": 130,
        "title": "Uri: The Surgical Strike",
        "year": 2018,
        "rating": 8.2,
        "director_id": 84
    },
    {
        "id": 131,
        "title": "K.G.F: Chapter 1",
        "year": 2018,
        "rating": 8.2,
        "director_id": 85
    },
    {
        "id": 132,
        "title": "Green Book",
        "year": 2018,
        "rating": 8.2,
        "director_id": 86
    },
    {
        "id": 133,
        "title": "Three Billboards Outside Ebbing, Missouri",
        "year": 2017,
        "rating": 8.2,
        "director_id": 87
    },
    {
        "id": 134,
        "title": "Talvar",
        "year": 2015,
        "rating": 8.2,
        "director_id": 88
    },
    {
        "id": 135,
        "title": "Baahubali 2: The Conclusion",
        "year": 2017,
        "rating": 8.2,
        "director_id": 89
    },
    {
        "id": 136,
        "title": "Klaus",
        "year": 2019,
        "rating": 8.2,
        "director_id": 90
    },
    {
        "id": 137,
        "title": "Drishyam",
        "year": 2015,
        "rating": 8.2,
        "director_id": 91
    },
    {
        "id": 138,
        "title": "Queen",
        "year": 2013,
        "rating": 8.2,
        "director_id": 92
    },
    {
        "id": 139,
        "title": "Mandariinid",
        "year": 2013,
        "rating": 8.2,
        "director_id": 93
    },
    {
        "id": 140,
        "title": "Bhaag Milkha Bhaag",
        "year": 2013,
        "rating": 8.2,
        "director_id": 94
    },
    {
        "id": 141,
        "title": "Gangs of Wasseypur",
        "year": 2012,
        "rating": 8.2,
        "director_id": 95
    },
    {
        "id": 142,
        "title": "Udaan",
        "year": 2010,
        "rating": 8.2,
        "director_id": 96
    },
    {
        "id": 143,
        "title": "Paan Singh Tomar",
        "year": 2012,
        "rating": 8.2,
        "director_id": 97
    },
    {
        "id": 144,
        "title": "El secreto de sus ojos",
        "year": 2009,
        "rating": 8.2,
        "director_id": 98
    },
    {
        "id": 145,
        "title": "Warrior",
        "year": 2011,
        "rating": 8.2,
        "director_id": 99
    },
    {
        "id": 146,
        "title": "Shutter Island",
        "year": 2010,
        "rating": 8.2,
        "director_id": 12
    },
    {
        "id": 147,
        "title": "Up",
        "year": 2009,
        "rating": 8.2,
        "director_id": 100
    },
    {
        "id": 148,
        "title": "The Wolf of Wall Street",
        "year": 2013,
        "rating": 8.2,
        "director_id": 12
    },
    {
        "id": 149,
        "title": "Chak De! India",
        "year": 2007,
        "rating": 8.2,
        "director_id": 101
    },
    {
        "id": 150,
        "title": "There Will Be Blood",
        "year": 2007,
        "rating": 8.2,
        "director_id": 102
    },
    {
        "id": 151,
        "title": "Pan's Labyrinth",
        "year": 2006,
        "rating": 8.2,
        "director_id": 103
    },
    {
        "id": 152,
        "title": "Toy Story 3",
        "year": 2010,
        "rating": 8.2,
        "director_id": 48
    },
    {
        "id": 153,
        "title": "V for Vendetta",
        "year": 2005,
        "rating": 8.2,
        "director_id": 104
    },
    {
        "id": 154,
        "title": "Rang De Basanti",
        "year": 2006,
        "rating": 8.2,
        "director_id": 94
    },
    {
        "id": 155,
        "title": "Black",
        "year": 2005,
        "rating": 8.2,
        "director_id": 105
    },
    {
        "id": 156,
        "title": "Batman Begins",
        "year": 2005,
        "rating": 8.2,
        "director_id": 3
    },
    {
        "id": 157,
        "title": "Swades: We, the People",
        "year": 2004,
        "rating": 8.2,
        "director_id": 106
    },
    {
        "id": 158,
        "title": "Der Untergang",
        "year": 2004,
        "rating": 8.2,
        "director_id": 107
    },
    {
        "id": 159,
        "title": "Hauru no ugoku shiro",
        "year": 2004,
        "rating": 8.2,
        "director_id": 19
    },
    {
        "id": 160,
        "title": "A Beautiful Mind",
        "year": 2001,
        "rating": 8.2,
        "director_id": 108
    },
    {
        "id": 161,
        "title": "Hera Pheri",
        "year": 2000,
        "rating": 8.2,
        "director_id": 109
    },
    {
        "id": 162,
        "title": "Lock, Stock and Two Smoking Barrels",
        "year": 1998,
        "rating": 8.2,
        "director_id": 68
    },
    {
        "id": 163,
        "title": "L.A. Confidential",
        "year": 1997,
        "rating": 8.2,
        "director_id": 110
    },
    {
        "id": 164,
        "title": "Eskiya",
        "year": 1996,
        "rating": 8.2,
        "director_id": 111
    },
    {
        "id": 165,
        "title": "Heat",
        "year": 1995,
        "rating": 8.2,
        "director_id": 112
    },
    {
        "id": 166,
        "title": "Casino",
        "year": 1995,
        "rating": 8.2,
        "director_id": 12
    },
    {
        "id": 167,
        "title": "Andaz Apna Apna",
        "year": 1994,
        "rating": 8.2,
        "director_id": 113
    },
    {
        "id": 168,
        "title": "Unforgiven",
        "year": 1992,
        "rating": 8.2,
        "director_id": 114
    },
    {
        "id": 169,
        "title": "Indiana Jones and the Last Crusade",
        "year": 1989,
        "rating": 8.2,
        "director_id": 7
    },
    {
        "id": 170,
        "title": "Dom za vesanje",
        "year": 1988,
        "rating": 8.2,
        "director_id": 115
    },
    {
        "id": 171,
        "title": "Tonari no Totoro",
        "year": 1988,
        "rating": 8.2,
        "director_id": 19
    },
    {
        "id": 172,
        "title": "Die Hard",
        "year": 1988,
        "rating": 8.2,
        "director_id": 116
    },
    {
        "id": 173,
        "title": "Ran",
        "year": 1985,
        "rating": 8.2,
        "director_id": 24
    },
    {
        "id": 174,
        "title": "Raging Bull",
        "year": 1980,
        "rating": 8.2,
        "director_id": 12
    },
    {
        "id": 175,
        "title": "Stalker",
        "year": 1979,
        "rating": 8.2,
        "director_id": 117
    },
    {
        "id": 176,
        "title": "Höstsonaten",
        "year": 1978,
        "rating": 8.2,
        "director_id": 118
    },
    {
        "id": 177,
        "title": "The Message",
        "year": 1976,
        "rating": 8.2,
        "director_id": 119
    },
    {
        "id": 178,
        "title": "Sholay",
        "year": 1975,
        "rating": 8.2,
        "director_id": 120
    },
    {
        "id": 179,
        "title": "Monty Python and the Holy Grail",
        "year": 1975,
        "rating": 8.2,
        "director_id": 121
    },
    {
        "id": 180,
        "title": "The Great Escape",
        "year": 1963,
        "rating": 8.2,
        "director_id": 122
    },
    {
        "id": 181,
        "title": "To Kill a Mockingbird",
        "year": 1962,
        "rating": 8.2,
        "director_id": 123
    },
    {
        "id": 182,
        "title": "Yôjinbô",
        "year": 1961,
        "rating": 8.2,
        "director_id": 24
    },
    {
        "id": 183,
        "title": "Judgment at Nuremberg",
        "year": 1961,
        "rating": 8.2,
        "director_id": 124
    },
    {
        "id": 184,
        "title": "Some Like It Hot",
        "year": 1959,
        "rating": 8.2,
        "director_id": 56
    },
    {
        "id": 185,
        "title": "Smultronstället",
        "year": 1957,
        "rating": 8.2,
        "director_id": 118
    },
    {
        "id": 186,
        "title": "Det sjunde inseglet",
        "year": 1957,
        "rating": 8.2,
        "director_id": 118
    },
    {
        "id": 187,
        "title": "Du rififi chez les hommes",
        "year": 1955,
        "rating": 8.2,
        "director_id": 125
    },
    {
        "id": 188,
        "title": "Dial M for Murder",
        "year": 1954,
        "rating": 8.2,
        "director_id": 38
    },
    {
        "id": 189,
        "title": "Tôkyô monogatari",
        "year": 1953,
        "rating": 8.2,
        "director_id": 126
    },
    {
        "id": 190,
        "title": "Rashômon",
        "year": 1950,
        "rating": 8.2,
        "director_id": 24
    },
    {
        "id": 191,
        "title": "All About Eve",
        "year": 1950,
        "rating": 8.2,
        "director_id": 127
    },
    {
        "id": 192,
        "title": "The Treasure of the Sierra Madre",
        "year": 1948,
        "rating": 8.2,
        "director_id": 128
    },
    {
        "id": 193,
        "title": "To Be or Not to Be",
        "year": 1942,
        "rating": 8.2,
        "director_id": 129
    },
    {
        "id": 194,
        "title": "The Gold Rush",
        "year": 1925,
        "rating": 8.2,
        "director_id": 40
    },
    {
        "id": 195,
        "title": "Sherlock Jr.",
        "year": 1924,
        "rating": 8.2,
        "director_id": 130
    },
    {
        "id": 196,
        "title": "Portrait de la jeune fille en feu",
        "year": 2019,
        "rating": 8.1,
        "director_id": 131
    },
    {
        "id": 197,
        "title": "Pink",
        "year": 2016,
        "rating": 8.1,
        "director_id": 132
    },
    {
        "id": 198,
        "title": "Koe no katachi",
        "year": 2016,
        "rating": 8.1,
        "director_id": 133
    },
    {
        "id": 199,
        "title": "Contratiempo",
        "year": 2016,
        "rating": 8.1,
        "director_id": 134
    },
    {
        "id": 200,
        "title": "Ah-ga-ssi",
        "year": 2016,
        "rating": 8.1,
        "director_id": 53
    },
    {
        "id": 201,
        "title": "Mommy",
        "year": 2014,
        "rating": 8.1,
        "director_id": 135
    },
    {
        "id": 202,
        "title": "Haider",
        "year": 2014,
        "rating": 8.1,
        "director_id": 136
    },
    {
        "id": 203,
        "title": "Logan",
        "year": 2017,
        "rating": 8.1,
        "director_id": 137
    },
    {
        "id": 204,
        "title": "Room",
        "year": 2015,
        "rating": 8.1,
        "director_id": 138
    },
    {
        "id": 205,
        "title": "Relatos salvajes",
        "year": 2014,
        "rating": 8.1,
        "director_id": 139
    },
    {
        "id": 206,
        "title": "Soul",
        "year": 2020,
        "rating": 8.1,
        "director_id": 100
    },
    {
        "id": 207,
        "title": "Kis Uykusu",
        "year": 2014,
        "rating": 8.1,
        "director_id": 140
    },
    {
        "id": 208,
        "title": "PK",
        "year": 2014,
        "rating": 8.1,
        "director_id": 49
    },
    {
        "id": 209,
        "title": "OMG: Oh My God!",
        "year": 2012,
        "rating": 8.1,
        "director_id": 141
    },
    {
        "id": 210,
        "title": "The Grand Budapest Hotel",
        "year": 2014,
        "rating": 8.1,
        "director_id": 142
    },
    {
        "id": 211,
        "title": "Gone Girl",
        "year": 2014,
        "rating": 8.1,
        "director_id": 8
    },
    {
        "id": 212,
        "title": "Ôkami kodomo no Ame to Yuki",
        "year": 2012,
        "rating": 8.1,
        "director_id": 143
    },
    {
        "id": 213,
        "title": "Hacksaw Ridge",
        "year": 2016,
        "rating": 8.1,
        "director_id": 73
    },
    {
        "id": 214,
        "title": "Inside Out",
        "year": 2015,
        "rating": 8.1,
        "director_id": 100
    },
    {
        "id": 215,
        "title": "Barfi!",
        "year": 2012,
        "rating": 8.1,
        "director_id": 144
    },
    {
        "id": 216,
        "title": "12 Years a Slave",
        "year": 2013,
        "rating": 8.1,
        "director_id": 145
    },
    {
        "id": 217,
        "title": "Rush",
        "year": 2013,
        "rating": 8.1,
        "director_id": 108
    },
    {
        "id": 218,
        "title": "Ford v Ferrari",
        "year": 2019,
        "rating": 8.1,
        "director_id": 137
    },
    {
        "id": 219,
        "title": "Spotlight",
        "year": 2015,
        "rating": 8.1,
        "director_id": 146
    },
    {
        "id": 220,
        "title": "Song of the Sea",
        "year": 2014,
        "rating": 8.1,
        "director_id": 147
    },
    {
        "id": 221,
        "title": "Kahaani",
        "year": 2012,
        "rating": 8.1,
        "director_id": 148
    },
    {
        "id": 222,
        "title": "Zindagi Na Milegi Dobara",
        "year": 2011,
        "rating": 8.1,
        "director_id": 149
    },
    {
        "id": 223,
        "title": "Prisoners",
        "year": 2013,
        "rating": 8.1,
        "director_id": 63
    },
    {
        "id": 224,
        "title": "Mad Max: Fury Road",
        "year": 2015,
        "rating": 8.1,
        "director_id": 150
    },
    {
        "id": 225,
        "title": "A Wednesday",
        "year": 2008,
        "rating": 8.1,
        "director_id": 151
    },
    {
        "id": 226,
        "title": "Gran Torino",
        "year": 2008,
        "rating": 8.1,
        "director_id": 114
    },
    {
        "id": 227,
        "title": "Harry Potter and the Deathly Hallows: Part 2",
        "year": 2011,
        "rating": 8.1,
        "director_id": 152
    },
    {
        "id": 228,
        "title": "Okuribito",
        "year": 2008,
        "rating": 8.1,
        "director_id": 153
    },
    {
        "id": 229,
        "title": "Hachi: A Dog's Tale",
        "year": 2009,
        "rating": 8.1,
        "director_id": 154
    },
    {
        "id": 230,
        "title": "Mary and Max",
        "year": 2009,
        "rating": 8.1,
        "director_id": 155
    },
    {
        "id": 231,
        "title": "How to Train Your Dragon",
        "year": 2010,
        "rating": 8.1,
        "director_id": 156
    },
    {
        "id": 232,
        "title": "Into the Wild",
        "year": 2007,
        "rating": 8.1,
        "director_id": 157
    },
    {
        "id": 233,
        "title": "No Country for Old Men",
        "year": 2007,
        "rating": 8.1,
        "director_id": 158
    },
    {
        "id": 234,
        "title": "Lage Raho Munna Bhai",
        "year": 2006,
        "rating": 8.1,
        "director_id": 49
    },
    {
        "id": 235,
        "title": "Million Dollar Baby",
        "year": 2004,
        "rating": 8.1,
        "director_id": 114
    },
    {
        "id": 236,
        "title": "Hotel Rwanda",
        "year": 2004,
        "rating": 8.1,
        "director_id": 159
    },
    {
        "id": 237,
        "title": "Taegukgi hwinalrimyeo",
        "year": 2004,
        "rating": 8.1,
        "director_id": 160
    },
    {
        "id": 238,
        "title": "Before Sunset",
        "year": 2004,
        "rating": 8.1,
        "director_id": 161
    },
    {
        "id": 239,
        "title": "Munna Bhai M.B.B.S.",
        "year": 2003,
        "rating": 8.1,
        "director_id": 49
    },
    {
        "id": 240,
        "title": "Salinui chueok",
        "year": 2003,
        "rating": 8.1,
        "director_id": 16
    },
    {
        "id": 241,
        "title": "Dil Chahta Hai",
        "year": 2001,
        "rating": 8.1,
        "director_id": 162
    },
    {
        "id": 242,
        "title": "Kill Bill: Vol. 1",
        "year": 2003,
        "rating": 8.1,
        "director_id": 6
    },
    {
        "id": 243,
        "title": "Finding Nemo",
        "year": 2003,
        "rating": 8.1,
        "director_id": 51
    },
    {
        "id": 244,
        "title": "Catch Me If You Can",
        "year": 2002,
        "rating": 8.1,
        "director_id": 7
    },
    {
        "id": 245,
        "title": "Amores perros",
        "year": 2000,
        "rating": 8.1,
        "director_id": 163
    },
    {
        "id": 246,
        "title": "Monsters, Inc.",
        "year": 2001,
        "rating": 8.1,
        "director_id": 100
    },
    {
        "id": 247,
        "title": "Shin seiki Evangelion Gekijô-ban: Air/Magokoro wo, kimi ni",
        "year": 1997,
        "rating": 8.1,
        "director_id": 164
    },
    {
        "id": 248,
        "title": "Lagaan: Once Upon a Time in India",
        "year": 2001,
        "rating": 8.1,
        "director_id": 106
    },
    {
        "id": 249,
        "title": "The Sixth Sense",
        "year": 1999,
        "rating": 8.1,
        "director_id": 165
    },
    {
        "id": 250,
        "title": "La leggenda del pianista sull'oceano",
        "year": 1998,
        "rating": 8.1,
        "director_id": 36
    },
    {
        "id": 251,
        "title": "The Truman Show",
        "year": 1998,
        "rating": 8.1,
        "director_id": 166
    },
    {
        "id": 252,
        "title": "Crna macka, beli macor",
        "year": 1998,
        "rating": 8.1,
        "director_id": 115
    },
    {
        "id": 253,
        "title": "The Big Lebowski",
        "year": 1998,
        "rating": 8.1,
        "director_id": 167
    },
    {
        "id": 254,
        "title": "Fa yeung nin wah",
        "year": 2000,
        "rating": 8.1,
        "director_id": 168
    },
    {
        "id": 255,
        "title": "Trainspotting",
        "year": 1996,
        "rating": 8.1,
        "director_id": 169
    },
    {
        "id": 256,
        "title": "Fargo",
        "year": 1996,
        "rating": 8.1,
        "director_id": 167
    },
    {
        "id": 257,
        "title": "Underground",
        "year": 1995,
        "rating": 8.1,
        "director_id": 115
    },
    {
        "id": 258,
        "title": "La haine",
        "year": 1995,
        "rating": 8.1,
        "director_id": 170
    },
    {
        "id": 259,
        "title": "Dilwale Dulhania Le Jayenge",
        "year": 1995,
        "rating": 8.1,
        "director_id": 171
    },
    {
        "id": 260,
        "title": "Before Sunrise",
        "year": 1995,
        "rating": 8.1,
        "director_id": 161
    },
    {
        "id": 261,
        "title": "Trois couleurs: Rouge",
        "year": 1994,
        "rating": 8.1,
        "director_id": 172
    },
    {
        "id": 262,
        "title": "Chung Hing sam lam",
        "year": 1994,
        "rating": 8.1,
        "director_id": 168
    },
    {
        "id": 263,
        "title": "Jurassic Park",
        "year": 1993,
        "rating": 8.1,
        "director_id": 7
    },
    {
        "id": 264,
        "title": "In the Name of the Father",
        "year": 1993,
        "rating": 8.1,
        "director_id": 173
    },
    {
        "id": 265,
        "title": "Ba wang bie ji",
        "year": 1993,
        "rating": 8.1,
        "director_id": 174
    },
    {
        "id": 266,
        "title": "Dà hóng denglong gaogao guà",
        "year": 1991,
        "rating": 8.1,
        "director_id": 175
    },
    {
        "id": 267,
        "title": "Dead Poets Society",
        "year": 1989,
        "rating": 8.1,
        "director_id": 166
    },
    {
        "id": 268,
        "title": "Stand by Me",
        "year": 1986,
        "rating": 8.1,
        "director_id": 176
    },
    {
        "id": 269,
        "title": "Platoon",
        "year": 1986,
        "rating": 8.1,
        "director_id": 177
    },
    {
        "id": 270,
        "title": "Paris, Texas",
        "year": 1984,
        "rating": 8.1,
        "director_id": 178
    },
    {
        "id": 271,
        "title": "Kaze no tani no Naushika",
        "year": 1984,
        "rating": 8.1,
        "director_id": 19
    },
    {
        "id": 272,
        "title": "The Thing",
        "year": 1982,
        "rating": 8.1,
        "director_id": 179
    },
    {
        "id": 273,
        "title": "Pink Floyd: The Wall",
        "year": 1982,
        "rating": 8.1,
        "director_id": 180
    },
    {
        "id": 274,
        "title": "Fitzcarraldo",
        "year": 1982,
        "rating": 8.1,
        "director_id": 181
    },
    {
        "id": 275,
        "title": "Fanny och Alexander",
        "year": 1982,
        "rating": 8.1,
        "director_id": 118
    },
    {
        "id": 276,
        "title": "Blade Runner",
        "year": 1982,
        "rating": 8.1,
        "director_id": 30
    },
    {
        "id": 277,
        "title": "The Elephant Man",
        "year": 1980,
        "rating": 8.1,
        "director_id": 182
    },
    {
        "id": 278,
        "title": "Life of Brian",
        "year": 1979,
        "rating": 8.1,
        "director_id": 183
    },
    {
        "id": 279,
        "title": "The Deer Hunter",
        "year": 1978,
        "rating": 8.1,
        "director_id": 184
    },
    {
        "id": 280,
        "title": "Rocky",
        "year": 1976,
        "rating": 8.1,
        "director_id": 185
    },
    {
        "id": 281,
        "title": "Network",
        "year": 1976,
        "rating": 8.1,
        "director_id": 4
    },
    {
        "id": 282,
        "title": "Barry Lyndon",
        "year": 1975,
        "rating": 8.1,
        "director_id": 54
    },
    {
        "id": 283,
        "title": "Zerkalo",
        "year": 1975,
        "rating": 8.1,
        "director_id": 117
    },
    {
        "id": 284,
        "title": "Chinatown",
        "year": 1974,
        "rating": 8.1,
        "director_id": 29
    },
    {
        "id": 285,
        "title": "Paper Moon",
        "year": 1973,
        "rating": 8.1,
        "director_id": 186
    },
    {
        "id": 286,
        "title": "Viskningar och rop",
        "year": 1972,
        "rating": 8.1,
        "director_id": 118
    },
    {
        "id": 287,
        "title": "Solaris",
        "year": 1972,
        "rating": 8.1,
        "director_id": 117
    },
    {
        "id": 288,
        "title": "Le samouraï",
        "year": 1967,
        "rating": 8.1,
        "director_id": 187
    },
    {
        "id": 289,
        "title": "Cool Hand Luke",
        "year": 1967,
        "rating": 8.1,
        "director_id": 188
    },
    {
        "id": 290,
        "title": "Persona",
        "year": 1966,
        "rating": 8.1,
        "director_id": 118
    },
    {
        "id": 291,
        "title": "Andrei Rublev",
        "year": 1966,
        "rating": 8.1,
        "director_id": 117
    },
    {
        "id": 292,
        "title": "La battaglia di Algeri",
        "year": 1966,
        "rating": 8.1,
        "director_id": 189
    },
    {
        "id": 293,
        "title": "El ángel exterminador",
        "year": 1962,
        "rating": 8.1,
        "director_id": 190
    },
    {
        "id": 294,
        "title": "What Ever Happened to Baby Jane?",
        "year": 1962,
        "rating": 8.1,
        "director_id": 191
    },
    {
        "id": 295,
        "title": "Sanjuro",
        "year": 1962,
        "rating": 8.1,
        "director_id": 24
    },
    {
        "id": 296,
        "title": "The Man Who Shot Liberty Valance",
        "year": 1962,
        "rating": 8.1,
        "director_id": 192
    },
    {
        "id": 297,
        "title": "Ivanovo detstvo",
        "year": 1962,
        "rating": 8.1,
        "director_id": 117
    },
    {
        "id": 298,
        "title": "Jungfrukällan",
        "year": 1960,
        "rating": 8.1,
        "director_id": 118
    },
    {
        "id": 299,
        "title": "Inherit the Wind",
        "year": 1960,
        "rating": 8.1,
        "director_id": 124
    },
    {
        "id": 300,
        "title": "Les quatre cents coups",
        "year": 1959,
        "rating": 8.1,
        "director_id": 193
    },
    {
        "id": 301,
        "title": "Ben-Hur",
        "year": 1959,
        "rating": 8.1,
        "director_id": 194
    },
    {
        "id": 302,
        "title": "Kakushi-toride no san-akunin",
        "year": 1958,
        "rating": 8.1,
        "director_id": 24
    },
    {
        "id": 303,
        "title": "Le notti di Cabiria",
        "year": 1957,
        "rating": 8.1,
        "director_id": 195
    },
    {
        "id": 304,
        "title": "Kumonosu-jô",
        "year": 1957,
        "rating": 8.1,
        "director_id": 24
    },
    {
        "id": 305,
        "title": "The Bridge on the River Kwai",
        "year": 1957,
        "rating": 8.1,
        "director_id": 79
    },
    {
        "id": 306,
        "title": "On the Waterfront",
        "year": 1954,
        "rating": 8.1,
        "director_id": 196
    },
    {
        "id": 307,
        "title": "Le salaire de la peur",
        "year": 1953,
        "rating": 8.1,
        "director_id": 197
    },
    {
        "id": 308,
        "title": "Ace in the Hole",
        "year": 1951,
        "rating": 8.1,
        "director_id": 56
    },
    {
        "id": 309,
        "title": "White Heat",
        "year": 1949,
        "rating": 8.1,
        "director_id": 198
    },
    {
        "id": 310,
        "title": "The Third Man",
        "year": 1949,
        "rating": 8.1,
        "director_id": 199
    },
    {
        "id": 311,
        "title": "The Red Shoes",
        "year": 1948,
        "rating": 8.1,
        "director_id": 200
    },
    {
        "id": 312,
        "title": "The Shop Around the Corner",
        "year": 1940,
        "rating": 8.1,
        "director_id": 129
    },
    {
        "id": 313,
        "title": "Rebecca",
        "year": 1940,
        "rating": 8.1,
        "director_id": 38
    },
    {
        "id": 314,
        "title": "Mr. Smith Goes to Washington",
        "year": 1939,
        "rating": 8.1,
        "director_id": 25
    },
    {
        "id": 315,
        "title": "Gone with the Wind",
        "year": 1939,
        "rating": 8.1,
        "director_id": 201
    },
    {
        "id": 316,
        "title": "La Grande Illusion",
        "year": 1937,
        "rating": 8.1,
        "director_id": 202
    },
    {
        "id": 317,
        "title": "It Happened One Night",
        "year": 1934,
        "rating": 8.1,
        "director_id": 25
    },
    {
        "id": 318,
        "title": "La passion de Jeanne d'Arc",
        "year": 1928,
        "rating": 8.1,
        "director_id": 203
    },
    {
        "id": 319,
        "title": "The Circus",
        "year": 1928,
        "rating": 8.1,
        "director_id": 40
    },
    {
        "id": 320,
        "title": "Sunrise: A Song of Two Humans",
        "year": 1927,
        "rating": 8.1,
        "director_id": 204
    },
    {
        "id": 321,
        "title": "The General",
        "year": 1926,
        "rating": 8.1,
        "director_id": 205
    },
    {
        "id": 322,
        "title": "Das Cabinet des Dr. Caligari",
        "year": 1920,
        "rating": 8.1,
        "director_id": 206
    },
    {
        "id": 323,
        "title": "Badhaai ho",
        "year": 2018,
        "rating": 8.0,
        "director_id": 207
    },
    {
        "id": 324,
        "title": "Togo",
        "year": 2019,
        "rating": 8.0,
        "director_id": 208
    },
    {
        "id": 325,
        "title": "Airlift",
        "year": 2016,
        "rating": 8.0,
        "director_id": 209
    },
    {
        "id": 326,
        "title": "Bajrangi Bhaijaan",
        "year": 2015,
        "rating": 8.0,
        "director_id": 210
    },
    {
        "id": 327,
        "title": "Baby",
        "year": 2015,
        "rating": 8.0,
        "director_id": 151
    },
    {
        "id": 328,
        "title": "La La Land",
        "year": 2016,
        "rating": 8.0,
        "director_id": 27
    },
    {
        "id": 329,
        "title": "Lion",
        "year": 2016,
        "rating": 8.0,
        "director_id": 211
    },
    {
        "id": 330,
        "title": "The Martian",
        "year": 2015,
        "rating": 8.0,
        "director_id": 30
    },
    {
        "id": 331,
        "title": "Zootopia",
        "year": 2016,
        "rating": 8.0,
        "director_id": 212
    },
    {
        "id": 332,
        "title": "Bãhubali: The Beginning",
        "year": 2015,
        "rating": 8.0,
        "director_id": 89
    },
    {
        "id": 333,
        "title": "Kaguyahime no monogatari",
        "year": 2013,
        "rating": 8.0,
        "director_id": 37
    },
    {
        "id": 334,
        "title": "Wonder",
        "year": 2017,
        "rating": 8.0,
        "director_id": 213
    },
    {
        "id": 335,
        "title": "Gully Boy",
        "year": 2019,
        "rating": 8.0,
        "director_id": 149
    },
    {
        "id": 336,
        "title": "Special Chabbis",
        "year": 2013,
        "rating": 8.0,
        "director_id": 151
    },
    {
        "id": 337,
        "title": "Short Term 12",
        "year": 2013,
        "rating": 8.0,
        "director_id": 214
    },
    {
        "id": 338,
        "title": "Serbuan maut 2: Berandal",
        "year": 2014,
        "rating": 8.0,
        "director_id": 215
    },
    {
        "id": 339,
        "title": "The Imitation Game",
        "year": 2014,
        "rating": 8.0,
        "director_id": 216
    },
    {
        "id": 340,
        "title": "Guardians of the Galaxy",
        "year": 2014,
        "rating": 8.0,
        "director_id": 217
    },
    {
        "id": 341,
        "title": "Blade Runner 2049",
        "year": 2017,
        "rating": 8.0,
        "director_id": 63
    },
    {
        "id": 342,
        "title": "Her",
        "year": 2013,
        "rating": 8.0,
        "director_id": 218
    },
    {
        "id": 343,
        "title": "Bohemian Rhapsody",
        "year": 2018,
        "rating": 8.0,
        "director_id": 32
    },
    {
        "id": 344,
        "title": "The Revenant",
        "year": 2015,
        "rating": 8.0,
        "director_id": 163
    },
    {
        "id": 345,
        "title": "The Perks of Being a Wallflower",
        "year": 2012,
        "rating": 8.0,
        "director_id": 213
    },
    {
        "id": 346,
        "title": "Tropa de Elite 2: O Inimigo Agora é Outro",
        "year": 2010,
        "rating": 8.0,
        "director_id": 219
    },
    {
        "id": 347,
        "title": "The King's Speech",
        "year": 2010,
        "rating": 8.0,
        "director_id": 220
    },
    {
        "id": 348,
        "title": "The Help",
        "year": 2011,
        "rating": 8.0,
        "director_id": 221
    },
    {
        "id": 349,
        "title": "Deadpool",
        "year": 2016,
        "rating": 8.0,
        "director_id": 222
    },
    {
        "id": 350,
        "title": "Darbareye Elly",
        "year": 2009,
        "rating": 8.0,
        "director_id": 62
    },
    {
        "id": 351,
        "title": "Dev.D",
        "year": 2009,
        "rating": 8.0,
        "director_id": 95
    },
    {
        "id": 352,
        "title": "Yip Man",
        "year": 2008,
        "rating": 8.0,
        "director_id": 223
    },
    {
        "id": 353,
        "title": "My Name Is Khan",
        "year": 2010,
        "rating": 8.0,
        "director_id": 224
    },
    {
        "id": 354,
        "title": "Nefes: Vatan Sagolsun",
        "year": 2009,
        "rating": 8.0,
        "director_id": 225
    },
    {
        "id": 355,
        "title": "Slumdog Millionaire",
        "year": 2008,
        "rating": 8.0,
        "director_id": 169
    },
    {
        "id": 356,
        "title": "Black Swan",
        "year": 2010,
        "rating": 8.0,
        "director_id": 69
    },
    {
        "id": 357,
        "title": "Tropa de Elite",
        "year": 2007,
        "rating": 8.0,
        "director_id": 219
    },
    {
        "id": 358,
        "title": "The Avengers",
        "year": 2012,
        "rating": 8.0,
        "director_id": 226
    },
    {
        "id": 359,
        "title": "Persepolis",
        "year": 2007,
        "rating": 8.0,
        "director_id": 227
    },
    {
        "id": 360,
        "title": "Dallas Buyers Club",
        "year": 2013,
        "rating": 8.0,
        "director_id": 228
    },
    {
        "id": 361,
        "title": "The Pursuit of Happyness",
        "year": 2006,
        "rating": 8.0,
        "director_id": 229
    },
    {
        "id": 362,
        "title": "Blood Diamond",
        "year": 2006,
        "rating": 8.0,
        "director_id": 230
    },
    {
        "id": 363,
        "title": "The Bourne Ultimatum",
        "year": 2007,
        "rating": 8.0,
        "director_id": 231
    },
    {
        "id": 364,
        "title": "Bin-jip",
        "year": 2004,
        "rating": 8.0,
        "director_id": 232
    },
    {
        "id": 365,
        "title": "Sin City",
        "year": 2005,
        "rating": 8.0,
        "director_id": 233
    },
    {
        "id": 366,
        "title": "Le scaphandre et le papillon",
        "year": 2007,
        "rating": 8.0,
        "director_id": 234
    },
    {
        "id": 367,
        "title": "G.O.R.A.",
        "year": 2004,
        "rating": 8.0,
        "director_id": 235
    },
    {
        "id": 368,
        "title": "Ratatouille",
        "year": 2007,
        "rating": 8.0,
        "director_id": 236
    },
    {
        "id": 369,
        "title": "Casino Royale",
        "year": 2006,
        "rating": 8.0,
        "director_id": 237
    },
    {
        "id": 370,
        "title": "Kill Bill: Vol. 2",
        "year": 2004,
        "rating": 8.0,
        "director_id": 6
    },
    {
        "id": 371,
        "title": "Vozvrashchenie",
        "year": 2003,
        "rating": 8.0,
        "director_id": 238
    },
    {
        "id": 372,
        "title": "Bom Yeoareum Gaeul Gyeoul Geurigo Bom",
        "year": 2003,
        "rating": 8.0,
        "director_id": 232
    },
    {
        "id": 373,
        "title": "Mar adentro",
        "year": 2014,
        "rating": 8.0,
        "director_id": 239
    },
    {
        "id": 374,
        "title": "Cinderella Man",
        "year": 2005,
        "rating": 8.0,
        "director_id": 108
    },
    {
        "id": 375,
        "title": "Kal Ho Naa Ho",
        "year": 2003,
        "rating": 8.0,
        "director_id": 240
    },
    {
        "id": 376,
        "title": "Mou gaan dou",
        "year": 2002,
        "rating": 8.0,
        "director_id": 241
    },
    {
        "id": 377,
        "title": "Pirates of the Caribbean: The Curse of the Black Pearl",
        "year": 2003,
        "rating": 8.0,
        "director_id": 242
    },
    {
        "id": 378,
        "title": "Big Fish",
        "year": 2003,
        "rating": 8.0,
        "director_id": 243
    },
    {
        "id": 379,
        "title": "The Incredibles",
        "year": 2004,
        "rating": 8.0,
        "director_id": 236
    },
    {
        "id": 380,
        "title": "Yeopgijeogin geunyeo",
        "year": 2001,
        "rating": 8.0,
        "director_id": 244
    },
    {
        "id": 381,
        "title": "Dogville",
        "year": 2003,
        "rating": 8.0,
        "director_id": 245
    },
    {
        "id": 382,
        "title": "Vizontele",
        "year": 2001,
        "rating": 8.0,
        "director_id": 246
    },
    {
        "id": 383,
        "title": "Donnie Darko",
        "year": 2001,
        "rating": 8.0,
        "director_id": 247
    },
    {
        "id": 384,
        "title": "Magnolia",
        "year": 1999,
        "rating": 8.0,
        "director_id": 102
    },
    {
        "id": 385,
        "title": "Dancer in the Dark",
        "year": 2000,
        "rating": 8.0,
        "director_id": 245
    },
    {
        "id": 386,
        "title": "The Straight Story",
        "year": 1999,
        "rating": 8.0,
        "director_id": 182
    },
    {
        "id": 387,
        "title": "Pâfekuto burû",
        "year": 1997,
        "rating": 8.0,
        "director_id": 248
    },
    {
        "id": 388,
        "title": "Festen",
        "year": 1998,
        "rating": 8.0,
        "director_id": 61
    },
    {
        "id": 389,
        "title": "Central do Brasil",
        "year": 1998,
        "rating": 8.0,
        "director_id": 249
    },
    {
        "id": 390,
        "title": "The Iron Giant",
        "year": 1999,
        "rating": 8.0,
        "director_id": 236
    },
    {
        "id": 391,
        "title": "Knockin' on Heaven's Door",
        "year": 1997,
        "rating": 8.0,
        "director_id": 250
    },
    {
        "id": 392,
        "title": "Sling Blade",
        "year": 1996,
        "rating": 8.0,
        "director_id": 251
    },
    {
        "id": 393,
        "title": "Secrets & Lies",
        "year": 1996,
        "rating": 8.0,
        "director_id": 252
    },
    {
        "id": 394,
        "title": "Twelve Monkeys",
        "year": 1995,
        "rating": 8.0,
        "director_id": 121
    },
    {
        "id": 395,
        "title": "Kôkaku Kidôtai",
        "year": 1995,
        "rating": 8.0,
        "director_id": 253
    },
    {
        "id": 396,
        "title": "The Nightmare Before Christmas",
        "year": 1993,
        "rating": 8.0,
        "director_id": 254
    },
    {
        "id": 397,
        "title": "Groundhog Day",
        "year": 1993,
        "rating": 8.0,
        "director_id": 255
    },
    {
        "id": 398,
        "title": "Bound by Honor",
        "year": 1993,
        "rating": 8.0,
        "director_id": 256
    },
    {
        "id": 399,
        "title": "Scent of a Woman",
        "year": 1992,
        "rating": 8.0,
        "director_id": 257
    },
    {
        "id": 400,
        "title": "Aladdin",
        "year": 1992,
        "rating": 8.0,
        "director_id": 258
    },
    {
        "id": 401,
        "title": "JFK",
        "year": 1991,
        "rating": 8.0,
        "director_id": 177
    },
    {
        "id": 402,
        "title": "Beauty and the Beast",
        "year": 1991,
        "rating": 8.0,
        "director_id": 259
    },
    {
        "id": 403,
        "title": "Dances with Wolves",
        "year": 1990,
        "rating": 8.0,
        "director_id": 260
    },
    {
        "id": 404,
        "title": "Do the Right Thing",
        "year": 1989,
        "rating": 8.0,
        "director_id": 261
    },
    {
        "id": 405,
        "title": "Rain Man",
        "year": 1988,
        "rating": 8.0,
        "director_id": 262
    },
    {
        "id": 406,
        "title": "Akira",
        "year": 1988,
        "rating": 8.0,
        "director_id": 263
    },
    {
        "id": 407,
        "title": "The Princess Bride",
        "year": 1987,
        "rating": 8.0,
        "director_id": 176
    },
    {
        "id": 408,
        "title": "Der Himmel über Berlin",
        "year": 1987,
        "rating": 8.0,
        "director_id": 178
    },
    {
        "id": 409,
        "title": "Au revoir les enfants",
        "year": 1987,
        "rating": 8.0,
        "director_id": 264
    },
    {
        "id": 410,
        "title": "Tenkû no shiro Rapyuta",
        "year": 1986,
        "rating": 8.0,
        "director_id": 19
    },
    {
        "id": 411,
        "title": "The Terminator",
        "year": 1984,
        "rating": 8.0,
        "director_id": 35
    },
    {
        "id": 412,
        "title": "Gandhi",
        "year": 1982,
        "rating": 8.0,
        "director_id": 265
    },
    {
        "id": 413,
        "title": "Kagemusha",
        "year": 1980,
        "rating": 8.0,
        "director_id": 24
    },
    {
        "id": 414,
        "title": "Being There",
        "year": 1979,
        "rating": 8.0,
        "director_id": 266
    },
    {
        "id": 415,
        "title": "Annie Hall",
        "year": 1977,
        "rating": 8.0,
        "director_id": 267
    },
    {
        "id": 416,
        "title": "Jaws",
        "year": 1975,
        "rating": 8.0,
        "director_id": 7
    },
    {
        "id": 417,
        "title": "Dog Day Afternoon",
        "year": 1975,
        "rating": 8.0,
        "director_id": 4
    },
    {
        "id": 418,
        "title": "Young Frankenstein",
        "year": 1974,
        "rating": 8.0,
        "director_id": 268
    },
    {
        "id": 419,
        "title": "Papillon",
        "year": 1973,
        "rating": 8.0,
        "director_id": 269
    },
    {
        "id": 420,
        "title": "The Exorcist",
        "year": 1973,
        "rating": 8.0,
        "director_id": 270
    },
    {
        "id": 421,
        "title": "Sleuth",
        "year": 1972,
        "rating": 8.0,
        "director_id": 127
    },
    {
        "id": 422,
        "title": "The Last Picture Show",
        "year": 1971,
        "rating": 8.0,
        "director_id": 186
    },
    {
        "id": 423,
        "title": "Fiddler on the Roof",
        "year": 1971,
        "rating": 8.0,
        "director_id": 271
    },
    {
        "id": 424,
        "title": "Il conformista",
        "year": 1970,
        "rating": 8.0,
        "director_id": 272
    },
    {
        "id": 425,
        "title": "Butch Cassidy and the Sundance Kid",
        "year": 1969,
        "rating": 8.0,
        "director_id": 78
    },
    {
        "id": 426,
        "title": "Rosemary's Baby",
        "year": 1968,
        "rating": 8.0,
        "director_id": 29
    },
    {
        "id": 427,
        "title": "Planet of the Apes",
        "year": 1968,
        "rating": 8.0,
        "director_id": 269
    },
    {
        "id": 428,
        "title": "The Graduate",
        "year": 1967,
        "rating": 8.0,
        "director_id": 273
    },
    {
        "id": 429,
        "title": "Who's Afraid of Virginia Woolf?",
        "year": 1966,
        "rating": 8.0,
        "director_id": 273
    },
    {
        "id": 430,
        "title": "The Sound of Music",
        "year": 1965,
        "rating": 8.0,
        "director_id": 274
    },
    {
        "id": 431,
        "title": "Doctor Zhivago",
        "year": 1965,
        "rating": 8.0,
        "director_id": 79
    },
    {
        "id": 432,
        "title": "Per un pugno di dollari",
        "year": 1964,
        "rating": 8.0,
        "director_id": 10
    },
    {
        "id": 433,
        "title": "8½",
        "year": 1963,
        "rating": 8.0,
        "director_id": 195
    },
    {
        "id": 434,
        "title": "Vivre sa vie: Film en douze tableaux",
        "year": 1962,
        "rating": 8.0,
        "director_id": 275
    },
    {
        "id": 435,
        "title": "The Hustler",
        "year": 1961,
        "rating": 8.0,
        "director_id": 276
    },
    {
        "id": 436,
        "title": "La dolce vita",
        "year": 1960,
        "rating": 8.0,
        "director_id": 195
    },
    {
        "id": 437,
        "title": "Rio Bravo",
        "year": 1959,
        "rating": 8.0,
        "director_id": 277
    },
    {
        "id": 438,
        "title": "Anatomy of a Murder",
        "year": 1959,
        "rating": 8.0,
        "director_id": 278
    },
    {
        "id": 439,
        "title": "Touch of Evil",
        "year": 1958,
        "rating": 8.0,
        "director_id": 82
    },
    {
        "id": 440,
        "title": "Cat on a Hot Tin Roof",
        "year": 1958,
        "rating": 8.0,
        "director_id": 279
    },
    {
        "id": 441,
        "title": "Sweet Smell of Success",
        "year": 1957,
        "rating": 8.0,
        "director_id": 280
    },
    {
        "id": 442,
        "title": "The Killing",
        "year": 1956,
        "rating": 8.0,
        "director_id": 54
    },
    {
        "id": 443,
        "title": "The Night of the Hunter",
        "year": 1955,
        "rating": 8.0,
        "director_id": 281
    },
    {
        "id": 444,
        "title": "La Strada",
        "year": 1954,
        "rating": 8.0,
        "director_id": 195
    },
    {
        "id": 445,
        "title": "Les diaboliques",
        "year": 1955,
        "rating": 8.0,
        "director_id": 197
    },
    {
        "id": 446,
        "title": "Stalag 17",
        "year": 1953,
        "rating": 8.0,
        "director_id": 56
    },
    {
        "id": 447,
        "title": "Roman Holiday",
        "year": 1953,
        "rating": 8.0,
        "director_id": 194
    },
    {
        "id": 448,
        "title": "A Streetcar Named Desire",
        "year": 1951,
        "rating": 8.0,
        "director_id": 196
    },
    {
        "id": 449,
        "title": "In a Lonely Place",
        "year": 1950,
        "rating": 8.0,
        "director_id": 282
    },
    {
        "id": 450,
        "title": "Kind Hearts and Coronets",
        "year": 1949,
        "rating": 8.0,
        "director_id": 283
    },
    {
        "id": 451,
        "title": "Rope",
        "year": 1948,
        "rating": 8.0,
        "director_id": 38
    },
    {
        "id": 452,
        "title": "Out of the Past",
        "year": 1947,
        "rating": 8.0,
        "director_id": 284
    },
    {
        "id": 453,
        "title": "Brief Encounter",
        "year": 1945,
        "rating": 8.0,
        "director_id": 79
    },
    {
        "id": 454,
        "title": "Laura",
        "year": 1944,
        "rating": 8.0,
        "director_id": 278
    },
    {
        "id": 455,
        "title": "The Best Years of Our Lives",
        "year": 1946,
        "rating": 8.0,
        "director_id": 194
    },
    {
        "id": 456,
        "title": "Arsenic and Old Lace",
        "year": 1942,
        "rating": 8.0,
        "director_id": 25
    },
    {
        "id": 457,
        "title": "The Maltese Falcon",
        "year": 1941,
        "rating": 8.0,
        "director_id": 128
    },
    {
        "id": 458,
        "title": "The Grapes of Wrath",
        "year": 1940,
        "rating": 8.0,
        "director_id": 192
    },
    {
        "id": 459,
        "title": "The Wizard of Oz",
        "year": 1939,
        "rating": 8.0,
        "director_id": 201
    },
    {
        "id": 460,
        "title": "La règle du jeu",
        "year": 1939,
        "rating": 8.0,
        "director_id": 202
    },
    {
        "id": 461,
        "title": "The Thin Man",
        "year": 1934,
        "rating": 8.0,
        "director_id": 285
    },
    {
        "id": 462,
        "title": "All Quiet on the Western Front",
        "year": 1930,
        "rating": 8.0,
        "director_id": 286
    },
    {
        "id": 463,
        "title": "Bronenosets Potemkin",
        "year": 1925,
        "rating": 8.0,
        "director_id": 287
    },
    {
        "id": 464,
        "title": "Knives Out",
        "year": 2019,
        "rating": 7.9,
        "director_id": 288
    },
    {
        "id": 465,
        "title": "Dil Bechara",
        "year": 2020,
        "rating": 7.9,
        "director_id": 289
    },
    {
        "id": 466,
        "title": "Manbiki kazoku",
        "year": 2018,
        "rating": 7.9,
        "director_id": 290
    },
    {
        "id": 467,
        "title": "Marriage Story",
        "year": 2019,
        "rating": 7.9,
        "director_id": 291
    },
    {
        "id": 468,
        "title": "Call Me by Your Name",
        "year": 2017,
        "rating": 7.9,
        "director_id": 292
    },
    {
        "id": 469,
        "title": "I, Daniel Blake",
        "year": 2016,
        "rating": 7.9,
        "director_id": 293
    },
    {
        "id": 470,
        "title": "Isle of Dogs",
        "year": 2018,
        "rating": 7.9,
        "director_id": 142
    },
    {
        "id": 471,
        "title": "Hunt for the Wilderpeople",
        "year": 2016,
        "rating": 7.9,
        "director_id": 294
    },
    {
        "id": 472,
        "title": "Captain Fantastic",
        "year": 2016,
        "rating": 7.9,
        "director_id": 295
    },
    {
        "id": 473,
        "title": "Sing Street",
        "year": 2016,
        "rating": 7.9,
        "director_id": 296
    },
    {
        "id": 474,
        "title": "Thor: Ragnarok",
        "year": 2017,
        "rating": 7.9,
        "director_id": 294
    },
    {
        "id": 475,
        "title": "Nightcrawler",
        "year": 2014,
        "rating": 7.9,
        "director_id": 297
    },
    {
        "id": 476,
        "title": "Jojo Rabbit",
        "year": 2019,
        "rating": 7.9,
        "director_id": 294
    },
    {
        "id": 477,
        "title": "Arrival",
        "year": 2016,
        "rating": 7.9,
        "director_id": 63
    },
    {
        "id": 478,
        "title": "Star Wars: Episode VII - The Force Awakens",
        "year": 2015,
        "rating": 7.9,
        "director_id": 298
    },
    {
        "id": 479,
        "title": "Before Midnight",
        "year": 2013,
        "rating": 7.9,
        "director_id": 161
    },
    {
        "id": 480,
        "title": "X-Men: Days of Future Past",
        "year": 2014,
        "rating": 7.9,
        "director_id": 32
    },
    {
        "id": 481,
        "title": "Bir Zamanlar Anadolu'da",
        "year": 2011,
        "rating": 7.9,
        "director_id": 140
    },
    {
        "id": 482,
        "title": "The Artist",
        "year": 2011,
        "rating": 7.9,
        "director_id": 299
    },
    {
        "id": 483,
        "title": "Edge of Tomorrow",
        "year": 2014,
        "rating": 7.9,
        "director_id": 300
    },
    {
        "id": 484,
        "title": "Amour",
        "year": 2012,
        "rating": 7.9,
        "director_id": 301
    },
    {
        "id": 485,
        "title": "The Irishman",
        "year": 2019,
        "rating": 7.9,
        "director_id": 12
    },
    {
        "id": 486,
        "title": "Un prophète",
        "year": 2009,
        "rating": 7.9,
        "director_id": 302
    },
    {
        "id": 487,
        "title": "Moon",
        "year": 2009,
        "rating": 7.9,
        "director_id": 303
    },
    {
        "id": 488,
        "title": "Låt den rätte komma in",
        "year": 2008,
        "rating": 7.9,
        "director_id": 304
    },
    {
        "id": 489,
        "title": "District 9",
        "year": 2009,
        "rating": 7.9,
        "director_id": 305
    },
    {
        "id": 490,
        "title": "The Wrestler",
        "year": 2008,
        "rating": 7.9,
        "director_id": 69
    },
    {
        "id": 491,
        "title": "Jab We Met",
        "year": 2007,
        "rating": 7.9,
        "director_id": 306
    },
    {
        "id": 492,
        "title": "Boyhood",
        "year": 2014,
        "rating": 7.9,
        "director_id": 161
    },
    {
        "id": 493,
        "title": "4 luni, 3 saptamâni si 2 zile",
        "year": 2007,
        "rating": 7.9,
        "director_id": 307
    },
    {
        "id": 494,
        "title": "Star Trek",
        "year": 2009,
        "rating": 7.9,
        "director_id": 298
    },
    {
        "id": 495,
        "title": "In Bruges",
        "year": 2008,
        "rating": 7.9,
        "director_id": 87
    },
    {
        "id": 496,
        "title": "The Man from Earth",
        "year": 2007,
        "rating": 7.9,
        "director_id": 308
    },
    {
        "id": 497,
        "title": "Letters from Iwo Jima",
        "year": 2006,
        "rating": 7.9,
        "director_id": 114
    },
    {
        "id": 498,
        "title": "The Fall",
        "year": 2006,
        "rating": 7.9,
        "director_id": 309
    },
    {
        "id": 499,
        "title": "Life of Pi",
        "year": 2012,
        "rating": 7.9,
        "director_id": 310
    },
    {
        "id": 500,
        "title": "Fantastic Mr. Fox",
        "year": 2009,
        "rating": 7.9,
        "director_id": 142
    },
    {
        "id": 501,
        "title": "C.R.A.Z.Y.",
        "year": 2005,
        "rating": 7.9,
        "director_id": 228
    },
    {
        "id": 502,
        "title": "Les choristes",
        "year": 2004,
        "rating": 7.9,
        "director_id": 311
    },
    {
        "id": 503,
        "title": "Iron Man",
        "year": 2008,
        "rating": 7.9,
        "director_id": 312
    },
    {
        "id": 504,
        "title": "Shaun of the Dead",
        "year": 2004,
        "rating": 7.9,
        "director_id": 313
    },
    {
        "id": 505,
        "title": "Gegen die Wand",
        "year": 2004,
        "rating": 7.9,
        "director_id": 314
    },
    {
        "id": 506,
        "title": "Mystic River",
        "year": 2003,
        "rating": 7.9,
        "director_id": 114
    },
    {
        "id": 507,
        "title": "Harry Potter and the Prisoner of Azkaban",
        "year": 2004,
        "rating": 7.9,
        "director_id": 315
    },
    {
        "id": 508,
        "title": "Ying xiong",
        "year": 2002,
        "rating": 7.9,
        "director_id": 175
    },
    {
        "id": 509,
        "title": "Hable con ella",
        "year": 2002,
        "rating": 7.9,
        "director_id": 316
    },
    {
        "id": 510,
        "title": "No Man's Land",
        "year": 2001,
        "rating": 7.9,
        "director_id": 317
    },
    {
        "id": 511,
        "title": "Cowboy Bebop: Tengoku no tobira",
        "year": 2001,
        "rating": 7.9,
        "director_id": 318
    },
    {
        "id": 512,
        "title": "The Bourne Identity",
        "year": 2002,
        "rating": 7.9,
        "director_id": 300
    },
    {
        "id": 513,
        "title": "Nueve reinas",
        "year": 2000,
        "rating": 7.9,
        "director_id": 319
    },
    {
        "id": 514,
        "title": "Children of Men",
        "year": 2006,
        "rating": 7.9,
        "director_id": 315
    },
    {
        "id": 515,
        "title": "Almost Famous",
        "year": 2000,
        "rating": 7.9,
        "director_id": 320
    },
    {
        "id": 516,
        "title": "Mulholland Dr.",
        "year": 2001,
        "rating": 7.9,
        "director_id": 182
    },
    {
        "id": 517,
        "title": "Toy Story 2",
        "year": 1999,
        "rating": 7.9,
        "director_id": 72
    },
    {
        "id": 518,
        "title": "Boogie Nights",
        "year": 1997,
        "rating": 7.9,
        "director_id": 102
    },
    {
        "id": 519,
        "title": "Mimi wo sumaseba",
        "year": 1995,
        "rating": 7.9,
        "director_id": 321
    },
    {
        "id": 520,
        "title": "Once Were Warriors",
        "year": 1994,
        "rating": 7.9,
        "director_id": 322
    },
    {
        "id": 521,
        "title": "True Romance",
        "year": 1993,
        "rating": 7.9,
        "director_id": 323
    },
    {
        "id": 522,
        "title": "Trois couleurs: Bleu",
        "year": 1993,
        "rating": 7.9,
        "director_id": 172
    },
    {
        "id": 523,
        "title": "Jûbê ninpûchô",
        "year": 1993,
        "rating": 7.9,
        "director_id": 324
    },
    {
        "id": 524,
        "title": "Carlito's Way",
        "year": 1993,
        "rating": 7.9,
        "director_id": 75
    },
    {
        "id": 525,
        "title": "Edward Scissorhands",
        "year": 1990,
        "rating": 7.9,
        "director_id": 243
    },
    {
        "id": 526,
        "title": "My Left Foot: The Story of Christy Brown",
        "year": 1989,
        "rating": 7.9,
        "director_id": 173
    },
    {
        "id": 527,
        "title": "Crimes and Misdemeanors",
        "year": 1989,
        "rating": 7.9,
        "director_id": 267
    },
    {
        "id": 528,
        "title": "The Untouchables",
        "year": 1987,
        "rating": 7.9,
        "director_id": 75
    },
    {
        "id": 529,
        "title": "Hannah and Her Sisters",
        "year": 1986,
        "rating": 7.9,
        "director_id": 267
    },
    {
        "id": 530,
        "title": "Brazil",
        "year": 1985,
        "rating": 7.9,
        "director_id": 121
    },
    {
        "id": 531,
        "title": "This Is Spinal Tap",
        "year": 1984,
        "rating": 7.9,
        "director_id": 176
    },
    {
        "id": 532,
        "title": "A Christmas Story",
        "year": 1983,
        "rating": 7.9,
        "director_id": 325
    },
    {
        "id": 533,
        "title": "The Blues Brothers",
        "year": 1980,
        "rating": 7.9,
        "director_id": 326
    },
    {
        "id": 534,
        "title": "Manhattan",
        "year": 1979,
        "rating": 7.9,
        "director_id": 267
    },
    {
        "id": 535,
        "title": "All That Jazz",
        "year": 1979,
        "rating": 7.9,
        "director_id": 327
    },
    {
        "id": 536,
        "title": "Dawn of the Dead",
        "year": 1978,
        "rating": 7.9,
        "director_id": 328
    },
    {
        "id": 537,
        "title": "All the President's Men",
        "year": 1976,
        "rating": 7.9,
        "director_id": 329
    },
    {
        "id": 538,
        "title": "La montaña sagrada",
        "year": 1973,
        "rating": 7.9,
        "director_id": 330
    },
    {
        "id": 539,
        "title": "Amarcord",
        "year": 1973,
        "rating": 7.9,
        "director_id": 195
    },
    {
        "id": 540,
        "title": "Le charme discret de la bourgeoisie",
        "year": 1972,
        "rating": 7.9,
        "director_id": 190
    },
    {
        "id": 541,
        "title": "Aguirre, der Zorn Gottes",
        "year": 1972,
        "rating": 7.9,
        "director_id": 181
    },
    {
        "id": 542,
        "title": "Harold and Maude",
        "year": 1971,
        "rating": 7.9,
        "director_id": 266
    },
    {
        "id": 543,
        "title": "Patton",
        "year": 1970,
        "rating": 7.9,
        "director_id": 269
    },
    {
        "id": 544,
        "title": "The Wild Bunch",
        "year": 1969,
        "rating": 7.9,
        "director_id": 331
    },
    {
        "id": 545,
        "title": "Night of the Living Dead",
        "year": 1968,
        "rating": 7.9,
        "director_id": 328
    },
    {
        "id": 546,
        "title": "The Lion in Winter",
        "year": 1968,
        "rating": 7.9,
        "director_id": 332
    },
    {
        "id": 547,
        "title": "In the Heat of the Night",
        "year": 1967,
        "rating": 7.9,
        "director_id": 271
    },
    {
        "id": 548,
        "title": "Charade",
        "year": 1963,
        "rating": 7.9,
        "director_id": 80
    },
    {
        "id": 549,
        "title": "The Manchurian Candidate",
        "year": 1962,
        "rating": 7.9,
        "director_id": 333
    },
    {
        "id": 550,
        "title": "Spartacus",
        "year": 1960,
        "rating": 7.9,
        "director_id": 54
    },
    {
        "id": 551,
        "title": "L'avventura",
        "year": 1960,
        "rating": 7.9,
        "director_id": 334
    },
    {
        "id": 552,
        "title": "Hiroshima mon amour",
        "year": 1959,
        "rating": 7.9,
        "director_id": 335
    },
    {
        "id": 553,
        "title": "The Ten Commandments",
        "year": 1956,
        "rating": 7.9,
        "director_id": 336
    },
    {
        "id": 554,
        "title": "The Searchers",
        "year": 1956,
        "rating": 7.9,
        "director_id": 192
    },
    {
        "id": 555,
        "title": "East of Eden",
        "year": 1955,
        "rating": 7.9,
        "director_id": 196
    },
    {
        "id": 556,
        "title": "High Noon",
        "year": 1952,
        "rating": 7.9,
        "director_id": 337
    },
    {
        "id": 557,
        "title": "Strangers on a Train",
        "year": 1951,
        "rating": 7.9,
        "director_id": 38
    },
    {
        "id": 558,
        "title": "Harvey",
        "year": 1950,
        "rating": 7.9,
        "director_id": 338
    },
    {
        "id": 559,
        "title": "Miracle on 34th Street",
        "year": 1947,
        "rating": 7.9,
        "director_id": 339
    },
    {
        "id": 560,
        "title": "Notorious",
        "year": 1946,
        "rating": 7.9,
        "director_id": 38
    },
    {
        "id": 561,
        "title": "The Big Sleep",
        "year": 1946,
        "rating": 7.9,
        "director_id": 277
    },
    {
        "id": 562,
        "title": "The Lost Weekend",
        "year": 1945,
        "rating": 7.9,
        "director_id": 56
    },
    {
        "id": 563,
        "title": "The Philadelphia Story",
        "year": 1940,
        "rating": 7.9,
        "director_id": 340
    },
    {
        "id": 564,
        "title": "His Girl Friday",
        "year": 1940,
        "rating": 7.9,
        "director_id": 277
    },
    {
        "id": 565,
        "title": "The Adventures of Robin Hood",
        "year": 1938,
        "rating": 7.9,
        "director_id": 39
    },
    {
        "id": 566,
        "title": "A Night at the Opera",
        "year": 1935,
        "rating": 7.9,
        "director_id": 341
    },
    {
        "id": 567,
        "title": "King Kong",
        "year": 1933,
        "rating": 7.9,
        "director_id": 342
    },
    {
        "id": 568,
        "title": "Freaks",
        "year": 1932,
        "rating": 7.9,
        "director_id": 343
    },
    {
        "id": 569,
        "title": "Nosferatu",
        "year": 1922,
        "rating": 7.9,
        "director_id": 204
    },
    {
        "id": 570,
        "title": "The Gentlemen",
        "year": 2019,
        "rating": 7.8,
        "director_id": 68
    },
    {
        "id": 571,
        "title": "Raazi",
        "year": 2018,
        "rating": 7.8,
        "director_id": 88
    },
    {
        "id": 572,
        "title": "Sound of Metal",
        "year": 2019,
        "rating": 7.8,
        "director_id": 344
    },
    {
        "id": 573,
        "title": "Forushande",
        "year": 2016,
        "rating": 7.8,
        "director_id": 62
    },
    {
        "id": 574,
        "title": "Dunkirk",
        "year": 2017,
        "rating": 7.8,
        "director_id": 3
    },
    {
        "id": 575,
        "title": "Perfetti sconosciuti",
        "year": 2016,
        "rating": 7.8,
        "director_id": 345
    },
    {
        "id": 576,
        "title": "Hidden Figures",
        "year": 2016,
        "rating": 7.8,
        "director_id": 346
    },
    {
        "id": 577,
        "title": "Paddington 2",
        "year": 2017,
        "rating": 7.8,
        "director_id": 347
    },
    {
        "id": 578,
        "title": "Udta Punjab",
        "year": 2016,
        "rating": 7.8,
        "director_id": 348
    },
    {
        "id": 579,
        "title": "Kubo and the Two Strings",
        "year": 2016,
        "rating": 7.8,
        "director_id": 349
    },
    {
        "id": 580,
        "title": "M.S. Dhoni: The Untold Story",
        "year": 2016,
        "rating": 7.8,
        "director_id": 151
    },
    {
        "id": 581,
        "title": "Manchester by the Sea",
        "year": 2016,
        "rating": 7.8,
        "director_id": 350
    },
    {
        "id": 582,
        "title": "Under sandet",
        "year": 2015,
        "rating": 7.8,
        "director_id": 351
    },
    {
        "id": 583,
        "title": "Rogue One",
        "year": 2016,
        "rating": 7.8,
        "director_id": 352
    },
    {
        "id": 584,
        "title": "Captain America: Civil War",
        "year": 2016,
        "rating": 7.8,
        "director_id": 47
    },
    {
        "id": 585,
        "title": "The Hateful Eight",
        "year": 2015,
        "rating": 7.8,
        "director_id": 6
    },
    {
        "id": 586,
        "title": "Little Women",
        "year": 2019,
        "rating": 7.8,
        "director_id": 353
    },
    {
        "id": 587,
        "title": "Loving Vincent",
        "year": 2017,
        "rating": 7.8,
        "director_id": 354
    },
    {
        "id": 588,
        "title": "Pride",
        "year": 2014,
        "rating": 7.8,
        "director_id": 355
    },
    {
        "id": 589,
        "title": "Le passé",
        "year": 2013,
        "rating": 7.8,
        "director_id": 62
    },
    {
        "id": 590,
        "title": "La grande bellezza",
        "year": 2013,
        "rating": 7.8,
        "director_id": 356
    },
    {
        "id": 591,
        "title": "The Lunchbox",
        "year": 2013,
        "rating": 7.8,
        "director_id": 357
    },
    {
        "id": 592,
        "title": "Vicky Donor",
        "year": 2012,
        "rating": 7.8,
        "director_id": 358
    },
    {
        "id": 593,
        "title": "Big Hero 6",
        "year": 2014,
        "rating": 7.8,
        "director_id": 359
    },
    {
        "id": 594,
        "title": "About Time",
        "year": 2013,
        "rating": 7.8,
        "director_id": 360
    },
    {
        "id": 595,
        "title": "English Vinglish",
        "year": 2012,
        "rating": 7.8,
        "director_id": 361
    },
    {
        "id": 596,
        "title": "Kaze tachinu",
        "year": 2013,
        "rating": 7.8,
        "director_id": 19
    },
    {
        "id": 597,
        "title": "Toy Story 4",
        "year": 2019,
        "rating": 7.8,
        "director_id": 362
    },
    {
        "id": 598,
        "title": "La migliore offerta",
        "year": 2013,
        "rating": 7.8,
        "director_id": 36
    },
    {
        "id": 599,
        "title": "Moonrise Kingdom",
        "year": 2012,
        "rating": 7.8,
        "director_id": 142
    },
    {
        "id": 600,
        "title": "How to Train Your Dragon 2",
        "year": 2014,
        "rating": 7.8,
        "director_id": 156
    },
    {
        "id": 601,
        "title": "The Big Short",
        "year": 2015,
        "rating": 7.8,
        "director_id": 363
    },
    {
        "id": 602,
        "title": "Kokuhaku",
        "year": 2010,
        "rating": 7.8,
        "director_id": 364
    },
    {
        "id": 603,
        "title": "Ang-ma-reul bo-at-da",
        "year": 2010,
        "rating": 7.8,
        "director_id": 365
    },
    {
        "id": 604,
        "title": "The Girl with the Dragon Tattoo",
        "year": 2011,
        "rating": 7.8,
        "director_id": 8
    },
    {
        "id": 605,
        "title": "Captain Phillips",
        "year": 2013,
        "rating": 7.8,
        "director_id": 231
    },
    {
        "id": 606,
        "title": "Ajeossi",
        "year": 2010,
        "rating": 7.8,
        "director_id": 366
    },
    {
        "id": 607,
        "title": "Straight Outta Compton",
        "year": 2015,
        "rating": 7.8,
        "director_id": 367
    },
    {
        "id": 608,
        "title": "Madeo",
        "year": 2009,
        "rating": 7.8,
        "director_id": 16
    },
    {
        "id": 609,
        "title": "Chugyeokja",
        "year": 2008,
        "rating": 7.8,
        "director_id": 368
    },
    {
        "id": 610,
        "title": "The Hobbit: The Desolation of Smaug",
        "year": 2013,
        "rating": 7.8,
        "director_id": 5
    },
    {
        "id": 611,
        "title": "Das weiße Band - Eine deutsche Kindergeschichte",
        "year": 2009,
        "rating": 7.8,
        "director_id": 301
    },
    {
        "id": 612,
        "title": "Män som hatar kvinnor",
        "year": 2009,
        "rating": 7.8,
        "director_id": 369
    },
    {
        "id": 613,
        "title": "The Trial of the Chicago 7",
        "year": 2020,
        "rating": 7.8,
        "director_id": 370
    },
    {
        "id": 614,
        "title": "Druk",
        "year": 2020,
        "rating": 7.8,
        "director_id": 61
    },
    {
        "id": 615,
        "title": "The Fighter",
        "year": 2010,
        "rating": 7.8,
        "director_id": 371
    },
    {
        "id": 616,
        "title": "Taken",
        "year": 2008,
        "rating": 7.8,
        "director_id": 372
    },
    {
        "id": 617,
        "title": "The Boy in the Striped Pyjamas",
        "year": 2008,
        "rating": 7.8,
        "director_id": 373
    },
    {
        "id": 618,
        "title": "Once",
        "year": 2007,
        "rating": 7.8,
        "director_id": 296
    },
    {
        "id": 619,
        "title": "The Hobbit: An Unexpected Journey",
        "year": 2012,
        "rating": 7.8,
        "director_id": 5
    },
    {
        "id": 620,
        "title": "Auf der anderen Seite",
        "year": 2007,
        "rating": 7.8,
        "director_id": 314
    },
    {
        "id": 621,
        "title": "Atonement",
        "year": 2007,
        "rating": 7.8,
        "director_id": 374
    },
    {
        "id": 622,
        "title": "Drive",
        "year": 2011,
        "rating": 7.8,
        "director_id": 375
    },
    {
        "id": 623,
        "title": "American Gangster",
        "year": 2007,
        "rating": 7.8,
        "director_id": 30
    },
    {
        "id": 624,
        "title": "Avatar",
        "year": 2009,
        "rating": 7.8,
        "director_id": 35
    },
    {
        "id": 625,
        "title": "Mr. Nobody",
        "year": 2009,
        "rating": 7.8,
        "director_id": 376
    },
    {
        "id": 626,
        "title": "Apocalypto",
        "year": 2006,
        "rating": 7.8,
        "director_id": 73
    },
    {
        "id": 627,
        "title": "Little Miss Sunshine",
        "year": 2006,
        "rating": 7.8,
        "director_id": 377
    },
    {
        "id": 628,
        "title": "Hot Fuzz",
        "year": 2007,
        "rating": 7.8,
        "director_id": 313
    },
    {
        "id": 629,
        "title": "The Curious Case of Benjamin Button",
        "year": 2008,
        "rating": 7.8,
        "director_id": 8
    },
    {
        "id": 630,
        "title": "Veer-Zaara",
        "year": 2004,
        "rating": 7.8,
        "director_id": 378
    },
    {
        "id": 631,
        "title": "Adams æbler",
        "year": 2005,
        "rating": 7.8,
        "director_id": 379
    },
    {
        "id": 632,
        "title": "Pride & Prejudice",
        "year": 2005,
        "rating": 7.8,
        "director_id": 374
    },
    {
        "id": 633,
        "title": "The World's Fastest Indian",
        "year": 2005,
        "rating": 7.8,
        "director_id": 380
    },
    {
        "id": 634,
        "title": "Tôkyô goddofâzâzu",
        "year": 2003,
        "rating": 7.8,
        "director_id": 248
    },
    {
        "id": 635,
        "title": "Serenity",
        "year": 2005,
        "rating": 7.8,
        "director_id": 226
    },
    {
        "id": 636,
        "title": "Walk the Line",
        "year": 2005,
        "rating": 7.8,
        "director_id": 137
    },
    {
        "id": 637,
        "title": "Ondskan",
        "year": 2003,
        "rating": 7.8,
        "director_id": 381
    },
    {
        "id": 638,
        "title": "The Notebook",
        "year": 2004,
        "rating": 7.8,
        "director_id": 382
    },
    {
        "id": 639,
        "title": "Diarios de motocicleta",
        "year": 2004,
        "rating": 7.8,
        "director_id": 249
    },
    {
        "id": 640,
        "title": "Lilja 4-ever",
        "year": 2002,
        "rating": 7.8,
        "director_id": 383
    },
    {
        "id": 641,
        "title": "Les triplettes de Belleville",
        "year": 2003,
        "rating": 7.8,
        "director_id": 384
    },
    {
        "id": 642,
        "title": "Gongdong gyeongbi guyeok JSA",
        "year": 2000,
        "rating": 7.8,
        "director_id": 53
    },
    {
        "id": 643,
        "title": "The Count of Monte Cristo",
        "year": 2002,
        "rating": 7.8,
        "director_id": 385
    },
    {
        "id": 644,
        "title": "Waking Life",
        "year": 2001,
        "rating": 7.8,
        "director_id": 161
    },
    {
        "id": 645,
        "title": "Remember the Titans",
        "year": 2000,
        "rating": 7.8,
        "director_id": 386
    },
    {
        "id": 646,
        "title": "Wo hu cang long",
        "year": 2000,
        "rating": 7.8,
        "director_id": 310
    },
    {
        "id": 647,
        "title": "Todo sobre mi madre",
        "year": 1999,
        "rating": 7.8,
        "director_id": 316
    },
    {
        "id": 648,
        "title": "Cast Away",
        "year": 2000,
        "rating": 7.8,
        "director_id": 9
    },
    {
        "id": 649,
        "title": "The Boondock Saints",
        "year": 1999,
        "rating": 7.8,
        "director_id": 387
    },
    {
        "id": 650,
        "title": "The Insider",
        "year": 1999,
        "rating": 7.8,
        "director_id": 112
    },
    {
        "id": 651,
        "title": "October Sky",
        "year": 1999,
        "rating": 7.8,
        "director_id": 388
    },
    {
        "id": 652,
        "title": "Shrek",
        "year": 2001,
        "rating": 7.8,
        "director_id": 389
    },
    {
        "id": 653,
        "title": "Titanic",
        "year": 1997,
        "rating": 7.8,
        "director_id": 35
    },
    {
        "id": 654,
        "title": "Hana-bi",
        "year": 1997,
        "rating": 7.8,
        "director_id": 390
    },
    {
        "id": 655,
        "title": "Gattaca",
        "year": 1997,
        "rating": 7.8,
        "director_id": 391
    },
    {
        "id": 656,
        "title": "The Game",
        "year": 1997,
        "rating": 7.8,
        "director_id": 8
    },
    {
        "id": 657,
        "title": "Breaking the Waves",
        "year": 1996,
        "rating": 7.8,
        "director_id": 245
    },
    {
        "id": 658,
        "title": "Ed Wood",
        "year": 1994,
        "rating": 7.8,
        "director_id": 243
    },
    {
        "id": 659,
        "title": "What's Eating Gilbert Grape",
        "year": 1993,
        "rating": 7.8,
        "director_id": 154
    },
    {
        "id": 660,
        "title": "Tombstone",
        "year": 1993,
        "rating": 7.8,
        "director_id": 392
    },
    {
        "id": 661,
        "title": "The Sandlot",
        "year": 1993,
        "rating": 7.8,
        "director_id": 393
    },
    {
        "id": 662,
        "title": "The Remains of the Day",
        "year": 1993,
        "rating": 7.8,
        "director_id": 394
    },
    {
        "id": 663,
        "title": "Naked",
        "year": 1993,
        "rating": 7.8,
        "director_id": 252
    },
    {
        "id": 664,
        "title": "The Fugitive",
        "year": 1993,
        "rating": 7.8,
        "director_id": 395
    },
    {
        "id": 665,
        "title": "A Bronx Tale",
        "year": 1993,
        "rating": 7.8,
        "director_id": 396
    },
    {
        "id": 666,
        "title": "Batman: Mask of the Phantasm",
        "year": 1993,
        "rating": 7.8,
        "director_id": 397
    },
    {
        "id": 667,
        "title": "Lat sau san taam",
        "year": 1992,
        "rating": 7.8,
        "director_id": 398
    },
    {
        "id": 668,
        "title": "Night on Earth",
        "year": 1991,
        "rating": 7.8,
        "director_id": 399
    },
    {
        "id": 669,
        "title": "La double vie de Véronique",
        "year": 1991,
        "rating": 7.8,
        "director_id": 172
    },
    {
        "id": 670,
        "title": "Boyz n the Hood",
        "year": 1991,
        "rating": 7.8,
        "director_id": 400
    },
    {
        "id": 671,
        "title": "Misery",
        "year": 1990,
        "rating": 7.8,
        "director_id": 176
    },
    {
        "id": 672,
        "title": "Awakenings",
        "year": 1990,
        "rating": 7.8,
        "director_id": 401
    },
    {
        "id": 673,
        "title": "Majo no takkyûbin",
        "year": 1989,
        "rating": 7.8,
        "director_id": 19
    },
    {
        "id": 674,
        "title": "Glory",
        "year": 1989,
        "rating": 7.8,
        "director_id": 230
    },
    {
        "id": 675,
        "title": "Dip huet seung hung",
        "year": 1989,
        "rating": 7.8,
        "director_id": 398
    },
    {
        "id": 676,
        "title": "Back to the Future Part II",
        "year": 1989,
        "rating": 7.8,
        "director_id": 9
    },
    {
        "id": 677,
        "title": "Mississippi Burning",
        "year": 1988,
        "rating": 7.8,
        "director_id": 180
    },
    {
        "id": 678,
        "title": "Predator",
        "year": 1987,
        "rating": 7.8,
        "director_id": 116
    },
    {
        "id": 679,
        "title": "Evil Dead II",
        "year": 1987,
        "rating": 7.8,
        "director_id": 402
    },
    {
        "id": 680,
        "title": "Ferris Bueller's Day Off",
        "year": 1986,
        "rating": 7.8,
        "director_id": 403
    },
    {
        "id": 681,
        "title": "Down by Law",
        "year": 1986,
        "rating": 7.8,
        "director_id": 399
    },
    {
        "id": 682,
        "title": "The Goonies",
        "year": 1985,
        "rating": 7.8,
        "director_id": 404
    },
    {
        "id": 683,
        "title": "The Color Purple",
        "year": 1985,
        "rating": 7.8,
        "director_id": 7
    },
    {
        "id": 684,
        "title": "The Breakfast Club",
        "year": 1985,
        "rating": 7.8,
        "director_id": 403
    },
    {
        "id": 685,
        "title": "The Killing Fields",
        "year": 1984,
        "rating": 7.8,
        "director_id": 405
    },
    {
        "id": 686,
        "title": "Ghostbusters",
        "year": 1984,
        "rating": 7.8,
        "director_id": 406
    },
    {
        "id": 687,
        "title": "The Right Stuff",
        "year": 1983,
        "rating": 7.8,
        "director_id": 407
    },
    {
        "id": 688,
        "title": "The King of Comedy",
        "year": 1982,
        "rating": 7.8,
        "director_id": 12
    },
    {
        "id": 689,
        "title": "E.T. the Extra-Terrestrial",
        "year": 1982,
        "rating": 7.8,
        "director_id": 7
    },
    {
        "id": 690,
        "title": "Kramer vs. Kramer",
        "year": 1979,
        "rating": 7.8,
        "director_id": 408
    },
    {
        "id": 691,
        "title": "Days of Heaven",
        "year": 1978,
        "rating": 7.8,
        "director_id": 409
    },
    {
        "id": 692,
        "title": "The Outlaw Josey Wales",
        "year": 1976,
        "rating": 7.8,
        "director_id": 114
    },
    {
        "id": 693,
        "title": "The Man Who Would Be King",
        "year": 1975,
        "rating": 7.8,
        "director_id": 128
    },
    {
        "id": 694,
        "title": "The Conversation",
        "year": 1974,
        "rating": 7.8,
        "director_id": 2
    },
    {
        "id": 695,
        "title": "La planète sauvage",
        "year": 1973,
        "rating": 7.8,
        "director_id": 410
    },
    {
        "id": 696,
        "title": "The Day of the Jackal",
        "year": 1973,
        "rating": 7.8,
        "director_id": 337
    },
    {
        "id": 697,
        "title": "Badlands",
        "year": 1973,
        "rating": 7.8,
        "director_id": 409
    },
    {
        "id": 698,
        "title": "Cabaret",
        "year": 1972,
        "rating": 7.8,
        "director_id": 327
    },
    {
        "id": 699,
        "title": "Willy Wonka & the Chocolate Factory",
        "year": 1971,
        "rating": 7.8,
        "director_id": 411
    },
    {
        "id": 700,
        "title": "Midnight Cowboy",
        "year": 1969,
        "rating": 7.8,
        "director_id": 412
    },
    {
        "id": 701,
        "title": "Wait Until Dark",
        "year": 1967,
        "rating": 7.8,
        "director_id": 413
    },
    {
        "id": 702,
        "title": "Guess Who's Coming to Dinner",
        "year": 1967,
        "rating": 7.8,
        "director_id": 124
    },
    {
        "id": 703,
        "title": "Bonnie and Clyde",
        "year": 1967,
        "rating": 7.8,
        "director_id": 414
    },
    {
        "id": 704,
        "title": "My Fair Lady",
        "year": 1964,
        "rating": 7.8,
        "director_id": 340
    },
    {
        "id": 705,
        "title": "Mary Poppins",
        "year": 1964,
        "rating": 7.8,
        "director_id": 415
    },
    {
        "id": 706,
        "title": "The Longest Day",
        "year": 1962,
        "rating": 7.8,
        "director_id": 416
    },
    {
        "id": 707,
        "title": "Jules et Jim",
        "year": 1962,
        "rating": 7.8,
        "director_id": 193
    },
    {
        "id": 708,
        "title": "The Innocents",
        "year": 1961,
        "rating": 7.8,
        "director_id": 417
    },
    {
        "id": 709,
        "title": "À bout de souffle",
        "year": 1960,
        "rating": 7.8,
        "director_id": 275
    },
    {
        "id": 710,
        "title": "Red River",
        "year": 1948,
        "rating": 7.8,
        "director_id": 277
    },
    {
        "id": 711,
        "title": "Key Largo",
        "year": 1948,
        "rating": 7.8,
        "director_id": 128
    },
    {
        "id": 712,
        "title": "To Have and Have Not",
        "year": 1944,
        "rating": 7.8,
        "director_id": 277
    },
    {
        "id": 713,
        "title": "Shadow of a Doubt",
        "year": 1943,
        "rating": 7.8,
        "director_id": 38
    },
    {
        "id": 714,
        "title": "Stagecoach",
        "year": 1939,
        "rating": 7.8,
        "director_id": 192
    },
    {
        "id": 715,
        "title": "The Lady Vanishes",
        "year": 1938,
        "rating": 7.8,
        "director_id": 38
    },
    {
        "id": 716,
        "title": "Bringing Up Baby",
        "year": 1938,
        "rating": 7.8,
        "director_id": 277
    },
    {
        "id": 717,
        "title": "Bride of Frankenstein",
        "year": 1935,
        "rating": 7.8,
        "director_id": 418
    },
    {
        "id": 718,
        "title": "Duck Soup",
        "year": 1933,
        "rating": 7.8,
        "director_id": 419
    },
    {
        "id": 719,
        "title": "Scarface: The Shame of the Nation",
        "year": 1932,
        "rating": 7.8,
        "director_id": 277
    },
    {
        "id": 720,
        "title": "Frankenstein",
        "year": 1931,
        "rating": 7.8,
        "director_id": 418
    },
    {
        "id": 721,
        "title": "Roma",
        "year": 2018,
        "rating": 7.7,
        "director_id": 315
    },
    {
        "id": 722,
        "title": "God's Own Country",
        "year": 2017,
        "rating": 7.7,
        "director_id": 420
    },
    {
        "id": 723,
        "title": "Deadpool 2",
        "year": 2018,
        "rating": 7.7,
        "director_id": 421
    },
    {
        "id": 724,
        "title": "Wind River",
        "year": 2017,
        "rating": 7.7,
        "director_id": 422
    },
    {
        "id": 725,
        "title": "Get Out",
        "year": 2017,
        "rating": 7.7,
        "director_id": 423
    },
    {
        "id": 726,
        "title": "Mission: Impossible - Fallout",
        "year": 2018,
        "rating": 7.7,
        "director_id": 424
    },
    {
        "id": 727,
        "title": "En man som heter Ove",
        "year": 2015,
        "rating": 7.7,
        "director_id": 425
    },
    {
        "id": 728,
        "title": "What We Do in the Shadows",
        "year": 2014,
        "rating": 7.7,
        "director_id": 426
    },
    {
        "id": 729,
        "title": "Omoide no Mânî",
        "year": 2014,
        "rating": 7.7,
        "director_id": 427
    },
    {
        "id": 730,
        "title": "The Theory of Everything",
        "year": 2014,
        "rating": 7.7,
        "director_id": 428
    },
    {
        "id": 731,
        "title": "Kingsman: The Secret Service",
        "year": 2014,
        "rating": 7.7,
        "director_id": 429
    },
    {
        "id": 732,
        "title": "The Fault in Our Stars",
        "year": 2014,
        "rating": 7.7,
        "director_id": 430
    },
    {
        "id": 733,
        "title": "Me and Earl and the Dying Girl",
        "year": 2015,
        "rating": 7.7,
        "director_id": 431
    },
    {
        "id": 734,
        "title": "Birdman or (The Unexpected Virtue of Ignorance)",
        "year": 2014,
        "rating": 7.7,
        "director_id": 163
    },
    {
        "id": 735,
        "title": "La vie d'Adèle",
        "year": 2013,
        "rating": 7.7,
        "director_id": 432
    },
    {
        "id": 736,
        "title": "Kai po che!",
        "year": 2013,
        "rating": 7.7,
        "director_id": 433
    },
    {
        "id": 737,
        "title": "The Broken Circle Breakdown",
        "year": 2012,
        "rating": 7.7,
        "director_id": 434
    },
    {
        "id": 738,
        "title": "Captain America: The Winter Soldier",
        "year": 2014,
        "rating": 7.7,
        "director_id": 47
    },
    {
        "id": 739,
        "title": "Rockstar",
        "year": 2011,
        "rating": 7.7,
        "director_id": 306
    },
    {
        "id": 740,
        "title": "Nebraska",
        "year": 2013,
        "rating": 7.7,
        "director_id": 435
    },
    {
        "id": 741,
        "title": "Wreck-It Ralph",
        "year": 2012,
        "rating": 7.7,
        "director_id": 436
    },
    {
        "id": 742,
        "title": "Le Petit Prince",
        "year": 2015,
        "rating": 7.7,
        "director_id": 437
    },
    {
        "id": 743,
        "title": "Detachment",
        "year": 2011,
        "rating": 7.7,
        "director_id": 31
    },
    {
        "id": 744,
        "title": "Midnight in Paris",
        "year": 2011,
        "rating": 7.7,
        "director_id": 267
    },
    {
        "id": 745,
        "title": "The Lego Movie",
        "year": 2014,
        "rating": 7.7,
        "director_id": 438
    },
    {
        "id": 746,
        "title": "Gravity",
        "year": 2013,
        "rating": 7.7,
        "director_id": 315
    },
    {
        "id": 747,
        "title": "Star Trek Into Darkness",
        "year": 2013,
        "rating": 7.7,
        "director_id": 298
    },
    {
        "id": 748,
        "title": "Beasts of No Nation",
        "year": 2015,
        "rating": 7.7,
        "director_id": 439
    },
    {
        "id": 749,
        "title": "The Social Network",
        "year": 2010,
        "rating": 7.7,
        "director_id": 8
    },
    {
        "id": 750,
        "title": "X: First Class",
        "year": 2011,
        "rating": 7.7,
        "director_id": 429
    },
    {
        "id": 751,
        "title": "The Hangover",
        "year": 2009,
        "rating": 7.7,
        "director_id": 26
    },
    {
        "id": 752,
        "title": "Skyfall",
        "year": 2012,
        "rating": 7.7,
        "director_id": 57
    },
    {
        "id": 753,
        "title": "Silver Linings Playbook",
        "year": 2012,
        "rating": 7.7,
        "director_id": 371
    },
    {
        "id": 754,
        "title": "Argo",
        "year": 2012,
        "rating": 7.7,
        "director_id": 440
    },
    {
        "id": 755,
        "title": "(500) Days of Summer",
        "year": 2009,
        "rating": 7.7,
        "director_id": 441
    },
    {
        "id": 756,
        "title": "Harry Potter and the Deathly Hallows: Part 1",
        "year": 2010,
        "rating": 7.7,
        "director_id": 152
    },
    {
        "id": 757,
        "title": "Gake no ue no Ponyo",
        "year": 2008,
        "rating": 7.7,
        "director_id": 19
    },
    {
        "id": 758,
        "title": "Frost/Nixon",
        "year": 2008,
        "rating": 7.7,
        "director_id": 108
    },
    {
        "id": 759,
        "title": "Papurika",
        "year": 2006,
        "rating": 7.7,
        "director_id": 248
    },
    {
        "id": 760,
        "title": "Changeling",
        "year": 2008,
        "rating": 7.7,
        "director_id": 114
    },
    {
        "id": 761,
        "title": "Flipped",
        "year": 2010,
        "rating": 7.7,
        "director_id": 176
    },
    {
        "id": 762,
        "title": "Toki o kakeru shôjo",
        "year": 2006,
        "rating": 7.7,
        "director_id": 143
    },
    {
        "id": 763,
        "title": "Death Note: Desu nôto",
        "year": 2006,
        "rating": 7.7,
        "director_id": 442
    },
    {
        "id": 764,
        "title": "This Is England",
        "year": 2006,
        "rating": 7.7,
        "director_id": 443
    },
    {
        "id": 765,
        "title": "Ex Machina",
        "year": 2014,
        "rating": 7.7,
        "director_id": 444
    },
    {
        "id": 766,
        "title": "Efter brylluppet",
        "year": 2006,
        "rating": 7.7,
        "director_id": 445
    },
    {
        "id": 767,
        "title": "The Last King of Scotland",
        "year": 2006,
        "rating": 7.7,
        "director_id": 446
    },
    {
        "id": 768,
        "title": "Zodiac",
        "year": 2007,
        "rating": 7.7,
        "director_id": 8
    },
    {
        "id": 769,
        "title": "Lucky Number Slevin",
        "year": 2006,
        "rating": 7.7,
        "director_id": 447
    },
    {
        "id": 770,
        "title": "Joyeux Noël",
        "year": 2005,
        "rating": 7.7,
        "director_id": 448
    },
    {
        "id": 771,
        "title": "Control",
        "year": 2007,
        "rating": 7.7,
        "director_id": 449
    },
    {
        "id": 772,
        "title": "Tangled",
        "year": 2010,
        "rating": 7.7,
        "director_id": 450
    },
    {
        "id": 773,
        "title": "Zwartboek",
        "year": 2006,
        "rating": 7.7,
        "director_id": 451
    },
    {
        "id": 774,
        "title": "Brokeback Mountain",
        "year": 2005,
        "rating": 7.7,
        "director_id": 310
    },
    {
        "id": 775,
        "title": "3:10 to Yuma",
        "year": 2007,
        "rating": 7.7,
        "director_id": 137
    },
    {
        "id": 776,
        "title": "Crash",
        "year": 2004,
        "rating": 7.7,
        "director_id": 452
    },
    {
        "id": 777,
        "title": "Kung fu",
        "year": 2004,
        "rating": 7.7,
        "director_id": 453
    },
    {
        "id": 778,
        "title": "The Bourne Supremacy",
        "year": 2004,
        "rating": 7.7,
        "director_id": 231
    },
    {
        "id": 779,
        "title": "The Machinist",
        "year": 2004,
        "rating": 7.7,
        "director_id": 454
    },
    {
        "id": 780,
        "title": "Ray",
        "year": 2004,
        "rating": 7.7,
        "director_id": 256
    },
    {
        "id": 781,
        "title": "Lost in Translation",
        "year": 2003,
        "rating": 7.7,
        "director_id": 455
    },
    {
        "id": 782,
        "title": "Harry Potter and the Goblet of Fire",
        "year": 2005,
        "rating": 7.7,
        "director_id": 456
    },
    {
        "id": 783,
        "title": "Man on Fire",
        "year": 2004,
        "rating": 7.7,
        "director_id": 323
    },
    {
        "id": 784,
        "title": "Coraline",
        "year": 2009,
        "rating": 7.7,
        "director_id": 254
    },
    {
        "id": 785,
        "title": "The Last Samurai",
        "year": 2003,
        "rating": 7.7,
        "director_id": 230
    },
    {
        "id": 786,
        "title": "The Magdalene Sisters",
        "year": 2002,
        "rating": 7.7,
        "director_id": 457
    },
    {
        "id": 787,
        "title": "Good Bye Lenin!",
        "year": 2003,
        "rating": 7.7,
        "director_id": 458
    },
    {
        "id": 788,
        "title": "In America",
        "year": 2002,
        "rating": 7.7,
        "director_id": 173
    },
    {
        "id": 789,
        "title": "I Am Sam",
        "year": 2001,
        "rating": 7.7,
        "director_id": 459
    },
    {
        "id": 790,
        "title": "Adaptation.",
        "year": 2002,
        "rating": 7.7,
        "director_id": 218
    },
    {
        "id": 791,
        "title": "Black Hawk Down",
        "year": 2001,
        "rating": 7.7,
        "director_id": 30
    },
    {
        "id": 792,
        "title": "Road to Perdition",
        "year": 2002,
        "rating": 7.7,
        "director_id": 57
    },
    {
        "id": 793,
        "title": "Das Experiment",
        "year": 2001,
        "rating": 7.7,
        "director_id": 107
    },
    {
        "id": 794,
        "title": "Billy Elliot",
        "year": 2000,
        "rating": 7.7,
        "director_id": 460
    },
    {
        "id": 795,
        "title": "Hedwig and the Angry Inch",
        "year": 2001,
        "rating": 7.7,
        "director_id": 461
    },
    {
        "id": 796,
        "title": "Ocean's Eleven",
        "year": 2001,
        "rating": 7.7,
        "director_id": 462
    },
    {
        "id": 797,
        "title": "Vampire Hunter D: Bloodlust",
        "year": 2000,
        "rating": 7.7,
        "director_id": 324
    },
    {
        "id": 798,
        "title": "O Brother, Where Art Thou?",
        "year": 2000,
        "rating": 7.7,
        "director_id": 167
    },
    {
        "id": 799,
        "title": "Interstate 60: Episodes of the Road",
        "year": 2002,
        "rating": 7.7,
        "director_id": 463
    },
    {
        "id": 800,
        "title": "South Park: Bigger, Longer & Uncut",
        "year": 1999,
        "rating": 7.7,
        "director_id": 464
    },
    {
        "id": 801,
        "title": "Office Space",
        "year": 1999,
        "rating": 7.7,
        "director_id": 465
    },
    {
        "id": 802,
        "title": "Happiness",
        "year": 1998,
        "rating": 7.7,
        "director_id": 466
    },
    {
        "id": 803,
        "title": "Training Day",
        "year": 2001,
        "rating": 7.7,
        "director_id": 467
    },
    {
        "id": 804,
        "title": "Rushmore",
        "year": 1998,
        "rating": 7.7,
        "director_id": 142
    },
    {
        "id": 805,
        "title": "Abre los ojos",
        "year": 1997,
        "rating": 7.7,
        "director_id": 239
    },
    {
        "id": 806,
        "title": "Being John Malkovich",
        "year": 1999,
        "rating": 7.7,
        "director_id": 218
    },
    {
        "id": 807,
        "title": "As Good as It Gets",
        "year": 1997,
        "rating": 7.7,
        "director_id": 468
    },
    {
        "id": 808,
        "title": "The Fifth Element",
        "year": 1997,
        "rating": 7.7,
        "director_id": 33
    },
    {
        "id": 809,
        "title": "Le dîner de cons",
        "year": 1998,
        "rating": 7.7,
        "director_id": 469
    },
    {
        "id": 810,
        "title": "Donnie Brasco",
        "year": 1997,
        "rating": 7.7,
        "director_id": 456
    },
    {
        "id": 811,
        "title": "Shine",
        "year": 1996,
        "rating": 7.7,
        "director_id": 470
    },
    {
        "id": 812,
        "title": "Primal Fear",
        "year": 1996,
        "rating": 7.7,
        "director_id": 471
    },
    {
        "id": 813,
        "title": "Hamlet",
        "year": 1996,
        "rating": 7.7,
        "director_id": 472
    },
    {
        "id": 814,
        "title": "A Little Princess",
        "year": 1995,
        "rating": 7.7,
        "director_id": 315
    },
    {
        "id": 815,
        "title": "Do lok tin si",
        "year": 1995,
        "rating": 7.7,
        "director_id": 168
    },
    {
        "id": 816,
        "title": "Il postino",
        "year": 1994,
        "rating": 7.7,
        "director_id": 473
    },
    {
        "id": 817,
        "title": "Clerks",
        "year": 1994,
        "rating": 7.7,
        "director_id": 474
    },
    {
        "id": 818,
        "title": "Short Cuts",
        "year": 1993,
        "rating": 7.7,
        "director_id": 475
    },
    {
        "id": 819,
        "title": "Philadelphia",
        "year": 1993,
        "rating": 7.7,
        "director_id": 21
    },
    {
        "id": 820,
        "title": "The Muppet Christmas Carol",
        "year": 1992,
        "rating": 7.7,
        "director_id": 476
    },
    {
        "id": 821,
        "title": "Malcolm X",
        "year": 1992,
        "rating": 7.7,
        "director_id": 261
    },
    {
        "id": 822,
        "title": "The Last of the Mohicans",
        "year": 1992,
        "rating": 7.7,
        "director_id": 112
    },
    {
        "id": 823,
        "title": "Kurenai no buta",
        "year": 1992,
        "rating": 7.7,
        "director_id": 19
    },
    {
        "id": 824,
        "title": "Glengarry Glen Ross",
        "year": 1992,
        "rating": 7.7,
        "director_id": 477
    },
    {
        "id": 825,
        "title": "A Few Good Men",
        "year": 1992,
        "rating": 7.7,
        "director_id": 176
    },
    {
        "id": 826,
        "title": "Fried Green Tomatoes",
        "year": 1991,
        "rating": 7.7,
        "director_id": 478
    },
    {
        "id": 827,
        "title": "Barton Fink",
        "year": 1991,
        "rating": 7.7,
        "director_id": 167
    },
    {
        "id": 828,
        "title": "Miller's Crossing",
        "year": 1990,
        "rating": 7.7,
        "director_id": 167
    },
    {
        "id": 829,
        "title": "Who Framed Roger Rabbit",
        "year": 1988,
        "rating": 7.7,
        "director_id": 9
    },
    {
        "id": 830,
        "title": "Spoorloos",
        "year": 1988,
        "rating": 7.7,
        "director_id": 479
    },
    {
        "id": 831,
        "title": "Withnail & I",
        "year": 1987,
        "rating": 7.7,
        "director_id": 480
    },
    {
        "id": 832,
        "title": "The Last Emperor",
        "year": 1987,
        "rating": 7.7,
        "director_id": 272
    },
    {
        "id": 833,
        "title": "Empire of the Sun",
        "year": 1987,
        "rating": 7.7,
        "director_id": 7
    },
    {
        "id": 834,
        "title": "Der Name der Rose",
        "year": 1986,
        "rating": 7.7,
        "director_id": 481
    },
    {
        "id": 835,
        "title": "Blue Velvet",
        "year": 1986,
        "rating": 7.7,
        "director_id": 182
    },
    {
        "id": 836,
        "title": "The Purple Rose of Cairo",
        "year": 1985,
        "rating": 7.7,
        "director_id": 267
    },
    {
        "id": 837,
        "title": "After Hours",
        "year": 1985,
        "rating": 7.7,
        "director_id": 12
    },
    {
        "id": 838,
        "title": "Zelig",
        "year": 1983,
        "rating": 7.7,
        "director_id": 267
    },
    {
        "id": 839,
        "title": "The Verdict",
        "year": 1982,
        "rating": 7.7,
        "director_id": 4
    },
    {
        "id": 840,
        "title": "Star Trek II: The Wrath of Khan",
        "year": 1982,
        "rating": 7.7,
        "director_id": 482
    },
    {
        "id": 841,
        "title": "First Blood",
        "year": 1982,
        "rating": 7.7,
        "director_id": 483
    },
    {
        "id": 842,
        "title": "Ordinary People",
        "year": 1980,
        "rating": 7.7,
        "director_id": 484
    },
    {
        "id": 843,
        "title": "Airplane!",
        "year": 1980,
        "rating": 7.7,
        "director_id": 485
    },
    {
        "id": 844,
        "title": "Rupan sansei: Kariosutoro no shiro",
        "year": 1979,
        "rating": 7.7,
        "director_id": 19
    },
    {
        "id": 845,
        "title": "Halloween",
        "year": 1978,
        "rating": 7.7,
        "director_id": 179
    },
    {
        "id": 846,
        "title": "Le locataire",
        "year": 1976,
        "rating": 7.7,
        "director_id": 29
    },
    {
        "id": 847,
        "title": "Love and Death",
        "year": 1975,
        "rating": 7.7,
        "director_id": 267
    },
    {
        "id": 848,
        "title": "The Taking of Pelham One Two Three",
        "year": 1974,
        "rating": 7.7,
        "director_id": 486
    },
    {
        "id": 849,
        "title": "Blazing Saddles",
        "year": 1974,
        "rating": 7.7,
        "director_id": 268
    },
    {
        "id": 850,
        "title": "Serpico",
        "year": 1973,
        "rating": 7.7,
        "director_id": 4
    },
    {
        "id": 851,
        "title": "Enter the Dragon",
        "year": 1973,
        "rating": 7.7,
        "director_id": 487
    },
    {
        "id": 852,
        "title": "Deliverance",
        "year": 1972,
        "rating": 7.7,
        "director_id": 488
    },
    {
        "id": 853,
        "title": "The French Connection",
        "year": 1971,
        "rating": 7.7,
        "director_id": 270
    },
    {
        "id": 854,
        "title": "Dirty Harry",
        "year": 1971,
        "rating": 7.7,
        "director_id": 489
    },
    {
        "id": 855,
        "title": "Where Eagles Dare",
        "year": 1968,
        "rating": 7.7,
        "director_id": 490
    },
    {
        "id": 856,
        "title": "The Odd Couple",
        "year": 1968,
        "rating": 7.7,
        "director_id": 491
    },
    {
        "id": 857,
        "title": "The Dirty Dozen",
        "year": 1967,
        "rating": 7.7,
        "director_id": 191
    },
    {
        "id": 858,
        "title": "Belle de jour",
        "year": 1967,
        "rating": 7.7,
        "director_id": 190
    },
    {
        "id": 859,
        "title": "A Man for All Seasons",
        "year": 1966,
        "rating": 7.7,
        "director_id": 337
    },
    {
        "id": 860,
        "title": "Repulsion",
        "year": 1965,
        "rating": 7.7,
        "director_id": 29
    },
    {
        "id": 861,
        "title": "Zulu",
        "year": 1964,
        "rating": 7.7,
        "director_id": 492
    },
    {
        "id": 862,
        "title": "Goldfinger",
        "year": 1964,
        "rating": 7.7,
        "director_id": 493
    },
    {
        "id": 863,
        "title": "The Birds",
        "year": 1963,
        "rating": 7.7,
        "director_id": 38
    },
    {
        "id": 864,
        "title": "Cape Fear",
        "year": 1962,
        "rating": 7.7,
        "director_id": 494
    },
    {
        "id": 865,
        "title": "Peeping Tom",
        "year": 1960,
        "rating": 7.7,
        "director_id": 200
    },
    {
        "id": 866,
        "title": "The Magnificent Seven",
        "year": 1960,
        "rating": 7.7,
        "director_id": 122
    },
    {
        "id": 867,
        "title": "Les yeux sans visage",
        "year": 1960,
        "rating": 7.7,
        "director_id": 495
    },
    {
        "id": 868,
        "title": "Invasion of the Body Snatchers",
        "year": 1956,
        "rating": 7.7,
        "director_id": 489
    },
    {
        "id": 869,
        "title": "Rebel Without a Cause",
        "year": 1955,
        "rating": 7.7,
        "director_id": 282
    },
    {
        "id": 870,
        "title": "The Ladykillers",
        "year": 1955,
        "rating": 7.7,
        "director_id": 280
    },
    {
        "id": 871,
        "title": "Sabrina",
        "year": 1954,
        "rating": 7.7,
        "director_id": 56
    },
    {
        "id": 872,
        "title": "The Quiet Man",
        "year": 1952,
        "rating": 7.7,
        "director_id": 192
    },
    {
        "id": 873,
        "title": "The Day the Earth Stood Still",
        "year": 1951,
        "rating": 7.7,
        "director_id": 274
    },
    {
        "id": 874,
        "title": "The African Queen",
        "year": 1951,
        "rating": 7.7,
        "director_id": 128
    },
    {
        "id": 875,
        "title": "Gilda",
        "year": 1946,
        "rating": 7.7,
        "director_id": 496
    },
    {
        "id": 876,
        "title": "Fantasia",
        "year": 1940,
        "rating": 7.7,
        "director_id": 497
    },
    {
        "id": 877,
        "title": "The Invisible Man",
        "year": 1933,
        "rating": 7.7,
        "director_id": 418
    },
    {
        "id": 878,
        "title": "Dark Waters",
        "year": 2019,
        "rating": 7.6,
        "director_id": 498
    },
    {
        "id": 879,
        "title": "Searching",
        "year": 2018,
        "rating": 7.6,
        "director_id": 499
    },
    {
        "id": 880,
        "title": "Once Upon a Time... in Hollywood",
        "year": 2019,
        "rating": 7.6,
        "director_id": 6
    },
    {
        "id": 881,
        "title": "Nelyubov",
        "year": 2017,
        "rating": 7.6,
        "director_id": 238
    },
    {
        "id": 882,
        "title": "The Florida Project",
        "year": 2017,
        "rating": 7.6,
        "director_id": 500
    },
    {
        "id": 883,
        "title": "Just Mercy",
        "year": 2019,
        "rating": 7.6,
        "director_id": 214
    },
    {
        "id": 884,
        "title": "Gifted",
        "year": 2017,
        "rating": 7.6,
        "director_id": 441
    },
    {
        "id": 885,
        "title": "The Peanut Butter Falcon",
        "year": 2019,
        "rating": 7.6,
        "director_id": 501
    },
    {
        "id": 886,
        "title": "Victoria",
        "year": 2015,
        "rating": 7.6,
        "director_id": 502
    },
    {
        "id": 887,
        "title": "Mustang",
        "year": 2015,
        "rating": 7.6,
        "director_id": 503
    },
    {
        "id": 888,
        "title": "Guardians of the Galaxy Vol. 2",
        "year": 2017,
        "rating": 7.6,
        "director_id": 217
    },
    {
        "id": 889,
        "title": "Baby Driver",
        "year": 2017,
        "rating": 7.6,
        "director_id": 313
    },
    {
        "id": 890,
        "title": "Only the Brave",
        "year": 2017,
        "rating": 7.6,
        "director_id": 504
    },
    {
        "id": 891,
        "title": "Bridge of Spies",
        "year": 2015,
        "rating": 7.6,
        "director_id": 7
    },
    {
        "id": 892,
        "title": "Incredibles 2",
        "year": 2018,
        "rating": 7.6,
        "director_id": 236
    },
    {
        "id": 893,
        "title": "Moana",
        "year": 2016,
        "rating": 7.6,
        "director_id": 258
    },
    {
        "id": 894,
        "title": "Sicario",
        "year": 2015,
        "rating": 7.6,
        "director_id": 63
    },
    {
        "id": 895,
        "title": "Creed",
        "year": 2015,
        "rating": 7.6,
        "director_id": 505
    },
    {
        "id": 896,
        "title": "Leviafan",
        "year": 2014,
        "rating": 7.6,
        "director_id": 238
    },
    {
        "id": 897,
        "title": "Hell or High Water",
        "year": 2016,
        "rating": 7.6,
        "director_id": 506
    },
    {
        "id": 898,
        "title": "Philomena",
        "year": 2013,
        "rating": 7.6,
        "director_id": 507
    },
    {
        "id": 899,
        "title": "Dawn of the Planet of the Apes",
        "year": 2014,
        "rating": 7.6,
        "director_id": 508
    },
    {
        "id": 900,
        "title": "El cuerpo",
        "year": 2012,
        "rating": 7.6,
        "director_id": 134
    },
    {
        "id": 901,
        "title": "Serbuan maut",
        "year": 2011,
        "rating": 7.6,
        "director_id": 215
    },
    {
        "id": 902,
        "title": "End of Watch",
        "year": 2012,
        "rating": 7.6,
        "director_id": 509
    },
    {
        "id": 903,
        "title": "Kari-gurashi no Arietti",
        "year": 2010,
        "rating": 7.6,
        "director_id": 510
    },
    {
        "id": 904,
        "title": "A Star Is Born",
        "year": 2018,
        "rating": 7.6,
        "director_id": 511
    },
    {
        "id": 905,
        "title": "True Grit",
        "year": 2010,
        "rating": 7.6,
        "director_id": 158
    },
    {
        "id": 906,
        "title": "Hævnen",
        "year": 2010,
        "rating": 7.6,
        "director_id": 445
    },
    {
        "id": 907,
        "title": "Despicable Me",
        "year": 2010,
        "rating": 7.6,
        "director_id": 512
    },
    {
        "id": 908,
        "title": "50/50",
        "year": 2011,
        "rating": 7.6,
        "director_id": 513
    },
    {
        "id": 909,
        "title": "Kick-Ass",
        "year": 2010,
        "rating": 7.6,
        "director_id": 429
    },
    {
        "id": 910,
        "title": "Celda 211",
        "year": 2009,
        "rating": 7.6,
        "director_id": 514
    },
    {
        "id": 911,
        "title": "Moneyball",
        "year": 2011,
        "rating": 7.6,
        "director_id": 515
    },
    {
        "id": 912,
        "title": "La piel que habito",
        "year": 2011,
        "rating": 7.6,
        "director_id": 316
    },
    {
        "id": 913,
        "title": "Zombieland",
        "year": 2009,
        "rating": 7.6,
        "director_id": 516
    },
    {
        "id": 914,
        "title": "Die Welle",
        "year": 2008,
        "rating": 7.6,
        "director_id": 517
    },
    {
        "id": 915,
        "title": "Sherlock Holmes",
        "year": 2009,
        "rating": 7.6,
        "director_id": 68
    },
    {
        "id": 916,
        "title": "The Blind Side",
        "year": 2009,
        "rating": 7.6,
        "director_id": 518
    },
    {
        "id": 917,
        "title": "The Visitor",
        "year": 2007,
        "rating": 7.6,
        "director_id": 146
    },
    {
        "id": 918,
        "title": "Seven Pounds",
        "year": 2008,
        "rating": 7.6,
        "director_id": 229
    },
    {
        "id": 919,
        "title": "Eastern Promises",
        "year": 2007,
        "rating": 7.6,
        "director_id": 519
    },
    {
        "id": 920,
        "title": "Stardust",
        "year": 2007,
        "rating": 7.6,
        "director_id": 429
    },
    {
        "id": 921,
        "title": "The Secret of Kells",
        "year": 2009,
        "rating": 7.6,
        "director_id": 147
    },
    {
        "id": 922,
        "title": "Inside Man",
        "year": 2006,
        "rating": 7.6,
        "director_id": 261
    },
    {
        "id": 923,
        "title": "Gone Baby Gone",
        "year": 2007,
        "rating": 7.6,
        "director_id": 440
    },
    {
        "id": 924,
        "title": "La Vie En Rose",
        "year": 2007,
        "rating": 7.6,
        "director_id": 520
    },
    {
        "id": 925,
        "title": "Huo Yuan Jia",
        "year": 2006,
        "rating": 7.6,
        "director_id": 521
    },
    {
        "id": 926,
        "title": "The Illusionist",
        "year": 2006,
        "rating": 7.6,
        "director_id": 522
    },
    {
        "id": 927,
        "title": "Dead Man's Shoes",
        "year": 2004,
        "rating": 7.6,
        "director_id": 443
    },
    {
        "id": 928,
        "title": "Harry Potter and the Half-Blood Prince",
        "year": 2009,
        "rating": 7.6,
        "director_id": 152
    },
    {
        "id": 929,
        "title": "300",
        "year": 2006,
        "rating": 7.6,
        "director_id": 523
    },
    {
        "id": 930,
        "title": "Match Point",
        "year": 2005,
        "rating": 7.6,
        "director_id": 267
    },
    {
        "id": 931,
        "title": "Watchmen",
        "year": 2009,
        "rating": 7.6,
        "director_id": 523
    },
    {
        "id": 932,
        "title": "Lord of War",
        "year": 2005,
        "rating": 7.6,
        "director_id": 391
    },
    {
        "id": 933,
        "title": "Saw",
        "year": 2004,
        "rating": 7.6,
        "director_id": 524
    },
    {
        "id": 934,
        "title": "Synecdoche, New York",
        "year": 2008,
        "rating": 7.6,
        "director_id": 525
    },
    {
        "id": 935,
        "title": "Mysterious Skin",
        "year": 2004,
        "rating": 7.6,
        "director_id": 526
    },
    {
        "id": 936,
        "title": "Jeux d'enfants",
        "year": 2003,
        "rating": 7.6,
        "director_id": 527
    },
    {
        "id": 937,
        "title": "Un long dimanche de fiançailles",
        "year": 2004,
        "rating": 7.6,
        "director_id": 67
    },
    {
        "id": 938,
        "title": "The Station Agent",
        "year": 2003,
        "rating": 7.6,
        "director_id": 146
    },
    {
        "id": 939,
        "title": "21 Grams",
        "year": 2003,
        "rating": 7.6,
        "director_id": 163
    },
    {
        "id": 940,
        "title": "Boksuneun naui geot",
        "year": 2002,
        "rating": 7.6,
        "director_id": 53
    },
    {
        "id": 941,
        "title": "Finding Neverland",
        "year": 2004,
        "rating": 7.6,
        "director_id": 528
    },
    {
        "id": 942,
        "title": "25th Hour",
        "year": 2002,
        "rating": 7.6,
        "director_id": 261
    },
    {
        "id": 943,
        "title": "The Butterfly Effect",
        "year": 2004,
        "rating": 7.6,
        "director_id": 529
    },
    {
        "id": 944,
        "title": "28 Days Later...",
        "year": 2002,
        "rating": 7.6,
        "director_id": 169
    },
    {
        "id": 945,
        "title": "Batoru rowaiaru",
        "year": 2000,
        "rating": 7.6,
        "director_id": 530
    },
    {
        "id": 946,
        "title": "The Royal Tenenbaums",
        "year": 2001,
        "rating": 7.6,
        "director_id": 142
    },
    {
        "id": 947,
        "title": "Y tu mamá también",
        "year": 2001,
        "rating": 7.6,
        "director_id": 315
    },
    {
        "id": 948,
        "title": "Harry Potter and the Sorcerer's Stone",
        "year": 2001,
        "rating": 7.6,
        "director_id": 531
    },
    {
        "id": 949,
        "title": "The Others",
        "year": 2001,
        "rating": 7.6,
        "director_id": 239
    },
    {
        "id": 950,
        "title": "Blow",
        "year": 2001,
        "rating": 7.6,
        "director_id": 532
    },
    {
        "id": 951,
        "title": "Enemy at the Gates",
        "year": 2001,
        "rating": 7.6,
        "director_id": 481
    },
    {
        "id": 952,
        "title": "Minority Report",
        "year": 2002,
        "rating": 7.6,
        "director_id": 7
    },
    {
        "id": 953,
        "title": "The Hurricane",
        "year": 1999,
        "rating": 7.6,
        "director_id": 271
    },
    {
        "id": 954,
        "title": "American Psycho",
        "year": 2000,
        "rating": 7.6,
        "director_id": 533
    },
    {
        "id": 955,
        "title": "Lola rennt",
        "year": 1998,
        "rating": 7.6,
        "director_id": 534
    },
    {
        "id": 956,
        "title": "The Thin Red Line",
        "year": 1998,
        "rating": 7.6,
        "director_id": 409
    },
    {
        "id": 957,
        "title": "Mulan",
        "year": 1998,
        "rating": 7.6,
        "director_id": 535
    },
    {
        "id": 958,
        "title": "Fear and Loathing in Las Vegas",
        "year": 1998,
        "rating": 7.6,
        "director_id": 121
    },
    {
        "id": 959,
        "title": "Funny Games",
        "year": 1997,
        "rating": 7.6,
        "director_id": 301
    },
    {
        "id": 960,
        "title": "Dark City",
        "year": 1998,
        "rating": 7.6,
        "director_id": 536
    },
    {
        "id": 961,
        "title": "Sleepers",
        "year": 1996,
        "rating": 7.6,
        "director_id": 262
    },
    {
        "id": 962,
        "title": "Lost Highway",
        "year": 1997,
        "rating": 7.6,
        "director_id": 182
    },
    {
        "id": 963,
        "title": "Sense and Sensibility",
        "year": 1995,
        "rating": 7.6,
        "director_id": 310
    },
    {
        "id": 964,
        "title": "Die Hard: With a Vengeance",
        "year": 1995,
        "rating": 7.6,
        "director_id": 116
    },
    {
        "id": 965,
        "title": "Dead Man",
        "year": 1995,
        "rating": 7.6,
        "director_id": 399
    },
    {
        "id": 966,
        "title": "The Bridges of Madison County",
        "year": 1995,
        "rating": 7.6,
        "director_id": 114
    },
    {
        "id": 967,
        "title": "Apollo 13",
        "year": 0,
        "rating": 7.6,
        "director_id": 108
    },
    {
        "id": 968,
        "title": "Trois couleurs: Blanc",
        "year": 1994,
        "rating": 7.6,
        "director_id": 172
    },
    {
        "id": 969,
        "title": "Falling Down",
        "year": 1993,
        "rating": 7.6,
        "director_id": 537
    },
    {
        "id": 970,
        "title": "Dazed and Confused",
        "year": 1993,
        "rating": 7.6,
        "director_id": 161
    },
    {
        "id": 971,
        "title": "My Cousin Vinny",
        "year": 1992,
        "rating": 7.6,
        "director_id": 538
    },
    {
        "id": 972,
        "title": "Omohide poro poro",
        "year": 1991,
        "rating": 7.6,
        "director_id": 37
    },
    {
        "id": 973,
        "title": "Delicatessen",
        "year": 1991,
        "rating": 7.6,
        "director_id": 539
    },
    {
        "id": 974,
        "title": "Home Alone",
        "year": 1990,
        "rating": 7.6,
        "director_id": 531
    },
    {
        "id": 975,
        "title": "The Godfather: Part III",
        "year": 1990,
        "rating": 7.6,
        "director_id": 2
    },
    {
        "id": 976,
        "title": "When Harry Met Sally...",
        "year": 1989,
        "rating": 7.6,
        "director_id": 176
    },
    {
        "id": 977,
        "title": "The Little Mermaid",
        "year": 1989,
        "rating": 7.6,
        "director_id": 258
    },
    {
        "id": 978,
        "title": "The Naked Gun: From the Files of Police Squad!",
        "year": 1988,
        "rating": 7.6,
        "director_id": 540
    },
    {
        "id": 979,
        "title": "Planes, Trains & Automobiles",
        "year": 1987,
        "rating": 7.6,
        "director_id": 403
    },
    {
        "id": 980,
        "title": "Lethal Weapon",
        "year": 1987,
        "rating": 7.6,
        "director_id": 404
    },
    {
        "id": 981,
        "title": "Blood Simple",
        "year": 1984,
        "rating": 7.6,
        "director_id": 167
    },
    {
        "id": 982,
        "title": "On Golden Pond",
        "year": 1981,
        "rating": 7.6,
        "director_id": 541
    },
    {
        "id": 983,
        "title": "Mad Max 2",
        "year": 1981,
        "rating": 7.6,
        "director_id": 150
    },
    {
        "id": 984,
        "title": "The Warriors",
        "year": 1979,
        "rating": 7.6,
        "director_id": 542
    },
    {
        "id": 985,
        "title": "The Muppet Movie",
        "year": 1979,
        "rating": 7.6,
        "director_id": 543
    },
    {
        "id": 986,
        "title": "Escape from Alcatraz",
        "year": 1979,
        "rating": 7.6,
        "director_id": 489
    },
    {
        "id": 987,
        "title": "Watership Down",
        "year": 1978,
        "rating": 7.6,
        "director_id": 544
    },
    {
        "id": 988,
        "title": "Midnight Express",
        "year": 1978,
        "rating": 7.6,
        "director_id": 180
    },
    {
        "id": 989,
        "title": "Close Encounters of the Third Kind",
        "year": 1977,
        "rating": 7.6,
        "director_id": 7
    },
    {
        "id": 990,
        "title": "The Long Goodbye",
        "year": 1973,
        "rating": 7.6,
        "director_id": 475
    },
    {
        "id": 991,
        "title": "Giù la testa",
        "year": 1971,
        "rating": 7.6,
        "director_id": 10
    },
    {
        "id": 992,
        "title": "Kelly's Heroes",
        "year": 1970,
        "rating": 7.6,
        "director_id": 490
    },
    {
        "id": 993,
        "title": "The Jungle Book",
        "year": 1967,
        "rating": 7.6,
        "director_id": 545
    },
    {
        "id": 994,
        "title": "Blowup",
        "year": 1966,
        "rating": 7.6,
        "director_id": 334
    },
    {
        "id": 995,
        "title": "A Hard Day's Night",
        "year": 1964,
        "rating": 7.6,
        "director_id": 546
    },
    {
        "id": 996,
        "title": "Breakfast at Tiffany's",
        "year": 1961,
        "rating": 7.6,
        "director_id": 547
    },
    {
        "id": 997,
        "title": "Giant",
        "year": 1956,
        "rating": 7.6,
        "director_id": 548
    },
    {
        "id": 998,
        "title": "From Here to Eternity",
        "year": 1953,
        "rating": 7.6,
        "director_id": 337
    },
    {
        "id": 999,
        "title": "Lifeboat",
        "year": 1944,
        "rating": 7.6,
        "director_id": 38
    },
    {
        "id": 1000,
        "title": "The 39 Steps",
        "year": 1935,
        "rating": 7.6,
        "director_id": 38
    },
    {
        "id": 1001,
        "title": "The Dark Knight",
        "year": 2008,
        "rating": 9.0,
        "director_id": 3
    }
];

export default  movies;