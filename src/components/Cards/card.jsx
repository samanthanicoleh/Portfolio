import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

// my components
import content from "../../LanguageAPI";

const useStyles = {
  root: {
    maxWidth: 300,
  },
  media: {
    height: 200,
  },
};

class MediaCard extends React.Component {
  render() {
    const { classes, cardtitle, cardimage, carddesc, cardlink } = this.props;
    return (
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={cardimage} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {cardtitle}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {carddesc}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            <a href={cardlink}> {content.projectspage.projectlink} </a>
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(useStyles)(MediaCard);
