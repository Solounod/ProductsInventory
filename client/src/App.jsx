
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ListProduct } from "./pages/ProductList";
import { FormImputProduct } from "./pages/FormImputProduct";
import { Navigation } from "./components/Navigation";
import { Toaster } from "react-hot-toast";


export default function Product(){
    return (
        
        <BrowserRouter>
            <div className="container mx-auto">
            <Navigation/>    
            <Routes>
                <Route path="/" element={<Navigate to="/Product-list"/>}/>
                <Route path="/Form-product" element={<FormImputProduct />}/>
                <Route path="/Product-list/:id" element={<FormImputProduct />}/>
                <Route path="/Product-list" element={<ListProduct/>} />
            </Routes>
            <Toaster/>
            </div>
        </BrowserRouter>
    )

}