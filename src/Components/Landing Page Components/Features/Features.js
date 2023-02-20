import React from 'react'
import { Grid, Button, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"
import { Avatar } from "@material-ui/core";
import { LiveTv, AllInclusive, Bookmark } from "@material-ui/icons";
import CountUp from "react-countup";

const useStyles = makeStyles((theme) => ({
    heroText: {
        position: "absolute",
        margin: "0 10% 0 10%",
        color: "white"
    },
    header: {
        height: "60vh",
        backgroundSize: "cover",
        backgroundPosition: "65% 50%",
        backgroundAttachment: "fixed",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${'https://images.unsplash.com/photo-1521726834835-4ff1624e69da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'})`
    },
    avatar: {
        backgroundColor: "#e67e22"
    },
    feature: {
        color: "white",
        minHeight: "30vh",
        position: "relative",
        background: `linear-gradient(221deg, #ffde59 0%, #ca2d3e 97%)`
    },
    bottomSwoop: {
        position: "absolute",
        bottom: "-2px",
        zIndex: 0
    },
    roundFirstBox: {
        height: '250px',
        padding: '20px 40px',
    }
}));

const featureList = [
    {
        icon: <LiveTv />,
        title: "online courses",
        subtitle: "Enjoy a variety of fresh topics",
        count: <CountUp end={1000} duration={6} style={{ marginRight: 4 }} />
    },
    {
        icon: <Bookmark />,
        title: "Expert instruction",
        subtitle: "Find the right instructor for you",
        count: null
    },
    {
        icon: <AllInclusive />,
        title: "Lifetime access",
        subtitle: "Learn on your schedule",
        count: null
    }
];

const Features = () => {
    const classes = useStyles();

    const bottomSwoop = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1430 140"
            fill={"#fafafa"}
            className={classes.bottomSwoop}
        >
            <path d="M0 140h1440V46.75C1360.635 15.583 1268.302 0 1163 0 812.13 0 674 113.78 370.736 127.279 188.866 135.374 65.286 119.625 0 80.03V140z"></path>
        </svg>
    );

    return (
        <>
            <Grid container alignItems="center" className={classes.header}>
                <Grid item className={classes.heroText}>
                    <Typography variant="h4" gutterBottom>
                        Lorem Ipsum is simply dummy text of the printing
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        It is a long established fact that a reader will be distracted
                    </Typography>
                    <Button variant="contained" color="primary">
                        make a tour
                    </Button>
                </Grid>
            </Grid>
            <Box pb={7} className={classes.feature}>
                <Grid className={classes.roundFirstBox} container justify="space-between">
                    {featureList.map((item) => (
                        <Box m={2} display="flex" alignItems="center" key={item.title}>
                            <Avatar className={classes.avatar}>{item.icon}</Avatar>
                            <Box ml={1} display="flex" flexDirection="column">
                                <Box display="flex" alignItems="center">
                                    {item.count ? item.count : null}
                                    <Typography variant="subtitle1">{item.title}</Typography>
                                </Box>
                                <Typography variant="caption">{item.subtitle}</Typography>
                            </Box>
                        </Box>
                    ))}
                </Grid>
                <Box>{bottomSwoop}</Box>
            </Box>
        </>
    )
}

export default Features;