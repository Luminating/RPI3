import React from "react";
import {Container, Divider, Typography} from "@material-ui/core";
import DirectorOfTheDay from "./DirectorOfTheDay";
import AboutUs from "./AboutUs";
import {Trans, useTranslation} from "react-i18next";
import DIRECTORS from "../../js/DirectorsDao"

// Выбор случайного директора дня
if (sessionStorage["directorOfTheDay"] === undefined) {
    sessionStorage["directorOfTheDay"] = JSON.stringify(getRandomDirector());
}

function getRandomDirector() {
    const size = DIRECTORS.length;
    const n = Math.floor(size * Math.random());
    return DIRECTORS[n];
}

function AboutWebsite() {
    // Применить перевод
    useTranslation();

    return (
        <div style={{marginTop: "15%", marginBottom: "15%"}}>
            <Typography variant={"h4"} align={"center"} paragraph={true}>
                <Trans>
                    This resource is dedicated to Belarusian directors
                </Trans>
            </Typography>
            <Typography variant={"h5"} align={"center"}>
                <Trans>
                    We hope here you will learn a lot of new and interesting things
                </Trans>
            </Typography>
        </div>
    );
}

function MainPage() {
    return (
        <Container maxWidth={"xl"}>
            <AboutWebsite/>
            <Divider style={{marginTop: "75px", marginBottom: "75px"}}/>
            <DirectorOfTheDay director={JSON.parse(sessionStorage["directorOfTheDay"])}/>
            <Divider style={{marginTop: "75px", marginBottom: "75px"}}/>
            <AboutUs/>
        </Container>
    );
}

export default MainPage;
