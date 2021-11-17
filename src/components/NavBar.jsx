import {
    alpha,
    AppBar,
    Avatar,
    Badge,
    InputBase,
    makeStyles,
    Toolbar,
    Typography,
} from "@material-ui/core";
import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    logoLG: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    logoSM: {
        display: "block",
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    search: {
        display: "flex",
        alignItems: "center",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: "50%",
        [theme.breakpoints.down("sm")]: {
            display: (props)=> props.open?"flex":"none",
            width: "70%"
        }
    },
    input: {
        color: "white",
        marginLeft: theme.spacing(1),
    },
    cancel:{
        [theme.breakpoints.up("sm")]:{
            display:"none"
        },
        marginRight:theme.spacing(0.5),
        marginLeft:"auto"
    },
    searchButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none"
        } 
    },
    icons: {
        alignItems: "center",
        display: (props)=>props.open?"none":"flex"
    },
    badge: {
        marginRight: theme.spacing(2),
    },
}));

function NavBar() {
    
    const [open, setOpen] = useState(false);

    const classes = useStyles({open});

    return (
        <div>
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar}>
                    {/* Titles. One for large screens and one for smaller ones  */}
                    <Typography variant="h6" className={classes.logoLG}>
                        TestApp
                    </Typography>
                    <Typography variant="h6" className={classes.logoSM}>
                        TA
                    </Typography>

                    {/* SearchBar */}
                    <div className={classes.search}>
                        <Search />
                        <InputBase placeholder="Search..." className={classes.input} />
                        <Cancel className={classes.cancel} onClick={()=>setOpen(false)}/>
                    </div>

                    {/* Icons */}
                    <div className={classes.icons}>
                        <Search
                            className={classes.searchButton}
                            onClick={() => setOpen(true) }
                        /> {/* Button that replaces the SearchBar on smaller screens */}
                        <Badge badgeContent={4} color="secondary" className={classes.badge}>
                            <Mail />
                        </Badge>
                        <Badge badgeContent={2} color="secondary" className={classes.badge}>
                            <Notifications />
                        </Badge>
                        <Avatar alt="Profile photo" src="https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59095529-stock-illustration-profile-icon-male-avatar.jpg"/>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;
