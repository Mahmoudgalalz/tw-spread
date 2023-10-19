    import React from "react";

    export default function Modal (){
   
        
        return (
            <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 text-red-500">
                <div><label for="tw-modal" className="cursor-pointer rounded bg-black px-8 py-4 text-white active:bg-slate-400"> open modal </label></div>
                <input type="checkbox" id="tw-modal" className="peer fixed appearance-none opacity-0" />
                <label for="tw-modal" className="pointer-events-none invisible fixed inset-0 flex cursor-pointer items-center justify-center overflow-hidden
                 overscroll-contain bg-slate-700/30 opacity-0 transition-all duration-200 ease-in-out 
                 peer-checked:pointer-events-auto peer-checked:visible peer-checked:opacity-100 peer-checked:">

                </label>
                <button onClick={handleclose}>CLICK</button>
                <div className="modal-content">  
                            <h2>hello</h2>
                            <p>Lorem ipsum dolor sit amet
                                consectetur adipisicing elit
                                . Accusamus repudiandae veniam
                                quo accusantium! Nisi itaque,
                                optio ipsa et mollitia dolor
                                    commodi nobis praesentium
                                    veniam a.</p>
                        <button onClick={handleclose} className="close-modal"  > Accept</button>
    </div>
            </div>
        )
    }