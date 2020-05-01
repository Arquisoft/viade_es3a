import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Welcome.css";
import { Accordion, useAccordionToggle } from 'react-bootstrap'
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Button";

// Iconos
import BackupOutlinedIcon from "@material-ui/icons/BackupOutlined";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import NotificationsActiveOutlinedIcon from "@material-ui/icons/NotificationsActiveOutlined";
import ShareIcon from "@material-ui/icons/Share";
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import MapOutlinedIcon from '@material-ui/icons/MapOutlined';
import NearMeIcon from '@material-ui/icons/NearMe';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';


const AccordionWelcome = () => {

    const [panelIndex, setPanelIndex] = useState();

    const CustomToggle = ({ children, eventKey }) => {

        // Decorate the click event to also set state in the component so we can 
        // compare the open panel key with the state and toggle classes accordingly
        const customOnClick = useAccordionToggle(eventKey, () => {
            setPanelIndex(eventKey === panelIndex ? null : eventKey)
        })

        const customClass = (eventKey === panelIndex) ? "open-class" : "closed-class"

        return (
            <Card.Header className="headerWelcome">
                <Accordion.Toggle as={Card.Header} className={customClass} id="opcionYLogoWelcome" onClick={customOnClick}>
                    {children}
                </Accordion.Toggle>
            </Card.Header>
        )
    }

    return (
        <Accordion>
            <Card className="cardWelcome">
                <CustomToggle eventKey={1}>
                    <BackupOutlinedIcon className="iconWelcome" data-testid="iconAddRouteWelcome" />
                    <div className="optionTitle" data-testid="add">Add route</div>
                </CustomToggle>
                <Accordion.Collapse eventKey={1} className="mostrar">
                    <Card.Body data-testid="addRouteInfoWelcome">You can upload a route and it will be saved in your SOLID pod</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card className="cardWelcome">
                <CustomToggle eventKey={2}>
                    <MapOutlinedIcon className="iconWelcome" data-testid="iconRoutesWelcome" />
                    <div className="optionTitle" data-testid="routes">Routes</div>
                </CustomToggle>
                <Accordion.Collapse eventKey={2} className="mostrar">
                    <Card.Body>

                        <Card className="cardWelcome">
                            <CustomToggle eventKey={2}>
                                <RoomOutlinedIcon className="iconWelcome" data-testid="iconMyRoutesWelcome" />
                                <div className="optionTitle" data-testid="load">My routes</div>
                            </CustomToggle>
                            <Accordion.Collapse eventKey={2} className="mostrar">
                                <Card.Body data-testid="loadRouteInfoWelcome">You can choose one route and show it in the map</Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card className="cardWelcome">
                            <CustomToggle eventKey={2}>
                                <CreateOutlinedIcon className="iconWelcome" data-testid="iconCreateRouteWelcome" />
                                <div className="optionTitle" data-testid="create">Create route</div>
                            </CustomToggle>
                            <Accordion.Collapse eventKey={2} className="mostrar">
                                <Card.Body data-testid="createRouteInfoWelcome">You can create your own route and save it</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card className="cardWelcome">
                <CustomToggle eventKey={3}>
                    <ShareIcon className="iconWelcome" data-testid="iconShareRoutesWelcome" />
                    <div className="optionTitle" data-testid="share">Share routes</div>
                </CustomToggle>
                <Accordion.Collapse eventKey={3} className="mostrar">
                    <Card.Body data-testid="shareRouteInfoWelcome">You can share your routes with your friends</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card className="cardWelcome">
                <CustomToggle eventKey={4}>
                    <AccountCircleOutlinedIcon className="iconWelcome" data-testid="iconProfileWelcome" />
                    <div className="optionTitle" data-testid="profile">Profile</div>
                </CustomToggle>
                <Accordion.Collapse eventKey={4} className="mostrar">
                    <Card.Body data-testid="profileInfoWelcome">Your personal data</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card className="cardWelcome">
                <CustomToggle eventKey={5}>
                    <PeopleAltOutlinedIcon className="iconWelcome" data-testid="iconFriendsWelcome" />
                    <div className="optionTitle" data-testid="friendsOptions">Friends</div>
                </CustomToggle>
                <Accordion.Collapse eventKey={5} className="mostrar">
                    <Card.Body>

                        <Card className="cardWelcome">
                            <CustomToggle eventKey={5}>
                                <PeopleAltOutlinedIcon className="iconWelcome" data-testid="iconMyFriendsWelcome" />
                                <div className="optionTitle" data-testid="friends">My friends</div>
                            </CustomToggle>
                            <Accordion.Collapse eventKey={5} className="mostrar">
                                <Card.Body data-testid="friendsInfoWelcome">Your friends management</Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card className="cardWelcome">
                            <CustomToggle eventKey={5}>
                                <PeopleAltOutlinedIcon className="iconWelcome" data-testid="iconFriendsRoutesWelcome" />
                                <div className="optionTitle" data-testid="friendsRoutes">Friend's routes</div>
                            </CustomToggle>
                            <Accordion.Collapse eventKey={5} className="mostrar">
                                <Card.Body data-testid="friendsRoutesInfoWelcome">You can see routes that have been shared to you</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card className="cardWelcome">
                <CustomToggle eventKey={6}>
                    <NotificationsActiveOutlinedIcon className="iconWelcome" data-testid="notificationsWelcome" />
                    <div className="optionTitle" data-testid="notifications">Notifications</div>
                </CustomToggle>
                <Accordion.Collapse eventKey={6} className="mostrar">
                    <Card.Body data-testid="notificationsInfoWelcome">You can see notifications related to your profile</Card.Body>
                </Accordion.Collapse>
            </Card>

        </Accordion>
    )
};

const WhatIsViade = () => {
    const [panelIndex, setPanelIndex] = useState();

    const CustomToggle = ({ children, eventKey }) => {

        // Decorate the click event to also set state in the component so we can 
        // compare the open panel key with the state and toggle classes accordingly
        const customOnClick = useAccordionToggle(eventKey, () => {
            setPanelIndex(eventKey === panelIndex ? null : eventKey)
        })

        const customClass = (eventKey === panelIndex) ? "open-class" : "closed-class"

        return (
            <Card.Header className="headerWelcomeInfo">
                <Accordion.Toggle as={Card.Header} className={customClass} id="opcionYLogoWelcomeViade" onClick={customOnClick}>
                    <div className="opcionYLogoWelcomeNearMe">
                        {children}
                    </div>
                </Accordion.Toggle>
            </Card.Header>
        )
    }

    return (
        <Accordion defaultActiveKey={0}>
            <Card className="cardWelcomeInfo" data-testid="introduction">
                <CustomToggle eventKey={0}>

                    <div className="optionTitleInfo">What is VIADE?</div>
                    <NearMeIcon className="iconNearWelcome" data-testid="iconLogout" />

                </CustomToggle>
                <Accordion.Collapse eventKey={0} className="mostrarInfo">
                    <Card.Body>Viade is a decentralized routes management system based on the solid specifications.</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}

const Welcome = () => {
    return (
        <div className="contenedor">
            <h2 className="titulo" data-testid="label">Welcome to VIADE</h2>

            <WhatIsViade />
            <p data-testid="list">Here's the list of things you can do with<span className="viadeInfo"> VIADE</span>:</p>

            <AccordionWelcome />
            <p data-testid="message">Enjoy our app !
            <span className="smileFace"><InsertEmoticonIcon className="iconHappy" /></span>
            </p>

            <Alert variant={'danger'}>
                Be careful! Make sure the app has control permissions on your solid profile
            </Alert>

        </div >
    );
};

export default Welcome;