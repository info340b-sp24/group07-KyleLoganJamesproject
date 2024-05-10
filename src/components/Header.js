import React from 'react';

export function Header(props) {

    return (
        <div>
            {/* <!-- used to represent the top of the page header used to block off the top --> */}
            <header className="headerFlex">

            {/* <!-- nav bar in the top right --> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-red p-0">
                {/* <!-- drop down menu starts here --> */}
                <a className="navbar-brand" href="#"></a>
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="../page_images/menu-outline.svg" alt="Menu icon"></img>
                </a>    
                {/* <!-- After clicking on the image, this div below opens --> */}
                <div className="navbar-collapse" id="navbarSupportedContent">
                {/* <!-- links for the dropdown menu --> */}
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="nav-link active text-dark fs-2 " aria-current="Home Page" href="index.html"> 
                        Home 
                        </a>
                        <a className="nav-link text-dark fs-2" aria-current="Upload Page" href="upload-index.html"> 
                        Upload
                        </a>
                        <a className="nav-link active text-dark fs-2 " aria-current="Compare Page" href="compare-index.html"> 
                        Compare
                        </a>
                    </div>
                    </li>
                </ul>
                {/* <!-- End of dropdown menu -->
            
                <!-- list items for when the drop down isnt active--> */}
                <ul className="navbar-nav ml-auto smallHide">
                    <li className="nav-item">
                    <a className="nav-link active text-white fs-2 mt-3 p-0" aria-current="Home Page" href="index.html"> 
                        Home 
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-white fs-2 p-0" aria-current="Upload Page" href="upload-index.html">
                        Upload 
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active text-white fs-2 p-0" aria-current="Compare Page" href="compare-index.html"> 
                        Compare
                    </a>
                    </li>
                </ul>
                {/* <!-- End of list for when drop down isnt active --> */}
                </div>
            </nav>
            
            {/* <!-- displays title next in the middle --> */}
            <h1 className="pageTitle text-white">
                <p>CarQueen</p>
            </h1>

            {/* <!-- displays the logo first in the left corner --> */}
            <a href="index.html" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
            <img src="page_images/Lightning_McQueen_logo.gif" alt="CarQueen Logo"></img>
            </a>

            </header>
        </div>
    )
}