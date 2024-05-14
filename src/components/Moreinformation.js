
import { useState } from "react";
import { TopOfHomePage } from "./Home"





export default function MoreInformation(props) {
    // const [getOneCardValue, setGetOneCardValue] = useState(0)
    
    // console.log(props.carData);
    //this is all temporary to get one data value while we are witing for routes
    let count = 0;
    const tempCardArray = props.carData.map( (carObject) => {
        if (count === 0) {
            count++;
            return carObject 
            // setGetOneCardValue(1);
        }
    })
    // console.log(tempCardArray)
    let newFilteredCardArrayRemovedUndefined = [];
    for (let individual_object in tempCardArray) {
        if (tempCardArray[individual_object] !== undefined) {
            newFilteredCardArrayRemovedUndefined.push(tempCardArray[individual_object]);
        }
    }
    const tempCarValue = tempCardArray[0];
    // console.log("new array temp is: ", newFilteredCardArrayRemovedUndefined);
    //simply call the .fields from tempCarValue.
    // console.log("hii", tempCarValue);
    
    
    //everything above this is temporary patch. 
    //below just replace tempCarValue with props.[field name] when get by JSON for the individual object
    const topButtonString = " d-flex justify-content-center mx-auto badge badge-pill badge-dark rounded-pill m-5 w-4 p-2 col-md-4 p-3 ";
    const startingCarPrice = "Starting estimated price: $" + tempCarValue.price;
    const safetyRating = "Safety Rating: " + tempCarValue.saftey_rating + "/5";
    const luxery_scale = "Luxury rating based on 0-10 scale: " + tempCarValue.luxury_scale;
    const MPG = "MPG (combination freeway and city driving): " + tempCarValue.MPG;
    return (
        <main >
            <TopOfHomePage/>
            
            <button className={topButtonString} style={{fontSize: '1.5em', color: 'black', backgroundColor: 'rgb(249, 85, 115)'}}>{tempCarValue.car_name}</button>
            {/* Creation of the car image photo div code */}
            <div key={tempCarValue.car_name} className="containerHoldCardsColumn " >
                <div className="card border-dark" style={{ width: '18em'}} aria-label={tempCarValue.description}>
                <img src={tempCarValue.image} className="card-img-top increaseCarHeight" alt={tempCarValue.car_name}></img>
                </div>
            </div>

        
            <div className="containerHoldCardsColumn ">
                {/* TODO ADD BACKGROUND COLOR THAT IS NICE OR SOMEWHAT UNDER STYLE */}
                <div className="card border-dark" style={{ width: '18em', height: '18em'}} aria-label={tempCarValue.description}>
                    <h1 style={{fontSize: '1.5em', textAlign: 'center'}}>Description</h1>
                    <p className="card-text text-black " ><b>{tempCarValue.description}</b></p>

                </div>

                
                {/* TODO ADD BACKGROUND COLOR THAT IS NICE OR SOMEWHAT UNDER STYLE maybe green */}
                <div className="card border-dark" style={{ width: '18em', height: '18em'}} aria-label={tempCarValue.description}>
                    <h1 style={{fontSize: '1.5em', textAlign: 'center'}}>Fun Facts</h1>
                    <p className="card-text text-black " ><b>{startingCarPrice}</b></p>
                    <p className="card-text text-black " ><b>{safetyRating}</b></p>
                    <p className="card-text text-black " ><b>{luxery_scale}</b></p>
                    <p className="card-text text-black " ><b>{MPG}</b></p>
                </div>
            </div>
        
            
            
            

        </main>
    //end of the return ()
    )
}