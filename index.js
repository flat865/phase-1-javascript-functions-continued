
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`; 
}
function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}
function wrapAdjective(adjective = '*'){
 const inside = function(activity = "special"){
   return `You are ${adjective}${activity}${adjective}!`;
}
return inside
}

