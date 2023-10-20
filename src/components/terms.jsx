import React, { useRef, useState} from "react";
import CookieForm from "./form";

function Terms ()  {
    return (
        <div >
            <div className="flex justify-center items-center h-screen ">
                <div className="  bg-gray-600 pl-20 pr-20 pt-5 pb-5 rounded shadow-lg border-black  ">
                    <CookieForm></CookieForm>
                </div>
            </div>
        </div>

    )
}

export default Terms;