let beginButton = document.getElementById("button");
let firstdiv = document.getElementById("firstdiv");
let quote = document.getElementById("quote");
let textarea = document.getElementById("textarea");
let currentword = { currentWord: '' }
let section = document.querySelectorAll("section");
let form = document.getElementById("form");
let time = document.getElementById("time");
let range = document.getElementById("range");
let numberofwords = 0;
let sec = 0 ;
var wordArray = [
    "once",
    "upon",
    "a",
    "time",
    "I",
    "was",
    "doing",
    "Javascript",
    "Assignment",
    "3"
];




function nextword(){
    
    let size = range.value;
    let word = wordArray.slice(0,size)[numberofwords++];
    quote.textContent = word;
    currentword.currentWord = word; 
}


function starttime() 
{
    let intervalid = window.setInterval(tocker, 1000);
    function tocker(){
       
        sec++;
        if (sec < 20 && quote.textContent === '')
        {

            
            let p = document.createElement("p");
            p.setAttribute('id', 'ptag1');
            let ptext = document.createTextNode("Game won");
            p.appendChild(ptext);
            section[0].appendChild(p);
            textarea.disabled = true;
            clearInterval(intervalid)
        }
      
}}
function startcount()
{
    let timeout = window.setTimeout(ticker,20000);
    function ticker(){
        if (quote.textContent !== ''){
            let p1 = document.createElement("p");
            p1.setAttribute('id', 'ptag2');
            let ptext1 = document.createTextNode("Game over");
            p1.appendChild(ptext1);
            section[0].appendChild(p1);
           textarea.disabled = true;
            
            clearTimeout(timeout)

        }else{clearTimeout(timeout)
        }
    }
}
beginButton.addEventListener('click', hide);
function hide(event) {
    event.preventDefault();
    firstdiv.setAttribute('class', 'hide');
    quote.setAttribute('class', '');
    textarea.setAttribute('class', '');
    time.setAttribute('class', '');
    textarea.focus();
    nextword();
    starttime();
    startcount();
    

}

let userinput = document.getElementById("textarea").value
let one = [userinput];
textarea.addEventListener('keyup', handlerFunction);
function handlerFunction(event) {
    event.preventDefault();
    let userinput = document.getElementById("textarea").value
    if (userinput === '') {
        return;
    }
    let iscorrect = userinput === currentword.currentWord;
    if (iscorrect) {
        quote.setAttribute('style', 'background-color: green;');

        document.getElementById("textarea").value ='';
        nextword();
        
        
    }
    
    
    else {
        quote.setAttribute('style', 'background-color: red;');
    }
    
}


 
















