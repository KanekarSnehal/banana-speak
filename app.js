var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#text-input");
var outputDiv=document.querySelector("#output");


var serverURL="https://api.funtranslations.com/translate/minion.json"

btnTranslate.addEventListener("click",clickHandler)


function clickHandler()
{
    var inputText=txtInput.value;

    //calling server for processing
    fetch(getTranslationURL(inputText))
    .then(response =>response.json())
    .then(json=>{
        var translatedText=json.contents.translated;
        outputDiv.innerText=translatedText;
    })
        
        
    .catch(errorHandler)
    
};


function getTranslationURL(text)
{
    return serverURL+"?"+"text="+text
}

function errorHandler(error)
{
    console.log("error occured",error)
}



