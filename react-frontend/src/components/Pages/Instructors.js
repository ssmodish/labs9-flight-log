import Layout from "../Header component/Layout";
import React, { Component } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import InstructorForm from "../Module Components/instructors/InstructorForm.js";
// eslint-disable-next-line
import { BrowserRouter as Router, Route } from "react-router-dom";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  card: {
    height: 375
  },
  content: {
    display: "grid",
    gridTemplateRows: "3fr, 1fr, 2fr, 3fr, 2fr",
    alignItems: "stretch",

    height: "100%"
  },
  contentLine: {
    // border:"3px solid orange"
  }
});
const UID = localStorage.getItem("userID");

class InstructorsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructorsList: []
    };
  }

  componentDidMount() {
    axios
      .get(`https://labs9-flight-log.herokuapp.com/instructors/${UID}`)
      .then(response => {
        console.table(response.data);
        this.setState({ instructorsList: response.data });
      });
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Layout>
          <div>
            <Grid
              container
              className={classes.root}
              justify="flex-start"
              alignItems="flex-start"
              direction="row"
              spacing={16}
            >
              <Grid item lg={4} md={6} sm={12}>
                <InstructorForm {...this.props} />
              </Grid>

              {this.state.instructorsList.map(instructor => (
                <Grid item lg={4} md={6} sm={12}>
                  <Card className={classes.card}>
                    <CardContent className={classes.content}>
                      <Typography className={classes.contentLine} variant="h4">
                        {instructor.name}
                      </Typography>
                      <Typography
                        className={classes.contentLine}
                        gutterBottom
                        variant="h6"
                      >
                        LicNo: {instructor.licenseNum}
                      </Typography>
                      <Typography
                        className={classes.contentLine}
                        gutterBottom
                        variant="h5"
                      >
                        {" "}
                        {instructor.contactInfo}
                      </Typography>
                      <div>
                        <Typography
                          className={classes.contentLine}
                          variant="h6"
                        >
                          Notes:
                        </Typography>
                        <Typography
                          className={classes.contentLine}
                          gutterBottom
                          variant="h5"
                        >
                          {instructor.notes}
                        </Typography>
                      </div>
                      <div>
                        <Typography
                          className={classes.contentLine}
                          variant="h6"
                        >
                          Ratings:
                        </Typography>
                        <Typography
                          className={classes.contentLine}
                          variant="h5"
                        >
                          {" "}
                          {instructor.ratings}
                        </Typography>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </Layout>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(InstructorsList);
