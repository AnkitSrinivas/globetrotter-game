import dotenv from "dotenv"
import mongoose  from "mongoose";
import Destination from "./models/Destination.js";

dotenv.config();


const destinations = [
    {
        "city": "Paris",
        "country": "France",
        "clues": [
            "Home to a famous tower that sparkles every night.",
            "Known for its world-class art museums and romantic atmosphere."
        ],
        "funFact": [
            "Paris hosts one of the most famous festivals in France.",
            "The local cuisine in Paris is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Paris was once a major trade hub in France.",
            "Paris is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Paris",
            "Budapest",
            "Prague",
            "Oslo"
        ]
    },
    {
        "city": "Tokyo",
        "country": "Japan",
        "clues": [
            "Has the busiest pedestrian crossing in the world.",
            "A paradise for anime, manga, and gaming lovers."
        ],
        "funFact": [
            "Tokyo hosts one of the most famous festivals in Japan.",
            "The local cuisine in Tokyo is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Tokyo was once a major trade hub in Japan.",
            "Tokyo is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Tokyo",
            "Stockholm",
            "London",
            "Perth"
        ]
    },
    {
        "city": "New York",
        "country": "USA",
        "clues": [
            "Home to a green statue gifted by another country.",
            "Famous for its Broadway theaters and towering skyscrapers."
        ],
        "funFact": [
            "New York hosts one of the most famous festivals in USA.",
            "The local cuisine in New York is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? New York was once a major trade hub in USA.",
            "New York is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "New York",
            "Budapest",
            "Cape Town",
            "Vancouver"
        ]
    },
    {
        "city": "London",
        "country": "UK",
        "clues": [
            "This city has a historic clock tower that still chimes every hour.",
            "A place where royal traditions meet modern lifestyle."
        ],
        "funFact": [
            "London hosts one of the most famous festivals in UK.",
            "The local cuisine in London is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? London was once a major trade hub in UK.",
            "London is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "London",
            "Moscow",
            "Brasilia",
            "Prague"
        ]
    },
    {
        "city": "Rome",
        "country": "Italy",
        "clues": [
            "An ancient city filled with ruins from a once-mighty empire.",
            "Famous for a massive amphitheater where gladiators once fought."
        ],
        "funFact": [
            "Rome hosts one of the most famous festivals in Italy.",
            "The local cuisine in Rome is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Rome was once a major trade hub in Italy.",
            "Rome is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Rome",
            "Berlin",
            "Bangkok",
            "Sydney"
        ]
    },
    {
        "city": "Dubai",
        "country": "UAE",
        "clues": [
            "Known for its futuristic skyline and the tallest building in the world.",
            "A desert city that transformed into a global business hub."
        ],
        "funFact": [
            "Dubai hosts one of the most famous festivals in UAE.",
            "The local cuisine in Dubai is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Dubai was once a major trade hub in UAE.",
            "Dubai is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Dubai",
            "Prague",
            "Tokyo",
            "Johannesburg"
        ]
    },
    {
        "city": "Sydney",
        "country": "Australia",
        "clues": [
            "Home to a world-famous opera house with a unique design.",
            "Has beautiful beaches and a massive harbor bridge."
        ],
        "funFact": [
            "Sydney hosts one of the most famous festivals in Australia.",
            "The local cuisine in Sydney is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Sydney was once a major trade hub in Australia.",
            "Sydney is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Sydney",
            "Cape Town",
            "Dublin",
            "Moscow"
        ]
    },
    {
        "city": "Berlin",
        "country": "Germany",
        "clues": [
            "A city once divided by a wall, now a symbol of unity.",
            "Famous for its street art, underground music, and rich history."
        ],
        "funFact": [
            "Berlin hosts one of the most famous festivals in Germany.",
            "The local cuisine in Berlin is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Berlin was once a major trade hub in Germany.",
            "Berlin is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Berlin",
            "Warsaw",
            "Bratislava",
            "Dubai"
        ]
    },
    {
        "city": "Moscow",
        "country": "Russia",
        "clues": [
            "This city has colorful, onion-shaped domes on its most famous cathedral.",
            "The capital of the largest country in the world."
        ],
        "funFact": [
            "Moscow hosts one of the most famous festivals in Russia.",
            "The local cuisine in Moscow is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Moscow was once a major trade hub in Russia.",
            "Moscow is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Moscow",
            "Luxembourg",
            "Bogot\u00e1",
            "Kuala Lumpur"
        ]
    },
    {
        "city": "Beijing",
        "country": "China",
        "clues": [
            "A city known for its Great Wall, an ancient wonder of the world.",
            "The site of a vast imperial palace complex known as the Forbidden City."
        ],
        "funFact": [
            "Beijing hosts one of the most famous festivals in China.",
            "The local cuisine in Beijing is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Beijing was once a major trade hub in China.",
            "Beijing is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Beijing",
            "Moscow",
            "Casablanca",
            "Warsaw"
        ]
    },
    {
        "city": "Bangkok",
        "country": "Thailand",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Bangkok hosts one of the most famous festivals in Thailand.",
            "The local cuisine in Bangkok is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Bangkok was once a major trade hub in Thailand.",
            "Bangkok is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Bangkok",
            "Kyiv",
            "Singapore",
            "Beijing"
        ]
    },
    {
        "city": "Istanbul",
        "country": "Turkey",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Istanbul hosts one of the most famous festivals in Turkey.",
            "The local cuisine in Istanbul is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Istanbul was once a major trade hub in Turkey.",
            "Istanbul is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Istanbul",
            "Vancouver",
            "Buenos Aires",
            "Jakarta"
        ]
    },
    {
        "city": "Rio de Janeiro",
        "country": "Brazil",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Rio de Janeiro hosts one of the most famous festivals in Brazil.",
            "The local cuisine in Rio de Janeiro is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Rio de Janeiro was once a major trade hub in Brazil.",
            "Rio de Janeiro is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Rio de Janeiro",
            "Lima",
            "Vancouver",
            "Dubai"
        ]
    },
    {
        "city": "Cairo",
        "country": "Egypt",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Cairo hosts one of the most famous festivals in Egypt.",
            "The local cuisine in Cairo is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Cairo was once a major trade hub in Egypt.",
            "Cairo is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Cairo",
            "Budapest",
            "Istanbul",
            "Madrid"
        ]
    },
    {
        "city": "Los Angeles",
        "country": "USA",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Los Angeles hosts one of the most famous festivals in USA.",
            "The local cuisine in Los Angeles is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Los Angeles was once a major trade hub in USA.",
            "Los Angeles is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Los Angeles",
            "New York",
            "Antwerp",
            "Luxembourg"
        ]
    },
    {
        "city": "Toronto",
        "country": "Canada",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Toronto hosts one of the most famous festivals in Canada.",
            "The local cuisine in Toronto is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Toronto was once a major trade hub in Canada.",
            "Toronto is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Toronto",
            "Brasilia",
            "Budapest",
            "Luxembourg"
        ]
    },
    {
        "city": "Madrid",
        "country": "Spain",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Madrid hosts one of the most famous festivals in Spain.",
            "The local cuisine in Madrid is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Madrid was once a major trade hub in Spain.",
            "Madrid is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Madrid",
            "Abu Dhabi",
            "Perth",
            "Zurich"
        ]
    },
    {
        "city": "Singapore",
        "country": "Singapore",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Singapore hosts one of the most famous festivals in Singapore.",
            "The local cuisine in Singapore is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Singapore was once a major trade hub in Singapore.",
            "Singapore is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Singapore",
            "Copenhagen",
            "Athens",
            "Christchurch"
        ]
    },
    {
        "city": "Mexico City",
        "country": "Mexico",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Mexico City hosts one of the most famous festivals in Mexico.",
            "The local cuisine in Mexico City is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Mexico City was once a major trade hub in Mexico.",
            "Mexico City is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Mexico City",
            "Hanoi",
            "Buenos Aires",
            "Santiago"
        ]
    },
    {
        "city": "Seoul",
        "country": "South Korea",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Seoul hosts one of the most famous festivals in South Korea.",
            "The local cuisine in Seoul is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Seoul was once a major trade hub in South Korea.",
            "Seoul is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Seoul",
            "Antwerp",
            "Hanoi",
            "Madrid"
        ]
    },
    {
        "city": "Athens",
        "country": "Greece",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Athens hosts one of the most famous festivals in Greece.",
            "The local cuisine in Athens is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Athens was once a major trade hub in Greece.",
            "Athens is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Athens",
            "Amsterdam",
            "Rio de Janeiro",
            "Berlin"
        ]
    },
    {
        "city": "Buenos Aires",
        "country": "Argentina",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Buenos Aires hosts one of the most famous festivals in Argentina.",
            "The local cuisine in Buenos Aires is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Buenos Aires was once a major trade hub in Argentina.",
            "Buenos Aires is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Buenos Aires",
            "Vienna",
            "Brasilia",
            "Reykjavik"
        ]
    },
    {
        "city": "Mumbai",
        "country": "India",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Mumbai hosts one of the most famous festivals in India.",
            "The local cuisine in Mumbai is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Mumbai was once a major trade hub in India.",
            "Mumbai is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Mumbai",
            "Bratislava",
            "Budapest",
            "Edinburgh"
        ]
    },
    {
        "city": "Cape Town",
        "country": "South Africa",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Cape Town hosts one of the most famous festivals in South Africa.",
            "The local cuisine in Cape Town is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Cape Town was once a major trade hub in South Africa.",
            "Cape Town is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Cape Town",
            "Jakarta",
            "Vancouver",
            "Singapore"
        ]
    },
    {
        "city": "Stockholm",
        "country": "Sweden",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Stockholm hosts one of the most famous festivals in Sweden.",
            "The local cuisine in Stockholm is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Stockholm was once a major trade hub in Sweden.",
            "Stockholm is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Stockholm",
            "Reykjavik",
            "Riyadh",
            "Doha"
        ]
    },
    {
        "city": "Amsterdam",
        "country": "Netherlands",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Amsterdam hosts one of the most famous festivals in Netherlands.",
            "The local cuisine in Amsterdam is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Amsterdam was once a major trade hub in Netherlands.",
            "Amsterdam is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Amsterdam",
            "Vienna",
            "Bogot\u00e1",
            "Hanoi"
        ]
    },
    {
        "city": "Vienna",
        "country": "Austria",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Vienna hosts one of the most famous festivals in Austria.",
            "The local cuisine in Vienna is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Vienna was once a major trade hub in Austria.",
            "Vienna is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Vienna",
            "Manila",
            "Los Angeles",
            "Kuala Lumpur"
        ]
    },
    {
        "city": "Lisbon",
        "country": "Portugal",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Lisbon hosts one of the most famous festivals in Portugal.",
            "The local cuisine in Lisbon is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Lisbon was once a major trade hub in Portugal.",
            "Lisbon is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Lisbon",
            "Zurich",
            "Santiago",
            "Warsaw"
        ]
    },
    {
        "city": "Prague",
        "country": "Czech Republic",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Prague hosts one of the most famous festivals in Czech Republic.",
            "The local cuisine in Prague is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Prague was once a major trade hub in Czech Republic.",
            "Prague is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Prague",
            "Athens",
            "Mumbai",
            "Manila"
        ]
    },
    {
        "city": "Dublin",
        "country": "Ireland",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Dublin hosts one of the most famous festivals in Ireland.",
            "The local cuisine in Dublin is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Dublin was once a major trade hub in Ireland.",
            "Dublin is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Dublin",
            "New York",
            "Paris",
            "Toronto"
        ]
    },
    {
        "city": "Hanoi",
        "country": "Vietnam",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Hanoi hosts one of the most famous festivals in Vietnam.",
            "The local cuisine in Hanoi is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Hanoi was once a major trade hub in Vietnam.",
            "Hanoi is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Hanoi",
            "Bogot\u00e1",
            "Abu Dhabi",
            "Reykjavik"
        ]
    },
    {
        "city": "Jakarta",
        "country": "Indonesia",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Jakarta hosts one of the most famous festivals in Indonesia.",
            "The local cuisine in Jakarta is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Jakarta was once a major trade hub in Indonesia.",
            "Jakarta is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Jakarta",
            "Madrid",
            "Mexico City",
            "Bucharest"
        ]
    },
    {
        "city": "Oslo",
        "country": "Norway",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Oslo hosts one of the most famous festivals in Norway.",
            "The local cuisine in Oslo is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Oslo was once a major trade hub in Norway.",
            "Oslo is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Oslo",
            "Luxembourg",
            "Doha",
            "Stockholm"
        ]
    },
    {
        "city": "Brussels",
        "country": "Belgium",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Brussels hosts one of the most famous festivals in Belgium.",
            "The local cuisine in Brussels is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Brussels was once a major trade hub in Belgium.",
            "Brussels is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Brussels",
            "Lisbon",
            "Athens",
            "Dubai"
        ]
    },
    {
        "city": "Warsaw",
        "country": "Poland",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Warsaw hosts one of the most famous festivals in Poland.",
            "The local cuisine in Warsaw is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Warsaw was once a major trade hub in Poland.",
            "Warsaw is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Warsaw",
            "Riyadh",
            "Bangkok",
            "Tokyo"
        ]
    },
    {
        "city": "Budapest",
        "country": "Hungary",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Budapest hosts one of the most famous festivals in Hungary.",
            "The local cuisine in Budapest is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Budapest was once a major trade hub in Hungary.",
            "Budapest is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Budapest",
            "Casablanca",
            "Perth",
            "Bucharest"
        ]
    },
    {
        "city": "Manila",
        "country": "Philippines",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Manila hosts one of the most famous festivals in Philippines.",
            "The local cuisine in Manila is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Manila was once a major trade hub in Philippines.",
            "Manila is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Manila",
            "Los Angeles",
            "Mexico City",
            "Cairo"
        ]
    },
    {
        "city": "Lima",
        "country": "Peru",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Lima hosts one of the most famous festivals in Peru.",
            "The local cuisine in Lima is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Lima was once a major trade hub in Peru.",
            "Lima is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Lima",
            "Budapest",
            "Reykjavik",
            "Bucharest"
        ]
    },
    {
        "city": "Kuala Lumpur",
        "country": "Malaysia",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Kuala Lumpur hosts one of the most famous festivals in Malaysia.",
            "The local cuisine in Kuala Lumpur is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Kuala Lumpur was once a major trade hub in Malaysia.",
            "Kuala Lumpur is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Kuala Lumpur",
            "Warsaw",
            "Buenos Aires",
            "Edinburgh"
        ]
    },
    {
        "city": "Bogot\u00e1",
        "country": "Colombia",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Bogot\u00e1 hosts one of the most famous festivals in Colombia.",
            "The local cuisine in Bogot\u00e1 is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Bogot\u00e1 was once a major trade hub in Colombia.",
            "Bogot\u00e1 is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Bogot\u00e1",
            "Rio de Janeiro",
            "Buenos Aires",
            "Toronto"
        ]
    },
    {
        "city": "Helsinki",
        "country": "Finland",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Helsinki hosts one of the most famous festivals in Finland.",
            "The local cuisine in Helsinki is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Helsinki was once a major trade hub in Finland.",
            "Helsinki is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Helsinki",
            "Sydney",
            "Madrid",
            "Hanoi"
        ]
    },
    {
        "city": "Santiago",
        "country": "Chile",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Santiago hosts one of the most famous festivals in Chile.",
            "The local cuisine in Santiago is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Santiago was once a major trade hub in Chile.",
            "Santiago is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Santiago",
            "Abu Dhabi",
            "San Francisco",
            "Seoul"
        ]
    },
    {
        "city": "Copenhagen",
        "country": "Denmark",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Copenhagen hosts one of the most famous festivals in Denmark.",
            "The local cuisine in Copenhagen is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Copenhagen was once a major trade hub in Denmark.",
            "Copenhagen is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Copenhagen",
            "New York",
            "Manila",
            "Cairo"
        ]
    },
    {
        "city": "Edinburgh",
        "country": "UK",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Edinburgh hosts one of the most famous festivals in UK.",
            "The local cuisine in Edinburgh is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Edinburgh was once a major trade hub in UK.",
            "Edinburgh is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Edinburgh",
            "Luxembourg",
            "Christchurch",
            "Rio de Janeiro"
        ]
    },
    {
        "city": "San Francisco",
        "country": "USA",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "San Francisco hosts one of the most famous festivals in USA.",
            "The local cuisine in San Francisco is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? San Francisco was once a major trade hub in USA.",
            "San Francisco is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "San Francisco",
            "Brasilia",
            "Rio de Janeiro",
            "London"
        ]
    },
    {
        "city": "Vancouver",
        "country": "Canada",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Vancouver hosts one of the most famous festivals in Canada.",
            "The local cuisine in Vancouver is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Vancouver was once a major trade hub in Canada.",
            "Vancouver is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Vancouver",
            "Berlin",
            "Rio de Janeiro",
            "London"
        ]
    },
    {
        "city": "Zurich",
        "country": "Switzerland",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Zurich hosts one of the most famous festivals in Switzerland.",
            "The local cuisine in Zurich is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Zurich was once a major trade hub in Switzerland.",
            "Zurich is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Zurich",
            "Jakarta",
            "Brussels",
            "Seoul"
        ]
    },
    {
        "city": "Bucharest",
        "country": "Romania",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Bucharest hosts one of the most famous festivals in Romania.",
            "The local cuisine in Bucharest is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Bucharest was once a major trade hub in Romania.",
            "Bucharest is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Bucharest",
            "Dublin",
            "Edinburgh",
            "Istanbul"
        ]
    },
    {
        "city": "Bratislava",
        "country": "Slovakia",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Bratislava hosts one of the most famous festivals in Slovakia.",
            "The local cuisine in Bratislava is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Bratislava was once a major trade hub in Slovakia.",
            "Bratislava is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Bratislava",
            "Istanbul",
            "Antwerp",
            "Brasilia"
        ]
    },
    {
        "city": "Casablanca",
        "country": "Morocco",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Casablanca hosts one of the most famous festivals in Morocco.",
            "The local cuisine in Casablanca is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Casablanca was once a major trade hub in Morocco.",
            "Casablanca is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Casablanca",
            "Amsterdam",
            "Brasilia",
            "London"
        ]
    },
    {
        "city": "Luxembourg",
        "country": "Luxembourg",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Luxembourg hosts one of the most famous festivals in Luxembourg.",
            "The local cuisine in Luxembourg is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Luxembourg was once a major trade hub in Luxembourg.",
            "Luxembourg is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Luxembourg",
            "Berlin",
            "Rio de Janeiro",
            "Madrid"
        ]
    },
    {
        "city": "Reykjavik",
        "country": "Iceland",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Reykjavik hosts one of the most famous festivals in Iceland.",
            "The local cuisine in Reykjavik is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Reykjavik was once a major trade hub in Iceland.",
            "Reykjavik is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Reykjavik",
            "Kuala Lumpur",
            "London",
            "Casablanca"
        ]
    },
    {
        "city": "Doha",
        "country": "Qatar",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Doha hosts one of the most famous festivals in Qatar.",
            "The local cuisine in Doha is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Doha was once a major trade hub in Qatar.",
            "Doha is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Doha",
            "Mexico City",
            "Paris",
            "Bratislava"
        ]
    },
    {
        "city": "Riyadh",
        "country": "Saudi Arabia",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Riyadh hosts one of the most famous festivals in Saudi Arabia.",
            "The local cuisine in Riyadh is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Riyadh was once a major trade hub in Saudi Arabia.",
            "Riyadh is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Riyadh",
            "Jakarta",
            "Athens",
            "Lima"
        ]
    },
    {
        "city": "Abu Dhabi",
        "country": "UAE",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Abu Dhabi hosts one of the most famous festivals in UAE.",
            "The local cuisine in Abu Dhabi is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Abu Dhabi was once a major trade hub in UAE.",
            "Abu Dhabi is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Abu Dhabi",
            "Singapore",
            "Cairo",
            "Riyadh"
        ]
    },
    {
        "city": "Christchurch",
        "country": "New Zealand",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Christchurch hosts one of the most famous festivals in New Zealand.",
            "The local cuisine in Christchurch is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Christchurch was once a major trade hub in New Zealand.",
            "Christchurch is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Christchurch",
            "Dublin",
            "Bogot\u00e1",
            "Tokyo"
        ]
    },
    {
        "city": "Kyiv",
        "country": "Ukraine",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Kyiv hosts one of the most famous festivals in Ukraine.",
            "The local cuisine in Kyiv is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Kyiv was once a major trade hub in Ukraine.",
            "Kyiv is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Kyiv",
            "Istanbul",
            "Singapore",
            "Warsaw"
        ]
    },
    {
        "city": "Perth",
        "country": "Australia",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Perth hosts one of the most famous festivals in Australia.",
            "The local cuisine in Perth is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Perth was once a major trade hub in Australia.",
            "Perth is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Perth",
            "Bucharest",
            "Copenhagen",
            "Helsinki"
        ]
    },
    {
        "city": "Johannesburg",
        "country": "South Africa",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Johannesburg hosts one of the most famous festivals in South Africa.",
            "The local cuisine in Johannesburg is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Johannesburg was once a major trade hub in South Africa.",
            "Johannesburg is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Johannesburg",
            "Mexico City",
            "Perth",
            "Reykjavik"
        ]
    },
    {
        "city": "Brasilia",
        "country": "Brazil",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Brasilia hosts one of the most famous festivals in Brazil.",
            "The local cuisine in Brasilia is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Brasilia was once a major trade hub in Brazil.",
            "Brasilia is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Brasilia",
            "Istanbul",
            "San Francisco",
            "Amsterdam"
        ]
    },
    {
        "city": "Antwerp",
        "country": "Belgium",
        "clues": [
            "This place has a rich cultural and historical background.",
            "Known for its unique landmarks and famous traditions."
        ],
        "funFact": [
            "Antwerp hosts one of the most famous festivals in Belgium.",
            "The local cuisine in Antwerp is a must-try for food lovers!"
        ],
        "trivia": [
            "Did you know? Antwerp was once a major trade hub in Belgium.",
            "Antwerp is known for its vibrant nightlife and street markets."
        ],
        "options": [
            "Antwerp",
            "Warsaw",
            "Cape Town",
            "Helsinki"
        ]
    }
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Connected to MongoDB. Seeding data...");

    await Destination.deleteMany({});
    await Destination.insertMany(destinations);

    console.log("Data seeded successfully!");
    mongoose.connection.close();
  })
  .catch((err) => console.error("Error seeding data:", err));
