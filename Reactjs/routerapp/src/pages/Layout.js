import { Outlet,Link } from "react-router-dom";
import {Navbar,Nav,Container}from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout=()=>{
    return(
         <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                  <div className="container-fluid">
                    <Link className="navbar-brand" to="/">MySite</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse">
                         <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                             <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                             <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                             <li className="nav-item">
                                <Link className="nav-link" to="/product">Product</Link>
                            </li>
                         </ul>
                    </div>
                  </div>
            </nav>
            <Outlet/>
         </div>






        // <>
        //   <nav>
        //     <ul>
        //         <li>
        //             <Link to="/">Home</Link>
        //         </li>
        //         <li>
        //             <Link to="/blogs">Blogs</Link>
        //         </li>
        //         <li>
        //             <Link to="/contact">Contact</Link>
        //         </li>
        //     </ul>
        //   </nav>
        //   <Outlet/>
        // </>
    )
}

export default Layout;