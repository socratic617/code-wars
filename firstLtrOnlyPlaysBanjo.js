function areYouPlayingBanjo(name) {
 if( name[0]  === 'R'|| name[0] === 'r' ){// remember you can get first letter using bracket notation by selecting  which character in string you want to select 
   return name + ' plays banjo' // you can go about using an expression to return 
 }
  else{
    return name + ' does not play banjo'
  }
}