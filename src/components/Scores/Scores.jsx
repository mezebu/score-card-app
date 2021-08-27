import React from "react";
import clsx from "clsx";
import dayjs from "dayjs";
// prettier-ignore
import {Card, CardHeader, CardContent, CardActions, Collapse, Avatar, IconButton, Typography} from "@material-ui/core";
import { Grid, ThemeProvider, Divider } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// prettier-ignore
import { faCalendarWeek, faFutbol, faHandsHelping, faHome, faStopwatch, faUserTie} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { theme, useStyles } from "./styles";

// prettier-ignore
const Scores = ({ id, home, away, stadium, referee, date, expanded, setExpanded }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={12} md={6} lg={6}>
      <ThemeProvider theme={theme}>
        <Card className={classes.root}>
          <div className={classes.spacing} />
          <Typography gutterBottom>
            <FontAwesomeIcon icon={faCalendarWeek} />{" "}
            {dayjs(date).format("ddd, D MMM - h:mmA")}
          </Typography>
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
                        width="37px"
                        alt="club-logo"
                      />
                    </Avatar>
                  }
                />
                <Typography style={{ fontWeight: "700" }}>
                  {home.name}
                </Typography>
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
              <Divider />{" "}
              <div className={classes.goals}>
                <Typography style={{ fontWeight: "700" }}>
                  {home.name}
                </Typography>
                <Typography style={{ fontWeight: "700" }} gutterBottom>
                  Goals{" "}
                </Typography>
                <Typography style={{ fontWeight: "700" }}>
                  {away.name}
                </Typography>
              </div>{" "}
              <Divider />
              <div className={classes.goals}>
                <div className={classes.homeGoals}>
                  {home.goals.map(({ player, assist, time }) => (
                    <Typography key={time} style={{ fontSize: 13 }} paragraph>
                      <FontAwesomeIcon icon={faFutbol} /> {player}
                      {" - "}
                      <FontAwesomeIcon icon={faHandsHelping} /> {assist}
                      {" - "}
                      <FontAwesomeIcon icon={faStopwatch} /> {time}
                    </Typography>
                  ))}
                </div>
                <div className={classes.awayGoals}>
                  {away.goals.map(({ player, assist, time }) => (
                    <Typography key={time} style={{ fontSize: 13 }} paragraph>
                      <FontAwesomeIcon icon={faFutbol} /> {player}
                      {" - "}
                      <FontAwesomeIcon icon={faHandsHelping} /> {assist}
                      {" - "}
                      <FontAwesomeIcon icon={faStopwatch} /> {time}
                    </Typography>
                  ))}
                </div>
              </div>
              <Typography style={{ fontWeight: "700" }}>
                <Divider /> Managers
                <Divider />
              </Typography>
              <div className={classes.goals}>
                <Typography>
                  {" "}
                  <FontAwesomeIcon icon={faUserTie} /> {" "}
                  {home.Manager}
                </Typography>
                <Typography>
                  {" "}
                  <FontAwesomeIcon icon={faUserTie} /> {" "}
                  {away.Manager}
                </Typography>
              </div>
            </CardContent>
            <Typography style={{ fontWeight: "700" }} gutterBottom>
              <Divider variant="middle" /> Referee <Divider variant="middle" />
            </Typography>
            <Typography>{referee}</Typography>
          </Collapse>
        </Card>
      </ThemeProvider>
    </Grid>
  );
};

export default Scores;
