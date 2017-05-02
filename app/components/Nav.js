var React = require('react');
var NavLink = require('react-router-dom').NavLink;

function Nav () {
    return(
        <nav>
        <ul className='nav-bar'>
            <li>
                <NavLink exact activeClassName='active' to='/'>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to='/course'>
                    Courses
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to='/professors'>
                    Professors
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to='/internships'>
                    Internships
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to='/opt'>
                    CPT/OPT
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to='/author'>
                    Authors
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to='/contact'>
                    Contacts
                </NavLink>
            </li>
        </ul>
        </nav>
    )
}

module.exports = Nav;