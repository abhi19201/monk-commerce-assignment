import React, { useState, useEffect } from "react";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import styled from 'styled-components';

const StyledAppComponent = styled.div`
    text-align: center;
    min-height: 100vh;
    font-size: 0.9rem;
    color: #4f5665;
`;

function App() {

    const [winWidth, setWinWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => setWinWidth(window.innerWidth));
        return () => window.removeEventListener("resize", () => setWinWidth());
    }, []);

    return (
        <StyledAppComponent
            className='App'
            onClick={() => {
                console.log(window.innerWidth);
            }}>
            <Body winWidth={winWidth} />
            <Footer winWidth={winWidth} />
        </StyledAppComponent>
    );
}

export default App;
