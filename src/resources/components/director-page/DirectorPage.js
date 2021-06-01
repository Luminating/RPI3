import React from "react";
import {Box, Container, Divider, Grid, makeStyles, Typography} from "@material-ui/core";
import ReactPlayer from "react-player";
import {YMaps, Map, Placemark} from "react-yandex-maps";
import TimelineBlock from "./TimelineBlock";
import {Carousel} from "3d-react-carousal";
import {useParams} from "react-router-dom";
import DIRECTORS from "../../js/DirectorsDao";

const useStyles = makeStyles((theme) => ({
    directorContainer: {
        marginTop: "50px"
    },
    directorImage: {
        maxHeight: "600px",
        maxWidth: "100%"
    }
}));

function DirectorPage() {
    // Получить режиссёра
    const {directorId} = useParams();
    const director = DIRECTORS[directorId];
    // Слайды
    const slides = new Array(director.gallery.length);
    for (let i = 0; i < slides.length; i++) {
        slides[i] = <img src={director.gallery[i]}
                         alt={""}
                         style={{maxHeight: "400px"}}
        />
    }
    // Координаты
    const coordinates = [
        [53.903170566161364, 27.564221342708393]
    ];

    const classes = useStyles();

    return (
        <Container maxWidth={"xl"}>
            <Grid
                container
                direction={"row"}
                justify={"center"}
                alignItems={"center"}
                spacing={4}
                className={classes.directorContainer}
            >
                <Grid item xs={12} sm={7} md={7} lg={7} xl={7}>
                    <Typography variant={"h3"}>
                        {director.name}
                    </Typography>
                    <Typography variant={"h4"} paragraph={true}>
                        {director.lifetime}
                    </Typography>
                    <Typography variant={"h5"} paragraph={true}>
                        {director.shortDescription}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={5} md={5} lg={5} xl={5} align={"center"}>
                    <img src={director.image}
                         alt={""}
                         className={classes.directorImage}
                    />
                </Grid>
            </Grid>
            <Divider style={{marginTop: "50px", marginBottom: "50px"}}/>
            <TimelineBlock biography={director}/>
            <Divider style={{marginTop: "50px", marginBottom: "50px"}}/>
            <Box height={"400px"} maxHeight={"400px"}>
                <Carousel slides={slides} autoplay={false} interval={1000}/>
            </Box>
            <Divider style={{marginTop: "50px", marginBottom: "50px"}}/>
            <Grid container
                  direction={"row"}
                  justify={"center"}
                  alignItems={"center"}
            >
                <ReactPlayer url={director.video} playing={false}/>
            </Grid>
            <Divider style={{marginTop: "50px", marginBottom: "50px"}}/>
            <Box display={"flex"} justifyContent={"center"} marginBottom={"50px"}>
                <YMaps>
                    <Map defaultState={{center: director.coords, zoom: 9}}
                         width='50%'
                         height='500px'
                    >
                        <Placemark geometry={director.coords}/>
                    </Map>
                </YMaps>
            </Box>
        </Container>
    );
}

export default DirectorPage;