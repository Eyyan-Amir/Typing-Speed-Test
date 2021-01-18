import React, { useEffect } from 'react'
import './App.css';

function App() {

  let setWord =["programming","codding in react js","we are web developers","that we have that we Love that we call react" ];
  let msg , textArea , typeWords , btn ;
  useEffect(() => {
     msg = document.getElementById("msg");
     textArea = document.querySelector("textarea");
     typeWords = document.getElementById("myWords");
     btn = document.getElementById("btn");
    
  }, [])
  let startTime, endTime;
  console.log(btn);
  const handleClick = ()=>{
    console.log(btn);
    if(btn.innerText == "Start"){
      textArea.classList.toggle("textArea");
      document.getElementById("myWords").focus();
      playGame();
    } else if(document.getElementById("btn").innerText == "Done"){
      textArea.classList.toggle("textArea");
      endPlay();
      typeWords.value = ("");
      btn.innerText = "Start";
    }
  };
  const playGame = ()=>{
    let rndNmber =Math.floor(Math.random()*setWord.length);
    // console.log(rndNmber);
    msg.innerText = setWord[rndNmber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done"; 
  } 
  const endPlay = ()=>{
    let date = new Date();
    endTime = date.getTime();
    let totalTime = Math.round((endTime - startTime) /1000);
    let totalStr = typeWords.value;

    let countStr = countWords(totalStr);
    let speed = Math.round((countStr/totalTime)*60)
    let finalMsg = `Total words ${countStr} in ${totalTime} per second, and average is ${speed} per minute `;
    finalMsg += compareWords(msg.innerText,totalStr);

    msg.innerText = finalMsg;

 
  }
  const countWords = (str)=>{
    let response = str.split(" ").length;
    console.log(response);
    return response;

  }

  const compareWords = (str1,str2)=>{
    let word1 = str1.split(" ");
    let word2 = str2.split(" ");
    let cnt = 0;

    word1.forEach((item,index) => {
      if(item == word2[index]){
        cnt++ ;
      }
    })
      let errorWords = (word1.length - cnt);
      return(`${cnt} Words correct out of ${word1.length} words` )
      
  }
  return (
    <div className ="mainDiv">
    <div className = "body">
      <h1> Welcome to Typing Speed Test </h1> 
      <h2 id ="msg"></h2>
      <br/>
      <textarea id ="myWords"  cols="100" rows = "10" placeholder="Remember,be Nice !" className="textArea" />
      <br/>
      <button  id ="btn" className="btn" onClick={handleClick}>Start</button>

    </div>
    </div>
  );
}

export default App;
