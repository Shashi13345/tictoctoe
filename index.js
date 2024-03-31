
let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".div10");

let newgamebtn=document.querySelector("#new-btn");

let msgcontainer=document.querySelector(".msg-container");

let msg=document.querySelector("#msg");

 let turn0=true;

 let winPatterns=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],
 ];

 boxes.forEach((box)=>{

    box.addEventListener("click",()=>{

        if(turn0){
        box.innerText="O";
       
        turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;//dobara box ka elemnt chane n ho
checkwinner();

    });
 });

const resetgame=()=>{

    turn0=true;
    enabledboxes();

    msgcontainer.classList.add("hide");

}

 const enabledboxes=()=>{

    for(let box of boxes){

       
        box.disabled=false;
        box.innerText="";
    }
 };

 const disabledboxes=()=>{

    for(let box of boxes){

        box.disabled=true;
    }
 }


 const showwinner=(winner)=>{

    msg.innerText=`Congrats Winner is ${winner}`;

    msgcontainer.classList.remove("hide");

    disabledboxes(); //winner hone k bad box br click hone s kuch nhi display ho
 }

 const checkwinner=()=>{

    for(let pattern of winPatterns){
        // console.log(pattern);

        // console.log(boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText);

   let pos1=boxes[pattern[0]].innerText;
   let pos2=boxes[pattern[1]].innerText;
    let pos3=boxes[pattern[2]].innerText;

    if(pos1!="" && pos2!="" && pos3!=""){

        if(pos1===pos2 && pos2===pos3){
            console.log("winner",pos1);

            showwinner(pos1);
        }
    }

    }

 };
 
 newgamebtn.addEventListener("click",resetgame);

resetBtn.addEventListener("click",resetgame);
