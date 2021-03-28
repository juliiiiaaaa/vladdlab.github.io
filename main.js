// одержимое тега textarea хранится в его свойстве value

// Подскзка №2: Не забывайте, что LocalStorage и SessionStorage могут хранить только строки в виде пар ключ/значение
click = function () {
    stroka = document.querySelector('#F').value
    localStorage.setItem(`comment ${localStorage.length + 1}`, stroka)
    let comment = localStorage.getItem('comment')
    document.querySelector('.allComments').innerText=(comment)
}

