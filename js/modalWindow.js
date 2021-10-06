const modal = document.getElementById("myModal")
const add_btn = document.getElementById("add_btn")
const span = document.getElementsByClassName("close")[0]
const input_name = document.getElementById('input_name')
const input_price = document.getElementById('input_price')
const input_volumeInMl = document.getElementById('input_volumeInMl')
const add_item_btn = document.getElementById('add_item_btn')
const text_model = document.getElementById('text-model')


add_btn.onclick = function () {
    modal.style.display = "block"
    text_model.textContent = 'New Item'
    add_item_btn.textContent = 'Add'


}

span.onclick = function () {
    modal.style.display = "none"
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}

let item = []

const post_item = async (item) => {
    let response = await fetch('http://localhost:8080/coffee', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(item[0])
    })
    alert('Success')

}

add_item_btn.onclick = function () {
    let name = input_name.value
    let price = input_price.value
    let volumeInMl = input_volumeInMl.value

    if (name !== '' && price !== '' && volumeInMl !== '') {
        modal.style.display = "none"
        item.push({name, price, volumeInMl})
        console.log(item)
        post_item(item).then(a => console.log(a))
    } else {
        alert("Всі поля повинні бути заповненні")
    }

}

