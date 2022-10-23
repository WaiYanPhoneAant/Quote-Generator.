const newQuote=document.getElementById("new-quote");
const quoteHtml=document.getElementById('quote');
const author=document.getElementById('author');
const quoteContainer=document.getElementById('quote-container');
const loader=document.getElementById('loader');


let quoteData=[];

const loading=()=>{
    loader.hidden=false;
    quoteContainer.hidden=true;
};

const dataShow=()=>{
    loader.hidden=true;
    quoteContainer.hidden=false;
}


const randomQuote=()=>{

   const quote=quoteData[Math.floor(Math.random()*quoteData.length)];
   quoteHtml.textContent=quote.text;
   author.textContent=quote.author;
    if(!quote.author){
        author.textContent="anonymous"
    }else{
        author.textContent=quote.author;
    }

    if(quote.text.length>50){
        quoteHtml.classList.add('long-quote');
    }else{
        quoteHtml.classList.remove('long-quote');
    }
    dataShow()
}


newQuote.addEventListener('click',randomQuote);


async function quoteGeneratror() {
    loading();
    const apiUrl="https://type.fit/api/quotes";
    try {
        const response=await fetch(apiUrl);
        quoteData=await response.json();
        randomQuote();

        // random value

        
        dataShow();
    } catch (error) {
        console.log(error);
    }
}
quoteGeneratror();