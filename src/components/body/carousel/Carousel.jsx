import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robert from "../../../svgs/Robert.png";
import Christy from "../../../svgs/Christy.png";
import Jou from "../../../svgs/Jou.png";
import { ReactComponent as Star } from "../../../svgs/Star.svg";
import { ReactComponent as Left } from "../../../svgs/Left.svg";
import { ReactComponent as Right } from "../../../svgs/Right.svg";

const reviews = [
    {
        avatar: Robert,
        name: "Viezh Robert",
        place: "Warsaw, Poland",
        review: "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
        rating: 4.5,
    },
    {
        avatar: Christy,
        name: "Yessica Christy",
        place: "Shanxi, China",
        review: "“I like it because I like to travel far and still can connect with high speed.”",
        rating: 4.5,
    },
    {
        avatar: Jou,
        name: "Kim Young Jou",
        place: "Seoul, South Korea",
        review: "“This is very unusual for my business that currently requires a virtual private network that has high security.”",
        rating: 4.5,
    },
];

const StyledCarouselComponent = styled.div`
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

    > .carousel {
        height: 26rem;
        position: relative;
        overflow-x: hidden;

        > div {
            position: absolute;
            display: flex;
            margin-top: 4rem;
            transition: 0.3s ease-in;
            left: ${(props) => props.rightDist || 2}vw;
        }
    }
`;

const StyledCarouselCards = styled.div`
    width: ${props=>props.cardWidth}vw;
    padding: 2vw;
    text-align: justify;
    margin-left: 2vw;
    margin-right: 2vw;
    display: flex;
    flex-direction: column;
    border: 2px solid #dddddd;
    border-radius: 10px;
    transition: 0.3s ease-in;
    border-color: ${(props) => props.activeStatus && "#f53838"};

    > .reviewerDetails {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;

        >.namePlate {
            margin-left: 1rem;
            width: -webkit-fill-available;

            & :first-child {
                color: #0b132a;
                font-weight: 500;
                font-size: 1.125rem;
            }
        }

        > .review-rating {
            display: flex;

            > svg {
                margin-left: 0.5rem;
            }
        }
    }
`;

const StyledCarouselControls = styled.section`
    height: -webkit-fill-available;
    display: flex;
    align-items: self-end;
    margin-bottom: 5rem;
    justify-content: space-between;
    transition: 0.3s ease-in;

    > .control-navigation {
        display: flex;
        align-items: center;
        height: 2rem;
        width: 12rem;
        justify-content: center;

        > span {
            background: #dde0e4;
            width: 15px;
            height: 15px;
            margin-left: 1rem;
            border-radius: 50%;
            transition: 0.3s ease-in;

            &:hover {
                cursor: pointer;
            }

            &.active {
                background: #f53838;
                width: 45px;
                height: 15px;
                border-radius: 20px;
                margin-left: 0.5rem;
            }
        }
    }

    > .arrows {
        > svg {
            width: 1.5rem;
            height: 1.5rem;
            padding: 0.5rem;
            margin: 0 auto;
            border-radius: 50%;
            border: 2px solid #f53838;
            margin-left: 1rem;
            transition: 0.3s ease-in;

            &:hover {
                cursor: pointer;
            }
        }

        > .activeArrow {
            background-color: #f53838;
        }
    }
`;

export default function Carousel(props) {
    const [rightDist, setRightDist] = useState(-22);
    const [currentCard, setCurrentCard] = useState(0);
    const [leftArrow, setLeftArrow] = useState(false);
    const [rightArrow, setRightArrow] = useState(true);
    const [navStatus, setNavStatus] = useState([true, false, false]);
    const cardWidth = props.winWidth<900 ? 60 :25;

    useEffect(() => {
        if (currentCard === 0) {
            setRightDist(2);
        } else {
            setRightDist(2 - currentCard * cardWidth);
        }

        if (currentCard <= 0) {
            setLeftArrow(false);
            setRightArrow(true);
        } else if (currentCard >= reviews.length - 1) {
            setLeftArrow(true);
            setRightArrow(false);
        } else {
            setRightArrow(true);
            setLeftArrow(true);
        }

        handleNav(currentCard);
    }, [currentCard, cardWidth]);

    const handleLeft = () => {
        setCurrentCard(currentCard - 1);
    };

    const handleRight = () => {
        setCurrentCard(currentCard + 1);
    };

    const handleNav = (index) => {
        setCurrentCard(index);

        let navStatArr = [false, false, false];
        navStatArr[index] = true;
        setNavStatus(() => {
            return navStatArr;
        });
    };

    return (
        <StyledCarouselComponent
            id='testimonials'
            style={{ marginTop: "5rem" }}
            rightDist={rightDist}>
            <div className='title'>Trusted by Thousands of Happy Customer</div>
            <div className='text'>
                These are the stories of our customers who have joined us with
                great pleasure when using this crazy feature.
            </div>

            <div className='carousel'>
                <div>
                    {reviews.map((review, index) => {
                        return (
                            <StyledCarouselCards
                                key={index}
                                cardWidth={cardWidth}
                                activeStatus={
                                    index === currentCard ? true : false
                                }>
                                <div className='reviewerDetails'>
                                    <img
                                        src={review.avatar}
                                        alt='Avatar'
                                        className='review-avatar'
                                    />
                                    <div className='namePlate'>
                                        <div>{review.name}</div>
                                        <div>{review.place}</div>
                                    </div>
                                    <div className='review-rating'>
                                        {review.rating}
                                        <Star />
                                    </div>
                                </div>
                                <div>{review.review}</div>
                            </StyledCarouselCards>
                        );
                    })}
                </div>

                <StyledCarouselControls>
                    <div className='control-navigation'>
                        {navStatus.map((stat, index) => {
                            return (
                                <span
                                    className={stat ? "active" : ""}
                                    onClick={() => {
                                        handleNav(index);
                                    }}></span>
                            );
                        })}
                    </div>
                    <div className='arrows'>
                        <Left
                            fill={leftArrow ? "#ffffff" : "#f53838"}
                            onClick={() => {
                                leftArrow && handleLeft();
                            }}
                            className={leftArrow ? "activeArrow" : ""}
                        />
                        <Right
                            fill={rightArrow ? "#ffffff" : "#f53838"}
                            onClick={() => {
                                rightArrow && handleRight();
                            }}
                            className={rightArrow ? "activeArrow" : ""}
                        />
                    </div>
                </StyledCarouselControls>
            </div>
        </StyledCarouselComponent>
    );
}
