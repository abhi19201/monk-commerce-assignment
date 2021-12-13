import React, { useState} from "react";
import { ReactComponent as Free } from "../../../svgs/Free.svg";
import { ReactComponent as Standard } from "../../../svgs/Standard.svg";
import { ReactComponent as Premium } from "../../../svgs/Premium.svg";
import { ReactComponent as Tick } from "../../../svgs/Tick.svg";
import { ReactComponent as Down } from "../../../svgs/Down.svg";
import styled from "styled-components";


const plans = [
    {
        svg: <Free />,
        name: "Free Plan",
        offers: [
            "Unlimited Bandwitch",
            "Encrypted Connection",
            "No Traffic Logs",
            "Works on All Devices",
        ],
        price: <div>Free</div>,
    },
    {
        svg: <Standard />,
        name: "Standard Plan",
        offers: [
            "Unlimited Bandwitch",
            "Encrypted Connection",
            "Yes Traffic Logs",
            "Works on All Devices",
            "Connect Anyware",
        ],
        price: (
            <div>
                $9 <span>/ mo</span>
            </div>
        ),
    },
    {
        svg: <Premium />,
        name: "Premium Plan",
        offers: [
            "Unlimited Bandwitch",
            "Encrypted Connection",
            "Yes Traffic Logs",
            "Works on All Devices",
            "Connect Anyware",
            "Get New Features",
        ],
        price: (
            <div>
                $12 <span>/ mo</span>
            </div>
        ),
    },
];

const StyledPlanComponent = styled.div`
    margin-top: 5rem;

    > .title {
        font-weight: 500;
        color: #0b132a;
        font-size: 1.5rem;
    }

    > .text {
        display: block;
        width: 50%;
        margin: 0 auto;
        margin-top: 1.4rem;
        line-height: 4vh;
    }

    > .plan-container {
        display: flex;
        margin-top: 4rem;
        justify-content: space-evenly;
        flex-flow: row wrap;
    }
`;

const StyledPlanContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: justify;
    border: 1px solid;
    border-radius: 5px;
    border-color: #dddddd;
    padding: 3vw;
    align-items: center;
    margin-bottom: 2rem;
    transition: 0.3s ease-in;
    border-color: ${(props) => props.selectedPlan && "#f53838"};

    &:hover {
        cursor: pointer;
        border-color: #f53838;
    }

    .plan-name {
        font-weight: 500;
        color: #0b132a;
        font-size: 1.125rem;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    .offers-list {
        height: ${(props) =>
            props.winWidth < 900 && !props.open ? "0rem" : "100%"};
        padding-bottom: ${(props) =>
            props.winWidth < 900 && !props.open ? "0rem" : "2rem"};
        overflow: hidden;
        transition: 0.3s ease-in;

        div {
            padding: 0.5rem;
            padding-left: 0;
            padding-right: 0;

            svg {
                padding-right: 1rem;
            }
        }
    }

    > svg {
        height: ${(props) => (props.open ? "12vw" : "2rem")};
        align-self: self-end;
        transition: 0.3s ease-in;
        transform: ${(props) =>
            props.open ? "rotate(180deg)" : "rotate(0deg)"};
    }

    .priceCard {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .plan-price {
            font-size: 1.2rem;
            font-weight: 500;
        }

        .plan-price > div > span {
            color: #4f5665;
            font-weight: 400;
        }

        .plan-select {
            background: ${(props) =>
                props.selectedPlan ? "#f53838" : "#ffffff"};
            color: ${(props) => (props.selectedPlan ? "#ffffff" : "#f53838")};
            width: fit-content;
            padding: 0.6rem;
            padding-left: 2rem;
            padding-right: 2rem;
            border: 1px solid #f53838;
            border-radius: 2rem;
            box-shadow: ${(props) =>
                props.selectedPlan && "0px 10px 3rem -10px #f53838"};
            margin-top: 1rem;
            width: 50%;
            font-weight: 500;
            text-align: center;
        }
    }
`;

export default function Plan(props) {
    const [selectedPlan, setSelectedPlan] = useState([false, false, false]);
    const [arrowState, setArrowState] = useState([false, false, false]);

    const setPlan = (index) => {
        let planArr = [false, false, false];
        planArr[index] = true;
        setSelectedPlan(() => {
            return planArr;
        });
    };

    return (
        <StyledPlanComponent className='plan' id='pricing'>
            <div className='title'>Choose Your Plan</div>
            <div className='text'>
                Let's choose the package that is best for you and explore it
                happily and cheerfully.
            </div>

            <div className='plan-container'>
                {plans.map((plan, index) => {
                    return (
                        <StyledPlanContainer
                            open={arrowState[index]}
                            winWidth={props.winWidth}
                            selectedPlan={selectedPlan[index]}
                            onClick={() => setPlan(index)}
                            key={index}>
                            <div>{plan.svg}</div>
                            <div className='plan-name'>{plan.name}</div>
                            {props.winWidth < 900 ? (
                                <Down
                                    onClick={() => {
                                        setArrowState((prevState) => {
                                            let newState = prevState;
                                            newState[index] = !prevState[index];
                                            return newState;
                                        });
                                    }}
                                />
                            ) : null}
                            <div className='offers-list'>
                                {plan.offers.map((offer, ind) => {
                                    return (
                                        <div key={ind}>
                                            <Tick />
                                            {offer}
                                        </div>
                                    );
                                })}
                            </div>

                            <div className='priceCard'>
                                <div className='plan-price'>{plan.price}</div>
                                <div className='plan-select'>select</div>
                            </div>
                        </StyledPlanContainer>
                    );
                })}
            </div>
        </StyledPlanComponent>
    );
}
