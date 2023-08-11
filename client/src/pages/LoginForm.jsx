import { useForm } from "react-hook-form";
import { postLoginUser } from "../api/getregisterlogin.api";

export function LoginForm() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = handleSubmit((data) => {
        postLoginUser(data);
    })

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={onSubmit} action="" className="flex flex-col gap-3 rounded text-black">
                <input type="email" name="email" placeholder="Email" {...register("email", 
                    {required: {
                            value: true,
                            message: "Campo requerido"
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                            message: "Correo no valido",
                        }
                    })}/>
                    {errors.email && <span className="bg-red-900">{errors.email.message}</span>}
                <input type="text" name="password" placeholder="Password" {...register("password",
                    {required: {
                        value: true,
                        message: "Campo requerido",
                    }
                    })}/>
                    {errors.password && <span className="bg-red-900">{errors.password.message}</span>}
                <div>
                    <button className="bg-green-900 p-3 rounded-lg w-48 mt-3 ">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}