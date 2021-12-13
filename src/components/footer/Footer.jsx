import React from "react";
import { ReactComponent as Logo } from "../../svgs/Logo.svg";
import styled from "styled-components";

let products = [
    "Download",
    "Pricing",
    "Locations",
    "Server",
    "Countries",
    "Blog",
];

let engages = [
    "LaslesVPN ?",
    "FAQ",
    "Tutorials",
    "About Us",
    "Privacy Policy",
    "Terms of Service",
];

let money = ["Affiliate", "Become Partner"];

const StyledFooterComponent = styled.div`
    background-color: #f8f8f8;
    padding: 10vh;
    padding-left: 10vw;
    padding-right: 10vw;
    bottom: 0;
    left: 0;
    width: -webkit-fill-available;
    display: flex;
    justify-content: space-between;
    text-align: justify;

    div {
        padding: 0.5rem;
    }

    .links {
        padding: 0;

        > div {
            transition: 0.3s ease-in;

            &:hover {
                cursor: pointer;
                color: #f53855;
            }
        }
    }

    .main {
        display: flex;
        flex-direction: column;
        width: 50%;

        > div {
            align-self: flex-start;
            text-align: start;
            padding: 2vh;
        }
    }
`;

export default function Footer() {
    return (
        <StyledFooterComponent>
            <div className='main'>
                <Logo />
                <div style={{ color: "#4F5665" }}>
                    <b>LaslesVPN</b> is a private virtual network that has
                    unique features and has high security.
                </div>
                <div style={{ color: "#AFB5C0" }}>&copy; 2020LaslesVPN</div>
            </div>
            <div className='product'>
                <div style={{ fontWeight: "bold" }}>Product</div>
                <div className='links'>
                    {products.map((product, key) => {
                        return <div key={key}>{product}</div>;
                    })}
                </div>
            </div>
            <div className='engage'>
                <div style={{ fontWeight: "bold" }}>Engage</div>
                <div className='links'>
                    {engages.map((engage, key) => {
                        return <div key={key}>{engage}</div>;
                    })}
                </div>
            </div>
            <div className='money'>
                <div style={{ fontWeight: "bold" }}>Earn Money</div>
                <div className='links'>
                    {money.map((moneyItem, key) => {
                        return <div key={key}>{moneyItem}</div>;
                    })}
                </div>
            </div>
        </StyledFooterComponent>
    );
}
