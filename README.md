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
1. `cp config.json.sample config.json` and check the default configuration
1. Start [t2-api](https://github.com/neo/t2-api#start-the-server). (Alternatively use api-mock
server. See below)
1. Start: `grunt`

## Testing
  [Install Selenium and Chrome WebDriver](selenium/README.md) into `./selenium` dir.

Running all tests:

    grunt test

Running unit tests:

    grunt test:unit

Running acceptance tests:

    grunt test:acceptance

Running unit test in development mode (autorun)

    grunt test:dev

## Deployment

Build the application with

    grunt build --production

Deploy the contents of `./dist` directory.

### Staging

We host our staging environment as github pages.

You can create a staging version of you current branch by executing:

    grunt deploy:staging

It will build the application with staging environment settings (`config.json`) into `./dist` folder,
and push it to [gh-pages](https://github.com/neo/t2-allocation/tree/gh-pages) branch.

Your branch will be hosted in its own directory at [t2-allocations-staging](http://neo.github.io/t2-allocation/).

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

Due to Ember Data's unstable nature, we use Ember Model:

- [Embercasts.com screencast on Ember Model](http://www.embercasts.com/episodes/getting-started-with-ember-model)

and for a comprehensive list of what's happening in Ember Land:

- [emberwatch.com](http://emberwatch.com/)
