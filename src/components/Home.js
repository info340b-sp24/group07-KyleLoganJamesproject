import React, { useEffect, useState } from 'react';
import {Footer} from './Footer.js'
import { filter, update } from 'lodash';
import MoreInformation from './Moreinformation.js';

export function TopOfHomePage() {
    const element = 
    //top heading 
    <header className="headerFlex">
    {/* <!-- nav bar in the top right --> */}
    <nav className="navbar navbar-expand-lg navbar-light bg-red">
    {/* <!-- drop down menu starts here --> */}
        <a className="navbar-brand" href="#"></a>
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {/*POTENTIAL FIGURE OUT HTE MATH TO GET MENU OUTLINE  */}
            <img src="page_images/menu-outline.svg" alt="Menu icon"/>
        </a>   
        {/* <!-- After clicking on the image, this div below opens --> */}
        <div className="navbar-collapse" id="navbarSupportedContent">
            {/* <!-- links for the dropdown menu --> */}
            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="nav-link active text-dark fs-3 " aria-current="Home Page" href="#"> 
                            {/* TODO CHANGE THE LIST ON THE NAVBAR BECAUSE THE CLASSES ARE NOW MESSED UP */}
                            <a className="text-dark fs-3" href="index.html">Home</a> &ensp; 
                        </a>  
                            {/* TODO CHANGE THE LIST ON THE NAVBAR BECAUSE THE CLASSES ARE NOW MESSED UP */}
                        <a className="nav-link text-dark fs-2" aria-current="Upload Page" href="#"> 
                            <a className="text-dark fs-3" href="upload-index.html">Upload</a> &ensp; 
                        </a>
                             {/* TODO CHANGE THE LIST ON THE NAVBAR BECAUSE THE CLASSES ARE NOW MESSED UP */}
                        <a className="nav-link active text-dark fs-2 " aria-current="Compare Page" href="#"> 
                            <a className="text-dark fs-3" href="compare-index.html">Compare</a> 
                        </a> 
                    </div>
                </li>
            </ul>
        {/* <!-- End of dropdown menu --> */}

            {/* <!-- list items for when the drop down isnt active--> */}
            <ul className="navbar-nav ml-auto smallHide">
                <li className="nav-item">
                    <a className="nav-link active text-dark fs-3 " aria-current="Home Page" href="#"> 
                        <a className="text-dark fs-3" href="index.html">Home</a> &ensp; 
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark fs-2" aria-current="Upload Page" href="#"> 
                        <a className="text-dark fs-3" href="upload-index.html">Upload</a> &ensp; 
                    </a>
                </li>
                <li className="nav-item">
                    {/* ERROR CANNOT HAVE THE A TAG BEFORE ANOTHER A TAG SHOULD DO WORKAROUND */}
                    <a className="nav-link active text-dark fs-2 " aria-current="Compare Page" href="#"> 
                        <a className="text-dark fs-3" href="compare-index.html">Compare</a> 
                    </a>
                </li>
            </ul>
        {/* <!-- End of list for when drop down isnt active --> */}
        {/* the end of the navbar-collapse div */}
        </div>
    </nav>

    {/* <!-- displays title next in the middle --> */}
    <h1 className="pageTitle">
        <p>CarQueen</p>
    </h1>

    {/* <!-- displays the logo first in the left corner --> */}
    <a href="index.html" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
        <img src="page_images/Lightning_McQueen_logo.gif" alt="CarQueen Logo"/>
    </a>
    </header>
    return element;
    
}

function PrintAllCardInformation(props) {
    // console.log("the carData prop inside printAllCardInformation is: ", props.carData);
    const displayCardArray = props.carData.map((individualCardObject) => {
        //grab all the contents via JSON the card data and create a card element based on these 
        //parameters. 
        let colorButton = "";  
        if (individualCardObject.type === "Economy") {
            colorButton = "economyButtonColor rounded-pill";
        } else if (individualCardObject.type === "Sport") {
            colorButton = "sportButtonColor rounded-pill d-flex align-items-center";
        } else if (individualCardObject.type === "SUV") {
            colorButton = "suvButtonColor rounded-pill";
        } else {
            //it is a truck 
            colorButton = "truckButtonColor rounded-pill";
        }

        let personFavoriteCar = ""

        // if (individualCardObject.description.includes("dream car!")) {
        // }
        if (individualCardObject.car_name === "2024 Volkswagen Jetta") {
            personFavoriteCar = <div>
                <b>James's dream car! </b>
                {"An affordable economy vehicle that offers both practicality with slight German luxury."}
            </div>
            // personFavoriteCar = <b>James's dream car! </b> +
            // "An affordable economy vehicle that offers both practicality with slight German luxury.";
        } else if (individualCardObject.car_name === "2024 Chevy Corvette ZO6 RWD") {
            personFavoriteCar = 
            <div>
                <b>Logan's dream car! </b>
             {" An extremely fast and sexy sports car engineered for the track creating an eye watering 670 beautiful American Horsepower."}
            </div>
        } else if (individualCardObject.car_name === "2024 Toyota Highlander AWD") {
            personFavoriteCar = 
            <div>
                <b>Kyle's dream car! </b>
             {"A great soccer mom vehicle meant to transport you and 6 other passangers from point A to B reliably. It is a great vehicle when it comes to value also."}
            </div>
        } else {
            personFavoriteCar = individualCardObject.description;
        }
        
        let cardElement = undefined;

        if (individualCardObject.type === "Sport") {
            cardElement = 
                //unique key will be the car name 
            <div key={individualCardObject.car_name} className="containerHoldCardsColumn">
                <div className="card" style={{ width: '18rem'}} aria-label={individualCardObject.description} >
                    <img src={individualCardObject.image} className="card-img-top increaseCarHeight" alt={individualCardObject.car_name}></img>
                    <div className="card-body">
                        <h1 className="card-title display-6">{individualCardObject.car_name}</h1>
                        <p className="card-text text-black ">{personFavoriteCar}</p>
                        <button className={colorButton}>{individualCardObject.type}</button>
                        <button className="sportButtonColorSound rounded-pill "> 
                            <a  target="_blank" href={individualCardObject.sound_clip}>Sound Clip</a>
                        </button>
                        <button className="badge badge-pill badge-dark rounded-pill m-2 w-4 p-2">
                            {/* THE MORE INFORMATION PAGE NEEDS TO BE IMPLEMENTED BECAUSE IT DOES NOT WORK! JUST FOCUSING ON DISPLAY IMAGE CURRENTLY.*/}
                        </button>
                        <button className="badge badge-pill badge-dark rounded-pill m-2 w-4 p-2">
                            {/* MUST CHANGE PATH BUT WE WILL LEARN HOW TO ROUTE TO NEW PAGES SOON. */}
                            <a className="w-3 p-2 text-lg-center"  href={<MoreInformation carData={individualCardObject}/>} style={{ fontSize: '1.2em'  }}>More Info!</a>

                        </button>
                        <a target="_blank" href={individualCardObject.link} className="btn btn-primary">Official Webpage</a>
                    </div>
                </div>
            </div>
        } else {
            cardElement = 
            //unique key will be the car name 
            <div key={individualCardObject.car_name} className="containerHoldCardsColumn">
                <div className="card" style={{ width: '18rem'}} aria-label={individualCardObject.description} >
                    <img src={individualCardObject.image} className="card-img-top increaseCarHeight" alt={individualCardObject.car_name}></img>
                    <div className="card-body">
                        <h1 className="card-title display-6">{individualCardObject.car_name}</h1>
                        {/* NEED AN IF CASE FOR THREE SPECIFIC CONDITION JAMES, LOGAN, AND KYLE FAV CAR*/}
                        
                        <p className="card-text text-black ">{personFavoriteCar}</p>
                        <button className={colorButton}>{individualCardObject.type}</button>
                        <button className="badge badge-pill badge-dark rounded-pill m-2 w-4 p-2">
                            {/* THE MORE INFORMATION PAGE NEEDS TO BE IMPLEMENTED BECAUSE IT DOES NOT WORK! JUST FOCUSING ON DISPLAY IMAGE CURRENTLY.*/}
                        </button>
                        <button className="badge badge-pill badge-dark rounded-pill m-2 w-4 p-2">
                            {/* MUST CHANGE PATH BUT WE WILL LEARN HOW TO ROUTE TO NEW PAGES SOON. */}
                            <a className="w-3 p-2 text-lg-center"  href={<MoreInformation carData={individualCardObject}/>} style={{ fontSize: '1.2em'  }}>More Info!</a>
                            
                        </button>
                        <a target="_blank" href={individualCardObject.link} className="btn btn-primary">Official Webpage</a>
                    </div>
                </div>
            </div>
        }
        return cardElement
    })
    
    // console.log("the display card array is: ", displayCardArray);
    
    return displayCardArray

}

function DisplayFilteredCarsBasedOnYourInput(props) {
    const filteredCardArrayWithUndefined = props.carData.map((carObject) => {
        if (carObject.car_name.toLowerCase().includes(props.userCarNameSearch.toLowerCase()) === true){
            return carObject
        } 
        
    });
    let newFilteredCardArrayRemovedUndefined = [];
    for (let individual_object in filteredCardArrayWithUndefined) {
        if (filteredCardArrayWithUndefined[individual_object] !== undefined) {
            newFilteredCardArrayRemovedUndefined.push(filteredCardArrayWithUndefined[individual_object]);
        }
    }
    
     return (
         <div className="containerHoldCardsColumn">
                        {/* THIS IS WHERE YOU LOOP THROUGH AND DISPLAY ALL CARD CONTENTS. */}
                        {/* pass in the unique key being the car names */}
             <PrintAllCardInformation carData={newFilteredCardArrayRemovedUndefined} key={newFilteredCardArrayRemovedUndefined.car_name} />
         </div>
     )
}


export default function Home(props) {

    // console.log("the current prop data is: ", props.carData);
    const [userCarNameSearch, setUserCarnameSearch] = useState('');
    
    const handleChange =  (event) => {
        const value = event.target.value;
        // console.log("user typed: ", value);
        setUserCarnameSearch(value); //you must set the value first then log that 
    };
    //lecture said to keep event in case future you need to use it 
    const handleClearButtonClick = (event) => {
        setUserCarnameSearch('');
    }

    return (
        <main>
            <TopOfHomePage/>
            {/* <!-- getting the user input for specific car name to filter based on their needs.--> */}
            <form >
                <div className="form-group text-center p-3 textBox">
                    <label htmlFor="vehicle-name ">Search Vehicle Name </label>
                    <input type="text" id="carName" className="form-control text-center p-3" aria-describedby="carFilter" value={userCarNameSearch} onChange={handleChange}>
                    </input>
                    {/* we need to create function to filter the cars */}
                    <small className="form-text text-muted">We will use this information to filter based on your input.</small>
                    {/* added this when user clear the filter we will clear the text box */}
                    <p></p>
                    <button type="button" className="changeButtonColor text-white text-center" onClick={handleClearButtonClick}>CLEAR FILTER</button>
                </div>
            </form>

            <DisplayFilteredCarsBasedOnYourInput userCarNameSearch={userCarNameSearch} carData={props.carData}/>
            
            
            {/* <!--wrapping this in a div tag for flex box and aligning 4 per row. Parent will add changes to all children--> */}
            {/* <div className="containerHoldCardsColumn"> */}
                {/* THIS IS WHERE YOU LOOP THROUGH AND DISPLAY ALL CARD CONTENTS. */}
                {/* <PrintAllCardInformation carData={props.carData} key={props.carData.car_name} /> */}
            {/* </div> */}

            <Footer props={props}/>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
            {/*END OF DOCUMENT BODY.  */}
        
        </main>
   
        
    )
}