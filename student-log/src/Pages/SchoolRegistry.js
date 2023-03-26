import React from "react";
import {useRef} from "react";
import {StudentRegistry} from "./StudentRegistry";

export const SchoolRegistry = () => {

    const schoolNameRef = useRef();
    const schoolAddressRef = useRef();

    const handleRegistrySubmit = async (e) => {
        e.preventDefault();

        schoolNameRef.current.value = '';
        schoolAddressRef.current.value = '';

    }


    return (
        <div className="">
           <form onSubmit={handleRegistrySubmit}>
               <input type="text" placeholder="enter school name" ref={schoolNameRef}/>
               <input type="text" placeholder="enter school address" ref={schoolAddressRef}/>
           <input type="submit" value="add school"/>
           </form>
        </div>
    )
}