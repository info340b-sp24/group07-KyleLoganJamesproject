import React from 'react';

export function HeaderNonActiveDropdown(props) {

    // update he href after we learn how to route pages
    const links = props.props.map((link, index) => {
        if(index === 0){
            return <a key={index} className="nav-link active text-white fs-2 mt-3 p-0" aria-current={link} href={link}>{link}</a>
        } else {
            return <a key={index} className="nav-link active text-white fs-2 p-0" aria-current={link} href={link}>{link}</a>
        }
    });

    return (
        <ul className="navBarMargin navbar-nav ml-auto smallHide">
            {links}
        </ul>
    )
}