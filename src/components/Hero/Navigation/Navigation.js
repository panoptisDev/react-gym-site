import React,{useState,useEffect} from 'react'
import './Navigation.css'
import {useMediaQuery} from 'react-responsive'
import {BrowserRouter} from 'react-router-dom'
import { NavHashLink} from 'react-router-hash-link';

const Navigation = (props)=> {
    const [state,setState] = useState({closed:true})
    
    const desktop = useMediaQuery({
        query: '(min-width:  810px)'
      });

      useEffect(() => {
          if(!desktop)
            setState({closed:true})
          else
             setState({closed:false})
      }, [desktop])

    return (
        <div className="nav-parent">
            <div className="company nav-child">
                <span>Training <span className="company-colored">Studio</span></span>
            </div>
            <div className="hamburger" onClick={()=>setState({closed:!state.closed})}>
                <span className="line-first line"></span>
                <span className="line-second line"></span>
                <span className="line-third line"></span>
            </div>
            <ul className={ "nav-child links " + (state.closed?"close":'') }>
                <BrowserRouter>
                <li className="nav-item nav-first"><NavHashLink smooth className="nav-link" to="/">Home</NavHashLink></li>
                <li className="nav-item"><NavHashLink smooth className="nav-link" to="/#about">About</NavHashLink></li>
                <li className="nav-item"><NavHashLink smooth className="nav-link" to="/#classes">Classes</NavHashLink></li>
                <li className="nav-item"><NavHashLink smooth className="nav-link" to="/#schedules">Schedules</NavHashLink></li>
                <li className="nav-item"><NavHashLink smooth className="nav-link" to="/#contact">Contact</NavHashLink></li>
                <li className="nav-item nav-last"><NavHashLink className="nav-link button" to="/signup">Sign up</NavHashLink></li>
                </BrowserRouter>
            </ul>

        </div>
    )
}

export default Navigation;