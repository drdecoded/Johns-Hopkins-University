(function() {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();

    if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]); 
    } else {
        helloSpeaker.speak(names[i]);
    }
  }
})();

function appendMessage(message) {
  var greetingsList = document.getElementById("greetings");
  var listItem = document.createElement("li");
  listItem.textContent = message;
  greetingsList.appendChild(listItem);
}
