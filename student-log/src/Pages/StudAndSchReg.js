import React from 'react';


export const  StudAndSchReg = () => {
    const handleSchRegSubmit = async (e) => {
        e.preventDefault();
    };

       return (
        <div>
            <form onSubmit={handleSchRegSubmit}>
                <input type="text" placeholder="enter student name"/>
                <select value="">
                    <option value="0">select school</option>
                    <option value="1">School 1</option>
                    <option value="2">School 2</option>
                    <option value="3">School 3</option>
                </select>
                <input type="submit" value="submit" />
                </form>
        </div>
    );
}

export default StudAndSchReg;