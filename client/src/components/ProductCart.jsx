import { useNavigate } from "react-router-dom";


export function ProductCart({ product }) {
    const navigate = useNavigate();

    return (

        <div className="bg-cyan-900 rounded px-6 py-3 " onClick={() => {navigate(`/Product-list/${product.id}`)}}>
            <h2 className="text-xl font-semibold pb-2">{product.name}</h2>
            <p>Description: {product.description}</p>
            <p>Quantity avaible: {product.quantity_avaible}</p>
            <p>Category: {product.category}</p>
            <p>Brand: {product.brand}</p>
        </div>
    )
}