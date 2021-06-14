import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import FoodItem from '../../Components/FoodItem/FoodItem';
import Header from '../../Components/Header/Header';
import TemporaryData from '../../Constants/TemporaryData'

const RecipePage = () => {
    const { id } = useParams();
    const food = TemporaryData.find(fd => fd.id === id);
    const selectedFoods = TemporaryData.filter(food => food.type === TemporaryData[id].type.toString())
    console.log(selectedFoods)

    return (
        <>
            <Header />
            <div className="food-details my-5 pt-5 container">
                <div className="row">
                    <div className="col-md-6 pr-md-4">
                        <h1>{TemporaryData[id].name}</h1>
                        <h3>{TemporaryData[id].name} recipe: ⬇</h3>

                        <p className="my-5">{TemporaryData[id].fullDescription}</p>
                        <div className="action d-flex align-items-center">
                        </div> <div className="more-images mt-5 ">
                            <img className="mr-4 small-img active-small-img mr-4 small-img" height="150px" src={TemporaryData[id].images} alt="" />
                            <img className="mr-4 small-img active-small-img mr-4 small-img" height="150px" src={TemporaryData[id].images[1]} alt="" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <img className="img-fluid" src={TemporaryData[id].images} alt="" />

                    </div>
                </div>
            </div>
            <section id='food' className="food-area my-5">
                <div className="container">
                    <div className="row my-5">

                        {
                            selectedFoods.slice(3, 6).map(food => <FoodItem key={food.id} food={food} />)
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default RecipePage;