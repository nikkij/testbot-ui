# TestBot-UI

A front end for tracking and visualizing regression testing in robots.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system. An demo can be seen at: http://testbot-ui.s3-website-us-west-2.amazonaws.com/ . TestBot-UI works hand in hand with TestBot, which provides an API for tracking regression testing in robots.

### Prerequisites

You will need the latest versions of node, npm, and yarn to run this application locally.

### Installing

To install and run clone this repo and then:

```
REACT_APP_TESTBOT_URL={$URL_OF_API_GOES_HERE} yarn start
```

## Deployment

The demo of this application is deployed to an S3 bucket. You can deploy this application to any sufficient web hosting environment.

## Built With

* [Create React App](https://github.com/facebook/create-react-app) - Used to bootstrap the React framework
* [Material UI](https://material-ui.com/) - Provides React componentry
