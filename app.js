let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let turnO = true;
let msgO = document.querySelector("#msg-O");
let msgX = document.querySelector("#msg-X");
let turnMsg = document.querySelector(".turn-msg");

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const disabledBtns = () => {
    for(let box of boxes){
        box.disabled = true;
    };
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            msgO.innerText = "";
            msgX.innerHTML = "<span class='player-name'>X's</span> Turn";
            turnO = false;
        }else{
            box.innerText = "X";
            msgX.innerText = "";
            msgO.innerHTML = "<span class='player-name'>O's</span> Turn"
            turnO = true;
        };
        box.disabled = true;

        chekWinner();
    });
});

const chekWinner = () => {
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === "O" && pos2 === "O" && pos3 === "O"){
                msgX.innerText = "O is winner";
                msgO.innerText = "O is winner";
                msgX.style.backgroundColor = "#fc039d";
                msgO.style.backgroundColor = "#fc039d";
                msgX.style.fontWeight = "700";
                msgO.style.fontWeight = "700";
                disabledBtns();
            }else if(pos1 === "X" && pos2 === "X" && pos3 === "X"){
                msgX.innerText = "X is winner";
                msgO.innerText = "X is winner";
                msgX.style.backgroundColor = "#fc039d";
                msgO.style.backgroundColor = "#fc039d";
                msgX.style.fontWeight = "700";
                msgO.style.fontWeight = "700";
                disabledBtns();
            };
        };
    };
};

const resetGame = () => {
    turnO = true;
    msgX.innerText = "";
    msgO.innerHTML = "<span class='player-name'>O's</span> Turn"
    msgX.style.backgroundColor = "white";
    msgO.style.backgroundColor = "white";
    for(let box of boxes){
        box.innerText = "";
        box.disabled = false;
    };
};
resetBtn.addEventListener("click", resetGame);

const newGame = () => {
    turnO = true;
    msgX.innerText = "";
    msgO.innerHTML = "<span class='player-name'>O's</span> Turn"
    msgX.style.backgroundColor = "white";
    msgO.style.backgroundColor = "white";
    for(let box of boxes){
        box.innerText = "";
        box.disabled = false;
    };
};
newBtn.addEventListener("click", newGame);