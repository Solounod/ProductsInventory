import { useRef } from "react";
import { useForm } from "react-hook-form";

export function RegisterForm() {

    const { register, handleSubmit, formState: { errors }, watch} = useForm();

    const password = useRef(null);
    password.current = watch("password", "");

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    })

    return (
        <div>
            <h2>Form Register</h2>
            <form onSubmit={onSubmit} className="flex flex-col gap-3 rounded text-black "  action="">
                <input type="email" name="email" placeholder="Email" {...register("email", 
                    {required: {
                        value: true,
                        message: "El campo es requerido",
                    },
                    pattern: {
                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message: "correo no valido",
                    },
                    })} />
                    {errors.email && <span className="bg-red-900">{errors.email.message}</span>}
                <input type="text" name="userName" placeholder="User name" {...register("userName", 
                    {required: {
                        value: true,
                        message: "Este campo es requerido"
                    },
                    maxLength: 20,
                    minLength: 3,
                    }
                    )}/>
                    {errors.userName?.type === "required" && <span className="bg-red-900">Nombre requerido</span>}
                <input type="text" name="password" placeholder="Password" {...register("password",
                    {required: {
                        value: true,
                        message: "Contraseña requerida",
                    },
                    minLength: {
                        value: 8,
                        message: "Contraseña debe ser mayor de 8 caracteres"
                    }
                    })}/>
                    {errors.password && <span className="bg-red-900">{errors.password.message}</span>}
                <input type="text" placeholder="Confirm Password" {...register("confirmPassword", 
                    {
                        required: {
                            value: true,
                            message: "Confirmar la contraseña es requerido",
                        },
                        minLength: {
                            value: 8,
                            message: "La contraseña debe ser minimo 8 caracteres",
                        },
                        validate: (value) => value === password.current || "las contraseñas no coinsiden",                 
                    })}/>
                    {errors.confirmPassword && (<span className="bg-red-900">{errors.confirmPassword.message}</span>)}
                <div>
                    <button className="bg-green-900 p-3 rounded-lg w-48 mt-3 ">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )

}