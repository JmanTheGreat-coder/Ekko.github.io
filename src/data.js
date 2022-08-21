import Poke from './images/pokemon.png'
import Halo from './images/halo.png'
import Mario from './images/Mario.jpg'
import Star from './images/Star war.jpg'
import Tom from './images/Tom.jpg'
import Trian from './images/Trian.jpg'
import Sekiro from './images/Sekiro.jpg'
import Mass from './images/Mass.jpg'
import Kirby from './images/Kirby.jpg'
import Horizon from './images/Horizon.jpg'
import GTA from './images/GTA.jpg'
import God from './images/god of war.png'
import Forza from './images/Forza.jpg'
import Far from './images/Far cry.jpg'
import Elder from './images/Elder Ring.jpg'
import Doom from './images/doom.png'
import Cyb from './images/Cyber.jpg'
import Creed from './images/Creed.jpg'
import Battle from './images/Battle.jpg'
import Gran from './images/Gran.jpg'




const list = [
    {
        id:1,
        img: Poke,
        title: 'Pokémon Legends: Arceus',
        stars:  '⭐⭐⭐',
        price: '59.99',
        consoles: 'Nintendo',
        category: 'Adventure',
        description: 'Get ready for a new kind of grand, Pokémon adventure in Pokémon Legends: Arceus, a brand new game from Game Freak that blends action and exploration with the RPG roots of the Pokémon series. Explore natural expanses to catch Pokémon by learning their behavior, sneaking up, and throwing a well-aimed Poké Ball. You can also toss the Poké Ball containing your ally Pokémon near a wild Pokémon to seamlessly enter battle. This new angle on Pokémon gameplay will deliver an immersive, personal experience brought to life by both Pokémon and humans.',
        amount: 1,
        review: 'The open world concept is well overdue for this franchise, but it felt small compare to some recent entries in the genre, perhaps GF will expand the world via patches in the future. All future Pokemon games should follow this framework moving forward!'

    },
    {
        id:2,
        img: Star,
        title: 'LEGO Star Wars: The Skywalker Saga',
        stars:  '⭐⭐⭐⭐',
        price: '59.99',
        consoles: 'Nintendo',
        category: 'Adventure',
        rated: 'New Arrivals',
        description: 'Conquer the galaxy in LEGO Star Wars The Skywalker Saga on Nintendo. In this new LEGO Star Wars game, players will experience memorable moments and nonstop action from all nine Skywalker saga films reimagined with signature LEGO humor. The game will immerse players in the expansive saga with the freedom to control hundreds of characters, ships and vehicles to create their own unique journey through the galaxy.',
        amount: 1,
        review: 'My sons are teens and this series of games is still popular with them. It’s the talk among them this week. We were excited to get it in the mail and not have to run around looking for it in stores. I wanted to wait until Easter but he got it sooner so he can play with his friends.'
    },
    {
        id:3,
        img: Halo,
        title: 'Halo infinite',
        stars:  '⭐⭐⭐⭐⭐',
        price: '59.99',
        consoles: 'Xbox One',
        category: 'First-person shooter',
        rated: 'Best Sellers',
        description: 'Master Chief is back in his most epic adventure to date. Experience the ultimate gameplay and explore a stunning sci-fi world in this riveting, first person shooter video game. Halo Infinite release date Holiday 2021.',
        amount: 1,
        review: 'Best Halo since Halo 3 and Halo Reach era, already spent 6 hours playing the videogame and story is amazing and gameplay as well, highly recommended for Halo fans'
    },
    {
        id:4,
        img: Mario,
        title: 'Mario Kart 8 Deluxe',
        stars:  '⭐⭐⭐⭐',
        price: '59.99',
        consoles: 'Nintendo',
        category: 'Racing',
        description: 'Hit the road with the definitive version of Mario Kart 8 and play anytime, any-where! Race your friends or battle them in a revised battle mode on new and returning battle courses. Play locally in up to 4-player multiplayer in 1080p while playing in TV Mode. Every track from the Wii U version, including DLC, makes a glorious return. Plus, the Inklings appear as all-new guest characters, along with returning favorites, such as King Boo, Dry Bones, and Bowser Jr.!',
        amount: 1,
        review: 'This was the biggest, best change they made. Instead of driving aimlessly through regular courses hoping you pass someone, they have created battle-specific courses, making battle more intense. There are 5 different modes in battle: balloon battle, coin runner, renegade roundup, ba-bomb blast, and shine thief. All are great. Our family favorite is Renegade Roundup.'
    },
    {
        id:5,
        img: Tom,
        title: 'Tom Clancy’s The Division 2',
        stars:  '⭐⭐',
        price: '39.99',
        consoles: 'PC',
        category: 'First-person shooter',
        rated: 'Sale Items',
        description: 'Tom Clancys The Division 2 is a shooter RPG with campaign, co-op, and PvP modes that offers more variety in missions and challenges, new progression systems with unique twists and surprises, and fresh innovations that offer new ways to play.',
        amount: 1,
        review: 'My fiance was really looking forward to this game coming out, as he was a fan of the 1st one. After looking at the different options for ordering we chose this one as we like having physical copies. Im a big fan of Steelbooks because they look cool and feel super sturdy. He now agrees with me on that as he kept gushing over it when he opened it. For me, it was well worth the price and he is a happy camper'
    },
    {
        id:6,
        img: Trian,
        title: 'Triangle Strategy',
        stars:  '⭐⭐⭐⭐',
        price: '49.99',
        consoles: 'Nintendo',
        category: 'Adventure',
        rated: 'Sale Items',
        description: 'The game is a turn-based tactical role-playing game in the vein of Fire Emblem or Final Fantasy Tactics. The player takes turns moving characters from their party across a grid-based playing field in which computer-controlled opponents must be attacked and defeated.',
        amount: 1,
        review: 'The story is exceptionally compelling. Far more so than I ever anticipated. I love Fire Emblem to death. But this game has the story Ive always wanted Fire Emblem to have. Its just soooo good!'
    },
    {
        id:7,
        img: Sekiro,
        title: 'Sekiro Shadows Die Twice',
        stars:  '⭐⭐⭐⭐⭐',
        price: '59.99',
        consoles: 'Xbox One',
        category: 'Action',
        rated: 'New Arrivals',
        description: 'Sekiro: Shadows Die Twice is a 2019 action-adventure game developed by FromSoftware and published by Activision. The game follows a shinobi known as Wolf as he attempts to take revenge on a samurai clan who attacked him and kidnapped his lord.',
        amount: 1,
        review: 'Got this promptly today and installed it for an hour of gameplay before going to work. First impressions are that of beauty and struggle. The scenery is absolutely stunning! The controls are fluid, quick, and more responsive than expected. My emotions were immediately sparked when I entered the first area with a title, the title popped and that all familiar sound of entering a new area for the first time was produced. My soulsborne life flashed before my eyes at that instant and I knew I was in a familiar, yet new adventure. The first enemies were easy to slice through with my katana but soon after I was put in my place by a mid level boss.'
    },
    {
        id:8,
        img: Kirby,
        title: 'Kirby and the Forgotten Land',
        stars:  '⭐⭐⭐⭐',
        price: '49.99',
        consoles: 'Nintendo',
        category: 'Action',
        rated: 'Sale Items',
        description: 'Kirby and the Forgotten Land is the first platform game in the series with full 3D gameplay, where the player must guide Kirby through various different stages to save the Waddle Dees at the end.',
        amount: 1,
        review: 'Kirbys first 3D adventure. Kirby The Forgotten Lands structure is like Super Mario 3D World. Linear selected levels with large open space to explore. Excellent level design, love the creativity of how everything is laid out.'
        
    },
    {
        id:9,
        img: Mass,
        title: 'Mass Effect Legendary',
        stars:  '⭐⭐⭐',
        price: '39.99',
        consoles: 'PC',
        category: 'First-person shooter',
        rated: 'Sale Items',
        description: 'The Mass Effect™ Legendary Edition includes single-player base content and over 40 DLC from the highly acclaimed Mass Effect, Mass Effect 2, and Mass Effect 3 games, including promo weapons, armors, and packs – remastered and optimized for 4K Ultra HD.',
        amount: 1,
        review: 'I knew this game was something special the first time I saw the updated visual of the functioning Mass Relay. Gosh darnit, the Mass Relay was beautiful, clear crisp well defined not foggy and blurred. The space around the Mass Relay was not that blue tint it was black with tiny stars a plenty. The graphics improvements are everywhere. Looking at the old Mass Effect on PS3 was like watching everything through glasses covered in a thin layer of grease. Blurred, faded and dim.'
    },
    {
        id:10,
        img: Horizon,
        title: 'Horizon Forbidden West Launch Edition ',
        stars:  '⭐⭐⭐⭐⭐',
        price: '59.99',
        consoles: 'Playstation 5',
        category: 'Action',
        rated: 'Sale Items',
        description: 'A sequel to 2017s Horizon Zero Dawn, the game is set in a post-apocalyptic version of the Western United States recovering from the aftermath of an extinction event caused by a rogue robot swarm. The player can explore the open world and complete quests using ranged and melee against hostile machine creatures.',
        amount: 1,
        review: 'The original Mass Effect was always a solid game and I loved it intensely. So like so many I was waiting with baited breath for this updated Mass Effect Legendary Edition to hit PlayStation 4. When Bioshock hit PS4 the graphics were slightly improved but not much else changed. '
    },
    {
        id:11,
        img: GTA,
        title: 'Grand Theft Auto V',
        stars:  '⭐⭐⭐⭐⭐',
        price: '49.99',
        consoles: 'Xbox One',
        category: 'Action',
        rated: 'Best Sellers',
        description: 'Grand Theft Auto V is an action-adventure game played from either a third-person or first-person perspective. Players complete missions—linear scenarios with set objectives—to progress through the story. Outside of the missions, players may freely roam the open world.',
        amount: 1,
        review: 'Do I need to say anymore more than whats in the title? Amazing graphics, fun gameplay, so much to do. Only con is slow loading times to get into the game and between online missions.'
    },
    {
        id:12,
        img: God,
        title: 'God of War',
        stars:  '⭐⭐⭐⭐⭐',
        price: '59.99',
        consoles: 'Playstation 5',
        category: 'Action',
        rated: 'New Arrivals',
        description: 'Unlike previous installments, this game focuses on Norse mythology and follows an older and more seasoned Kratos and his new son Atreus in the years since God of War III. The game released on April 20, 2018, and is currently exclusive to the PlayStation 5.',
        amount: 1,
        review: 'This product is CLEARLY the new God of War 2018, if you know anything about the series you can tell by just the cover not to mention Amazon provides a proper description on the page. Disregard that 1 star review this is a 10/10 beautiful game worth full price.'
    },
    {
        id:13,
        img: Forza,
        title: 'Forza Horizon 5',
        stars:  '⭐⭐⭐⭐⭐',
        price: '59.99',
        consoles: 'Xbox One',
        category: 'Racing',
        rated: 'New Arrivals',
        description: 'Forza Horizon 5 is a racing video game set in an open world environment based in a fictional representation of Mexico. The game has the largest map in the entire Forza Horizon series, being 50% larger than its predecessor, Forza Horizon 4, while also having the highest point in the Horizon series.',
        amount: 1,
        review: 'Last disc I got didn’t work, download stop at 18%. But since this product was label very good, I had high hopes that this would work, and it did. Game is awesome other then the game punishes you for using rewind. Every rewind you lose one percent of your money, plus the traction control acts different, like less grip in even the most grip cars. Overall good game for its era'
    },
    {
        id:14,
        img: Far,
        title: 'Far Cry 6',
        stars:  '⭐⭐⭐⭐',
        price: '59.99',
        consoles: 'Xbox One',
        category: 'First-person shooter',
        rated: 'Best Sellers',
        description: 'Far Cry® 6 thrusts players into the adrenaline-filled world of a modern-day guerrilla revolution. As dictator of Yara, Antón Castillo is intent on restoring his nation back to its former glory by any means, with his son, Diego, dutifully at his side. Become a guerrilla fighter and burn their regime to the ground.',
        amount: 1,
        review: 'Me llegó dos días antes de lo esperado, en muy buen estado, los tiempos de carga son un poco lentos pero eso se debe a la consola.'
    },
    {
        id:15,
        img: Elder,
        title: 'Elden Ring',
        stars:  '⭐⭐⭐⭐',
        price: '59.99',
        consoles: 'Playstation 5',
        category: 'Action',
        rated: 'New Arrivals',
        description: 'Elden Ring is an action role-playing game played in a third-person perspective with gameplay focusing on combat and exploration; it features elements similar to those found in other games developed by FromSoftware, such as the Souls series, Bloodborne, and Sekiro.',
        amount: 1,
        review: 'Incredibly fun and challenging game. I wasnt a huge Dark Souls fan, but somehow this game hits different. Challenging but also very rewarding when you learn how to approach.'
    },
    {
        id:16,
        img: Doom,
        title: 'DOOM Eternal',
        stars:  '⭐⭐⭐⭐⭐',
        price: '59.99',
        consoles: 'PC',
        category: 'First-person shooter',
        rated: 'New Arrivals',
        description: 'The Doom Slayer spends his time in hell surviving and murdering legions of demons which earns him the title of Doom Slayer. He killed so many demons that he is now revered as some sort of devil himself in their world, which leads to the demons imprisoning him in a tomb so that he can not wreak havoc anymore.',
        amount: 1,
        review: 'Great game but unfortunately Bethesda makes you create a account in order to play the game. That being said, on another topic. My game arrived with a broken seal at the bottom and the disc loosed inside. And the bottom of the game case broken. As if somebody maybe from a job site was tryna steal it?..... hmm either way . Thank goodness the game was not damaged and was there.'
    },
    {
        id:17,
        img: Battle,
        title: 'Battlefield 2042',
        stars:  '⭐⭐⭐⭐',
        price: '59.99',
        consoles: 'PC',
        category: 'First-person shooter',
        description: 'Battlefield™ 2042 is a first-person shooter that marks the return to the iconic all-out warfare of the franchise. In a near-future world transformed by disorder, adapt and overcome dynamically-changing battlegrounds with the help of your squad and a cutting-edge arsenal.',
        amount: 1,
        review: 'The Battlefield series is known for its immersive battlefields with great team gameplay. This new game falls drastically short in providing the gaming experience that Battlefield veterans expect. Battlefield V was somewhat of a let down upon release. Battlefield 2042 makes Battlefield V look incredibly good.'
    },
    {
        id:18,
        img: Gran,
        title: 'Grand Tourismo',
        stars:  '⭐⭐⭐⭐',
        price: '59.99',
        consoles: 'Playstation 5',
        category: 'Racing',
        rated: 'Best Sellers',
        description: 'Gran Turismo (GT) is a series of racing simulation video games developed by Polyphony Digital. Developed for PlayStation systems, Gran Turismo games are intended to emulate the appearance and performance of a large selection of vehicles, most of which are licensed reproductions of real-world automobiles.',
        amount: 1,
        review: 'Had the game for 24 hours now, and Ive spent about 10 of those hours playing this game. I havent played at GT game since the 3rd installment, so its been awhile. If you want to access the multi-player/online experience you have to move your way through the story to unlock them. Some games are a major grind to unlock certain parts. Ive enjoyed every moment of this one. Can actually feel the difference in the cars, tracks, and weather. Worth the buy in my opinion!'
    },
    {
        id:19,
        img: Cyb,
        title: 'Cyberpunk 2077',
        stars:  '⭐',
        price: '59.99',
        consoles: 'PC',
        category: 'First-person shooter',
        description: 'Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped-up in a do-or-die fight for survival. Explore the dark future, now upgraded with next-gen in mind and featuring free additional content!',
        amount: 1,
        review: 'Do not waste your money or time purchasing this game. Graphics on PS4 look to be from a decade ago. This is pure corporate greed to sell this game to anyone. They got my $60 maybe not yours.'
    },
    {
        id:20,
        img: Creed,
        title: 'Assassin’s Creed Valhalla',
        stars:  '⭐⭐⭐⭐⭐',
        price: '59.99',
        consoles: 'Playstation 5',
        category: 'Action',
        description: 'In Assassins Creed Valhalla, become Eivor, a legendary Viking raider on a quest for glory. Explore a dynamic and beautiful open world set against the brutal backdrop of England Dark Ages. Raid your enemies, grow your settlement, and build your political power in the quest to earn a place among the gods in Valhalla.',
        amount: 1,
        review: 'I’m a fan of the Assassins Creed franchise and I definitely enjoyed Assassin Creed Odyssey however, Valhalla is missing something but can’t figure out what. The game is smooth but too Arcady and the storyline is all over the place. I think Odyssey should of been my last game played by the franchise. Very disappointed..'
    },
];

export default list;