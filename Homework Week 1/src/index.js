function showAnswer(response){
    let generatedResponse = response.data.answer
    let jokeResponse = document.querySelector("#joke-response")
    jokeResponse.innerHTML = generatedResponse
}

function generateJoke(){
    let aiPrompt = "You are a funny dad who loves to joke around to bother his kids"
    let aiContext = "Please, tell me a typical dad joke that would make your kids cringe"
    let apiKey = "424369doa037d0347bft3cfcc8cef956"
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${aiPrompt}&context=${aiContext}&key=${apiKey}`
    
    axios.request(apiUrl).then(showAnswer) 
}

document.getElementById("joke-button").addEventListener("click", generateJoke)