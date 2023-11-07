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


// let total = games.reduce((accumulator, game) => {
//     if (game[0] === game[2]) { // game ="1:1" game[0]='1' and game[2]='1'
//       return accumulator += 1;
//     } else if (game[0] > game[2]) { // game ="3:1" game[0]='3' and game[2]='1'
//       return accumulator += 3;
//     }
      
//     return accumulator

//   }, 0);

// let total = 0;

// for(let i = 0; i< games.length ; i++){
//       if (game[0] === game[2]) { // game ="1:1" game[0]='1' and game[2]='1'
//       total += 1;
//     } else if (game[0] > game[2]) { // game ="3:1" game[0]='3' and game[2]='1'
//       total += 3;
//     }
// }

// return total;


// //[1,2,3]

// //[4,8,12]