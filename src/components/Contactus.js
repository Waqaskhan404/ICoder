import React from 'react'
import {Link} from "react-router-dom";
const Contactus = () => {
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link class="navbar-brand" to="/">iCoder</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/about">About</Link>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Topics
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Technology</a>
                        <a class="dropdown-item" href="#">Web Development</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Support</a>
                        <a class="dropdown-item" href="#">Write for us</a>
                    </div>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="/contact.html">Contact Us</a>
                </li>


            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>

    <div class="container my-4">
        <h2>Contact Us</h2>
        <form>
            <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Select your Query</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>Web</option>
                    <option>Tech Stack</option>
                    <option>Technology</option>
                    <option>Others</option>
                </select>
            </div>
            <div class="form-group row">
                <div class="col-sm-2">Are you a Member?</div>
                <div class="col-sm-10">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                        <label class="form-check-label" for="gridCheck1">
                            Yes
                        </label>
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-2">Are you a Professor?</div>
                <div class="col-sm-10">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck2"/>
                        <label class="form-check-label" for="gridCheck2">
                            Yes
                        </label>
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-2">Are you a Coder?</div>
                <div class="col-sm-10">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck3"/>
                        <label class="form-check-label" for="gridCheck3">
                            Yes
                        </label>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label for="exampleFormControlTextarea1">Tell us about yourself</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea2">Elaborate Your Concern</label>
                <textarea class="form-control" id="exampleFormControlTextarea2" rows="3"></textarea>
            </div>
            <button class="btn btn-primary">Submit</button>
        </form>

    </div>

    <footer class="container">
        <p class="float-right"><a href="#">Back to top</a></p>
        <p>© 2020-2021 iCoder, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
    </footer>
            
        </>
    )
}

export default Contactus
