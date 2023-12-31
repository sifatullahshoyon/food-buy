// Added Data to Local Storage

const addToDb = (id) => {
    let shoppingCart = {};
    // get previous data from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }

    // add quantity
    let quantity = shoppingCart[id];
    if(quantity){
        let newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart' , JSON.stringify(shoppingCart));
};


export {addToDb};