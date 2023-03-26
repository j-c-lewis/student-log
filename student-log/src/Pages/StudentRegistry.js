import React from "react";

export const StudentRegistry = () => {
    const handleStudentRegistrySubmit = async (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleStudentRegistrySubmit}>
                <input type="text" placeholder="enter student full name"/>
                <input type="text" placeholder="enter student address"/>
                <input type="text" placeholder="enter student email"/>
                <input type="text" placeholder="enter student school"/>

                <input type="submit" value="add student" />
            </form>
        </div>
            )
    };

export default StudentRegistry;


