import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";


const useStyles = {
  root: {
    display: "flex",
    marginLeft: "5em",
    marginTop: "2em",
    height: "10em"
  },
  title: {
      fontSize: "2em"
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
};

class FavouritesCard extends React.Component {
  render() {
    const { classes, cardtitle, cardimage1, cardimage2 } = this.props;

    return (
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography className={classes.title} component="h5" variant="h4">
              {cardtitle}
            </Typography>
          </CardContent>
        </div>
        <CardMedia className={classes.cover} image={cardimage1} />
        <CardMedia className={classes.cover} image={cardimage2} />
      </Card>
    );
  }
}

export default withStyles(useStyles)(FavouritesCard);
