function showAnswer(response) {
    alert(response.data.answer);
}
  
let aiPrompt = "Who was the first female president?";
let aiContext = "You are an expert historian. Please give a very concise answer in a sentence.";
let aiApiKey = "424369doa037d0347bft3cfcc8cef956";
let aiApiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${aiPrompt}&context=${aiContext}&key=${aiApiKey}`;
  
axios.get(aiApiUrl).then(showAnswer);
  