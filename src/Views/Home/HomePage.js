import React, { useState } from 'react';
import FoodItem from '../../Components/FoodItem/FoodItem';
import Header from '../../Components/Header/Header';
import TemporaryData from '../../Constants/TemporaryData'


const HomePage = () => {
    const foods = TemporaryData;
    const [selectedFoodType, setSelectedFoodType] = useState("Breakfast");
    const [searchData, setSearchData] = useState("");

    const selectedFoods = foods.filter(food => food.type === selectedFoodType)


    return (
        <div>
            <Header />
            <section id='#search' className="banner d-flex align-items-center text-center">
                <div className="container">
                    <h1>Best Food Waiting  for your Belly</h1>
                    <div className="search-box col-md-6 my-5 mx-auto">
                        <input onChange={(e) => setSearchData(e.target.value)} id="query" type="text" className="form-control" placeholder="Search Food Item" />
                        <button className="btn btn-danger search-btn" style={{ borderRadius: 55 }}>Search</button>
                    </div>
                </div>
            </section>
            <section id='food' className="food-area my-5">
                <div className="container">
                    <nav>
                        <ul className="nav justify-content-center">
                            <li onClick={() => setSelectedFoodType("Breakfast")} className="nav-item">
                                <span to="breakfast" className={selectedFoodType === "Breakfast" ? "active nav-link" : "nav-link"}>Breakfast</span>
                            </li>
                            <li onClick={() => setSelectedFoodType("Lunch")} className="nav-item">
                                <span to="breakfast" className={selectedFoodType === "Lunch" ? "active nav-link" : "nav-link"}>Lunch</span>
                            </li>
                            <li onClick={() => setSelectedFoodType("Dinner")} className="nav-item">
                                <span to="breakfast" className={selectedFoodType === "Dinner" ? "active nav-link" : "nav-link"}>Dinner</span>
                            </li>
                        </ul>
                    </nav>
                    <div className="row my-5">
                        {
                            selectedFoods.filter((hostel) => {
                                if (searchData == "") {
                                    return hostel;
                                }
                                else if (hostel.name.toLowerCase().includes(searchData.trim().toLowerCase())) {
                                    return hostel;
                                }
                            }).map(food => <FoodItem key={food.id} food={food} />)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;