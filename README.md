# Salesforce Heroku App Developer Demo
## Thiago Santos - Traction on Demand

This document has been created in order to document all requirements and steps taken during the project creation, development and deployment:

### TOD - Project Requirements

| Requirement | Description
| ------ | ------ 
| [REQ-001](#Creating-a-Heroku-app-that-processes-or-displays-data) | Create a Heroku app that processes or displays data |

## Requirements Execution

### Creating a Heroku app that processes or displays data

This application has been built using Node.js and [Express 4](http://expressjs.com/), based on the Heroku getting started app [template](https://github.com/heroku/node-js-getting-started.git).

```sh

$ git remote add origin https://github.com/thsantos/VanhackLeapThiagoSantosHerokuDemo.git
$ git remote add heroku https://git.heroku.com/cryptic-headland-61225.git
```

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone https://github.com/thsantos/VanhackLeapThiagoSantosHerokuDemo.git # or clone your own fork
$ cd VanhackLeapThiagoSantosHerokuDemo
$ npm install
$ nodemom
```

Your app should now be running on [localhost:2812](http://localhost:2812/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## References

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
