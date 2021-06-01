import React from "react";
import DIRECTORS from "../../js/DirectorsDao";
import {Avatar, Container, List, ListItem, ListItemAvatar, ListItemText, makeStyles} from "@material-ui/core";
import {Link, useLocation} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    directorList: {
        marginTop: "50px"
    },
    directorImage: {
        width: "100px",
        height: "100px"
    },
    directorInfoText: {
        marginLeft: "20px"
    },
    listItemText: {
        fontSize: "24px",
    }
}));

function DirectorsPage() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const query = params.get("search");

    let directors = [];
    if (query !== null) {
        const words = query.toLowerCase().split(" ");
        next:
            for (const director of DIRECTORS) {
                const name = director.name.toLowerCase();
                for (const word of words) {
                    if (name.indexOf(word) !== -1) {
                        directors.push(director);
                        continue next;
                    }
                }
            }
    } else {
        directors = DIRECTORS;
    }

    const classes = useStyles();

    return (
        <Container maxWidth={"xl"}>
            <List className={classes.directorList}>
                {
                    directors.map(function (value) {
                        return (
                            <ListItem button
                                      component={Link}
                                      to={"/directors/" + value.id}
                            >
                                <ListItemAvatar>
                                    <Avatar alt={value.name}
                                            src={value.image}
                                            className={classes.directorImage}
                                    />
                                </ListItemAvatar>
                                <ListItemText primary={value.name}
                                              secondary={value.lifetime}
                                              className={classes.directorInfoText}
                                              classes={{primary: classes.listItemText}}
                                />
                            </ListItem>
                        );
                    })
                }
            </List>
        </Container>
    );
}

export default DirectorsPage;