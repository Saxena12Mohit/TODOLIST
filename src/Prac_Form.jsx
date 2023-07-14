import React, { useState } from 'react'

const Prac_Form = () => {
    const [ini_email,update_email] = useState("");
    const [int_pass,update_pass] = useState("");
    const First_fun = (event) =>
    {
        update_email(event.target.value);

    }
    
    const Second_fun = (event) =>
    {
        update_pass(event.target.value);
    }

    const SubmitF = ( event ) =>
    {
        event.preventDefault();
        alert(`Your Email is ${ini_email} and your password is ${int_pass}`);
    }

    return (
        <>
            <div className="container-fluid d-flex flex-column justify-content-center align-items-center" style={{backgroundColor:"plum"}}>
                <form onSubmit={SubmitF}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={ini_email} onChange={First_fun} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" value={int_pass} onChange={Second_fun} />
                    </div>
                    
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </form>
            </div>
        </>
    )
}

export default Prac_Form
