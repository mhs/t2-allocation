[![Build Status](https://magnum.travis-ci.com/neo/t2-allocation.png?token=cbFumu6XwVNSbYuFchBc)](https://magnum.travis-ci.com/neo/t2-allocation)
# T2 - Allocation

Brand new time tracking and scheduling program used to quantify the essence of our business. Built
in [EmberJS](http://emberjs.com), using [Grunt](http://gruntjs.com) and [Bower](http://bower.io)

## Requirements

* NodeJS
* NPM
* Ruby
* [t2-api](http://github.com/neo/t2-api)
* Java (for acceptance tests)


## Install & run

1. Get the code: `git clone git@github.com:neo/t2-allocation`
1. Change directory: `cd t2-allocation`
1. Install npm dependencies: `npm install`
1. Install bower dependencies: `bower install`
1. Install ruby dependencies:  `bundle install`
1. Start [t2-api](https://github.com/neo/t2-api#start-the-server). (Alternatively use api-mock
server. See below)
1. Start: `grunt`

## Testing

`TODO: check how many of these actually work`

Running all tests:

    grunt test

Running unit tests:

    grunt test:unit

Running acceptance tests:

    grunt test:acceptance

To run acceptance tests in headless mode (using PhantomJS):

    grunt test:acceptance --phantomjs

Running unit test in development mode (autorun)

    grunt test:dev

## Deployment

`TODO: harmonize deploys with the other Lineman-based apps`

The production app is hosted on Heroku. Because t2-allocation consists of only static files,
we will use the hack from this [site](http://kennethreitz.org/static-sites-on-heroku-cedar/). This
adds an empty index.php and a .htaccess file.

The current production version of the app is in [production](https://github.com/neo/t2-allocation/tree/production)
branch. During the deployment process we first build the application into the `./dist` directory,
then we clone the **production** branch into `.production` directory, update it with the contents of
`./dist` directory, commit the changes, and push to heroku and github.

You can create a production version of your current branch by executing:

    grunt deploy:production

The app can be accessed [here](http://t2allocation.neo.com).

### Staging

The staging environment is identical to the production environment, but is
deployed with:

    grunt deploy:staging

and can be accessed [here](http://t2allocation-staging.neo.com).

## Running api-mock server

If you don't want or can't install t2-api, you can use **api-mock** server which serves static
JSON files from ./api-mock/api/v1/ dir. 

Start it in a separate console by `grunt apiMock`

## Getting started with EmberJS

Here are some links to help lead the way:

- [Ember.js Getting Started](http://emberjs.com/guides/getting-started/)
- [Peepcode Ember.js](https://peepcode.com/products/emberjs)
- [How a gaslighter learned Ember](http://www.youtube.com/watch?v=LyHK18s9taM)
- [Getting Started with Ember](http://tech.pro/tutorial/1166/getting-started-with-emberjs)

and for a comprehensive list of what's happening in Ember Land:

- [emberwatch.com](http://emberwatch.com/)
