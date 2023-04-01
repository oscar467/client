import {
  Avatar,
  Container,
  Grid,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { currentUser } from "../../redux/actions/userActions";
import Loading from "../Loading/Loading";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyDontent: "center",
    width: "50%",
    gap: "20px",
    backgroundColor: "whitesmoke",
    borderRadius: "20px",
    padding: "20px",
    margin: "20px",
  },
}));

const Account = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    dispatch(currentUser());
    const userLog = localStorage.getItem("auth");
    if (userLog) {
      setUserData(JSON.parse(userLog));
      setLoading(false);
    }
  }, [dispatch]);

  if (loading == true) {
    return <Loading />;
  }

  const { user } = userData;
  return (
    <Container
      maxWidth="md"
      sx={{ mt: 2, display: "flex", justifyContent: "center" }}
    >
      <Stack className={classes.root}>
        <Typography sx={{ textAlign: "center" }} variant="h4">
          Mi Perfil:
        </Typography>
        <Grid container spacing={6} alignItems="center">
          <Grid item>
            <Avatar
              alt={user.fullName}
              src={user.image}
              sx={{ width: "300px", height: "300px" }}
            />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h5">
                  Nombre: {user.fullName}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Email: {user.email}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID de usuario: {user.id}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Número telefonico: {user.cellPhone}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="textSecondary">
                is Administrator?:
              </Typography>
              <Switch
                disabled
                checked={user.isAdmin}
                name="isAdmin"
                color="primary"
                className={classes.switch}
              />
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};

export default Account;
