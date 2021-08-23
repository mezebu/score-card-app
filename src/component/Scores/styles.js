import { createTheme, makeStyles } from "@material-ui/core/styles";
import { lime } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
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

export const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "Nunito"].join(","),
    fontSize: 13,
  },
  palette: {
    background: {
      default: "#e5e5e5",
    },
  },
});
