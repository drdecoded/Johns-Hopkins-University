(function(window) {
  var helloSpeaker = {};
  var speakWord = "Hello";

  helloSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
    appendMessage(speakWord + " " + name);
  };

  window.helloSpeaker = helloSpeaker;
})(window);
