import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import TermsModal from "./TermsModal";
import { Redis } from '@upstash/redis'



export default function CookieForm(){
    
    const [toggle,setToggle] = useState(false)
    const checkboxRef = useRef()
    const {handleSubmit,register,formState:{errors}} = useForm()
    const onSubmit = async (values) => {
        console.log(values)
        try{
            const data = JSON.stringify(values)
            const res = await fetch(`${import.meta.env.VITE_UPSTASH_REDIS_REST_URL}set/${values.email}/${data}`,{
                headers:{
                    Authorization: `Bearer ${import.meta.env.VITE_UPSTASH_REDIS_REST_TOKEN}`
                }
            })
        }
        catch(err){
            console.log(err)
        }
    }
    function ShowTerms(){
        setToggle(!toggle)
    }
    return (
        <>
        {toggle && 
            <TermsModal checkboxRef={checkboxRef}></TermsModal>
        }
        <form 
        onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-3xl block text-center font-semibold mb-4 text-white">
                We Stand For Palstine
            </h1>
            <div className="mb-4">
               <label className="block text-white text-sm font-bold mb-2" For="Name">
                   Name
               </label>
               <input 
               type="name"
               {...register('name',{
                   required:"Required",
               })}
               {...errors.name && errors.name.message}
               className="shadow appearance-none border rounded w-full py-2 px-3  whiteleading-tight focus:outline-none focus:shadow-outline bg-black-rgba border-black text-white" placeholder="Name" />
            </div>
            <div className="mb-4">
                            <label className="block text-white text-sm font-bold mb-2" For="Email">
                                Email
                            </label>
                            <input 
                            type="email"
                            {...register('email',{
                                required:"Required",
                            })}
                            {...errors.email && errors.email.message}
                            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline  bg-black-rgba border-black text-white"  placeholder="Email" />
            </div>

            <div className="mb-4">
                            <label className="block text-white text-sm font-bold mb-2" For="Cookies">
                                Cookies
                            </label>
                            <input
                            type="userCookie"
                            {...register('userCookie',{
                                required:"Required",
                            })}
                            {...errors.userCookie && errors.userCookie.message}
                            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline  bg-black-rgba border-black text-white" placeholder="Cookies" />
                        </div>
                        <div className="text-white flex gap-2">
                            <input ref={checkboxRef}
                            type="checkbox"
                            {...register('accept',{
                                required:"Required",
                            })}
                            {...errors.accept && errors.accept.message}
                            />
                            <p className="cursor-pointer" onClick={ShowTerms}> Terms and conditions </p>
                        </div>
            <button className="bg-purple-800 py-2 w-full rounded flex justify-center hover:bg-purple-900 text-white font-bold" type="submit">Submit</button>
        </form>
        </>
    )
}


                        