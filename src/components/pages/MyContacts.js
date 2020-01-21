import React, { Component } from 'react';
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

import firebase from 'firebase';
import 'firebase/database';


import { DB_CONFIG } from '../../data/config.js';

import dummyData from '../dummyData/dummyData.json';



const useStyles = makeStyles(theme => ({
  card: {
    width: '15%',
    height: '15%',
    minWidth: 100,
    minHeight: 100,
    float: "left",
    margin: '.5%',
    alignItems: 'center'
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



class MyContacts extends Component {
  constructor(props){
    super(props);

    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('contactsapp-60669');

    console.log(this.database);
  
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [ anchorEl, setAnchorEl ] = React.useState(null);

  // componentWillMount(){
  //   this.dummData = base.syncState('contactsapp-60669')
  // };
 
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }
console.log(DB_CONFIG);
  
  return (

    <div className="container" >


{/* replace dummyData with new data */}
      {dummyData.map((userDetail, index)=> {


 {/* Card Front */}
        return <Card className={classes.card}>
 
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
          
          title={userDetail.name}
          subheader={userDetail.phoneNumber}
        />
        <CardMedia
          className={classes.media}
          image={userDetail.imgURL}
          title="Photo "
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {userDetail.work}
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
              {userDetail.Description}
            </Typography>
            
          </CardContent>
        </Collapse>


      </Card>

      })}
    </div>
  );
  }
}
export default MyContacts;