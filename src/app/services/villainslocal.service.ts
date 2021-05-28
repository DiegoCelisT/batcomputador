import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VillainslocalService {

  Viloes: any = [
    { "response": "success", "id": "405", "name": "Lex Luthor", "powerstats": { "intelligence": "100", "strength": "53", "speed": "25", "durability": "65", "power": "68", "combat": "70" }, "biography": { "full-name": "Lex Luthor", "alter-egos": "No alter egos found.", "aliases": [ "-" ], "place-of-birth": "-", "first-appearance": "Action Comics #23", "publisher": "DC Comics", "alignment": "bad" }, "appearance": { "gender": "Male", "race": "Humano", "height": [ "6'2'", "188 cm" ], "weight": [ "210 lb", "95 kg" ], "eye-color": "Green", "hair-color": "No Hair" }, "work": { "occupation": "Owner of LexCorp", "base": "-" }, "connections": { "group-affiliation": "Injustice Gang, Injustice League, Society of Supervillains", "relatives": "Casey and Elaine Griggs (foster parents, deceased),\nLena Luthor (sister pre-Crisis; daughter post-Crisis),\nElizabeth Perske (ex-wife),\nPerry J. White Jr. (son, deceased),\nContessa Erica Alexandra del Portenza (wife, assumed deceased)" }, "image": { "url": "https://www.superherodb.com/pictures2/portraits/10/100/727.jpg" } }
    ,
    { "response": "success", "id": "216", "name": "Deathstroke", "powerstats": { "intelligence": "75", "strength": "30", "speed": "35", "durability": "100", "power": "47", "combat": "90" }, "biography": { "full-name": "Slade Joseph Wilson", "alter-egos": "No alter egos found.", "aliases": [ "Slade Wilson", "Deathstroke the Terminator", "Batman" ], "place-of-birth": "-", "first-appearance": "New Teen Titans #2 (December, 1980)", "publisher": "DC Comics", "alignment": "neutral" }, "appearance": { "gender": "Male", "race": "Humano", "height": [ "6'4", "193 cm" ], "weight": [ "225 lb", "101 kg" ], "eye-color": "Blue", "hair-color": "White" }, "work": { "occupation": "Mercenary; Former Soldier, Big-Game Hunter", "base": "The Labyrinth (exact location is currently unknown)" }, "connections": { "group-affiliation": "The Society, Titans; Formerly Tartarus, The Injustice League", "relatives": "Wade LaFarge (Ravager III, half-brother, deceased), Adeline Kane (ex-wife, deceased), Grant Wilson (Ravager I, son, deceased), Joseph Wilson (Jericho, son), Rose Wilson (Ravager IV, daughter)" }, "image": { "url": "https://www.superherodb.com/pictures2/portraits/10/100/672.jpg" } }
    ,
    { "response": "success", "id": "204", "name": "Darkseid", "powerstats": { "intelligence": "88", "strength": "100", "speed": "83", "durability": "100", "power": "100", "combat": "95" }, "biography": { "full-name": "Uxas", "alter-egos": "No alter egos found.", "aliases": [ "Dark God" ], "place-of-birth": "-", "first-appearance": "Superman's Pal Jimmy Olsen #134 (November 1970)", "publisher": "DC Comics", "alignment": "bad" }, "appearance": { "gender": "Male", "race": "Novo Deus", "height": [ "8'9", "267 cm" ], "weight": [ "1815 lb", "817 kg" ], "eye-color": "Red", "hair-color": "No Hair" }, "work": { "occupation": "Dictator of Apokolips", "base": "-" }, "connections": { "group-affiliation": "New Gods of Apokolips(ruler), Secret Society of Supervillains", "relatives": "Zonuz (father), Izaya (brother), Avia (sister, deceased), Grail (daughter), Kalibak (son), Orion (son), Deathspawn (son), Scot (nephew/adopted son)" }, "image": { "url": "https://www.superherodb.com/pictures2/portraits/10/100/668.jpg" } }
    ,
    { "response": "success", "id": "675", "name": "Trigon", "powerstats": { "intelligence": "85", "strength": "100", "speed": "96", "durability": "100", "power": "100", "combat": "60" }, "biography": { "full-name": "Trigon", "alter-egos": "No alter egos found.", "aliases": [ "Lucifer", "Satan,The Devil", "Lord Trigon", "Master Trigon", "King Trigon", "Conqueror of Worlds", "Ruler of the Five Under Realms" ], "place-of-birth": "-", "first-appearance": "New Teen Titans #5 (March, 1981)", "publisher": "DC Comics", "alignment": "bad" }, "appearance": { "gender": "Male", "race": "Deus / Eterno", "height": [ "-", "Variável" ], "weight": [ "- lb", "Variável" ], "eye-color": "Yellow", "hair-color": "Black" }, "work": { "occupation": "-", "base": "-" }, "connections": { "group-affiliation": "-", "relatives": "Belial (son), Ruskoff (son), Suge (son), Raven (daughter)" }, "image": { "url": "https://www.superherodb.com/pictures2/portraits/10/100/10703.jpg" } }
    ,
    { "response": "success", "id": "413", "name": "Lobo", "powerstats": { "intelligence": "94", "strength": "100", "speed": "54", "durability": "100", "power": "100", "combat": "85" }, "biography": { "full-name": "Lobo", "alter-egos": "No alter egos found.", "aliases": [ "The Main Man", "The 'Bo", "Master Frag", "Mister Machete", "Popebo; He-Who-Devours-Your-Entrails-And-Thoroughly-Enjoys-It" ], "place-of-birth": "-", "first-appearance": "Omega Men # 3", "publisher": "DC Comics", "alignment": "neutral" }, "appearance": { "gender": "Male", "race": "Czarniano", "height": [ "7'6", "229 cm" ], "weight": [ "640 lb", "288 kg" ], "eye-color": "Red", "hair-color": "Black" }, "work": { "occupation": "Assassin, Bounty Hunter, Priest", "base": "Mobile throughout several galaxies" }, "connections": { "group-affiliation": "Formerly LEGION, Young Justice; First Celestial Church of the Triple Fish-God", "relatives": "Slobo (clone)" }, "image": { "url": "https://www.superherodb.com/pictures2/portraits/10/100/1127.jpg" } }
    ,
    { "response": "success", "id": "601", "name": "Sinestro", "powerstats": { "intelligence": "75", "strength": "85", "speed": "53", "durability": "64", "power": "100", "combat": "55" }, "biography": { "full-name": "Thaal Sinestro", "alter-egos": "No alter egos found.", "aliases": [ "Green Lantern", "White Lantern", "Yellow Lantern", "Parallax", "Indigo Lantern" ], "place-of-birth": "Korugar City, Korugar", "first-appearance": "Green Lantern Vol 2 #7", "publisher": "DC Comics", "alignment": "neutral" }, "appearance": { "gender": "Male", "race": "Korugaran", "height": [ "6'7", "201 cm" ], "weight": [ "205 lb", "92 kg" ], "eye-color": "Black", "hair-color": "Black" }, "work": { "occupation": "-", "base": "Ranx, Warworld. formerly New Korugar, Qward, Oa" }, "connections": { "group-affiliation": "Sinestro Corps, formerly Green Lantern Corps, Secret Society, Injustice League", "relatives": "Witch Queen (sister, pre-Crisis), Soranik Natu (daughter), Arin Sur (wife, deceased), Abin Sur (brother-in-law, deceased), Amon Sur (nephew)" }, "image": { "url": "https://www.superherodb.com/pictures2/portraits/10/100/781.jpg" } }
    ,
    { "response": "success", "id": "95", "name": "Black Adam", "powerstats": { "intelligence": "88", "strength": "100", "speed": "92", "durability": "100", "power": "100", "combat": "56" }, "biography": { "full-name": "Teth-Adam", "alter-egos": "No alter egos found.", "aliases": [ "Hassan Bari", "Theo Adam", "Mighty Adam", "Khem-Adam" ], "place-of-birth": "Kahndaq, Egypt", "first-appearance": "Marvel Family #1 (December, 1945)", "publisher": "DC Comics", "alignment": "bad" }, "appearance": { "gender": "Male", "race": "desconhecido", "height": [ "6'3", "191 cm" ], "weight": [ "250 lb", "113 kg" ], "eye-color": "Brown", "hair-color": "Black" }, "work": { "occupation": "-", "base": "Mobile; Formerly Kahndaq; Fawcett City; New York City" }, "connections": { "group-affiliation": "None; Formerly the Black Marvel Family, Society of Villains, Injustice Society, Justice Society of America", "relatives": "Shiruta (wife, deceased), Gon and Hurut (sons, deceased) Theo Adam (descendant, currently in control of his body), Sarah Primm (descendant, Theo's sister), Adrianna Tomaz (wife. deceased), Amon Tomaz (brother-in-law, deceased)" }, "image": { "url": "https://www.superherodb.com/pictures2/portraits/10/100/643.jpg" } }
    ,
    { "response": "success", "id": "642", "name": "Superboy-Prime", "powerstats": { "intelligence": "94", "strength": "100", "speed": "100", "durability": "100", "power": "100", "combat": "85" }, "biography": { "full-name": "Kal-El", "alter-egos": "No alter egos found.", "aliases": [ "Superman-Prime; Prime; Superboy; Clark Kent; Clarkie; Time Trapper" ], "place-of-birth": "Krypton (Earth-Prime)", "first-appearance": "DC Comics Presents #87 (November, 1985)", "publisher": "DC Comics", "alignment": "bad" }, "appearance": { "gender": "Male", "race": "Kryptoniano", "height": [ "5'11", "180 cm" ], "weight": [ "170 lb", "77 kg" ], "eye-color": "Blue", "hair-color": "Black / Blue" }, "work": { "occupation": "-", "base": "currently a recreation of Earth-Prime, formerly Qward, Anti-Matter Universe." }, "connections": { "group-affiliation": "Formerly Black Lantern Corps, Legion of Super-Villains, Sinestro Corps", "relatives": "Jor-El (father; deceased); Lara (mother, deceased); Jerry Kent (adoptive father); Naomi Kent (adoptive mother)" }, "image": { "url": "https://www.superherodb.com/pictures2/portraits/10/100/1535.jpg" } }
    ,
    { "response": "success", "id": "242", "name": "Enchantress", "powerstats": { "intelligence": "63", "strength": "14", "speed": "25", "durability": "60", "power": "100", "combat": "40" }, "biography": { "full-name": "June Moone", "alter-egos": "No alter egos found.", "aliases": [ "Anita Soulfeeda", "Soulsinger" ], "place-of-birth": "-", "first-appearance": "Strange Adventures #187", "publisher": "DC Comics", "alignment": "good" }, "appearance": { "gender": "Female", "race": "Humana", "height": [ "5'6", "168 cm" ], "weight": [ "126 lb", "57 kg" ], "eye-color": "Blue", "hair-color": "Blond" }, "work": { "occupation": "Artist; Magician", "base": "-" }, "connections": { "group-affiliation": "Forgotten Villains, Sentinels of Magic, Shadowpact, Suicide Squad", "relatives": "-" }, "image": { "url": "https://www.superherodb.com/pictures2/portraits/10/100/687.jpg" } }
    ,
    { "response": "success", "id": "32", "name": "Anti-Monitor", "powerstats": { "intelligence": "88", "strength": "100", "speed": "90", "durability": "100", "power": "100", "combat": "99" }, "biography": { "full-name": "Mobius", "alter-egos": "No alter egos found.", "aliases": [ "Monitor", "Mobius" ], "place-of-birth": "Moon of Qward", "first-appearance": "Crisis on Infinite Earths #4", "publisher": "DC Comics", "alignment": "bad" }, "appearance": { "gender": "Male", "race": "Deus / Eterno", "height": [ "200", "61 m" ], "weight": [ "- lb", "desconhecido" ], "eye-color": "Yellow", "hair-color": "No Hair" }, "work": { "occupation": "-", "base": "Qward, Antimatter Universe" }, "connections": { "group-affiliation": "Sinestro Corps, Weaponers of Qward, Thunderers of Qward, Shadow Demons", "relatives": "Monitor (\"brother\"), The Monitors" }, "image": { "url": "https://www.superherodb.com/pictures2/portraits/10/100/1292.jpg" } }
    ,
    { "response": "success", "id": "278", "name": "General Zod", "powerstats": { "intelligence": "94", "strength": "100", "speed": "96", "durability": "100", "power": "100", "combat": "95" }, "biography": { "full-name": "Dru-Zod", "alter-egos": "No alter egos found.", "aliases": [ "Dru-Zod (possible first name)" ], "place-of-birth": "Krypton", "first-appearance": "Action Comics #845", "publisher": "DC Comics", "alignment": "bad" }, "appearance": { "gender": "Male", "race": "Kryptoniano", "height": [ "-", "190.5 cm" ], "weight": [ "- lb", "97.5 kg" ], "eye-color": "Black", "hair-color": "Black" }, "work": { "occupation": "-", "base": "Formerly Krypton; formerly the Phantom Zone; currently Earth" }, "connections": { "group-affiliation": "Phantom Zone criminals; former member of the Kryptonian Defense Council", "relatives": "Ursa (mate/wife); Lor-Zod (son); Admiral Zod (possible ancestor)" }, "image": { "url": "https://www.superherodb.com/pictures2/portraits/10/100/837.jpg" } }
    ,
    { "response": "success", "id": "230", "name": "Doomsday", "powerstats": { "intelligence": "75", "strength": "100", "speed": "67", "durability": "100", "power": "100", "combat": "90" }, "biography": { "full-name": "Doomsday", "alter-egos": "No alter egos found.", "aliases": [ "The Ultimate Lifeform" ], "place-of-birth": "Krypton", "first-appearance": "Superman: The Man of Steel #17 (Nov 1992)", "publisher": "DC Comics", "alignment": "bad" }, "appearance": { "gender": "Male", "race": "Alien", "height": [ "8'0", "244 cm" ], "weight": [ "915 lb", "412 kg" ], "eye-color": "Red", "hair-color": "White" }, "work": { "occupation": "Destroyer", "base": "-" }, "connections": { "group-affiliation": "Secret Society of Super Villains, Suicide Squad, Apokolips", "relatives": "-" }, "image": { "url": "https://www.superherodb.com/pictures2/portraits/10/100/679.jpg" } }
    ,
    { "response": "success", "id": "136", "name": "Brainiac", "powerstats": { "intelligence": "100", "strength": "95", "speed": "63", "durability": "90", "power": "60", "combat": "75" }, "biography": { "full-name": "Vril Dox", "alter-egos": "No alter egos found.", "aliases": [ "Milton Fine" ], "place-of-birth": "-", "first-appearance": "Action Comics #242 (July 1958)", "publisher": "DC Comics", "alignment": "bad" }, "appearance": { "gender": "Male", "race": "Andróide", "height": [ "6'6", "198 cm" ], "weight": [ "300 lb", "135 kg" ], "eye-color": "Green", "hair-color": "No Hair" }, "work": { "occupation": "-", "base": "-" }, "connections": { "group-affiliation": "Lex Luthor", "relatives": "Vril Dox II (son), Brainiac 5 (descendant)" }, "image": { "url": "https://www.superherodb.com/pictures2/portraits/10/100/648.jpg" } }
    ,
    { "response": "success", "id": "528", "name": "Reverse Flash", "powerstats": { "intelligence": "94", "strength": "25", "speed": "100", "durability": "45", "power": "83", "combat": "30" }, "biography": { "full-name": "Eobard Thawne", "alter-egos": "No alter egos found.", "aliases": [ "Reverse Flash", "Black Flash", "Adrian Zoom", "Mister Zyx" ], "place-of-birth": "-", "first-appearance": "Flash #139 (September, 1963)", "publisher": "DC Comics", "alignment": "bad" }, "appearance": { "gender": "Male", "race": "Humano", "height": [ "5'11", "180 cm" ], "weight": [ "179 lb", "81 kg" ], "eye-color": "Blue", "hair-color": "Strawberry Blond" }, "work": { "occupation": "-", "base": "Central Cityplex, 25th Century" }, "connections": { "group-affiliation": "Formerly Secret Society of Super-Villains, Black Lantern Corps, White Lantern Corps", "relatives": "Robern Thawne (brother), Malcolm Thawne (Cobalt Blue) (distant ancestor), President Thawne, Meloni Thawne, Bart Allen, Owen Mercer (descendants) - see Allen Family for complete family tree" }, "image": { "url": "https://www.superherodb.com/pictures2/portraits/10/100/766.jpg" } }
    ,
    { "response": "success", "id": "195", "name": "Cyborg Superman", "powerstats": { "intelligence": "75", "strength": "93", "speed": "92", "durability": "100", "power": "100", "combat": "80" }, "biography": { "full-name": "Henry Henshaw", "alter-egos": "No alter egos found.", "aliases": [ "Grandmaster of the Manhunters", "Herald of the Anti-Monitor", "Alpha-Prime of the Alpha Lanterns" ], "place-of-birth": "-", "first-appearance": "Adventures of Superman #466 (May, 1990)", "publisher": "DC Comics", "alignment": "bad" }, "appearance": { "gender": "Male", "race": "Cyborg", "height": [ "-", "191 cm" ], "weight": [ "- lb", "227 kg" ], "eye-color": "Blue", "hair-color": "Black" }, "work": { "occupation": "-", "base": "Warworld, Qward, Antimatter Universe, formerly Biot, Sector 3601" }, "connections": { "group-affiliation": "Alpha Lantern Corps, Manhunters, Warworld, formerly Apokolips and Sinestro Corps", "relatives": "Terri Henshaw (wife, deceased)" }, "image": { "url": "https://www.superherodb.com/pictures2/portraits/10/100/667.jpg" } }
    ,
    { "response": "success", "id": "370", "name": "Joker", "powerstats": { "intelligence": "100", "strength": "10", "speed": "12", "durability": "60", "power": "43", "combat": "70" }, "biography": { "full-name": "Jack Napier", "alter-egos": "No alter egos found.", "aliases": [ "Red Hood I", "Clown Prince of Crime", "Harlequin of Hate", "Jack Napier", "Joe Kerr", "Mr. J" ], "place-of-birth": "-", "first-appearance": "Batman #1 (Spring 1940)", "publisher": "DC Comics", "alignment": "bad" }, "appearance": { "gender": "Male", "race": "Humano", "height": [ "6'5", "196 cm" ], "weight": [ "192 lb", "86 kg" ], "eye-color": "Green", "hair-color": "Green" }, "work": { "occupation": "-", "base": "Arkham Asylum, Gotham City; Ha-Hacienda" }, "connections": { "group-affiliation": "Black Glove, Injustice Gang, Injustice League, Joker League of Anarchy", "relatives": "Jeannie (wife, deceased); Unborn son (deceased); Melvin Reipan (cousin, deceased)" }, "image": { "url": "https://www.superherodb.com/pictures2/portraits/10/100/719.jpg" } }
    ,
    { "response": "success", "id": "387", "name": "Killer Frost", "powerstats": { "intelligence": "88", "strength": "10", "speed": "13", "durability": "35", "power": "59", "combat": "30" }, "biography": { "full-name": "Caitlin Snow", "alter-egos": "No alter egos found.", "aliases": [ "-" ], "place-of-birth": "-", "first-appearance": "Fury of Firestorm: The Nuclear Men #19", "publisher": "DC Comics", "alignment": "bad" }, "appearance": { "gender": "Female", "race": "Humana", "height": [ "-", "162 cm" ], "weight": [ "- lb", "54 kg" ], "eye-color": "Blue", "hair-color": "Blond" }, "work": { "occupation": "Scientist", "base": "Pittsburgh" }, "connections": { "group-affiliation": "-", "relatives": "-" }, "image": { "url": "https://www.superherodb.com/pictures2/portraits/10/100/10508.jpg" } }
    ,
    { "response": "success", "id": "390", "name": "King Shark", "powerstats": { "intelligence": "50", "strength": "88", "speed": "50", "durability": "90", "power": "86", "combat": "40" }, "biography": { "full-name": "Nanaue", "alter-egos": "No alter egos found.", "aliases": [ "-" ], "place-of-birth": "-", "first-appearance": "Superboy Vol 4 #0", "publisher": "DC Comics", "alignment": "bad" }, "appearance": { "gender": "Male", "race": "Animal", "height": [ "-", "218 cm" ], "weight": [ "- lb", "172 kg" ], "eye-color": "Black", "hair-color": "No Hair" }, "work": { "occupation": "Professional Criminal", "base": "Honolulu, Hawaii" }, "connections": { "group-affiliation": "-", "relatives": "-" }, "image": { "url": "https://www.superherodb.com/pictures2/portraits/10/100/10512.jpg" } }
    ,
    { "response": "success", "id": "522", "name": "Poison Ivy", "powerstats": { "intelligence": "81", "strength": "14", "speed": "21", "durability": "40", "power": "100", "combat": "40" }, "biography": { "full-name": "Pamela Isley", "alter-egos": "No alter egos found.", "aliases": [ "-" ], "place-of-birth": "Seattle, Washington", "first-appearance": "Batman #181 (June 1966)", "publisher": "DC Comics", "alignment": "bad" }, "appearance": { "gender": "Female", "race": "Humana", "height": [ "5'6", "168 cm" ], "weight": [ "110 lb", "50 kg" ], "eye-color": "Green", "hair-color": "Red" }, "work": { "occupation": "Criminal, Botanist", "base": "Gotham City" }, "connections": { "group-affiliation": "Formerly Injustice Gang, Suicide Squad, Harley Quinn, Secret Society of Super Villains, Joker League of Anarchy", "relatives": "-" }, "image": { "url": "https://www.superherodb.com/pictures2/portraits/10/100/757.jpg" } }
    ,
    { "response": "success", "id": "445", "name": "Metallo", "powerstats": { "intelligence": "75", "strength": "53", "speed": "23", "durability": "95", "power": "86", "combat": "64" }, "biography": { "full-name": "John Corben", "alter-egos": "No alter egos found.", "aliases": [ "-" ], "place-of-birth": "-", "first-appearance": "Superman Vol 2 #1 (January, 1987)", "publisher": "DC Comics", "alignment": "bad" }, "appearance": { "gender": "Male", "race": "Andróide", "height": [ "6'5", "196 cm" ], "weight": [ "200 lb", "90 kg" ], "eye-color": "Green", "hair-color": "Brown" }, "work": { "occupation": "Professional criminal", "base": "Mobile, though he generally operates out of Metropolis" }, "connections": { "group-affiliation": "Superman Revenge Squad", "relatives": "-" }, "image": { "url": "https://www.superherodb.com/pictures2/portraits/10/100/737.jpg" } }
    ,
    { "response": "success", "id": "253", "name": "Faora", "powerstats": { "intelligence": "88", "strength": "95", "speed": "75", "durability": "100", "power": "98", "combat": "90" }, "biography": { "full-name": "Faora Hu-Ul", "alter-egos": "No alter egos found.", "aliases": [ "Katie" ], "place-of-birth": "-", "first-appearance": "Action Comics #471 (May, 1977)", "publisher": "DC Comics", "alignment": "bad" }, "appearance": { "gender": "Female", "race": "Kryptoniana", "height": [ "-", "192 cm" ], "weight": [ "- lb", "72 kg" ], "eye-color": "-", "hair-color": "-" }, "work": { "occupation": "Serial killer", "base": "Phantom Zone; formerly Krypton" }, "connections": { "group-affiliation": "Phantom Zone Criminals", "relatives": "Hu-Ul (father, presumably deceased)" }, "image": { "url": "https://www.superherodb.com/pictures2/portraits/10/100/1502.jpg" } }
    ,
    { "response": "success", "id": "427", "name": "Man-Bat", "powerstats": { "intelligence": "38", "strength": "18", "speed": "50", "durability": "70", "power": "33", "combat": "30" }, "biography": { "full-name": "Robert Kirkland", "alter-egos": "No alter egos found.", "aliases": [ "Kirk Langstrom" ], "place-of-birth": "Chicago, Illinois", "first-appearance": "Detective Comics #400 (June, 1970)", "publisher": "DC Comics", "alignment": "neutral" }, "appearance": { "gender": "Male", "race": "Humano", "height": [ "-", "180 cm" ], "weight": [ "- lb", "72 kg" ], "eye-color": "Brown", "hair-color": "Brown" }, "work": { "occupation": "Zoologist", "base": "Gotham City" }, "connections": { "group-affiliation": "Formerly Spirit Squad, The Network", "relatives": "Francine Langstrom (wife), Rebecca Elizabeth Langtrom (daughter); Aaron Langstrom (son); Britt Langstrom (sister); Ted Friedel (brother-in-law)" }, "image": { "url": "https://www.superherodb.com/pictures2/portraits/10/100/731.jpg" } }
    ,
    { "response": "success", "id": "538", "name": "Ra's Al Ghul", "powerstats": { "intelligence": "100", "strength": "28", "speed": "32", "durability": "42", "power": "27", "combat": "100" }, "biography": { "full-name": "Ra's Al Ghul", "alter-egos": "No alter egos found.", "aliases": [ "Demon's Head" ], "place-of-birth": "Egypt", "first-appearance": "Batman #232 (June, 1971)", "publisher": "DC Comics", "alignment": "bad" }, "appearance": { "gender": "Male", "race": "Humano", "height": [ "6'4", "193 cm" ], "weight": [ "215 lb", "97 kg" ], "eye-color": "Green", "hair-color": "Grey" }, "work": { "occupation": "Eco Terrorist, Businessman, Cult Leader", "base": "mobile" }, "connections": { "group-affiliation": "League of Assassins", "relatives": "The Sensei (father), White Ghost (Dusan al Ghul) (son), Talia al Ghul (daughter), Nyssa Raatko (daughter), Robin V (Damian Wayne) (grandson)" }, "image": { "url": "https://www.superherodb.com/pictures2/portraits/10/100/761.jpg" } }
    ,
    { "response": "success", "id": "284", "name": "Giganta", "powerstats": { "intelligence": "81", "strength": "89", "speed": "23", "durability": "85", "power": "32", "combat": "42" }, "biography": { "full-name": "Doris Zuel", "alter-egos": "No alter egos found.", "aliases": [ "-" ], "place-of-birth": "-", "first-appearance": "Wonder Woman (Volume 1) #9 (1944)", "publisher": "DC Comics", "alignment": "bad" }, "appearance": { "gender": "Female", "race": "Humana", "height": [ "205", "62.5 m" ], "weight": [ "1400 lb", "630 kg" ], "eye-color": "Green", "hair-color": "Red" }, "work": { "occupation": "Criminal, former Scientist, Professor at Ivy University", "base": "Ivy Town" }, "connections": { "group-affiliation": "The Injustice League, formerly The Society, Villainy, Inc., The Legion of Doom", "relatives": "-" }, "image": { "url": "https://www.superherodb.com/pictures2/portraits/10/100/1376.jpg" } }

  ]

  constructor() { }

  getViloesLocal (valor) {
    return this.Viloes [valor];
  }

}