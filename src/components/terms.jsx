import React from "react";
import { NavLink } from "react-router-dom";
import TermsAndConditions from "./terms-and-conditions";
const Terms = () => {
    const handleClick = ({ visable }) => {
        let Terms = document.getElementById("Terms")
        if (Terms.checked == true) {
        }
    }


    return (
        <div >
            <div className="flex justify-center items-center h-screen bg-">
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

                        <div className="text-white">
                            <input id="checkbox" type="checkbox" required />
                            <NavLink onClick={handleClick} to="/"> Terms and conditions </NavLink>
                        </div>
                        <br />
                        <div>
                            <button className="bg-purple-800 py-2 w-full rounded flex justify-center hover:bg-purple-900 text-white font-bold">Submit</button>
                        </div>

                    </form>
                </div>


            </div>
            <TermsAndConditions />
        </div>

    )
}

export default Terms;