import React, { useState } from 'react'

const Count = () => {

    let Ini_color="#ffd6dc";
    let int_counter=0;

    const [i, update] = useState(0);
    const [new_date,setCurrDate] = useState(new Date().toLocaleDateString());
    const [new_time,setCurrTime] = useState(new Date().toLocaleTimeString());
    const [prev_color,setColor] =useState(Ini_color);

    // const Increment_One = () => {
    //         update(i+1)

    // }

    const UpdateTime = () => 
    {
        let new_time = new Date().toLocaleTimeString()
        setCurrTime(new_time);
    }

   setInterval(UpdateTime, 1000);
    const DecByOne = () =>
    {
        if(i>0){update(i-1)}
        else{alert("Number is already zero")}
    }
    
    const Change_Back_color = () => 
    {
        let change_color="#f57375";
        int_counter++;
        if(int_counter % 2!=0){setColor(change_color);}
        else{setColor(Ini_color);}
    }





    return (
        <>
            <div className="container-fluid d-flex flex-column justify-content-center align-items-center" style={{backgroundColor:prev_color}}>
                <h1>{i} </h1>
                <h1>{new_date}</h1>
                <h1>{new_time}</h1>
                <button type="button" className="btn btn-primary btn-lg" onClick={()=> update(i+1)}>Increase by 1</button>
                <button type="button" class="btn btn-secondary btn-lg mt-4" onClick={DecByOne}>decrease by 1</button>
                <button type="button" className="btn btn-primary btn-lg mt-4" onClick={Change_Back_color}>Change background color</button>
            </div>
        </>
    )
}

export default Count
