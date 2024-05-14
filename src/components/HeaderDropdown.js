import React from 'react';

export function HeaderDropdown(props) {

    // update he href after we learn how to route pages

    return (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="nav-link active text-dark fs-2 " aria-current="Home Page" href="index.html"> Home </a>
                <a className="nav-link text-dark fs-2" aria-current="Upload Page" href="upload-index.html"> Upload </a>
                <a className="nav-link active text-dark fs-2 " aria-current="Compare Page" href="compare-index.html"> Compare</a>
            </div>
            </li>
        </ul>
    )
}