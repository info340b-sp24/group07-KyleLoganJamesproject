import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function PrintAllCardInformation(props) {
    const displayCardArray = props.carData.map((individualCardObject) => {
        let colorButton = "";  
        if (individualCardObject.type === "Economy") {
            colorButton = "economyButtonColor rounded-pill";
        } else if (individualCardObject.type === "Sport") {
            colorButton = "sportButtonColor rounded-pill d-flex align-items-center";
        } else if (individualCardObject.type === "SUV") {
            colorButton = "suvButtonColor rounded-pill";
        } else {
            colorButton = "truckButtonColor rounded-pill";
        }
        //conditional if it is one of the implementors favorite car.
        let personFavoriteCar = ""
        if (individualCardObject.car_name === "2024 Volkswagen Jetta") {
            personFavoriteCar = <div>
                <b>James's dream car! </b>
                {"An affordable economy vehicle that offers both practicality with slight German luxury."}
            </div>
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
        //if it is a sport, add a sound clip button. Otherwise, display normal card.
        let cardElement = undefined;
        if (individualCardObject.type === "Sport") {
            cardElement = 
            //unique key will be the car name 
            <div key={individualCardObject.car_name} className="containerHoldCardsColumn">
                <div className="card" style={{ width: '18rem'}} aria-label={individualCardObject.description} >
                    <img src={individualCardObject.image} className="card-img-top increaseCarHeight" alt={individualCardObject.car_name}></img>
                    <div className="card-body">
                        <h1 className="card-title display-6">{individualCardObject.car_name}</h1>
                        <div className="card-text text-black">{personFavoriteCar}</div>
                        <button className={colorButton}>{individualCardObject.type}</button>
                        <button className="sportButtonColorSound rounded-pill "> 
                            <a  target="_blank" href={individualCardObject.sound_clip}>Sound Clip</a>
                        </button>
                        <button className="badge badge-pill badge-dark rounded-pill m-2 w-4 p-2">
                        </button>
                        <button className="badge badge-pill badge-dark rounded-pill m-2 w-4 p-2">
                            <Link className='w-3 p-2 text-lg-center' to='Moreinformation' state={{ carData: individualCardObject }}>More info!</Link>
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
                        <div className="card-text text-black">{personFavoriteCar}</div>
                        <button className={colorButton}>{individualCardObject.type}</button>
                        <button className="badge badge-pill badge-dark rounded-pill m-2 w-4 p-2">
                        </button>
                        <button className="badge badge-pill badge-dark rounded-pill m-2 w-4 p-2">
                            <Link className='w-3 p-2 text-lg-center' to='Moreinformation' state={{ carData: individualCardObject }}>More info!</Link>
                        </button>
                        <a target="_blank" href={individualCardObject.link} className="btn btn-primary">Official Webpage</a>
                    </div>
                </div>
            </div>
        }
        return cardElement
    })
    return displayCardArray
}

function DisplayFilteredCarsBasedOnYourInput(props) {
    //method if user were to enter a car name in the search bar. ignores if user types upper or lowercase
    //words as it will return that car object specified by user.
    const filteredCardArrayWithUndefined = props.carData.map((carObject) => {
        if (carObject.car_name.toLowerCase().includes(props.userCarNameSearch.toLowerCase()) === true){
            return carObject
        }   
    });
    //filter the cards that are undefined 
    let newFilteredCardArrayRemovedUndefined = [];
    for (let individual_object in filteredCardArrayWithUndefined) {
        if (filteredCardArrayWithUndefined[individual_object] !== undefined) {
            newFilteredCardArrayRemovedUndefined.push(filteredCardArrayWithUndefined[individual_object]);
        }
    }
    return (
         <div className="containerHoldCardsColumn">
             <PrintAllCardInformation carData={newFilteredCardArrayRemovedUndefined} key={newFilteredCardArrayRemovedUndefined.car_name} />
         </div>
    )
}

export default function Home(props) {
    const [userCarNameSearch, setUserCarnameSearch] = useState('');
    const handleChange =  (event) => {
        const value = event.target.value;
        setUserCarnameSearch(value); 
    };
    //lecture said to keep event in case future you need to use it 
    const handleClearButtonClick = (event) => {
        setUserCarnameSearch('');
    }
    return (
        <main>
            {/* <!-- getting the user input for specific car name to filter based on their needs.--> */}
            <form >
                <div className="form-group text-center p-3 textBox">
                    <label>Search Vehicle Name </label>
                    <input type="text" id="carName" className="form-control text-center p-3" aria-describedby="carFilter" value={userCarNameSearch} onChange={handleChange}>
                    </input>
                    <small className="form-text text-muted">We will use this information to filter based on your input.</small>
                    {/* added this when user clear the filter we will clear the text box */}
                    <p></p>
                    <button type="button" className="changeButtonColor text-white text-center" onClick={handleClearButtonClick}>CLEAR</button>
                </div>
            </form>
            <DisplayFilteredCarsBasedOnYourInput userCarNameSearch={userCarNameSearch} carData={props.carData}/>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        </main>
    )
}