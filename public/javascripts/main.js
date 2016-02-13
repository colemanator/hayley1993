/**
 * Created by Peter on 13/02/16.
 */
$(document).ready(function(){


    /////// GLOBAL VARIABLES ///////

    var recentNumbers = [];

    var statements = [
        "You have a gentle and Kind Heart",
        "You have a beautiful smile",
        "You have an amazing passion for God",
        "You are full of joy",
        "You are full of wisdom",
        "You are always there for me, you always listen",
        "You genuinely care for others",
        "I love making crazy plans with you",
        "I love going on adventures with you",
        "Your always so much fun to be around",
        "I Love you",
        "Your open and honest",
        "You understand me",
        "You understand my spelling haha",
        "You serve others without expecting or wanting a reward",
        "You are beautiful",
        "You have an awesome sense of humour, squirrel haha",
        "You find me Funny",
        "You bring out the best in me",
        "You encourage me",
        "You make me a better man",
        "You are such a loving person",
        "Your sweet",
        "My God's not dead He's surely alive He's living on the inside Roaring like a lion ! he's living on the inside of you",
        "Psalm 139:14 I praise you because you are fearfully and wonderfully made; your works are wonderful, I know that full well",
        "You have an incredible heart for people",
        "Your crazy when your tired, in a good way",
        "You are very creative",
        "You are an authentic person",
        "I love talking to you for hours and hours",
        "You speak with authority and passion that comes from the spirit",
        "You are humble",
        "You are an incredible women of God, with such a massive God Given potential",
        "You are simply amazing",
        "The more I get to know you, the more I discover how amazing you are"
    ];


    /////// EVENT HANDLERS ///////
    $(".hayley-button").click(function(){
        console.log("working");
        outputNextStatement();
    });


    /////// FUNCTIONS ///////
    function outputNextStatement(){
        var output = $(".output");
        output.html(statements[pseudoRandomNumber()]);
    }

    function pseudoRandomNumber(){

        var pesudoRandom = true;

        do{

            pesudoRandom = true;
            var num = Math.floor(Math.random()*statements.length);

            for(var i =0; i < recentNumbers.length; i++){
                if(num == recentNumbers[i]){
                    pesudoRandom = false;
                    break;
                }
            }

        }while(!pesudoRandom);

        recentNumbers.push(num);
        if(recentNumbers.length > 10){
            recentNumbers.shift();
        }

        return num;
    }

});