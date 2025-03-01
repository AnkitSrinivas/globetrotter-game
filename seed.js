import dotenv from "dotenv"
import mongoose  from "mongoose";
import Destination from "./models/Destination.js";

dotenv.config();


const destinations = [
    {
        "city": "Paris",
        "country": "France",
        "clues": [
            "This city is famous for its iconic landmarks such as Paris's most recognized monument.",
            "Known for its cultural and historical significance in France."
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
            "This city is famous for its iconic landmarks such as Tokyo's most recognized monument.",
            "Known for its cultural and historical significance in Japan."
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
            "This city is famous for its iconic landmarks such as New York's most recognized monument.",
            "Known for its cultural and historical significance in USA."
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
            "This city is famous for its iconic landmarks such as London's most recognized monument.",
            "Known for its cultural and historical significance in UK."
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
            "This city is famous for its iconic landmarks such as Rome's most recognized monument.",
            "Known for its cultural and historical significance in Italy."
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
            "This city is famous for its iconic landmarks such as Dubai's most recognized monument.",
            "Known for its cultural and historical significance in UAE."
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
            "This city is famous for its iconic landmarks such as Sydney's most recognized monument.",
            "Known for its cultural and historical significance in Australia."
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
            "This city is famous for its iconic landmarks such as Berlin's most recognized monument.",
            "Known for its cultural and historical significance in Germany."
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
            "This city is famous for its iconic landmarks such as Moscow's most recognized monument.",
            "Known for its cultural and historical significance in Russia."
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
            "This city is famous for its iconic landmarks such as Beijing's most recognized monument.",
            "Known for its cultural and historical significance in China."
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
            "This city is famous for its iconic landmarks such as Bangkok's most recognized monument.",
            "Known for its cultural and historical significance in Thailand."
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
            "This city is famous for its iconic landmarks such as Istanbul's most recognized monument.",
            "Known for its cultural and historical significance in Turkey."
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
            "This city is famous for its iconic landmarks such as Rio de Janeiro's most recognized monument.",
            "Known for its cultural and historical significance in Brazil."
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
            "This city is famous for its iconic landmarks such as Cairo's most recognized monument.",
            "Known for its cultural and historical significance in Egypt."
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
            "This city is famous for its iconic landmarks such as Los Angeles's most recognized monument.",
            "Known for its cultural and historical significance in USA."
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
            "This city is famous for its iconic landmarks such as Toronto's most recognized monument.",
            "Known for its cultural and historical significance in Canada."
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
            "This city is famous for its iconic landmarks such as Madrid's most recognized monument.",
            "Known for its cultural and historical significance in Spain."
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
            "This city is famous for its iconic landmarks such as Singapore's most recognized monument.",
            "Known for its cultural and historical significance in Singapore."
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
            "This city is famous for its iconic landmarks such as Mexico City's most recognized monument.",
            "Known for its cultural and historical significance in Mexico."
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
            "This city is famous for its iconic landmarks such as Seoul's most recognized monument.",
            "Known for its cultural and historical significance in South Korea."
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
            "This city is famous for its iconic landmarks such as Athens's most recognized monument.",
            "Known for its cultural and historical significance in Greece."
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
            "This city is famous for its iconic landmarks such as Buenos Aires's most recognized monument.",
            "Known for its cultural and historical significance in Argentina."
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
            "This city is famous for its iconic landmarks such as Mumbai's most recognized monument.",
            "Known for its cultural and historical significance in India."
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
            "This city is famous for its iconic landmarks such as Cape Town's most recognized monument.",
            "Known for its cultural and historical significance in South Africa."
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
            "This city is famous for its iconic landmarks such as Stockholm's most recognized monument.",
            "Known for its cultural and historical significance in Sweden."
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
            "This city is famous for its iconic landmarks such as Amsterdam's most recognized monument.",
            "Known for its cultural and historical significance in Netherlands."
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
            "This city is famous for its iconic landmarks such as Vienna's most recognized monument.",
            "Known for its cultural and historical significance in Austria."
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
            "This city is famous for its iconic landmarks such as Lisbon's most recognized monument.",
            "Known for its cultural and historical significance in Portugal."
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
            "This city is famous for its iconic landmarks such as Prague's most recognized monument.",
            "Known for its cultural and historical significance in Czech Republic."
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
            "This city is famous for its iconic landmarks such as Dublin's most recognized monument.",
            "Known for its cultural and historical significance in Ireland."
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
            "This city is famous for its iconic landmarks such as Hanoi's most recognized monument.",
            "Known for its cultural and historical significance in Vietnam."
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
            "This city is famous for its iconic landmarks such as Jakarta's most recognized monument.",
            "Known for its cultural and historical significance in Indonesia."
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
            "This city is famous for its iconic landmarks such as Oslo's most recognized monument.",
            "Known for its cultural and historical significance in Norway."
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
            "This city is famous for its iconic landmarks such as Brussels's most recognized monument.",
            "Known for its cultural and historical significance in Belgium."
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
            "This city is famous for its iconic landmarks such as Warsaw's most recognized monument.",
            "Known for its cultural and historical significance in Poland."
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
            "This city is famous for its iconic landmarks such as Budapest's most recognized monument.",
            "Known for its cultural and historical significance in Hungary."
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
            "This city is famous for its iconic landmarks such as Manila's most recognized monument.",
            "Known for its cultural and historical significance in Philippines."
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
            "This city is famous for its iconic landmarks such as Lima's most recognized monument.",
            "Known for its cultural and historical significance in Peru."
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
            "This city is famous for its iconic landmarks such as Kuala Lumpur's most recognized monument.",
            "Known for its cultural and historical significance in Malaysia."
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
            "This city is famous for its iconic landmarks such as Bogot\u00e1's most recognized monument.",
            "Known for its cultural and historical significance in Colombia."
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
            "This city is famous for its iconic landmarks such as Helsinki's most recognized monument.",
            "Known for its cultural and historical significance in Finland."
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
            "This city is famous for its iconic landmarks such as Santiago's most recognized monument.",
            "Known for its cultural and historical significance in Chile."
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
            "This city is famous for its iconic landmarks such as Copenhagen's most recognized monument.",
            "Known for its cultural and historical significance in Denmark."
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
            "This city is famous for its iconic landmarks such as Edinburgh's most recognized monument.",
            "Known for its cultural and historical significance in UK."
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
            "This city is famous for its iconic landmarks such as San Francisco's most recognized monument.",
            "Known for its cultural and historical significance in USA."
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
            "This city is famous for its iconic landmarks such as Vancouver's most recognized monument.",
            "Known for its cultural and historical significance in Canada."
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
            "This city is famous for its iconic landmarks such as Zurich's most recognized monument.",
            "Known for its cultural and historical significance in Switzerland."
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
            "This city is famous for its iconic landmarks such as Bucharest's most recognized monument.",
            "Known for its cultural and historical significance in Romania."
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
            "This city is famous for its iconic landmarks such as Bratislava's most recognized monument.",
            "Known for its cultural and historical significance in Slovakia."
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
            "This city is famous for its iconic landmarks such as Casablanca's most recognized monument.",
            "Known for its cultural and historical significance in Morocco."
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
            "This city is famous for its iconic landmarks such as Luxembourg's most recognized monument.",
            "Known for its cultural and historical significance in Luxembourg."
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
            "This city is famous for its iconic landmarks such as Reykjavik's most recognized monument.",
            "Known for its cultural and historical significance in Iceland."
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
            "This city is famous for its iconic landmarks such as Doha's most recognized monument.",
            "Known for its cultural and historical significance in Qatar."
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
            "This city is famous for its iconic landmarks such as Riyadh's most recognized monument.",
            "Known for its cultural and historical significance in Saudi Arabia."
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
            "This city is famous for its iconic landmarks such as Abu Dhabi's most recognized monument.",
            "Known for its cultural and historical significance in UAE."
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
            "This city is famous for its iconic landmarks such as Christchurch's most recognized monument.",
            "Known for its cultural and historical significance in New Zealand."
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
            "This city is famous for its iconic landmarks such as Kyiv's most recognized monument.",
            "Known for its cultural and historical significance in Ukraine."
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
            "This city is famous for its iconic landmarks such as Perth's most recognized monument.",
            "Known for its cultural and historical significance in Australia."
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
            "This city is famous for its iconic landmarks such as Johannesburg's most recognized monument.",
            "Known for its cultural and historical significance in South Africa."
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
            "This city is famous for its iconic landmarks such as Brasilia's most recognized monument.",
            "Known for its cultural and historical significance in Brazil."
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
            "This city is famous for its iconic landmarks such as Antwerp's most recognized monument.",
            "Known for its cultural and historical significance in Belgium."
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
