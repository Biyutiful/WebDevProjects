function register(){
    let text = "Press a button!\nEither OK or Cancel.";
    if (confirm(text) == true) {
      alert("You have registered for the site!\nThank you for your patronage.");
    } else {
      alert("You canceled!");
    }
    document.getElementById("regis").innerHTML = text;
  }