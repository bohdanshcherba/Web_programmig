
const itemsContainer = document.getElementById('items_container')

export const EDIT_BUTTON_PREFIX = 'edit-button-';
export const DELETE_BUTTON_PREFIX = 'delete-button-';


const itemTemplate = ({id, name, price, volumeInMl}) => `
<li id="${id}" class="card" draggable="true">
  <img
    src="https://elements-video-cover-images-0.imgix.net/files/85e0d3d8-4e42-404b-849b-3580e12ede73/inline_image_preview.jpg?auto=compress%2Cformat&fit=min&h=394&w=700&s=1fbaad74d51834633859fddc56e96010"
    class="card-img" alt="card">
  <div class="card-body">
    <h5 class="card-name">${name}</h5>
    <p class="card-price">${price}$</p>
    <p class="card-volume">${volumeInMl}Ml</p>
  </div>
  <div>
  <button id="${EDIT_BUTTON_PREFIX}${id}" class="btn-edit">Edit</button>
  <button id="${DELETE_BUTTON_PREFIX}${id}" class="btn-edit">Delete</button>
</div>
</li>`;


const addItemToPage = ({id, name, price, volumeInMl}, onEditItem, onRemoveItem) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({id, name, price, volumeInMl})
    );


};

export default function renderItemsList(items, onEditItem, onRemoveItem) {
    itemsContainer.innerHTML = "";

    for (const item of items) {
        addItemToPage(item, onEditItem, onRemoveItem);

    }
};





