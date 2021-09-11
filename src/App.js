import React from "react";
import PropTypes from "prop-types";
import superagent from "superagent";
import CssBaseLine from "@material-ui/core/CssBaseline";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
} from "@material-ui/core";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charData: [],
    };
  }

  async componentDidMount() {
    try {
      await superagent
        .get("./public/stackline_frontend_assessment_data_2021.json")
        .then((Response) => {
          this.placeChartData(Response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      if (error !== "Sorry data is not available") {
        alert(error);
      }
    }
  }
  placeChartData() {
    this.setState({ charData: data });
    const { component } = this.props;
    const data = this.state.charData;
    return {
      render() {
        <>
          <CssBaseLine />
          <AppBar position="absolute" className={component.AppBar}>
            <Toolbar className={component.Toolbar}>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                className={component.Toolbar}
              ></Typography>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" className={component.Drawer}>
            <div className="spacer" />
            <div className="spacer" />
            <List>
              <image
                className="itemimage"
                src={"./public/stackline_frontend_assessment_data_2021.json"}
              ></image>
            </List>
          </Drawer>
        </>;
      },
    };
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default App;
