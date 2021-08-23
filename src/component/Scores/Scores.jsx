import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { lime } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Grid } from "@material-ui/core";
import dayjs from "dayjs";
import {
  faCalendarWeek,
  faFutbol,
  faHandsHelping,
  faHome,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 700,
    background: "linear-gradient(25deg, #d0fdfd, #f7c0c0)",
    "&:hover": {
      background: "linear-gradient(25deg, #a5f8f8, #fca8a8)",
      backdropFilter: "blur(3px)",
      WebkitBackdropFilter: "blur(3px)",
      boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      border: "1px solid rgba( 255, 255, 255, 0.20 )",
      borderRadius: "7px",
    },
  },

  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: lime[50],
  },
  CardContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardItems: {
    display: "flex",
    alignItems: "center",
  },
  name: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  spacing: {
    marginTop: 5,
  },
  goals: {
    display: "flex",
    justifyContent: "space-between",
  },
  awayGoals: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  homeGoals: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));

const Scores = ({
  id,
  image,
  home,
  away,
  stadium,
  referee,
  date,
  expanded,
  setExpanded,
}) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={12} md={12} lg={6}>
      <Card className={classes.root}>
        <div className={classes.spacing} />
        <Typography>
          <FontAwesomeIcon icon={faHome} /> {stadium}
        </Typography>
        <CardContent>
          <div className={classes.CardContent}>
            <div className={classes.cardItems}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    <img
                      src={home.logoUrl}
                      height="38px"
                      width="38px"
                      alt="club-logo"
                    />
                  </Avatar>
                }
              />
              <Typography style={{ fontWeight: "700" }}>{home.name}</Typography>
            </div>
            <div className={classes.scores}>
              <Typography style={{ fontWeight: "700" }}>
                {home.score}
              </Typography>
            </div>
          </div>
          <div>
            <div className={classes.CardContent}>
              <div className={classes.cardItems}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="club-logo" className={classes.avatar}>
                      <img
                        src={away.logoUrl}
                        height="37px"
                        width="37px"
                        alt="club-logo"
                      />
                    </Avatar>
                  }
                />
                <Typography style={{ fontWeight: "700" }}>
                  {away.name}
                </Typography>
              </div>
              <div className={classes.scores}>
                <Typography style={{ fontWeight: "700" }}>
                  {away.score}
                </Typography>
              </div>
            </div>
          </div>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={() => setExpanded(expanded ? null : id)}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography style={{ fontWeight: "700" }} gutterBottom>
              Goals
            </Typography>
            <div className={classes.goals}>
              <div className={classes.homeGoals}>
                {home.goals.map(({ player, assist, time }) => (
                  <Typography>
                    <FontAwesomeIcon icon={faFutbol} /> {player}
                    {" - "}
                    <FontAwesomeIcon icon={faHandsHelping} /> {assist}
                    {" - "}
                    <FontAwesomeIcon icon={faStopwatch} /> {time}
                    <Divider variant="middle" />
                  </Typography>
                ))}
              </div>
              <div className={classes.awayGoals}>
                {away.goals.map(({ player, assist, time }) => (
                  <Typography>
                    <FontAwesomeIcon icon={faFutbol} /> {player}
                    {" - "}
                    <FontAwesomeIcon icon={faHandsHelping} /> {assist}
                    {" - "}
                    <FontAwesomeIcon icon={faStopwatch} /> {time}
                    <Divider variant="middle" />
                  </Typography>
                ))}
              </div>
            </div>
            <Typography>
              <FontAwesomeIcon icon={faCalendarWeek} size="lg" />
            </Typography>
            <Typography>{dayjs(date).format("ddd, D MMM - h:mmA")}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
};

export default Scores;
