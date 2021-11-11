"use strict"
{
  let i = 1;
  function setWord() {
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
    if(i === 244){
      target.textContent = word;
    } else{
      target.textContent = `${i}  ${word}`;
    }
    i++;
    loc = 0;
  }

  const words = [
    "boolean","break","case","class","continue","else","for","if","new","print",
    "public","return","static","string","switch","system","this","void","float","double",
    "int","char","long","byte","main","do","while","enum","extends","super",
    "equal","catch","finally","throw","try","unable","minimum","implements","price","constructor",
    "error","entry","warning","download","including","save","table","restart","dialog","replace",
    "let","port","component","define","item","width","version","lock","fill","move",
    "declared","type","const","timeout","preview","data","position","skip","template","record",
    "row","link","weight","export","sign","identifier","limit","field","from","reference",
    "commit","route","device","context","range","array","gabage","false","import","odd",
    "parameter","label","resource","exit","rename","reset","total","file","syntax","release",
    "role","upload","search","output","short","log","directory","task","unexpected","property",
    "access","submit","level","configuration","clear","container","integer","pattern","disk","wizard",
    "backup","command","database","protect","none","previous","invalid","current","input","get",
    "match","instance","select","delete","package","character","root","add","connection","available",
    "security","support","empty","view","var","store","report","default","global","require",
    "function","option","uncaught","exist","local","content","query","avoid","temporary","push",
    "exception","fail","client","private","document","module","undo","press","height","login",
    "mode","receive","null","script","target","process","to","debug","even","font",
    "condition","uninstall","code","argument","fix","change","update","request","host","format",
    "hide","popup","source","page","interface","missing","path","override","element","shape",
    "column","step","manager","index","cancel","sort","response","check","true","allow",
    "value","folder","result","flag","successful","image","license","install","node","share",
    "line","validate","edit","pull","length","set","destroy","method","permission","library",
    "sum","author","notice","block","blank","control","patch","distance","count","state",
    "network","remove","server",
  ];
  let word;
  let loc = 0;
  let startTime;
  let isPlaying = false;

  const target = document.getElementById("target");

  
  document.addEventListener("click", () => {
    if(isPlaying === true) {
      return;
    }

    isPlaying = true;
    startTime = Date.now();
    setWord();
  });


  document.addEventListener("keydown", e => {
    if(e.key !== word[loc]){
      return;
    }
    loc++;
    target.textContent = "_".repeat(loc) + word.substring(loc);

      if(loc === word.length){
        if(words.length === 0){
          const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
          const result = document.getElementById("result");
          result.textContent = `Finished! ${elapsedTime} seconds`;
          const restart = document.getElementById("restart");
          restart.textContent = "Click here and Play again!";
          restart.addEventListener("click", () => {
            location.reload();
          });
        }
        setWord();
      }
  });
}