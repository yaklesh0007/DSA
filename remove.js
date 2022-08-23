function deteleElement() {
    let data = [72, 22, 34, 58, 94, 84]
    let position = document.getElementById("position").value
    position= parseInt(position)
    for (let i = position; i < data.length - 1; i++) {
        data[i] = data[i + 1]
    }
    data.length = data.length - 1
    console.warn(data)
    
}