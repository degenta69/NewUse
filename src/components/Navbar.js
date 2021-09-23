import React from 'react'
import { Link } from 'react-router-dom'
import 'E:/course/webD/React/news-app/src/index.css'
//import PropTypes from 'prop-types'

const Navbar = (props)=>{
  const Search=()=>{
    console.log(props.article.title)
    // if(Text===props.article.title){
    //   console.log('yes1')
    // }else{
    //   console.log('not found')
    // }
  }
  
  const handleChange= (event)=>{
    console.log("on change");
    props.setText(event.target.value);  
  }
    return (
      <div>
        <nav className={`navbar fixed-top navbar-dark bg-${props.mode==='light'?'danger':''}`} style={{backgroundColor: props.mode==='light'?'':'#191919'}}>
          <div className='container-fluid'>
            <Link className={`navbar-brand text-bold text-${props.mode==='dark'?'danger':'dark'}`} to='/'>
              <h3>NewUse</h3>
            </Link>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='offcanvas'
              data-bs-target='#offcanvasNavbar'
              aria-controls='offcanvasNavbar'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className='offcanvas bg-dark offcanvas-end'
              tabIndex='-1'
              id='offcanvasNavbar'
              aria-labelledby='offcanvasNavbarLabel'
            >
              <div className='offcanvas-header'>
                <h5
                  className={`offcanvas-title text-${props.mode==='dark'?'danger':'light'}`}
                  id='offcanvasNavbarLabel'
                >
                  WELLCOME
                </h5>
                <button
                  type='button'
                  className='btn-circle btn-close btn-danger text-reset'
                  data-bs-dismiss='offcanvas'
                  aria-label='Close'
                ></button>
              <div className='form-check form-switch'>
                <label
                  className='text-white text-small form-check-label'
                  htmlFor='flexSwitchCheckDefault'
                >
                <input
                  className='btn btn-lg btn-secondary my-3 mx-2 form-check-input'
                  type='checkbox'
                  id='flexSwitchCheckDefault'
                  onClick={props.toggleMode}
                />
                </label>
              </div>
              </div>
              <div className='offcanvas-body'>
                <ul className={`navbar-nav justify-content-end flex-grow-1 pe-3 text-${props.mode==='dark'?'danger':'dark'}`}>
                  <li className='nav-item '>
                    <Link className={`nav-link text-${props.mode==='dark'?'danger':'secondary'}`} aria-current='page' to='/'>
                      Home
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className={`nav-link text-${props.mode==='dark'?'danger':'secondary'}`} to='/contact-us'>
                      Contact Us
                    </Link>
                  </li>
                  <li className='nav-item dropdown'>
                    <Link
                      className={`nav-link dropdown-toggle text-${props.mode==='dark'?'danger':'secondary'}`}
                      to='/'
                      id='offcanvasNavbarDropdown'
                      role='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      Categories
                    </Link>
                    <ul
                      className={`dropdown-menu text-capitalize bg-${props.mode==='dark'?'dark':'secondary'}`}
                      aria-labelledby='offcanvasNavbarDropdown'
                    >
                      <li>
                        <Link className={`dropdown-item text-${props.mode==='dark'?'danger':'dark'}`} to='/business'>
                          business
                        </Link>
                      </li>
                      <li>
                        <Link className={`dropdown-item text-${props.mode==='dark'?'danger':'dark'}`} to='/entertainment'>
                          entertainment
                        </Link>
                      </li>
                      <li>
                        <Link className={`dropdown-item text-${props.mode==='dark'?'danger':'dark'}`} to='/general'>
                          general
                        </Link>
                      </li>
                      <li>
                        <Link className={`dropdown-item text-${props.mode==='dark'?'danger':'dark'}`} to='/health'>
                          health
                        </Link>
                      </li>
                      <li>
                        <Link className={`dropdown-item text-${props.mode==='dark'?'danger':'dark'}`} to='/science'>
                          science
                        </Link>
                      </li>
                      <li>
                        <Link className={`dropdown-item text-${props.mode==='dark'?'danger':'dark'}`} to='/sports'>
                          sports
                        </Link>
                      </li>
                      <li>
                        <Link className={`dropdown-item text-${props.mode==='dark'?'danger':'dark'}`} to='/technology'>
                          technology
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                <form className='d-flex'>
                  <input
                    className='form-control me-2'
                    type='search'
                    placeholder='Search'
                    aria-label='Search'
                    value={props.Text}
                    onChange={handleChange}
                  />
                  <button className='btn btn-outline-danger' onClick={Search}  type='button'>
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  
}

export default Navbar