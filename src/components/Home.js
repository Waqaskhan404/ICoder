import React from 'react'

export const Home = () => {
    return (
        <>
            
  {/* <!-- Login Modal --> */}
  <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Login to iCoder</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
            <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
              </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button> 
        </div>
      </div>
    </div>
  </div>
 
  
  {/* <!-- Sign Up Modal --> */}
  <div className="modal fade" id="signupModal" tabIndex="-1" role="dialog" aria-labelledby="signupModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Get an iCoder Account</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
            <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="form-group">
                  <label htmlFor="cexampleInputPassword1">Confirm Password</label>
                  <input type="password" className="form-control" id="cexampleInputPassword1"/>
                </div>
                 
                <button type="submit" className="btn btn-primary">Creat Account</button>
              </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button> 
        </div>
      </div>
    </div>
  </div>

    <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner ">
            <div className="carousel-item active">
                <img  src="1.jpg" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h2>Welcome to iCoder</h2>
                    <p>Technology News, Development and Trends</p>
                    <button className="btn btn-danger">Technology</button>
                    <button className="btn btn-primary">Web Development</button>
                    <button className="btn btn-success">Tech Fun</button>
                </div>
            </div>
            <div className="carousel-item">
                <img src="2.jpg" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h2>The Best Coding Blog</h2>
                    <p>Technology News, Development and Trends</p>
                    <button className="btn btn-danger">Technology</button>
                    <button className="btn btn-primary">Web Development</button>
                    <button className="btn btn-success">Tech Fun</button>
                </div>
            </div>
            <div className="carousel-item">
                <img src="3.jpg" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h2>Award winning Blog</h2>
                    <p>Technology News, Development and Trends</p>
                    <button className="btn btn-danger">Technology</button>
                    <button className="btn btn-primary">Web Development</button>
                    <button className="btn btn-success">Tech Fun</button>
                </div>
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>

    <div className="container my-4">
        <div className="row mb-2">
            <div className="col-md-6">
              <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-primary">World</strong>
                  <h3 className="mb-0">Global Conferences</h3>
                  <div className="mb-1 text-muted">Nov 12</div>
                  <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="stretched-link">Continue reading</a>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <img className="bd-placeholder-img" width="200" height="250" src="thumb1.jpg" alt=""/>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-success">Design</strong>
                  <h3 className="mb-0">Learn Designing</h3>
                  <div className="mb-1 text-muted">Nov 11</div>
                  <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="stretched-link">Continue reading</a>
                </div>
                <div className="col-auto d-none d-lg-block">
                    <img  className="bd-placeholder-img" width="200" height="250" src="https://source.unsplash.com/500x700/?tech,code,laptop" alt=""/>

                </div>
              </div>
            </div>
          </div>
        <div className="row mb-2">
            <div className="col-md-6">
              <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-danger">FrontEnd</strong>
                  <h3 className="mb-0">Bootstrap Templates</h3>
                  <div className="mb-1 text-muted">Nov 12</div>
                  <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="stretched-link">Continue reading</a>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <img className="bd-placeholder-img" width="200" height="250" src="thumb2.jpg" alt=""/>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-warning">Python</strong>
                  <h3 className="mb-0">Learn Python</h3>
                  <div className="mb-1 text-muted">Nov 11</div>
                  <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="stretched-link">Continue reading</a>
                </div>
                <div className="col-auto d-none d-lg-block">
                    <img className="bd-placeholder-img" width="200" height="250" src="thumb3.jpg" alt=""/>

                </div>
              </div>
            </div>
          </div>
    </div>
    <footer className="container">
        <p className="float-right"><a href="#">Back to top</a></p>
        <p>© 2020-2021 iCoder, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
      </footer>
        </>
    )
}
