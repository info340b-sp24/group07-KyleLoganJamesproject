import React from 'react';
import { HeaderDropdown} from './HeaderDropdown';
import { HeaderNonActiveDropdown} from './HeaderNonActiveDropdown';

export function Header(props) {

    const headerOptions = ["Home", "Upload", "Compare"];

    return (
        <div>
            {/* <!-- used to represent the top of the page header used to block off the top --> */}
            <header className="headerFlex">

            {/* <!-- nav bar in the top right --> */}
            <nav className="navBarMenuMargin navbar navbar-expand-lg navbar-light bg-red">
                {/* <!-- drop down menu starts here --> */}
                <a className="navbar-brand" href="#"></a>
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="../page_images/menu-outline.svg" alt="Menu icon"></img>
                </a>    
                {/* <!-- After clicking on the image, this div below opens --> */}
                <div className="navbar-collapse" id="navbarSupportedContent">
                {/* <!-- links for the dropdown menu --> */}
                <HeaderDropdown props={headerOptions}/>
                {/* <!-- End of dropdown menu -->
            
                <!-- list items for when the drop down isnt active--> */}
                <HeaderNonActiveDropdown props={headerOptions}/>
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