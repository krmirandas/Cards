import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer className="bg-primary text-white text-center text-lg-start">
                <div className="container p-4">

                    <div className="row">

                        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Footer</h5>

                            <p>
                                Recuerda que React es una tecnología limitada a la creación de interfaces gráficas, 
                                por lo que la modificación del json debe hacerse con otras tecnologías.
        </p>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Links</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="https://classroom.google.com/u/1/c/MTU1Mjg1NjUzNzAw/a/MjUxODIxMDQ4MzU4/details" className="text-white">Tarea</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-0">Links</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="https://classroom.google.com/u/1/c/MTU1Mjg1NjUzNzAw/a/MjUxODIxMDQ4MzU4/details" className="text-white">Tarea</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>


            </footer>
        )
    }
}

export default Footer;