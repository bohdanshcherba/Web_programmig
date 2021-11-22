const initialState = {
    data: [
        {
            "id": 0,
            "img": null,
            "name": "",
            "price": 0,
            "volumeInMl": 0,
            "inBasket": false
        }
    ],
    isLoading: false,
    results: [
        {
            "id": 0,
            "img": null,
            "name": "",
            "price": 0,
            "volumeInMl": 0,
            "inBasket": false,
        }],
    basket: [
        {
            "id": 0,
            "img": null,
            "name": "",
            "price": 0,
            "volumeInMl": 0,
            "inBasket": true,

        }],
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case "ITEMS:SET_DATA":
            return {
                ...state,
                data: payload,
            };
        case "ITEMS:SET_FOUND_ITEMS":
            return {
                ...state,
                results: payload,
            };
        case "ITEMS:SET_IS_LOADING":
            return {
                ...state,
                isLoading: payload
            };
        case "ITEMS:ADD_ITEM_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, payload]
            };

        case "ITEMS:REMOVE_ITEM_FROM_BASKET":
            return {
                ...state,
                basket: state.basket.filter((item) => item.id !== payload)
            };
        default:
            return state;
    }

}
