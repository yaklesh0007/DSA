let data=[9,45,2,8,45,23,7,78,0,11,41,77]

for(let i=0;i<data.length;i++){
    document.write(`Array ${i} is: ${data[i]} <br>`)
}

function getElement() {
    let el = document.getElementById("element").value
    if(el<data.length && typeof parseInt(el)==="number" && el>0){
        alert(`element at index ${el} is ${data[el]}`)
    }
    else{
        alert("invalid input!!")
    }
}