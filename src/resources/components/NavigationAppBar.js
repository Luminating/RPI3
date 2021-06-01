import React from "react";
import {AppBar} from "@material-ui/core";
import {Button, fade, IconButton, InputBase, makeStyles, Toolbar, Typography} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilm} from "@fortawesome/free-solid-svg-icons/faFilm";
import {useTranslation, Trans} from "react-i18next";
import {changeLanguage} from "../js/Internationalization";
import {Link, useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

function NavigationAppBar() {
    const classes = useStyles();
    // Создать обработчик запроса на поиск
    const history = useHistory();
    const handleSearch = event => {
        if (event.keyCode === 13) {
            history.push("/directors?search=" + event.target.value);
        }
    }
    // Применить перевод
    const {t} = useTranslation();

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    component={Link}
                    to={"/"}
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                >
                    <FontAwesomeIcon icon={faFilm}/>
                </IconButton>
                <Typography className={classes.title} variant="h6" noWrap>
                    <Trans>
                        Belarusian directors
                    </Trans>
                </Typography>
                <Button color={"inherit"} component={Link} to={"/directors"}>
                    <Trans>
                        Directors
                    </Trans>
                </Button>
                <Button color={"inherit"} onClick={changeLanguage}>
                    <Trans>
                        EN
                    </Trans>
                </Button>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon/>
                    </div>
                    <InputBase
                        placeholder={t("Search...")}
                        inputProps={{'aria-label': 'search'}}
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        onKeyUp={handleSearch}
                    />
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default NavigationAppBar;