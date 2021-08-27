import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: "#3F1052",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));
