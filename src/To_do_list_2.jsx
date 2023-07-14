import React, { useState } from 'react'

const To_do_list_2 = () => {

    let count=-1;
    const [list_item, add_list] = useState("");
    const [Emt_array, update_array] = useState([]);
    const Item_added = (event) => {
        add_list(event.target.value);
    }
    const Item_submitted = () => {
        update_array((prev) => {
            return [...prev, list_item]
        })

    }
    const Item_deleted = (event) => {
        console.log("Item deleted");
        const check=event.target.id;
        console.log(check);
        update_array((prev) => {
            delete prev[check];
            prev[check]="Done";
            return[...prev];
        })

    }

    return (
        <>
            <section className="vh-100" style={{backgroundColor:"#eee"}}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card" id="list1" style={{ borderRadius: "5rem", backgroundColor: "#cae5d6" }}>
                                <div className="card-body py-4 px-4 px-md-5">

                                    <p className="h1 text-center mt-3 mb-4 pb-3 text-success">
                                        <i className="fas fa-check-square me-1"></i>
                                        <u>My Todo-s</u>
                                    </p>

                                    <div className="pb-2">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="d-flex flex-row align-items-center">
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-lg"
                                                        id="exampleFormControlInput1"
                                                        placeholder="Add new..."
                                                        onChange={Item_added}
                                                        value={list_item}
                                                    />
                                                    <a href="#!" data-mdb-toggle="tooltip" title="Set due date"><i
                                                        className="fas fa-calendar-alt fa-lg me-3"></i></a>
                                                    <div>
                                                        <button
                                                            type="button"
                                                            className="btn btn-success"
                                                            onClick={Item_submitted}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <hr className="my-4" />
                                    <div className="pb-2">
                                        <div className="d-flex flex-column align-items-start">
                                            {Emt_array.map((val, ke) => {
                                                 count++;
                                                return <div className="form-check" key={ke}>
                                                    <input className="form-check-input" type="checkbox" value={list_item}  id={count} onClick={Item_deleted}/>
                                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                                          {val}  
                                                        </label>
                                                       
                                                </div>
                                            })}
                                        </div>
                                        <hr className="my-4" />
                                        {/* <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={Item_deleted}
                                        >
                                            -
                                        </button> */}

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

export default To_do_list_2
