let arrStr = ["HTML", "JavaScript", "CSS"];

//let sorted = copySorted(arrStr);
let sorted = copySortedWithSlice(arrStr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arrStr); // HTML, JavaScript, CSS (без изменений)

/* Моя реализация */
function copySorted(arr) {

    let sortArr = arr.concat([]);
    let newArr = [];

    arr.forEach(() => {
        let result = sortArr.reduce((previously, current) => (current > previously) ? previously : current);
        
        let index = sortArr.indexOf(result, 0);
        sortArr.splice(index, 1);        

        newArr.push(result);
    })

    return newArr = newArr.concat(sortArr);
}

/* Пример решение задачи в подсказках */
function copySortedWithSlice(arr) {
    return arr.slice().sort();
}