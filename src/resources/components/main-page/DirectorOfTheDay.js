import React from "react";
import {Button, Grid, makeStyles, Typography} from "@material-ui/core";
import {useTranslation, Trans} from "react-i18next";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    directorImage: {
        maxHeight: "600px",
        maxWidth: "100%"
    }
}));

function DirectorOfTheDay(props) {
    const classes = useStyles();
    // Применить перевод
    useTranslation();

    return (
        <Grid
            container
            direction={"row"}
            justify={"center"}
            alignItems={"center"}
            spacing={4}
        >
            <Grid item xs={12} sm={7} md={7} lg={7} xl={7}>
                <Typography variant={"h3"}>
                    {props.director.name}
                </Typography>
                <Typography variant={"h4"} paragraph={true}>
                    {props.director.lifetime}
                </Typography>
                <Typography variant={"h5"} paragraph={true}>
                    {props.director.shortDescription}
                </Typography>
                <Button variant={"contained"}
                        color={"primary"}
                        component={Link}
                        to={"/directors/" + props.director.id}
                >
                    <Trans>
                        Read
                    </Trans>
                </Button>
            </Grid>
            <Grid item xs={12} sm={5} md={5} lg={5} xl={5} align={"center"}>
                <img src={props.director.image}
                     alt={""}
                     className={classes.directorImage}
                />
            </Grid>
        </Grid>
    );
}

export default DirectorOfTheDay;