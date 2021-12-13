import React from "react";
import Header from "../header/Header";
import { ReactComponent as Illustration } from "../../svgs/Illustration.svg";
import Plan from "./plan/Plan";
import Carousel from "./carousel/Carousel";
import styled from "styled-components";

const StyledBodyComponent = styled.div`
    padding-left: 10vw;
    padding-right: 10vw;

    .body-intro {
        display: flex;
        align-items: center;
        margin-top: 10vh;

        > div {
            width: 50%;
            text-align: left;
            padding: 1rem;
            padding-right: 4rem;

            h1 {
                font-weight: 500;
                color: #0b132a;

                span {
                    font-weight: 700;
                }
            }

            .intro-text {
                font-weight: 400;
                margin-top: 1rem;
                color: #4f5665;
                line-height: 4vh;

                span {
                    font-weight: 500;
                }
            }

            .start {
                background: #f53838;
                width: fit-content;
                padding: 0.6rem;
                padding-left: 2rem;
                padding-right: 2rem;
                color: white;
                border-radius: 0.4rem;
                box-shadow: 0px 10px 3rem -10px #f53838;
                margin-top: 2.5rem;
                transition: 0.3s ease-in;

                &:hover {
                    cursor: pointer;
                    opacity: 0.8;
                }
            }
        }
    }
`;

export default function Body(props) {
    return (
        <StyledBodyComponent>
            <Header winWidth={props.winWidth} />
            <div className='body-intro'>
                <div className='intro'>
                    <h1>
                        Want anything to be easy with <span>LaslesVPN.</span>
                    </h1>
                    <div className='intro-text'>
                        Provide a network for all your needs with easy and fun
                        using <span>LaslesVPN</span> discover interesting
                        features from us.
                    </div>
                    <div className='start'>Get Started</div>
                </div>
                <Illustration style={{ width: "50%" }} />
            </div>

            <Plan winWidth={props.winWidth} />

            <Carousel winWidth={props.winWidth} />
        </StyledBodyComponent>
    );
}
