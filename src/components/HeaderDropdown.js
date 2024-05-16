import React from 'react';

export function HeaderDropdown(props) {

    // update he href after we learn how to route pages
    // console.log(props.props)

    const links = props.props.map((link, index) => {
        return <a key={index} className="nav-link active text-dark fs-2" aria-current={link} href={link}>{link}</a>
    });

    return (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {links}
            </div>
            </li>
        </ul>
    )
}