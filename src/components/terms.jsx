import React from "react";
import { NavLink } from "react-router-dom";
import TermsAndConditions from "./terms-and-conditions";
function Terms ()  {
   function ShowTerms(){
    let Terms =document.getElementById("Terms");
    Terms.classList.remove("hidden")
  
    
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

                        <div className="text-white">
                            <input id="checkbox" type="checkbox" required />
                            <NavLink onClick={ShowTerms} to="/"> Terms and conditions </NavLink>
                        </div>
                        <br />
                        <div>
                            <button className="bg-purple-800 py-2 w-full rounded flex justify-center hover:bg-purple-900 text-white font-bold">Submit</button>
                        </div>

                    </form>
                </div>


            </div>
            <div >
            <div className="absolute top-10 left-80  right-80 m-20 inset-0 bg-black bg-opacity-25
                 backdrop-blur-sm  justify-center items-center hidden "   id="Terms"  >
                <div className="bg-white  p-2 rounded " >
                    <div className="font-bold" >
                        Terms of services</div>
                    <p className="text-sm overflow-y-scroll h-96 p-2 ">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quis,
                            <br />
                            placeat in consectetur, illo fugiat odio vero quae incidunt ipsa voluptatibus id at! Nisi blanditiis,
                            <br />
                            nesciunt a aspernatur deserunt non ipsum laudantium quasi consequuntur
                            aliquid eaque ipsam hic officiis
                            <br />
                            quibusdam possimus ducimus maiores beatae
                            fuga architecto quis debitis repudiandae itaque.
                            <br />
                        </p>
                        <p >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quis,
                            <br />
                            placeat in consectetur, illo fugiat odio vero quae incidunt ipsa voluptatibus id at! Nisi blanditiis,
                            <br />
                            nesciunt a aspernatur deserunt non ipsum laudantium quasi consequuntur
                            aliquid eaque ipsam hic officiis
                            <br />
                            quibusdam possimus ducimus maiores beatae
                            fuga architecto quis debitis repudiandae itaque.
                            <br />
                        </p>
                        <p >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quis,
                            <br />
                            placeat in consectetur, illo fugiat odio vero quae incidunt ipsa voluptatibus id at! Nisi blanditiis,
                            <br />
                            nesciunt a aspernatur deserunt non ipsum laudantium quasi consequuntur
                            aliquid eaque ipsam hic officiis
                            <br />
                            quibusdam possimus ducimus maiores beatae
                            fuga architecto quis debitis repudiandae itaque.
                            <br />
                        </p>
                        <p >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quis,
                            <br />
                            placeat in consectetur, illo fugiat odio vero quae incidunt ipsa voluptatibus id at! Nisi blanditiis,
                            <br />
                            nesciunt a aspernatur deserunt non ipsum laudantium quasi consequuntur
                            aliquid eaque ipsam hic officiis
                            <br />
                            quibusdam possimus ducimus maiores beatae
                            fuga architecto quis debitis repudiandae itaque.
                            <br />
                        </p>
                        <p >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quis,
                            <br />
                            placeat in consectetur, illo fugiat odio vero quae incidunt ipsa voluptatibus id at! Nisi blanditiis,
                            <br />
                            nesciunt a aspernatur deserunt non ipsum laudantium quasi consequuntur
                            aliquid eaque ipsam hic officiis
                            <br />
                            quibusdam possimus ducimus maiores beatae
                            fuga architecto quis debitis repudiandae itaque.
                            <br />
                        </p>
                        <p >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quis,
                            <br />
                            placeat in consectetur, illo fugiat odio vero quae incidunt ipsa voluptatibus id at! Nisi blanditiis,
                            <br />
                            nesciunt a aspernatur deserunt non ipsum laudantium quasi consequuntur
                            aliquid eaque ipsam hic officiis
                            <br />
                            quibusdam possimus ducimus maiores beatae
                            fuga architecto quis debitis repudiandae itaque.
                            <br />
                        </p>
                        <p >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quis,
                            <br />
                            placeat in consectetur, illo fugiat odio vero quae incidunt ipsa voluptatibus id at! Nisi blanditiis,
                            <br />
                            nesciunt a aspernatur deserunt non ipsum laudantium quasi consequuntur
                            aliquid eaque ipsam hic officiis
                            <br />
                            quibusdam possimus ducimus maiores beatae
                            fuga architecto quis debitis repudiandae itaque.
                            <br />
                        </p>
                    </p>
                    <br />
                    <h4 className="uppercase text-center">I agree to the <span className="text-red-600">Terms of Services </span> and I read the Privacy Notice. </h4>
                    <div className=" flex pt-10 justify-center  text-white ">
                        <button  className="bg-gray-600 pr-14 pl-14 pt-1 pb-2 mb-2 w-full rounded  transition-0.3 hover:bg-red-500 cursor-pointer"  >I Accept</button>
                    </div>
                </div>

            </div>
            </div>
        </div>

    )
}

export default Terms;