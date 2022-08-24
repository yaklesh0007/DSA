function Search() {
    let data = [23, 76, 89, 100, 50, 200, 300, 150]
    let searchEl = document.getElementById("searchEl").value
    let index = undefined
    for (i = 0; i < data.length - 1; i++) {
        if (data[i] == searchEl) {
            index = i
            break;
        }
    }
    console.warn(index)
}