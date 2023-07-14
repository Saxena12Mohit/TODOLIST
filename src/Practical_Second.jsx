import React, { useState } from 'react'

const Practical_Second = () => {
     const [ini_data,fin_data] = useState();
     const[After_submission,Final_submission] = useState();
     const My_data = (event) =>
     {
        fin_data(event.target.value);
     }
    const onsubmission = () =>
    {
        Final_submission(ini_data);
    }


    return (
        <>
            <div className="container-fluid d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: "purple" }}>
                <h1 className="text-white">Hello {After_submission}</h1>
                <input type="text" id="input tag" placeholder="write your Name" className="input"   onChange={My_data}></input>
                <button type="button" className="btn btn-primary btn-lg px-5 mt-3" onClick={onsubmission}>Click</button>
            </div>
        </>
    )
}

export default Practical_Second
