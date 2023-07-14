import React, { useState } from 'react'

const Practical_4 = () => {

const [Registration,update_registration] = useState({
    name:"",
    email:"",
    pass_word:"",
    Repeat_pass:""
});

const Form_Submitted = (event) =>
{
event.preventDefault();
if(Registration.pass_word!=Registration.Repeat_pass)
{
    alert("Password not match");
}
else
{
alert(`Form submitted & your name is ${Registration.name} and your email is ${Registration.email}`);
}
}
    
const Data_Submitted = (event) =>
{
    const  Name=event.target.name;
    const value=event.target.value;
    update_registration((previous)=>{
          if(Name==="Registration_name")
          {
            return{
                name:value,
                email:previous.email,
                pass_word:previous.pass_word,
                Repeat_pass:previous.Repeat_pass

            }
          }
          else if(Name==="Registration_email")
          {
            return{
                name:previous.name,
                email:value,
                pass_word:previous.pass_word,
                Repeat_pass:previous.Repeat_pass

            }
          }
          else if(Name==="Registration_password")
          {
            return{
                name:previous.name,
                email:previous.email,
                pass_word:value,
                Repeat_pass:previous.Repeat_pass

            }
          }
          else if(Name==="Registration_Repeat_pass")
          {
            return{
                name:previous.name,
                email:previous.email,
                pass_word:previous.pass_word,
                Repeat_pass:value
            }
          }
    })
}

    return (
        <>
            <section className="vh-100" style={{backgroundColor:  "#eee"}}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{borderRadius: "25px"}}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                            <form className="mx-1 mx-md-4" onSubmit={Form_Submitted}>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input 
                                                        type="text" 
                                                        id="form3Example1c" 
                                                        className="form-control" 
                                                        onChange={Data_Submitted}
                                                        name='Registration_name'
                                                        value={Registration.name}
                                                        />
                                                        <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input 
                                                        type="email" 
                                                        id="form3Example3c" 
                                                        className="form-control" 
                                                        onChange={Data_Submitted}
                                                        autoComplete='none'
                                                        name='Registration_email'
                                                        value={Registration.email}
                                                        />
                                                        <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input 
                                                        type="password" 
                                                        id="form3Example4c" 
                                                        className="form-control" 
                                                        onChange={Data_Submitted}
                                                        name="Registration_password"
                                                        value={Registration.pass_word}
                                                        />
                                                        <label className="form-label" htmlFor="form3Example4c">Password</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input 
                                                        type="password" 
                                                        id="form3Example4cd" 
                                                        className="form-control" 
                                                        onChange={Data_Submitted}
                                                        name="Registration_Repeat_pass"
                                                        value={Registration.Repeat_pass}
                                                        />
                                                        <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                                                    </div>
                                                </div>

                                                <div className="form-check d-flex justify-content-center mb-5">
                                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                                    <label className="form-check-label" htmlFor="form2Example3">
                                                        I agree all statements in <a href="#!">Terms of service</a>
                                                    </label>
                                                </div>

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="submit" className="btn btn-primary btn-lg">Register</button>
                                                </div>

                                            </form>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid" alt="Sample image"/>

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

export default Practical_4
