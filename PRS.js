let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choic");
const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const gencompChoie= () => {
    const option =["rock","Paperr","Sciser"];
   const randidx=Math.floor( Math.random()*3);
   return option[randidx];
};
const drwagame=()=>{
    console.log("drawGAme ");
    msg.innerText="Game was Draw paly again";
    msg.style.backgroundColor="yellow";
    msg.style.color="black";
    // msg.innerText=`GAme was Draw `;
};
const showWin=(userWin,userchoice,compuchoice)=>{
     if(userWin){
        userScore++;
        userscorepara.innerText= userScore;
    msg.style.backgroundColor="green";
    msg.innerText=`YOU win! Your  ${userchoice} beats ${compuchoice}`;
     }
     else{
           compScore++;
           compscorepara.innerText= compScore;
        msg.style.backgroundColor="red";
        msg.innerText=`YOU Lost! Your ${compuchoice} beats ${userchoice}`;


     }
}



const playGAme=(userchoice)=>{
    const compuchoice=gencompChoie();

    if(userchoice === compuchoice){
        drwagame();
    }else
        {
    let userWin = true;
    if(userchoice === "rock"){
       userWin = compuchoice === "paperr" ? false:true;
    }else if(userchoice === "paperr"){
        userWin= compuchoice === "Sciser"? false:true;
    }
    else{
        userWin=compuchoice === "rock"?false:true;

    }
    showWin(userWin,userchoice,compuchoice);
        } 
};


choices.forEach((choic) => {
    // console.log(choice);
    choic.addEventListener("click",()=>{
        const userchoice=choic.getAttribute("id");
           playGAme(userchoice);
    });
});
