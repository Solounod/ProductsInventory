import { useEffect, useState } from "react";
import { getProduct } from "../api/getproduct.api";
import { ProductCart } from "./ProductCart";

{/*component function that lists products extracted from the api*/}

export function ListenerProducts() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function loadProduct() {
            const response = await getProduct();
            setProducts(response.data)
        }
        loadProduct();
    }, []);

    return( 
        
            <div className="grid grid-cols-3 gap-2">
                {products.map(product => (
                    <ProductCart key={product.id} product={product}/>
                ))}
            </div>
    )
}


