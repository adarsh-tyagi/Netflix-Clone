import React from 'react'
import './PlansScreen.css'

function PlansScreen() {
    const plans = [
        {
            name: "Basic",
            cost: "499"
        },
        {
            name: "Standard",
            cost: "649"
        },
        {
            name: "Premium",
            cost: "799"
        }
    ]

    return (
        <div className="plansScreen">
            {plans.map((plan) => {
                return (
                    <div className="plansScreen__plan">
                        <h3>{plan.name}</h3>
                        <p>{plan.cost} INR</p>
                    </div>
                )
            })}
        </div>
    ) 
}

export default PlansScreen
