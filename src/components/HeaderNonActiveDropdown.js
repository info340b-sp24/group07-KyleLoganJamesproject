import React from 'react';

export function HeaderNonActiveDropdown(props) {

    // update he href after we learn how to route pages

    return (
        <ul className="navBarMargin navbar-nav ml-auto smallHide">
            <li className="nav-item">
            <a className="nav-link active text-white fs-2 mt-3 p-0" aria-current="Home Page" href="index.html"> Home </a>
            </li>
            <li className="nav-item">
            <a className="nav-link text-white fs-2 p-0" aria-current="Upload Page" href="upload-index.html">Upload </a>
            </li>
            <li className="nav-item">
            <a className="nav-link active text-white fs-2 p-0" aria-current="Compare Page" href="compare-index.html"> Compare </a>
            </li>
        </ul>
    )
}