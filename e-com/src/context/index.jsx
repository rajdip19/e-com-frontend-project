import { createContext, useEffect, useState } from "react";
import list from './products.json'


const ProductContext = createContext();


export default function Context ({children}){
    const [products, setProducts] = useState([]);

    const addToCart = (id)=>{
        
        const index = products.findIndex((product)=>{
            return product['id'] === id;
        });

        if(index!==-1) {
            products[index]['cart'] = products[index]['cart'] + 1;
            setProducts([...products]);
        }
    }

    const reduceFromCart = (id)=>{
        const index = products.findIndex((product)=>{
            return product['id'] === id;
        });

        if(index!==-1) {
            products[index]['cart'] = products[index]['cart'] - 1;
            setProducts([...products]);
        }
    }

    const removeFromCart = (id)=>{
        const index = products.findIndex((product)=>{
            return product['id'] === id;
        });

        if(index!==-1) {
            products[index]['cart'] = 0;
            setProducts([...products]);
        }
    }

    useEffect(()=>{
        setProducts(list.map((product)=>{product['cart'] = 0; return product;}))
    }, []);

    return(<ProductContext.Provider value={{products, addToCart, reduceFromCart, removeFromCart}}>{children}</ProductContext.Provider>)
}

export {ProductContext};