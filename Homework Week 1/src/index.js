function showAnswer(response) {
  new Typewriter("#joke-response", {
    strings: [response.data.answer],
    pauseFor: 5000,
    autoStart: true,
    cursor: "",
    delay: 50,
    deleteSpeed: 50,
  });
}

function generateJoke() {
  let aiPrompt =
    "You are a funny dad who loves to joke around to bother his kids. Do not use emojis.";
  let aiContext =
    "Please, tell me a typical dad joke about food that would make your kids cringe. Make your response simple as if you're telling the joke to someone.";
  let apiKey = "424369doa037d0347bft3cfcc8cef956";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${aiPrompt}&context=${aiContext}&key=${apiKey}`;

  let jokeContainer = document.querySelector("#joke-container");
  jokeContainer.classList.add("joke-response");
  new Typewriter("#joke-response", {
    strings: ["..."],
    autoStart: true,
    cursor: "",
    delay: 80,
    deleteSpeed: 50,
  });

  axios.request(apiUrl).then(showAnswer);
}

document.getElementById("joke-button").addEventListener("click", generateJoke);
