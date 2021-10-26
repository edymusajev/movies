import { Movie } from './Movie';

export interface MovieList {
  page: number;
  total_results: number;
  total_pages: number;
  results: Movie[];
}

// {
//     "page": 1,
//     "results": [
//         {
//             "adult": false,
//             "backdrop_path": "/eeijXm3553xvuFbkPFkDG6CLCbQ.jpg",
//             "genre_ids": [
//                 28,
//                 12,
//                 18,
//                 878
//             ],
//             "id": 438631,
//             "original_language": "en",
//             "original_title": "Dune",
//             "overview": "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
//             "popularity": 8870.667,
//             "poster_path": "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
//             "release_date": "2021-09-15",
//             "title": "Dune",
//             "video": false,
//             "vote_average": 8.1,
//             "vote_count": 2526
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/lNyLSOKMMeUPr1RsL4KcRuIXwHt.jpg",
//             "genre_ids": [
//                 878,
//                 28
//             ],
//             "id": 580489,
//             "original_language": "en",
//             "original_title": "Venom: Let There Be Carnage",
//             "overview": "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
//             "popularity": 6667.203,
//             "poster_path": "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
//             "release_date": "2021-09-30",
//             "title": "Venom: Let There Be Carnage",
//             "video": false,
//             "vote_average": 7,
//             "vote_count": 1143
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg",
//             "genre_ids": [
//                 35,
//                 28,
//                 12,
//                 878
//             ],
//             "id": 550988,
//             "original_language": "en",
//             "original_title": "Free Guy",
//             "overview": "A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline.",
//             "popularity": 3073.454,
//             "poster_path": "/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg",
//             "release_date": "2021-08-11",
//             "title": "Free Guy",
//             "video": false,
//             "vote_average": 7.8,
//             "vote_count": 3111
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/tDYwYktjFmpj92S2Qn4T3BcRgL.jpg",
//             "genre_ids": [
//                 27,
//                 53
//             ],
//             "id": 610253,
//             "original_language": "en",
//             "original_title": "Halloween Kills",
//             "overview": "Minutes after Laurie Strode, her daughter Karen and granddaughter Allyson left masked monster Michael Myers caged and burning in Laurie's basement, Laurie is rushed to the hospital with life-threatening injuries, believing she finally killed her lifelong tormentor. But when Michael manages to free himself from Laurie's trap, his ritual bloodbath resumes. As Laurie fights her pain and prepares to defend herself against him, she inspires all of Haddonfield to rise up against their unstoppable monster. The Strode women join a group of other survivors of Michael's first rampage who decide to take matters into their own hands, forming a vigilante mob that sets out to hunt Michael down, once and for all.",
//             "popularity": 3298.711,
//             "poster_path": "/qmJGd5IfURq8iPQ9KF3les47vFS.jpg",
//             "release_date": "2021-10-14",
//             "title": "Halloween Kills",
//             "video": false,
//             "vote_average": 7.3,
//             "vote_count": 736
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/sjeEHzxdDrtMTHQwARi4UJ4NXN7.jpg",
//             "genre_ids": [
//                 878,
//                 53,
//                 9648
//             ],
//             "id": 675319,
//             "original_language": "en",
//             "original_title": "Zone 414",
//             "overview": "In the near future on a colony of state-of-the-art robots, a private investigator is hired by the colony's creator to bring his missing daughter home.",
//             "popularity": 1798.911,
//             "poster_path": "/wIm5S6Blkb0qDMTGVu80VWSrQV1.jpg",
//             "release_date": "2021-09-03",
//             "title": "Zone 414",
//             "video": false,
//             "vote_average": 5.9,
//             "vote_count": 65
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/aO9Nnv9GdwiPdkNO79TISlQ5bbG.jpg",
//             "genre_ids": [
//                 28,
//                 12
//             ],
//             "id": 568620,
//             "original_language": "en",
//             "original_title": "Snake Eyes: G.I. Joe Origins",
//             "overview": "After saving the life of their heir apparent, tenacious loner Snake Eyes is welcomed into an ancient Japanese clan called the Arashikage where he is taught the ways of the ninja warrior. But, when secrets from his past are revealed, Snake Eyes' honor and allegiance will be tested – even if that means losing the trust of those closest to him.",
//             "popularity": 1755.473,
//             "poster_path": "/uIXF0sQGXOxQhbaEaKOi2VYlIL0.jpg",
//             "release_date": "2021-07-22",
//             "title": "Snake Eyes: G.I. Joe Origins",
//             "video": false,
//             "vote_average": 6.9,
//             "vote_count": 724
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg",
//             "genre_ids": [
//                 878,
//                 28
//             ],
//             "id": 335983,
//             "original_language": "en",
//             "original_title": "Venom",
//             "overview": "Investigative journalist Eddie Brock attempts a comeback following a scandal, but accidentally becomes the host of Venom, a violent, super powerful alien symbiote. Soon, he must rely on his newfound powers to protect the world from a shadowy organization looking for a symbiote of their own.",
//             "popularity": 2006.388,
//             "poster_path": "/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg",
//             "release_date": "2018-09-28",
//             "title": "Venom",
//             "video": false,
//             "vote_average": 6.8,
//             "vote_count": 11956
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/wfrfxivLOBtGMC98tIr2LSOeKSe.jpg",
//             "genre_ids": [
//                 16,
//                 35,
//                 10751
//             ],
//             "id": 639721,
//             "original_language": "en",
//             "original_title": "The Addams Family 2",
//             "overview": "The Addams get tangled up in more wacky adventures and find themselves involved in hilarious run-ins with all sorts of unsuspecting characters.",
//             "popularity": 1837.812,
//             "poster_path": "/ld7YB9vBRp1GM1DT3KmFWSmtBPB.jpg",
//             "release_date": "2021-10-01",
//             "title": "The Addams Family 2",
//             "video": false,
//             "vote_average": 7.5,
//             "vote_count": 407
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/5UmoOvOmnCHiJj3TAKVn7uNAKAW.jpg",
//             "genre_ids": [
//                 28,
//                 35,
//                 12
//             ],
//             "id": 772436,
//             "original_language": "es",
//             "original_title": "Matando Cabos 2: La Máscara del Máscara",
//             "overview": "Faced with the unexpected death of his estranged father -El Máscara- and the subsequent theft of his precious mask, Rubén -Mascarita- will find himself confronted with his past. Alongside his invincible bodyguard Tony \"The Cannibal\" and, an unexpected ally, he will have only one day to recover it and make amends with the memory of his father.",
//             "popularity": 1474.866,
//             "poster_path": "/jxdKa1467pktAILLbfw6kZyQlbW.jpg",
//             "release_date": "2021-10-01",
//             "title": "Matando Cabos 2: La Máscara del Máscara",
//             "video": false,
//             "vote_average": 8.1,
//             "vote_count": 47
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/ux6gkGSKNFtp2NFYxwYFxVWdnGa.jpg",
//             "genre_ids": [
//                 80,
//                 18,
//                 53
//             ],
//             "id": 874948,
//             "original_language": "tr",
//             "original_title": "Kin",
//             "overview": "Ahead of a promotion, a police chief becomes entangled in a deadly incident and uncovers an intrigue fueled by grudge that threatens his colleagues.",
//             "popularity": 1302.948,
//             "poster_path": "/xSqtHT2DWbWBZ4dUvvMs6z1OfFK.jpg",
//             "release_date": "2021-10-08",
//             "title": "Grudge",
//             "video": false,
//             "vote_average": 6.5,
//             "vote_count": 25
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/7h5WAPAcUzOWpp2jrwHBB48790j.jpg",
//             "genre_ids": [
//                 16,
//                 28
//             ],
//             "id": 843241,
//             "original_language": "ja",
//             "original_title": "劇場版 七つの大罪 光に呪われし者たち",
//             "overview": "With the help of the \"Dragon Sin of Wrath\" Meliodas and the worst rebels in history, the Seven Deadly Sins, the \"Holy War\", in which four races, including Humans, Goddesses, Fairies and Giants fought against the Demons, is finally over. At the cost of the \"Lion Sin of Pride\" Escanor's life, the Demon King was defeated and the world regained peace. After that, each of the Sins take their own path.",
//             "popularity": 1299.459,
//             "poster_path": "/k0ThmZQl5nHe4JefC2bXjqtgYp0.jpg",
//             "release_date": "2021-07-02",
//             "title": "The Seven Deadly Sins: Cursed by Light",
//             "video": false,
//             "vote_average": 8.4,
//             "vote_count": 189
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/4KpNHvQIjyg1YFovRAoUXoFrGnR.jpg",
//             "genre_ids": [
//                 16,
//                 12
//             ],
//             "id": 662708,
//             "original_language": "ja",
//             "original_title": "劇場版ポケットモンスター ココ",
//             "overview": "In the Forest of Okoya, Koko is a feral child who has been raised as a Pokémon by the Mythical Pokémon Zarude. Koko has grown up never doubting that he is a Pokémon even though he can't really use any sort of moves. Ash Ketchum and Pikachu meet Koko and help him protect the Great Tree from the crooked scientist Dr. Zed.",
//             "popularity": 1152.805,
//             "poster_path": "/vGcHyV9s1N2I7bJLSBODvqHTYLL.jpg",
//             "release_date": "2020-12-25",
//             "title": "Pokémon the Movie: Secrets of the Jungle",
//             "video": false,
//             "vote_average": 7.6,
//             "vote_count": 54
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/dIibeeq4QMay5bTJ2vjr72IFFRo.jpg",
//             "genre_ids": [
//                 14,
//                 12,
//                 35
//             ],
//             "id": 589754,
//             "original_language": "ru",
//             "original_title": "Последний богатырь: Корень зла",
//             "overview": "Peace and tranquility have set in Belogorie. The evil was defeated and Ivan is now enjoying his well-deserved fame. He is surrounded by his family, friends and small wonders from the modern world that help him lead a comfortable life. Luckily, he has his Magic Sword to cut a gap between the worlds to get some supplies quite regularly. But when an ancient evil rises and the existence of the magic world is put to danger, Ivan has to team up with his old friends and his new rivals. They will set out on a long journey beyond the known world to find a way to defeat the enemies and to return peace to Belogorie.",
//             "popularity": 1184.699,
//             "poster_path": "/5VJSIAhSn4qUsg5nOj4MhQhF5wQ.jpg",
//             "release_date": "2021-01-01",
//             "title": "The Last Warrior: Root of Evil",
//             "video": false,
//             "vote_average": 7.3,
//             "vote_count": 59
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/eBGKU0ZLJmxtVtzESTB1mfllX1J.jpg",
//             "genre_ids": [
//                 80,
//                 28,
//                 53
//             ],
//             "id": 630004,
//             "original_language": "en",
//             "original_title": "The Vault",
//             "overview": "When an engineer learns of a mysterious, impenetrable fortress hidden under The Bank of Spain, he joins a crew of master thieves who plan to steal the legendary lost treasure locked inside while the whole country is distracted by Spain's World Cup Final. With thousands of soccer fans cheering in the streets, and security forces closing in, the crew have just minutes to pull off the score of a lifetime.",
//             "popularity": 2011.344,
//             "poster_path": "/iiHubBBVFg6K7t5THdsImqy1ct2.jpg",
//             "release_date": "2021-03-03",
//             "title": "The Vault",
//             "video": false,
//             "vote_average": 7.1,
//             "vote_count": 347
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/owraiceOKtSOa3t8sp3wA9K2Ox6.jpg",
//             "genre_ids": [
//                 16,
//                 28,
//                 12,
//                 878
//             ],
//             "id": 703771,
//             "original_language": "en",
//             "original_title": "Deathstroke: Knights & Dragons - The Movie",
//             "overview": "The assassin Deathstroke tries to save his family from the wrath of H.I.V.E. and the murderous Jackal.",
//             "popularity": 1398.61,
//             "poster_path": "/vFIHbiy55smzi50RmF8LQjmpGcx.jpg",
//             "release_date": "2020-08-04",
//             "title": "Deathstroke: Knights & Dragons - The Movie",
//             "video": false,
//             "vote_average": 7,
//             "vote_count": 285
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/4vCh8R4yd6ybOmbxRAPOzaXmLTV.jpg",
//             "genre_ids": [
//                 10749,
//                 18
//             ],
//             "id": 744275,
//             "original_language": "en",
//             "original_title": "After We Fell",
//             "overview": "Just as Tessa's life begins to become unglued, nothing is what she thought it would be. Not her friends nor her family. The only person that she should be able to rely on is Hardin, who is furious when he discovers the massive secret that she's been keeping. Before Tessa makes the biggest decision of her life, everything changes because of revelations about her family.",
//             "popularity": 1166.402,
//             "poster_path": "/3WfvjNWr5k1Zzww81b3GWc8KQhb.jpg",
//             "release_date": "2021-09-01",
//             "title": "After We Fell",
//             "video": false,
//             "vote_average": 7.8,
//             "vote_count": 447
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/q4h2ZbhHKhnWvrrqzcjT778zlbn.jpg",
//             "genre_ids": [
//                 16,
//                 878,
//                 14,
//                 28
//             ],
//             "id": 831405,
//             "original_language": "en",
//             "original_title": "Injustice",
//             "overview": "When Lois Lane is killed, an unhinged Superman decides to take control of the Earth. Determined to stop him, Batman creates a team of freedom-fighting heroes. But when superheroes go to war, can the world survive?",
//             "popularity": 1070.908,
//             "poster_path": "/lNRdCfVcjLs2LhO1Vb5rgnHV4JW.jpg",
//             "release_date": "2021-10-09",
//             "title": "Injustice",
//             "video": false,
//             "vote_average": 8.2,
//             "vote_count": 259
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/4O40vu2KOgnFfxvrZgzBG6havQ.jpg",
//             "genre_ids": [
//                 28,
//                 80,
//                 53
//             ],
//             "id": 645788,
//             "original_language": "en",
//             "original_title": "The Protégé",
//             "overview": "Rescued as a child by the legendary assassin Moody and trained in the family business, Anna is the world’s most skilled contract killer. When Moody, the man who was like a father to her and taught her everything she needs to know about trust and survival, is brutally killed, Anna vows revenge. As she becomes entangled with an enigmatic killer whose attraction to her goes way beyond cat and mouse, their confrontation turns deadly and the loose ends of a life spent killing will weave themselves ever tighter.",
//             "popularity": 1662.952,
//             "poster_path": "/o9FY8N5c8CXf22q8s4CmRRjAQJx.jpg",
//             "release_date": "2021-08-19",
//             "title": "The Protégé",
//             "video": false,
//             "vote_average": 6.8,
//             "vote_count": 279
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/umAoDwLZMBrYeCDfbJYFRMuXWAr.jpg",
//             "genre_ids": [
//                 878
//             ],
//             "id": 681887,
//             "original_language": "en",
//             "original_title": "Cosmic Sin",
//             "overview": "In the year 2524, four centuries after humans started colonizing the outer planets, retired General James Ford gets called back into service when a hostile alien fleet attacks soldiers on a remote planet. The threat against mankind soon escalates into an interstellar war as Ford and a team of elite soldiers try to stop the imminent attack before it's too late.",
//             "popularity": 963.779,
//             "poster_path": "/6Wm7P6y22UZA40QuPYHyWyJ6leI.jpg",
//             "release_date": "2021-03-12",
//             "title": "Cosmic Sin",
//             "video": false,
//             "vote_average": 4.5,
//             "vote_count": 348
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/akwg1s7hV5ljeSYFfkw7hTHjVqk.jpg",
//             "genre_ids": [
//                 16,
//                 35,
//                 12,
//                 10751
//             ],
//             "id": 459151,
//             "original_language": "en",
//             "original_title": "The Boss Baby: Family Business",
//             "overview": "The Templeton brothers — Tim and his Boss Baby little bro Ted — have become adults and drifted away from each other. But a new boss baby with a cutting-edge approach and a can-do attitude is about to bring them together again … and inspire a new family business.",
//             "popularity": 963.786,
//             "poster_path": "/kv2Qk9MKFFQo4WQPaYta599HkJP.jpg",
//             "release_date": "2021-07-01",
//             "title": "The Boss Baby: Family Business",
//             "video": false,
//             "vote_average": 7.7,
//             "vote_count": 1538
//         }
//     ],
//     "total_pages": 500,
//     "total_results": 10000
// }
