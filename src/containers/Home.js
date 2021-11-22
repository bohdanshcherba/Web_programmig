import Home from "../pages/Home/Home";
import {useDispatch, useSelector} from "react-redux";
import itemActions from "../redux/actions/items";
import React, {useEffect, useState} from "react";

const HomeContainer = () => {

    const [countItems, setCountItems] = useState(3)

    const dispatch = useDispatch()

    let data = useSelector(state => state.items.data)
    let isLoading = useSelector(state => state.items.isLoading)

    useEffect(() => {
        dispatch(itemActions.fetchItems())
    }, [])


    return (
        <Home isLoad={isLoading} coffees={data} countItems={countItems}
              setCountItems={setCountItems}/>
    )
}
export default HomeContainer

// export default connect(({items}) => ({
//         data: items.data,
//         isLoading: items.isLoading
//     }),
//     {...itemActions}
// )(HomeContainer)
