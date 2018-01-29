import React from "react"
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render () {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Pandabize</Link>
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/admin">Admin</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header
