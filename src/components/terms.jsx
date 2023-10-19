import React, { useRef, useState} from "react";
import data from 'public/terms.json'
// terms
function Terms ()  {
    const termsRef = useRef()
    const checkbox = useRef()
   function ShowTerms(){
    if(termsRef.current.classList.contains('hidden')){
        termsRef.current.classList.remove('hidden')
        termsRef.current.classList.add('flex')
        setToggle(true);
    }
   }
   const Clicked = (e) =>{
    e.preventDefault();
    checkbox.current.toggleAttribute('checked')
    termsRef.current.classList.remove('flex')
    termsRef.current.classList.add('hidden')
   }
    return (
        <div >
            <div className="flex justify-center items-center h-screen ">
                <div className="  bg-gray-600 pl-20 pr-20 pt-5 pb-5 rounded shadow-lg border-black  ">
                    <form >
                        <div>
                            <h1 className="text-3xl block text-center font-semibold mb-4 text-white">
                                Login
                            </h1>
                        </div>
                        <div className="mb-4">
                            <label className="block text-white text-sm font-bold mb-2" For="Name">
                                Name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3  whiteleading-tight focus:outline-none focus:shadow-outline bg-black-rgba border-black text-white" id="Name" type="text" placeholder="Name" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white text-sm font-bold mb-2" For="Email">
                                Email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline  bg-black-rgba border-black text-white" id="Email" type="email" placeholder="Email" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white text-sm font-bold mb-2" For="Cookies">
                                Cookies
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline  bg-black-rgba border-black text-white" id="Cookies" type="text" placeholder="Cookies" required />
                        </div>

                        <div className="text-white flex gap-2">
                            <input id="checkbox" ref={checkbox} type="checkbox" required />
                            <p className="cursor-pointer" onClick={ShowTerms}> Terms and conditions </p>
                        </div>
                        <br />
                        <div>
                            <button className="bg-purple-800 py-2 w-full rounded flex justify-center hover:bg-purple-900 text-white font-bold">Submit</button>
                        </div>
                    </form>
                </div>


            </div>
            <div >
            <div ref={termsRef}  className="absolute h-screen w-full inset-0 bg-black bg-opacity-25
                 backdrop-blur-sm hidden justify-center items-center" id="Terms"  >
                <div className="flex flex-col bg-white w-fit p-4 rounded justify-center" >
                    <div className="font-bold" >
                        Terms of services</div>
                    <p className="text-sm overflow-y-scroll h-96 w-[20rem] p-2 ">
                        {data.terms}                     
                    </p>
                    <h4 className="uppercase text-center">I agree to the <span className="text-red-600">Terms of Services </span> and I read the Privacy Notice. </h4>
                    <div className=" flex pt-10 justify-center  text-white ">
                        <button onClick={Clicked} className="bg-gray-600 pr-14 pl-14 pt-1 pb-2 mb-2 w-full rounded  transition-0.3 hover:bg-red-500 cursor-pointer">I Accept</button>
                    </div>
                </div>

            </div>
            </div>
        </div>

    )
}

export default Terms;