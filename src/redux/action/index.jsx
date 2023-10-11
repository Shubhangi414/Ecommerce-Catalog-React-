//for add item to cart

export const addItem = (product) =>{
    return {
        type:"ADDITEM",
        payload:product
    }
}

// for remove item from cart

export const removeItem= (product) =>{
    return {
        type:"REMOVEITEM",
        payload:product
    }
}

