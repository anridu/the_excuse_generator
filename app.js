var who = ['My dog', 'My grandma', 'Her friend', 'My brother', 'My cat', 'My son', 'His turtle', 'Her horse'];
var action = ['ate', 'broke', 'burned', 'crushed', 'kicked', 'threw', 'yelled', 'stole'];
var what = ['my homework', 'my umbrella', 'the keys', 'my bike', 'my car', 'my computer', 'the phone', 'my sandwich'];
var when = ['today', 'this morning', 'before class', 'yesterday', 'five minutes ago', 'last week', 'yesterday evening', 'earlier today'];


function getRandomIndex(array){
    return array[Math.floor(Math.random()*array.length)];
}
let excusa=getRandomIndex(who)+"" +getRandomIndex(action)+""+getRandomIndex(what)+""+getRandomIndex(when);