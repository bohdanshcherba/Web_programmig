import api from "../../api/api";

const itemActions = {
    setItems: data => ({
        type: "ITEMS:SET_DATA",
        payload: data
    }),
    setIsLoading: bool => ({
        type: "ITEMS:SET_IS_LOADING",
        payload: bool
    }),
    setResult: result => ({
        type: "ITEMS:SET_FOUND_ITEMS",
        payload: result
    }),
    addItemToBasket: item => ({
        type: "ITEMS:ADD_ITEM_TO_BASKET",
        payload: item
    }),
    removeItemFromBasket: id =>({
        type: "ITEMS:REMOVE_ITEM_FROM_BASKET",
        payload: id
    })

    ,
    fetchItems: () => dispatch => {
        dispatch(itemActions.setIsLoading(true))
        api
            .getAll()
            .then(({data}) => {
                dispatch(itemActions.setItems(data))
                dispatch(itemActions.setIsLoading(false))
            })
            .catch(err => {
                dispatch(itemActions.setIsLoading(false))
                console.log("Error in action Items", err)
            })
    },

    searchItems: (nameItems) => dispatch => {
        dispatch(itemActions.setIsLoading(true))
        api
            .searchCoffee(nameItems)
            .then(({data}) => {
                dispatch(itemActions.setResult(data))
                dispatch(itemActions.setIsLoading(false))
            })
            .catch(err => {
                dispatch(itemActions.setIsLoading(false))
                console.log("Not Found", err)
            })
    },

    addToBasket: (item) => dispatch =>{
        dispatch(itemActions.setIsLoading(true))
        dispatch(itemActions.addItemToBasket(item))
        dispatch(itemActions.setIsLoading(false))

    },

    removeFromBasket: (id) => dispatch =>{
        dispatch(itemActions.setIsLoading(true))
        dispatch(itemActions.removeItemFromBasket(id))
        dispatch(itemActions.setIsLoading(false))

    }
}


export default itemActions
