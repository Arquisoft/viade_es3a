import React from 'react';
import './Panel.css';
import AddRoute from "./AddRoute/AddRoute.js";
import LoadRoute from './LoadRoute/LoadRoute';
import Map from './Map/Map.js';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const AppWrapper = styled.div`
display: flex;
justify-content:center;
margin-top:100px;
`;

const Container = styled.div`
`;

const Panel = () => {
    return (
        <div className="panelCompleto">
            {/* Panel izquierdo */}
            <section className="leftPanel">
                <nav className="leftPanel_leftPart">
                    <Switch>
                        <div>
                            <Route path="/addRoute" component={AddRoute} />
                            <Route path="/loadRoute" component={LoadRoute} />
                        </div>
                    </Switch>
                </nav>

                {/* Panel derecho */}
                <article className="rightPanel_mapa">
                    {/* <h1>*Insert route to show map*</h1> */}
                    <AppWrapper>
                        <Container>
                            <Map></Map>
                        </Container>
                    </AppWrapper>

                </article>
            </section>
        </div>

    );
};

export default Panel;