import data from '../assets/terms.json'
import {useRef} from 'react'

export default function TermsModal(props){
    const termsRef = useRef()
    const Clicked = (e)=>{
        e.preventDefault();
        props.checkboxRef.current.toggleAttribute('checked')
    termsRef.current.classList.remove('flex')
    termsRef.current.classList.add('hidden')
    }
    return (
        <div ref={termsRef} className="absolute h-screen w-full inset-0 bg-black bg-opacity-25
                 backdrop-blur-sm flex justify-center items-center" id="Terms"  >
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
    )
}