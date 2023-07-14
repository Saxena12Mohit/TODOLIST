import React, { useState, useSyncExternalStore } from 'react'
import './App.css';

const To_Do_list = () => {
    const [input, update_fun] = useState("");
    const [arr, update_arr] = useState([]);
    const Onwrite = (event) => {
        update_fun(event.target.value);
    }
    const Form_submitted = (event) => {
        event.preventDefault();

    }
    const add = () => {
        update_arr((prev) => {
            return [...prev, input]
            
        })
    }
    return (
        <>
            <section className="vh-100 " style={{backgroundColor:"#eee"}}>
                <div className="container-fluid py-5 h-100" >
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card">
                                <div className="card-body p-5">
                                    <p class="h1 text-center mt-3 mb-4 pb-3 text-primary">
                                        {/* <i class="fas fa-check-square me-1"></i> */}
                                        <u>My Todo-s</u>
                                    </p>
                                    <form className="d-flex justify-content-center align-items-center mb-4" onClick={Form_submitted}>
                                        <div className="form-outline flex-fill">
                                            <input
                                                type="text"
                                                id="form2"
                                                className="form-control"
                                                onChange={Onwrite}
                                            />
                                            <label className="form-label" for="form2">New task...</label>
                                            <button type="submit" className="btn btn-info m-4" onClick={add}>Add</button>
                                        </div>

                                    </form>
                                    {/* <li>{input}</li> */}
                                    {arr.map((val) => {
                                        return <li>{val}</li>
                                    })}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default To_Do_list
