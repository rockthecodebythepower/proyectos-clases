const characters = [
  {
    name: "Princess Zelda",
    image:
      "https://www.zeldadungeon.net/wiki/images/thumb/4/46/Zelda_-_TotK_key_art.png/400px-Zelda_-_TotK_key_art.png",
    description:
      " is Hyrule's princess and the guardian of the Triforce of Wisdom. While older titles portray Zelda as a princess in peril requiring Link to save her from Ganon, since Ocarina of Time she has been developed as a more fully realised character, particularly in Breath of the Wild. Zelda is the reincarnation of the goddess Hylia in mortal form and is therefore capable of using various magical powers to aid Link. She is powerful enough to use light magic to seal Ganon away from Hyrule. She has used her Bow of Light as a recurring weapon in the series. Zelda occasionally has aliases and alter egos, including Sheik in Ocarina of Time and Tetra in The Wind Waker and Phantom Hourglass. Although she is the titular character, Zelda is only a playable character in Spirit Tracks in the main series and the CD-i games, but is playable in spin-offs such as Hyrule Warriors, or other games, such as the Super Smash Bros. series. She was named as one of the most iconic female game characters of all time by Digital Spy. Alongside Link, she was counted as one of the greatest video game characters of all time by the 2011 Guinness World Record Gamer's Edition.",
    evil: false,
    damage: 100,
    life: 100,
    stars: (100 * 100 / 1000).toFixed(1)
  },
  {
    name: "Link",
    image:
      "https://fs-prod-cdn.nintendo-europe.com/media/images/08_content_images/games_6/nintendo_switch_7/nswitch_thelegendofzeldatearsofthekingdom/TheLegendOfZeldaTearsOfTheKingdom_Abilities_sideimg.png",
    description:
      " is the silent protagonist of the series and the playable character. He is a Hylian youth of varying age who has traditionally been depicted wearing a green cap and tunic. He has appeared as the hero of every game in the series, each time as a new iteration of the same character. Although each game offers a new variation of Link, he typically sets out on a journey across Hyrule with the aim to defeat evil, usually in the form of Ganon, in order to save Princess Zelda. To defeat his enemies, he typically obtains and wields the legendary Master Sword. Each incarnation of Link is humble, brave, and worthy to bear the Triforce of Courage, one of three relic pieces that form the Triforce. As the series protagonist, Link has appeared in numerous related media, including spin-off games such as Hyrule Warriors, comics and manga and other video game series, such as Mario Kart 8 and the Super Smash Bros. series. Although he is mainly silent in the video games, he does speak in the Legend of Zelda cartoon series and the CD-i games from The Legend of Zelda series produced by Philips. Link was recognised as the second greatest video game character of all time behind Mario in the Guinness World Records Gamer's Edition 2011. Nintendo Life counts Link as one of gaming's most iconic heroes. GamesRadar described him as, one of the most enduring heroic archetypes. Time named him as one of the most influential video game characters of all time.",
    evil: false,
    damage: 90,
    life: 90,
    stars: (90 * 90 / 1000).toFixed(1)
  },
  {
    name: "Ganon",
    image:
      "https://www.zeldadungeon.net/wiki/images/thumb/e/ed/Ganondorf_-_TotK_key_art.png/400px-Ganondorf_-_TotK_key_art.png",
    description:
      " is the series' primary villain and final boss. His specific motives vary across games, but general themes include seeking the Triforce for power and destruction, and kidnapping Princess Zelda as a means to that end. Like Link and Zelda, he is the bearer of one third of the Triforce, namely, the Triforce of Power. Ganon was introduced as the main antagonist of the original The Legend of Zelda video game in the form of a blue boar and his role and appearance has since evolved. Over the course of the series, he has generally appeared in two forms: Ganon is his monstrous, demon pig-like form, and Ganondorf is his humanoid Gerudo form that was introduced in Ocarina of Time. In Breath of the Wild, he appears in two monstrous forms in the final boss fight as Calamity Ganon and Dark Beast Ganon. Ganon's primary objective is to conquer Hyrule to achieve ultimate power. His portrayal varies across each game in the series ranging from a mute beast to an incredibly powerful warlock with formidable sword skills, but all variations are so powerful that only Link and Zelda are capable of defeating him. In addition to the main Zelda series, Ganon/Ganondorf appears as a playable character in spin-off games, such as Hyrule Warriors and the Super Smash Bros. series. Ganon was recognised as one of the greatest video game villains of all time in a 2013 poll for Guinness World Records 2013 Gamer's Edition. In 2022, GamesRadar counted him as one of the most iconic gaming villains of all time.",
    evil: true,
    damage: 90,
    life: 90,
    stars: (90 * 90 / 1000).toFixed(1)
  },
  {
    name: "Epona",
    image:
      "https://www.giantbomb.com/a/uploads/scale_medium/1/14898/365532-epona_2.png",
    description:
      "is Link's horse who assists him in Ocarina of Time, Majora's Mask, Twilight Princess and Breath of the Wild. She comes to Link's aid when called by her special song, which he plays on the ocarina in Ocarina of Time and Majora's Mask, and on a blade of horse grass in Twilight Princess.",
    evil: false,
    damage: 10,
    life: 100,
    stars: (10 * 100 / 1000).toFixed(1)
  },
  {
    name: "Groose",
    image:
      "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/d/d4/SS_Groose_Artwork.png/revision/latest/scale-to-width-down/1200?cb=20130223024633",
    description:
      "is a bully from the Knights' Academy in Skyward Sword. He is often hostile and working to undermine Link due to his jealousy of Link's close relationship with Zelda. Over time, through Link's exploits and his own shortcomings, he is humbled and becomes more helpful. He builds a catapult called The Groosenator to aid Link in halting the imprisoned Demon King Demise from escaping the pit of the Sealed Grounds and reaching the Sealed Temple, and looks after the elderly Impa of the Sealed Grounds.",
    evil: false,
    damage: 30,
    life: 70,
    stars: (30 * 70 / 1000).toFixed(1)
  },
  {
    name: "Impa",
    image:
      "https://i.pinimg.com/originals/ae/19/49/ae19491456aad684a052a2291c9b0093.png",
    description:
      "Is a caretaker to Princess Zelda. There are many incarnations of the character named Impa throughout the Zelda series, all being from the head family of the Sheikah Tribe, just as there are multiple incarnations of Link and Zelda. As with Link and Zelda, all incarnations of Impa share certain personality traits. She is involved in most mainline entries of the series, and playable in the Hyrule Warriors spin-off games.",
    evil: false,
    damage: 90,
    life: 85,
    stars: (90 * 85 / 1000).toFixed(1)
  },
  {
    name: "Midna",
    image:
      "https://images.wikidexcdn.net/mwuploads/esssbwiki/thumb/6/65/latest/20140708023821/Artwork_de_Midna_en_Hyrule_Warriors.png/800px-Artwork_de_Midna_en_Hyrule_Warriors.png",
    description:
      "is one of the main characters in Twilight Princess. She is an imp-like creature and the princess of the Twili race who serves as Link's companion, much like Navi in Ocarina of Time. Initially Midna shows contempt for Link and uses him to further her own goals; however, she grows to like him and continues to help him on his quest. Midna is shown to be a kind-hearted character, even though she was born in the Twilight Realm. She is the counterpart to Link's battles as a wolf in the Realm of Twilight. Midna returns in Hyrule Warriors as a playable character in both her imp and Twili forms.",
    evil: false,
    damage: 60,
    life: 80,
    stars: (60 * 80 / 1000).toFixed(1)
  },
];

const mongoose = require("mongoose");
const Character = require("../../api/models/characters");
require("dotenv").config();

mongoose.connect(process.env.DB_URL).then(async () => {
  try {
    const oldCharacters = await Character.find();

    if (oldCharacters) {
      await Character.collection.drop();
      console.log("Characters defeat 👽");
    }

    await Character.insertMany(characters);
    console.log("Personajes inyectados correctamente 😋");
  } catch (error) {
    console.log("Esto es el error que da: " + error);
  }
}).finally(() => mongoose.disconnect());
