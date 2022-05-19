import React from 'react'
import {Link} from "react-router-dom"

        const Navbar = () => {
            return (
              <>
              <li>
                    <Link to='/' activeStyle>
                      Customer
                    </Link>
                    </li>
                    <li>
                    <Link to='/admin' activeStyle>
                      Admin
                    </Link>
                    </li>
                    <li>
                    <Link to='/EditAdmin' activeStyle>
                      Admin Controls
                    </Link>
                    </li>
              </>
            );
          };
            
          export default Navbar;
