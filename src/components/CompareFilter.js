import React, { useState }from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export function CompareFilter(props) {

    const [carCategory, setCarCategory] = useState("Unfiltered");

    // updates state
    const handleFilterInput = (event) => {
        if(event.target.text === "Unfiltered") {
            setCarCategory("Unfiltered");
        } else if (event.target.text === "Economy") {
            setCarCategory("Economy");
        } else if (event.target.text === "Sport") {
            setCarCategory("Sport");
        } else if (event.target.text === "SUV") {
            setCarCategory("SUV");
        } else if (event.target.text === "Truck") {
            setCarCategory("Truck");
        }
    }

    // apply filter call back for CompareCard
    const handleCarInput = (event) => {
        props.applyFilterCallback(carCategory)
    }

    // updates string to display
    const buttonDispaly = "Click to apply \"" + carCategory + "\" filter"


    return(
        <div title={carCategory} className="comparison-searchPosition d-flex flex-column">
            <Dropdown as={ButtonGroup}>
                <Button variant="primary" className="custom-button" onClick={handleCarInput}>{buttonDispaly}</Button>
                <Dropdown.Toggle split variant="primary" className="custom-button" id="dropdown-split-basic" />
                
                <Dropdown.Menu>
                    <Dropdown.Item onClick={handleFilterInput}>Unfiltered</Dropdown.Item>
                    <Dropdown.Item onClick={handleFilterInput}>Economy</Dropdown.Item>
                    <Dropdown.Item onClick={handleFilterInput}>Sport</Dropdown.Item>
                    <Dropdown.Item onClick={handleFilterInput}>SUV</Dropdown.Item>
                    <Dropdown.Item onClick={handleFilterInput}>Truck</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )   
}