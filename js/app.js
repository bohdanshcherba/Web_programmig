import renderItemsList, {DELETE_BUTTON_PREFIX, EDIT_BUTTON_PREFIX} from './itemRender.js'

const modal = document.getElementById("myModal")
const text_model = document.getElementById('text-model')
const add_item_btn = document.getElementById('add_item_btn')
const find_input = document.getElementById('find_input')
const find_btn = document.getElementById('find_btn')
const sort_btn = document.getElementById('sort_btn')
const count_btn = document.getElementById('count_btn')
const itemsContainer = document.getElementById('items_container')
const count_price = document.getElementById('count_price')
const not_found = document.getElementById('not_found')

const URl = 'http://localhost:8080/coffee'

let coffees = [
    {
        id: 0,
        name: "Americano",
        price: 50,
        volumeInMl: 200

    },
    {
        id: 1,
        name: "Latte",
        price: 68,
        volumeInMl: 200

    },
    {
        id: 2,
        name: "Espresso",
        price: 80,
        volumeInMl: 250

    },
    {
        id: 3,
        name: "Espresso",
        price: 72,
        volumeInMl: 250

    },
    {
        id: 4,
        name: "Latte",
        price: 68,
        volumeInMl: 200

    },
]
let found_coffees = []
let json = []


let response = await fetch(URl)
if (response.ok) {

    json = await response.json()
    console.log(json)
} else {
    alert("Error HTTP: " + response.status)
}

renderItemsList(json)


coffees = json
found_coffees = json

sort_btn.addEventListener("click", () => {
    let sortedCoffees = Array.from(found_coffees);
    console.log(sortedCoffees)
    sortedCoffees.sort(
        (first, second) => first.price - second.price);

    renderItemsList(sortedCoffees);
});


count_btn.addEventListener('click', () => {
    let count = 0

    for (let item of found_coffees) {
        count += item.price
    }

    count_price.innerText = count
})



find_btn.addEventListener('click', () => {
        let found_coffee = find_input.value
        console.log(found_coffee)
        found_coffees = []
        let found = false

        for (let item of coffees) {
            if (item.name === found_coffee) {
                found = true
                found_coffees.push(item)

            } else {
                itemsContainer.innerHTML = "";
                not_found.innerText = 'Not found'

            }
        }
        if (found) {
            not_found.innerText = "";
            renderItemsList(found_coffees);
        }

        if (found_coffee === '') {
            not_found.innerText = "";
            renderItemsList(coffees);

        }
    }
)



const items = document.querySelectorAll('.card')

const deleteEl = (items) => {
    for (let item of items) {
        const deleteButton = document.getElementById(`${DELETE_BUTTON_PREFIX}${item.id}`);

        deleteButton.addEventListener('click', () => {
            fetch(URl + '/' + item.id, {
                method: 'DELETE',
            })
                .then(res => res.text())
                .then(res => console.log(res))

        })
    }

}

const update_item = async (item) => {
    let response = await fetch(URl, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(item[0])
    })
    alert('Success')

}

const editEl = (items) => {

    let coffee = []

    for (let item of items) {
        const editButton = document.getElementById(`${EDIT_BUTTON_PREFIX}${item.id}`);

        editButton.addEventListener('click',()=>{
            modal.style.display = "block"
            text_model.textContent = 'Edit'
            add_item_btn.textContent = 'Edit'

            add_item_btn.onclick = function () {
                let id = item.id
                let name = input_name.value
                let price = input_price.value
                let volumeInMl = input_volumeInMl.value

                if (name !== '' && price !== '' && volumeInMl !== '') {
                    modal.style.display = "none"
                    coffee.push({id,name, price, volumeInMl})
                    console.log(coffee)
                    update_item(coffee).then(r => console.log(r))

                } else {
                    alert("Всі поля повинні бути заповненні")
                }

            }

        })

    }
}


deleteEl(items)
editEl(items)
