// let data=[20,30,40,60,70]
// const newel=50
// const position=3
// for(i=data.length-1;i>=0;i--){
//     console.warn(`${data[i]}`)
//    if(i>=position){
//     data[i+1]=data[i]
//     if(i==position){
//         data[i]=newel
//     }
//    }
// }
// console.warn(data)

function insertnewelement() {
    let items = [120, 221, 220, 210, 300, 240, 600]
    let newEl = document.getElementById("newEl").value
    newEl=parseInt(newEl)
    let Position = document.getElementById("Position").value
    if (Position <= items.length && typeof parseInt(Position) == "number") {
        for (i = items.length - 1; i >= 0; i--) {
            if (i >= Position) {
                items[i + 1] = items[i]
                if (i == Position && typeof parseInt(newEl) == "number") {
                    items[i]=newEl
                }
            }

        }
    }
    else{
        alert("please enter valid position and valid element as both need to be numeric")
    }
    // splice method can do this in single line
    // items.splice(Position,0,newEl)
   console.warn(items)

}