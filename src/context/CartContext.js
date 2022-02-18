import { createContext, useContext, useState } from 'react'

const CartContext = createContext([])

export const useCartContext = () => {
    return useContext(CartContext)
}


/**
 * Function that generates the context provider for all childrens 
 * @param {*} param0 
 * @returns 
 */

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])
    const [cartCounter, setCartCounter] = useState(0)
    const [subTotal, setSubTotal] = useState(0)

    /**
     *  Function to determine if an item is in the cart 
     * @param {*} itemId 
     * @returns 
     */
    const isInCart = (itemId) => {
        return( cartList.some(prod => prod.id === itemId) )
    }

    /**
     * Function to add an Item to the cart 
     * @param {*} item 
     * @param {*} qty 
     */

    const addItem = (item, qty) => {
        if( isInCart(item.id) ) { //The item is in the cart
            cartList.map(prod => prod.id === item.id? prod.qty += qty: prod)
            setCartList(cartList)
        } else {  // The item is not in the cart
            item.qty = qty
            setCartList([...cartList, item])
        }
        setCartCounter(cartCounter + qty)
        setSubTotal(subTotal + item.price * qty)
    }

    /**
     * Function to remove an item from the cart 
     * @param {*} itemId 
     */

    const removeItem = (itemId) => {
        let item = cartList.filter(prod => prod.id === itemId)[0]
        setCartCounter(cartCounter - item.qty)
        setSubTotal(subTotal - item.price * item.qty)
        setCartList(cartList.filter(prod => prod.id !== itemId))
    }


    /**
     *  Function to empty the cart 
     */

    const clear = () => {
        // TODO: Iterate over cartList and restore the stock.
        console.log("Call clear()")
        setCartCounter(0)
        setCartList([])
    }

    return (
        <CartContext.Provider value={{ cartList, cartCounter, subTotal, addItem, removeItem, clear }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
