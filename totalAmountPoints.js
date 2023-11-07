function points(games) {
  let total = 0;
  games.map((game) => { //games = ["3:1", "2:1",..] 
    if (game[0] === game[2]) { // game ="1:1" game[0]='1' and game[2]='1'
      total += 1;
    } else if (game[0] > game[2]) { // game ="3:1" game[0]='3' and game[2]='1'
      total += 3;
    }
  });
  return total;
}
