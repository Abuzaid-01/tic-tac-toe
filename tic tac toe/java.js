const btn = document.querySelectorAll(".box");
const rst = document.querySelector(".reset");
const rstbtn = document.querySelector(".new")
const newbtn = document.querySelector("#new-btn");
const msg = document.querySelector(".msg-container");

let turno = true;
const winnigs = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const reset = () => {
    let turno = true;
    msg.classList.add("hide");
    enableboxes();
} 

const news = () => {
    let turno = true;
    msg.classList.add("hide");
    enableboxes();
} 

const enableboxes = () => {
    for (let jox of btn){
        jox.disabled = false;
        jox.innerText = "";
    }
};





//console.log("button was clicked");
btn.forEach((box) => {
    box.addEventListener("click", () => {  
        
        if (turno === true) {
            box.innerText = "O";
            turno = false;
        } else {
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true;
        checkWinner()
    });
});

const disbtn = () => {
    for (let tox of btn){
        tox.disabled = true;
    }
};

const showWinner = (winner) => {
    msg.innerText = `CONGRATULATION WINNER IS ${winner}`;
    msg.classList.remove("hide"); 
    disbtn();
};

const checkWinner = () => {
    for (let pattern of winnigs){
        let pos1val1 = btn[pattern[0]].innerText;
        let pos1val2 = btn[pattern[1]].innerText;
        let pos1val3 = btn[pattern[2]].innerText;
        if(pos1val1 != "" && pos1val2 != "" && pos1val3 != ""){
            if(pos1val1 === pos1val2 && pos1val2 === pos1val3){
                console.log("winner",  pos1val1);
                showWinner(pos1val1);
                
            
            }
        }
    }
};

newbtn.addEventListener("click", reset);
rstbtn.addEventListener("click", news);





