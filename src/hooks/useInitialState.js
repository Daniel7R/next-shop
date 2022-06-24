import { useState } from "react";

const initialState = {
    cart: [],
    toggleOrders: false,
    toggleMenu: false
}

const useInitialState = ()=>{

    const [state, setState] = useState(initialState);
    const [toggleCartItems,setToggleCartItems] = useState(false);
    const [toggleMenuMD,setTogglemenuMD] = useState(false);
    //MD = Mobile and Desktop
    const addToCart = (payload)=>{
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    };

    const deleteFromCart = (payload)=>{
        setState({
            ...state,
            cart: state.cart.filter(items => items.id != payload.id)
        })
    }

    const toggleCart = ()=> {

        setToggleCartItems(!toggleCartItems);
        
        setState({
            ...state,
            toggleOrders: toggleCartItems
        })
    }
    const handleMenu = ()=>{

        setTogglemenuMD(!toggleMenuMD);
        setState({
            ...state,
            toggleMenu: toggleMenuMD
        })
    }
    return {
        state,addToCart,deleteFromCart,toggleCart, handleMenu
    };
}

export {useInitialState};