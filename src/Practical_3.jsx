import React, { useState } from 'react'

const Practical_3 = () => {

    const [Form_name,Update_form_name]=useState({
        F_email:"",
        F_passw:"",
    });

    const Form_submit = (event) =>
    {
        event.preventDefault();
       alert("Form is submitted "+ `Your email is ${Form_name.F_email} and password is ${Form_name.F_passw}`);
    }  

    const Form_onChange = (event) =>
    {
       console.log(event.target.name);
       const checK_name=event.target.name;
       const check_value=event.target.value;
       
       Update_form_name((previous)=>
       {
        if(checK_name==='Form_Email')
        {
            return{
            F_email:check_value,
            F_passw:previous.F_passw
        }
        }
        else if(checK_name==='Form_Password')
        {
            return{
            F_email:previous.F_email,
            F_passw:check_value}
        }
       })
      
    }
    return (
        <>
            <section className="vh-100" style={{backgroundColor: "#9A616D"}}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card" style={{border: "1rem"}}>
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                            alt="login form" className="img-fluid" style={{borgerRadius: "1rem 0 0 1rem"}} />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black">

                                            <form onSubmit={Form_submit}>

                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                    <i className="fas fa-cubes fa-2x me-3" style={{color: "#ff6219"}}></i>
                                                    <span className="h1 fw-bold mb-0">Saxena's Project</span>
                                                </div>

                                                <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Sign into your account</h5>

                                                <div className="form-outline mb-4">
                                                    <input type="email" 
                                                    id="form2Example17" 
                                                    className="form-control form-control-lg" 
                                                    name='Form_Email'
                                                    onChange={Form_onChange}
                                                    value={Form_name.F_email}
                                                    />
                                                    <label className="form-label" htmlFor="form2Example17">Email address</label>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="password" 
                                                    id="form2Example27" 
                                                    className="form-control form-control-lg" 
                                                    name='Form_Password'
                                                    onChange={Form_onChange}
                                                    value={Form_name.F_passw}
                                                    />
                                                    <label className="form-label" htmlFor="form2Example27">Password</label>
                                                </div>

                                                <div className="pt-1 mb-4">
                                                    <button className="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                                                </div>

                                                <a className="small text-muted" href="#!">Forgot password?</a>
                                                <p className="mb-5 pb-lg-2" style={{color: "#393f81"}}>Don't have an account? <a href="#!"
                                                    style={{color: "#393f81"}}>Register here</a></p>
                                                <a href="#!" className="small text-muted">Terms of use.</a>
                                                <a href="#!" className="small text-muted">Privacy policy</a>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Practical_3
