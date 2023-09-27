


let turn="0"
let wins=false
const changeTurn=()=>{
 return turn==="0"?"X":"0"
}
let a=document.getElementsByClassName('box')
Array.from(a).forEach((ele,i)=>{
    ele.addEventListener('click',()=>{//click ka bhi option nahi aa raha ahai
let boxtext=ele.querySelector('.boxtext')

if(boxtext.innerText==""){
    boxtext.innerText=turn
   turn= changeTurn()
   let d=document.querySelector('.info')
   checkWin()
if(!wins){
   d.innerText=" Turn of "+ turn
}
  
}
})
})

const checkWin=()=>{
    let win=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    let boxtext=document.getElementsByClassName('boxtext')
    win.forEach((ele)=>{
        if(boxtext[ele[0]].innerText===boxtext[ele[1]].innerText && boxtext[ele[1]].innerText===boxtext[ele[2]].innerText && boxtext[ele[0]].innerText!==""){
      
        ele.forEach((e)=>{
            boxtext[e].style.color="aqua"
        })
        wins=true
document.querySelector('.info').innerText=boxtext[ele[0]].innerText+ " Wins"
document.getElementsByTagName('img')[0].style.width="200px"
    }
    })
}
//array access
//class return html collection
//querySelectorAll returns nodelist
//id can be accesed directly

//reset........................
reset.addEventListener('click',()=>{
    console.log("reset clicked")
   let boxtext= document.querySelectorAll('.boxtext')
   Array.from(boxtext).forEach((ele)=>{
    ele.innerText=""
    ele.style="none"
   })
   document.getElementsByTagName('img')[0].style.width="0"
   wins=false
  turn="0"
   document.querySelector('.info').innerText="Turn of "+turn

})