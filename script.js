const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here
check=false;
const search_btn=document.querySelector("#search")
const reset_btn=document.querySelector("#reset")
const mytext=document.querySelector("#text")
const Starttext=mytext.innerHTML;
const eachword=Starttext.split(" ")
var wordnosym=[]
btn_toggle.onclick = () => {
  // your code here
  myInput=length.value;
myID=author.innerHTML.split(" ")
if(check)
{
author.innerHTML="630610759 Latthaphol Laohapiboonrattana"
calculation.innerHTML=""
btn_toggle.innerHTML="Show Calculation"
check=!check;
}
else
{
author.innerHTML=""
calculation.innerHTML=Number(myID[0])-myInput
btn_toggle.innerHTML="Show Author"
check=!check;
}
}
// more codes for Search and Reset buttons here
search_btn.onclick=()=>{
 var myInput=Number(length.value);
  var myindex=[]
   var highlighttext=""
for (let indexi = 0; indexi < eachword.length; indexi++) {
  const element = eachword[indexi];
  let temp=""
  for (let indexj = 0; indexj < element.length; indexj++) {
    const iterator = element[indexj];
    ascii=iterator.charCodeAt(0)
    if((ascii>=65&&ascii<=90)||(ascii>=97&&ascii<=122))
    {
      temp+=iterator
      continue
    }
  }
  wordnosym.push(temp)
}

for (let index = 0; index < wordnosym.length; index++) {
  const element = wordnosym[index];
  if(myInput===element.length)
  {
  myindex.push(index)
  }
}
console.log(myindex)
for (let index = 0; index <eachword.length; index++) {
  const element = eachword[index];
  if(myindex.find(x=>x==index))
  {
    
highlighttext+="<mark style='background-color:"+color.value+"'>"+element+"</mark>"+" "
  }
  else
  {
highlighttext+=element+" "
  }
}
console.log(color.value)
mytext.innerHTML=highlighttext
}



reset_btn.onclick=()=>
{
  console.log("reset")
  mytext.innerHTML=Starttext;
}