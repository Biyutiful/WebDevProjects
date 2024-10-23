function enter(){
    alert("You have entered the portal");
}
function exit(){
    alert("You will return to your world!");
    window.location.href = 'BIYU_Home.html';
}
function confirms(){
    let text = "You have entered into an unknown world.\nYou hear a voice calls upon you.\n\"Traveler, do you wish to continue? \"";
    if (confirm(text) == true) {
      text = "Hello, adventurer! You have been given a choice to enter a world of mystery and adventure...";
      setTimeout(function(){prompts();}, 3000);
    } else {
      alert("You will return to your world!");
      window.location.href = 'BIYU_Home.html';
    }
    document.getElementById("landing").innerHTML = text;
}

function prompts(){
  let player = prompt("What is your name?", "...");
  if (player != null) {
    document.getElementById("chara").innerHTML =
    "Welcome " + player + " to the world of Dungeons & Dragons\n";  

    setTimeout(function(){    
    let plot = prompt("Choose your adventure: \nFantasy, \nIsekai,\nSuperhero\nor etc.", "Enter your choice");
    switch(plot) {
      case "fantasy":
        text = "Excellent choice! A classic start to your adventure.\nEnjoy your journey.";
        break;
      case "isekai":
        text = "Interesting choice, I see you are a man of culture.\nMay the odds be in your favor...";
        break;
      case "superhero":
        text = "Hmmm, very good choice. The modern world filled with humans posessing powerful abilities.\nRemember that great power comes great responsibility...";
        break;
      default:
        text = "Your journey begins, young adventurer!";
    }
    document.getElementById("scene").innerHTML = text;
    }, 3000)
  }
}


function modal(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}

//ACCORDIAN
  var acc = document.getElementsByClassName("accord");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }

function fields(){
  var data_options = document.getElementById('data_options');
  var add_field = document.getElementById('add');
  var remove_field = document.getElementById('remove');
  
  add_field.onclick = function(){
      var newField = document.createElement('input');
      newField.setAttribute('type', 'text');
      newField.setAttribute('name', 'character[]');
      newField.setAttribute('class', 'data_options');
      newField.setAttribute('placeholder', 'New Character');
      data_options.appendChild(newField);
  }

  remove_field.onclick = function(){
      var input_tags = data_options.getElementsByTagName('input');
      if (input_tags.length >= 2){
          data_options.removeChild(input_tags[(input_tags.length) - 2]);
      }
  }
}