// Code your solutions in this file
function writeCards(obj, event) {
    const thanks = [];
    for (let x = 0; x < obj.length; x++)
        thanks.push("Thank you, " + obj[x] + ", for the wonderful " + event + " gift!");
        return thanks;
}
function countDown(pos){
    while(pos>=0){
        console.log(pos);
        pos--;
    }
}
