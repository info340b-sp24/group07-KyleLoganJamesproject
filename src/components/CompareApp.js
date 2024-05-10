import React from 'react';

export function CompareApp(props) {

    return (
        <div>
            <main>
                {/* <!-- used to represent the top of the page header used to block off the top --> */}
                <header className="headerFlex">

                {/* <!-- nav bar in the top right --> */}
                <nav className="navbar navbar-expand-lg navbar-light bg-red">
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
                            <a className="nav-link active text-dark fs-3 " aria-current="Home Page" href="index.html"> 
                            Home &ensp; 
                            </a>
                            <a className="nav-link text-dark fs-2" aria-current="Upload Page" href="upload-index.html"> 
                            Upload &ensp; 
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
                        <a className="nav-link active text-dark fs-3 " aria-current="Home Page" href="index.html"> 
                            Home &ensp; 
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-dark fs-2" aria-current="Upload Page" href="upload-index.html">
                            Upload &ensp; 
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active text-dark fs-2 " aria-current="Compare Page" href="compare-index.html"> 
                            Compare
                        </a>
                        </li>
                    </ul>
                    {/* <!-- End of list for when drop down isnt active --> */}
                    </div>
                </nav>
                
                {/* <!-- displays title next in the middle --> */}
                <h1 className="pageTitle">
                    <p>CarQueen</p>
                </h1>

                {/* <!-- displays the logo first in the left corner --> */}
                <a href="index.html" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                <img src="page_images/Lightning_McQueen_logo.gif" alt="CarQueen Logo"></img>
                </a>

                </header>

                {/* <!-- div for making the card, logo and card into a flex container --> */}
                <div className="comparison-cardFlex d-lg-flex">
                    {/* <!-- card 1--> */}
                    {/* <!--beggining getting the toyota prius information--> */}
                    <div className="comparison-cardMargin d-flex flex-column">
                        {/* <!-- this represents the search bar of car 1.--> */}
                        <form className="comparison-searchPosition d-flex flex-column">
                        <h2 className="comparison-searchCarTitle">Car 1</h2>
                        <div className="text-left comparison-searchBar">
                            <div className="form-group mb-3 comparison-col-3">
                            <input type="CarName" className="form-control text-left p-3" aria-describedby="Form to enter car name"
                                placeholder="Search Vehicle 1"></input>
                            {/* <!-- later implement it to link to car they search for --> */}
                            <button className="searchButtonSize" type="submit">Search Car #1</button>

                            {/* <!-- the cards starts here, uses border-secondary to acheive black outline --> */}
                            <div className="card border-secondary">

                                {/* <!-- the cards body starts here with this div --> */}
                                <div className="card-body">
                                <img src="car_images/2024-toyota-prius.png" className="comparison-increaseCarHeight"
                                    alt="A Toyota Prius"></img>
                                {/* <!-- update to reflect the actual car searched up later --> */}
                                <h5 className="card-title">Toyota Prius AWD Sedan</h5>

                                {/* <!-- List for car elements --> */}
                                <ul className="card-text text-black">
                                    <li>
                                    Car Category: Hybrid
                                    </li>
                                    <li>
                                    Price: $24,525
                                    </li>
                                    <li>
                                    Miles Per Gallon: 54 MPG
                                    </li>
                                    <li>
                                    Luxury Scale (1-10): 5
                                    </li>
                                    <li>
                                    Saftey Rating: 3
                                    </li>
                                </ul>

                                <a href="https://www.toyota.com/prius/" className="btn btn-primary">Official Webpage</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
                {/* <!-- div for the vs logo in the center of the page --> */}
                <div className="comparison-vsFlex flex-item comparison-cardMargin">
                <img className="comparison-vsImage" src="page_images/vs-versus-text-logo-battle-fight-game-flat-cartoon-symbol_101884-738.avif" alt="Versus Logo"></img>
                </div>


                {/* <!-- card 2 here --> */}
                <div className="comparison-cardFlex d-lg-flex">
                {/* <!-- card 2--> */}
                {/* <!--beggining getting the toyota prius information--> */}
                <div className="comparison-cardMargin d-flex flex-column" style={{width: 23 + 'rem'}}>

                    {/* <!-- this represents the search bar of car 2.--> */}
                    <form className="comparison-searchPosition d-flex flex-column">
                    <h2 className="comparison-searchCarTitle">Car 2</h2>
                    <div className="text-left comparison-searchBar">
                        <div className="form-group mb-3 comparison-col-3">
                        <input type="CarName" className="form-control text-left p-3" aria-describedby="Form to enter car name"
                            placeholder="Search Vehicle 2"></input>
                        {/* <!-- later implement it to link to car they search for --> */}
                        <button className="searchButtonSize" type="submit">Search Car #2</button>

                        {/* <!-- the cards starts here, uses border-secondary to acheive black outline --> */}
                        <div className="card border-secondary">

                            {/* <!-- the cards body starts here with this div --> */}
                            <div className="card-body">
                            <img src="page_images/unknownCar.png" className="comparison-increaseCarHeight"
                                alt="A placeholder vehicle until a user searches for a vehicle"></img>
                            {/* <!-- update to reflect the actual car searched up later --> */}
                            <h5 className="card-title">?????</h5>

                            {/* <!-- List for car elements the ? changes when a car is searched--> */}
                            <ul className="card-text text-black">
                                <li>
                                Car Category: ?
                                </li>
                                <li>
                                Price: ?
                                </li>
                                <li>
                                Miles Per Gallon: ?
                                </li>
                                <li>
                                Luxury Scale (1-10): ? 
                                </li>
                                <li>
                                Saftey Rating: ?
                                </li>
                            </ul>

                            {/* <!-- link is updated after a car is searched currently links back to
                            compare page --> */}
                            <a href="compare-index.html" className="btn btn-primary">Official Webpage</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </form>
                </div>
                </div>

            </main>

            <footer className="footerFlexWrapper">©2024 CarQueen 340</footer>
        </div>
    )
}
