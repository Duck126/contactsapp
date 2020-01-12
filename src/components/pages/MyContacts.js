import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';



const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },

}));

export default function MyContacts() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [ anchorEl, setAnchorEl ] = React.useState(null);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <Card className={classes.card}>

{/* Card Front */}
      <CardHeader

        //Burger Menu = issue: burger menu doesnt close unless hit Esc button.
        action={
          <IconButton aria-label="settings" onClick={handleClick}>
            {/* <MoreVertIcon /> */}
            <MoreVertIcon />

            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >

              <MenuItem onClick={handleClose}>Copy</MenuItem>
              <MenuItem onClick={handleClose}>Edit</MenuItem>
              <MenuItem onClick={handleClose}>Delete</MenuItem>
            </Menu>

          </IconButton>
          
        }
        
        title="NAME HERE"
        subheader="PHONE NUMBER"
      />
      <CardMedia
        className={classes.media}
        image="IMG URL"
        title="IMG DESCRIPTION"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          PLACE OF WORK
        </Typography>
      </CardContent>

{/* Card Actions */}
      <CardActions disableSpacing>

        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>

      </CardActions>

{/* This is the beginning of the dropdown */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>
            INDIVIDUALS DESCRIPTION HERE 
          </Typography>
          
        </CardContent>
      </Collapse>


    </Card>
  );
}