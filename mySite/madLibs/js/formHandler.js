console.log("hello hi hello")



function write(){

    console.log("Inside the write function");


//variables

var adj = document.getElementById('adjective').value;
var num = document.getElementById('number').value;
var emo = document.getElementById('emotion').value;
var resrc = document.getElementById('resource').value;
var body = document.getElementById('body').value;
var name = document.getElementById('name').value;
var meat = document.getElementById('meat').value;
var verb = document.getElementById('verb').value;
var verb2 = document.getElementById('verb2').value;

console.log(adj);
console.log(num);
console.log(emo);
console.log(resrc);
console.log(body);
console.log(name);
console.log(meat);
console.log(verb);
console.log(verb2);


var colr;
if(document.querySelector('input[name="colour"]:checked') != null){

    
    colr= document.querySelector('input[name="colour"]:checked').value;
    
     }else{
    
    
    colr="";
    
     }
    
    console.log(colr);


var colrMessage;

if(colr=="blue"){
    colrMessage = "The zombies had a blue tint to their skin.";
}else if(colrMessage =="green"){
    colrMessage = "The zombies had a green tint to their skin.";
}else if(colr=="purple"){
    colrMessage = "The zombies had a purple tint to their skin.";
}

console.log(colrMessage);



document.getElementById('output').innerHTML = "It was another "+adj+" day in the zombie apocalypse. "+num+" days without real food and it was clear everyone was starting to lose it. The squad was made up of a small group of people that had found each other just as the virus started to spread. These people were "+emo+" and given their situation, it’s no surprise that would be the case. Of all things, the largest resource they seem to have is/are "+resrc+". It was not something they could live off of though. "+colrMessage+" It looked like most of them were missing their "+body+" too. Many have grown skeptical of "+name+" who had started to act strange, demanding they find "+meat+" to eat. In this rough terrain, finding livestock of any kind might be harder than "+verb+". They were concerned that he may have been bitten and infected by the zombie virus. Would he try and hide it, or would he reveal it to the rest of the group to keep them safe? This is no laughing matter. The apocalypse was extremely serious and needed to be treated as such. Only refined methods of dealing with the zombies could be used, such as "+verb2+". As the others began to circle around "+name+", he began to sweat. They acted as if he was never a part of their group to begin with. It was a shame their squad now had One. Less. Member.";

// Note: Because the text is justified, it spaces out the last three words. I decided to intentionally use that wide space to add empthasis to the final sentence!

document.getElementById('output').innerHTML += "<img class='img-fluid' src= 'images/zombie.jpg' alt= 'zombie girl laying in a hallway'>";

}

