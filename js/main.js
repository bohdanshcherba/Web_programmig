const find_input = document.getElementById('find_input')
const find_btn = document.getElementById('find_btn')
const sort_btn = document.getElementById('sort_btn')
const count_btn = document.getElementById('count_btn')
const itemsContainer = document.getElementById('items_container')
const count_price = document.getElementById('count_price')
const not_found = document.getElementById('not_found')


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
found_coffees = coffees

const itemTemplate = ({id, name, price, volumeInMl}) => `
<li id="${id}" class="card" draggable="true">
  <img
    src="https://elements-video-cover-images-0.imgix.net/files/85e0d3d8-4e42-404b-849b-3580e12ede73/inline_image_preview.jpg?auto=compress%2Cformat&fit=min&h=394&w=700&s=1fbaad74d51834633859fddc56e96010"
    class="card-img" alt="card">
  <div class="card-body">
    <h5 class="card-name">${name}</h5>
    <p class="card-price">${price}</p>
    <p class="card-volume">${volumeInMl}</p>
  </div>
</li>`;


const addItemToPage = ({_id: id, name, price, volumeInMl}, onEditItem, onRemoveItem) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({id, name, price, volumeInMl})
    );
};

const renderItemsList = (items, onEditItem, onRemoveItem) => {
    itemsContainer.innerHTML = "";

    for (const item of items) {
        addItemToPage(item, onEditItem, onRemoveItem);
    }
};

renderItemsList(found_coffees)


sort_btn.addEventListener("click", () => {
    let sortedCoffees = Array.from(found_coffees);

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
