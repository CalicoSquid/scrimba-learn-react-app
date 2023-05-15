
import logo from '../images/logo192.png'

export default function Header() {
    return (
        <nav className="navbar">
          <div id="head-wrap">
            <img src={logo} width="40px" alt="React logo"/>
            <h1 className="header">ReactFacts</h1>
          </div>
          
            <ul className="links">
                <li><a className="nav-link" href='#about'>Project 1</a></li>
                <li><a className="nav-link" href='#pricing'>Project 2</a></li>
                <li><a className="nav-link" href='#content'>Project 3</a></li>
            </ul>
        </nav>
    )
  }