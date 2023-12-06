/*import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import unicornbikeImg from './../assets/images/unicornbike.jpg'

const useStyles = makeStyles(theme => ({ 
card: {
maxWidth: 600, 
margin: 'auto',
marginTop: theme.spacing(5) 
},
title: {
padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px 
${theme.spacing(2)}px`,
color: theme.palette.openTitle 
},
media: { 
minHeight: 400
} 
}))*/

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Grid from "@material-ui/core/Grid";
import Suggestions from './../product/Suggestions'
import {listLatest, listCategories} from './../product/api-product.js'
import Search from './../product/Search'
import Categories from './../product/Categories'

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 30,
    
  }
})

class Home extends Component {
  state={
    suggestionTitle: "Latest Products",
    suggestions: [],
    categories: []
  }
  componentDidMount = () => {
    listLatest().then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        this.setState({suggestions: data})
      }
    })
    listCategories().then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        this.setState({categories: data})
      }
    })
  }
  render() {
    const {classes} = this.props
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={8} sm={8}>
            <Search categories={this.state.categories}/>
            <Categories categories={this.state.categories}/>
          </Grid>
          <Grid item xs={4} sm={4}>
            <Suggestions products={this.state.suggestions} title={this.state.suggestionTitle}/>
          </Grid>
        </Grid>
      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)

/*const MyComponent = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6" className={classes.title}>
          Card Title
        </Typography>
        <CardMedia
          className={classes.media}
          image={unicornbikeImg}
          title="Unicorn Bike"
        />
        <Typography variant="body2" component="p">
          Card content goes here.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MyComponent;*/

