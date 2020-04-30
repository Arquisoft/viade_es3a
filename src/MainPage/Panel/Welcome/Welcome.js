import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Welcome.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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


const AccordionWelcome = () => {
    return (
        <div className="scrollBarWelcome">
            <Accordion>
                <Card className="cardWelcome" data-testid="add">
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} eventKey="0" className="opcionYLogoWelcome">
                            <BackupOutlinedIcon className="iconWelcome" data-testid="iconAddRouteWelcome" />
                            <div className="optionTitle">Add route</div>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0" className="mostrar">
                        <Card.Body>You can upload a route and it will be saved in your SOLID pod</Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className="cardWelcome" data-testid="routes">
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} eventKey="1" className="opcionYLogoWelcome">
                            <MapOutlinedIcon className="iconWelcome" data-testid="iconRoutesWelcome" />
                            <div className="optionTitle">Routes</div>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1" className="mostrar">
                        <Card.Body>
                            <Card className="cardWelcome" data-testid="load">
                                <Card.Header>
                                    <Accordion.Toggle as={Card.Header} eventKey="8" className="opcionYLogoWelcome">
                                        <RoomOutlinedIcon className="iconWelcome" data-testid="iconMyRoutesWelcome" />
                                        <div className="optionTitle">My routes</div>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1" className="mostrar">
                                    <Card.Body>You can choose one route and show it in the map</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card className="cardWelcome" data-testid="create">
                                <Card.Header>
                                    <Accordion.Toggle as={Card.Header} eventKey="1" className="opcionYLogoWelcome">
                                        <CreateOutlinedIcon className="iconWelcome" data-testid="iconCreateRouteWelcome" />
                                        <div className="optionTitle">Create route</div>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1" className="mostrar">
                                    <Card.Body>You can create your own route and save it</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className="cardWelcome" data-testid="share">
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} eventKey="2" className="opcionYLogoWelcome">
                            <ShareIcon className="iconWelcome" data-testid="iconShareRoutesWelcome" />
                            <div className="optionTitle">Share routes</div>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2" className="mostrar">
                        <Card.Body>You can share your routes with your friends</Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className="cardWelcome" data-testid="profile">
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} eventKey="3" className="opcionYLogoWelcome">
                            <AccountCircleOutlinedIcon className="iconWelcome" data-testid="iconProfileWelcome" />
                            <div className="optionTitle">Profile</div>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3" className="mostrar">
                        <Card.Body>Your personal data</Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className="cardWelcome" data-testid="friendsOptions">
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} eventKey="4" className="opcionYLogoWelcome">
                            <PeopleAltOutlinedIcon className="iconWelcome" data-testid="iconFriendsWelcome" />
                            <div className="optionTitle">Friends</div>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4" className="mostrar">
                        <Card.Body>
                            <Card className="cardWelcome" data-testid="friends">
                                <Card.Header>
                                    <Accordion.Toggle as={Card.Header} eventKey="4" className="opcionYLogoWelcome">
                                        <PeopleAltOutlinedIcon className="iconWelcome" data-testid="iconMyFriendsWelcome" />
                                        <div className="optionTitle">My friends</div>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="4" className="mostrar">
                                    <Card.Body>Your friends management</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card className="cardWelcome" data-testid="friendsRoutes">
                                <Card.Header>
                                    <Accordion.Toggle as={Card.Header} eventKey="4" className="opcionYLogoWelcome">
                                        <PeopleAltOutlinedIcon className="iconWelcome" data-testid="iconFriendsRoutesWelcome" />
                                        <div className="optionTitle">Friend's routes</div>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="4" className="mostrar">
                                    <Card.Body>You can see routes that have been shared to you</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className="cardWelcome" data-testid="notifications">
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} eventKey="5" className="opcionYLogoWelcome">
                            <NotificationsActiveOutlinedIcon className="iconWelcome" data-testid="notificationsWelcome" />
                            <div className="optionTitle">Notifications</div>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5" className="mostrar">
                        <Card.Body>You can see notifications related to your profile</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
}

const Welcome = () => {
    return (
        <div className="contenedor">
            <h2 className="titulo" data-testid="label">Welcome to VIADE</h2>
            <p data-testid="introduction"> Viade is a decentralized routes management system based on the solid specifications.
            </p>
            <p data-testid="list">Here's the list of things you can do with VIADE:</p>

            <AccordionWelcome />

            <p data-testid="message">Enjoy our app ! :)</p>
            <p className="alert">Be careful! Make sure the app has control permissions on your solid profile</p>
        </div >
    );
};

export default Welcome;