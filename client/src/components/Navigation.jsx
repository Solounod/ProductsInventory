import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <div className="flex justify-start gap-4">
        <Link to="/Product-list">Product</Link>
        <Link to="/Form-product">Insert Product</Link>
        </div>
    )
}