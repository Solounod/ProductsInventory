import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { postProduct, deleteProduct, updateProduct, getSingleProduct } from '../api/getproduct.api'
import { toast } from "react-hot-toast";


export function FormImputProduct() {

     const { register, handleSubmit, formState: { errors }, setValue, } = useForm();
     const navigate = useNavigate();
     const params = useParams();
     
     const onSubmit = handleSubmit(async (data) => {
        if (params.id){
            await updateProduct(params.id, data);
            toast.success("Product updated",{
                position: "top-center",
                style: {
                    blackground: "#010101",
                    color: "#fffff",
                }
            })
        }else {
            await postProduct(data);
            toast.success("Product created",{
                position: "top-center",
                style: {
                    blackground: "#010101",
                    color: "#fffff",
                }
            })
        }
       
       navigate("/product-list")
     });


     useEffect(() => {
        async function loadSingleProduct(){
            if (params.id){
                const { data } = await getSingleProduct(params.id);
                setValue("name", data.name);
                setValue("description", data.description);
                setValue("quantity_avaible", data.quantity_avaible);
                setValue("category", data.category);
                setValue("quantity_avaible", data.quantity_avaible);
                setValue("brand", data.brand);
            }
        }
        loadSingleProduct();
     }, []);

    return (
        <div className="container">
            <h2 className="text-2xl font-bold text-center py-4">Formulario de productos</h2>
            <form className="flex flex-col gap-3 rounded text-black " onSubmit={onSubmit}>
                {errors.name && <span>You must fill in this field</span>}
                <input className="rounded" type="text" placeholder="Name" {...register("name", {required: true})}/>
                
                {errors.description && <span>You must fill in this field</span>}
                <textarea className="rounded " rows="4" placeholder="Description" {...register("description", {required: true})}></textarea>

                {errors.quantity_avaible && <span>You must fill in this field</span>}
                <input className="rounded" type="number" placeholder="Quantity avaible" {...register("quantity_avaible", {required: true})} />

                {errors.category && <span>You must fill in this field</span>}
                <input className="rounded" type="text" placeholder="Category" {...register("category", {required: true})}/>

                {errors.brand && <span>You must fill in this field</span>}
                <input className="rounded" type="text" placeholder="Brand" {...register("brand", {required: true})}/>
                <div className="flex justify-center">
                <button className="bg-slate-800 rounded-full text-white rounded-lg w-48 mt-3 h-12 ">Save</button>
                </div>
            </form>
            {params.id && (<div className="flex justify-center">
                <button className="bg-red-900 p-3 rounded-lg w-48 mt-3 " onClick={async () => {
                const accepted = window.confirm("Are you sure?");
                if (accepted){
                    await deleteProduct(params.id);
                    toast.success("Product deleted",{
                        position: "top-center",
                        style: {
                            blackground: "#010101",
                            color: "#fffff",
                        }
                    })
                    navigate("/Product-list");
                }
            }}>Delete</button>
            </div>)}
        </div>
    )
}