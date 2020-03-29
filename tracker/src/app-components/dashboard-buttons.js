import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { blue, grey } from "@material-ui/core/colors";

const DashboardButtons = () => {
  const ColorButton = withStyles(theme => ({
    root: {
      color: theme.palette.getContrastText(blue[800]),
      backgroundColor: blue[800],
      "&:hover": {
        backgroundColor: blue[600]
      }
    }
  }))(Button);

  const GreyButton = withStyles(theme => ({
    root: {
      color: theme.palette.getContrastText(grey[600]),
      backgroundColor: grey[600],
      "&:hover": {
        backgroundColor: grey[800]
      }
    }
  }))(Button);

  const [buttonColor, setButtonColor] = useState({
    ColorButton: true,
    GreyButton: false
  });

  const clickHandler = () => {
    setButtonColor(
      buttonColor.ColorButton(!ColorButton),
      buttonColor.GreyButton(!GreyButton)
    );
  };

  const [firstBlue, setFirstBlue] = useState({});

  return (
    <div className="flexy">
      <Button className="work" variant="contained">
        List View
      </Button>
      <GreyButton className="button" variant="contained">
        Grid View
      </GreyButton>
      <GreyButton className="button" variant="contained">
        Metrics
      </GreyButton>
    </div>
  );
};

export default DashboardButtons;
