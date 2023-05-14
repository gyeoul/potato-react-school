import React from 'react';
import {ThemeProvider, styled} from "styled-components";
import {GlobalStyle} from "./style/globalStyle";
import {theme} from "./style/theme";

const Title = styled.h1`
  ${({theme: t}) => t.fonts.title}
`;
export default function App() {
    return (<>
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Title>웰컴~</Title>
        </ThemeProvider>);
    </>);
}
