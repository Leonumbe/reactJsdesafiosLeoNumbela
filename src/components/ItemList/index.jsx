import React, { useEffect, useState } from "react";
import itemsData from "../../api-data/index";
import Cards from "../Item/index.jsx"


function getProducts(){
    return new Promise((resolve)=>{
        setTimeout( () => resolve(itemsData), 1000)
    })
};

export default function ItemList() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        getProducts().then((respuesta) => {
            setData(respuesta);
        });
    }, []);
    
    return(
    <>
    {data.map((items) =>{
        return(
            <Cards
                key={items.id}
                name={items.name}
                image={items.image}
                rating={items.rating}
                productType={items.productType}
                price={items.price}
                description={items.description}
            />
        );
    })}
    </>
    );
}