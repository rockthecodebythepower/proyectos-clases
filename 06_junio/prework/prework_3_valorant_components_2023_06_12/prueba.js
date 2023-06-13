const streamers = [
    { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' },
  ];
  
  // > Output 1 :
  
  const legendPlayer = streamers.filter((player) => {
    if (player.gameMorePlayed.includes('Legends')) {
      if (player.age > 35) {
        player.gameMorePlayed = player.gameMorePlayed.toUpperCase();
      }
      return player;
    }
  });
  
  console.log(legendPlayer);
  
  // > Output 2 :

  console.log(streamers);
  
  const legendsStreamer = streamers.filter((streamer) => {
    if (streamer.gameMorePlayed.includes('Legends')) {
      if (streamer.age > 35) {
        streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
      }
      return streamer;
    }
  });
  
  console.log(legendsStreamer);