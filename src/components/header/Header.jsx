import React from "react";
import { ReactComponent as Logo } from "../../svgs/Logo.svg";
import styled from "styled-components";

const StyledHeaderComponent = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    display: grid;
    grid-template-areas: "logo logo logo tabs auth";
    align-items: center;

    > .logo {
        grid-area: logo;
        display: flex;
    }

    > .tabs {
        grid-area: tabs;
        display: flex;
        color: #4f5665;

        > a {
            margin: 2vw;
            margin-top: 0;
            margin-bottom: 0;
            transition: 0.3s ease-in;
            text-decoration: none;

            &:hover {
                cursor: pointer;
                color: #f53855;
            }
        }
    }

    .auth {
        display: flex;
        grid-area: auth;
        font-weight: bold;
        height: -webkit-fill-available;

        > div {
            padding: 2vw;
            padding-top: 0;
            padding-bottom: 0;
            align-self: center;
            transition: 0.3s ease-in;

            &:hover {
                color: #f53855;
                opacity: 0.5;
                cursor: pointer;
            }
        }

        .signup {
            height: -webkit-fill-available;
            display: flex;
            align-items: center;
            border: 1px solid #f53855;
            box-sizing: border-box;
            border-radius: 5vw;
            color: #f53855;
        }
    }
`;

export default function Header(props) {
    return (
        <StyledHeaderComponent>
            <div className='logo'>
                <Logo />
            </div>
            {props.winWidth >= 800 ? (
                <div className='tabs'>
                    <a href='#pricing'>Pricing</a>
                    <a href='#testimonials'>Testimonials</a>
                </div>
            ) : null}

            <div className='auth'>
                <div className='signin'>SignIn</div>
                <div className='signup'>Signup</div>
            </div>
        </StyledHeaderComponent>
    );
}
