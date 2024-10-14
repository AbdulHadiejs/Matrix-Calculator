let boxes1 = document.querySelector("#box1");
let boxes2 = document.querySelector("#box2");
let form = document.querySelector("#form-box");
let sumBtn = document.querySelector("#sum");
let finalBox = document.querySelector("#final-box");
let dropBtn = document.querySelector("#Main-Sum");
let length;

form.addEventListener("submit", (event) => {
    event.preventDefault();
    length =  Number(event.target.children[0].value);
 
    boxes1.innerHTML = "";
    boxes2.innerHTML = "";
    for (let i = 0; i < length; i++){
        for (let j = 0; j < length; j++){
            boxes1.innerHTML += `<input type="number" id="Ebad-${i}${j}" value="0" style="width: 30px">`;
            boxes2.innerHTML += `<input type="number" id="Hammad-${i}${j}" value="0" style="width: 30px">`;
        }
        boxes1.innerHTML += `<br>`
        boxes2.innerHTML += `<br>`
    }
    event.target.children[0].value = "";
})


sumBtn.addEventListener("click", (event) =>{
    event.preventDefault();
    finalBox.innerHTML = "";
    let option = dropBtn.value;


    for (let i = 0; i < length; i++){
        for (let j = 0; j < length; j++){
            let value;
            if (option === "-"){
                value = Number(document.querySelector(`#Ebad-${i}${j}`).value) - Number(document.querySelector(`#Hammad-${i}${j}`).value); 
            } else if (option === "+") {
                value = Number(document.querySelector(`#Ebad-${i}${j}`).value) + Number(document.querySelector(`#Hammad-${i}${j}`).value);
            }
            else if (option === "*") {
                value = Number(document.querySelector(`#Ebad-${i}${j}`).value) * Number(document.querySelector(`#Hammad-${i}${j}`).value);
            }
            finalBox.innerHTML += `<input type="number" value="${value}" style="width: 30px" readonly>`;
        }
            finalBox.innerHTML += `<br>`
    }
} )

