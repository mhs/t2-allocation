[![Build Status](https://magnum.travis-ci.com/neo/t2-allocation.png?token=cbFumu6XwVNSbYuFchBc)](https://magnum.travis-ci.com/neo/t2-allocation)
# T2 - Allocation

Brand new time tracking and scheduling program used to quantify the essence of our business. Built
in [EmberJS](http://emberjs.com), using [ember-cli](http://www.ember-cli.com).

## Requirements

* NodeJS & NPM `brew install node`
* ember-cli `npm install -g ember-cli`
* [t2-api](http://github.com/neo/t2-api)


## Install & run

1. Get the code: `git clone git@github.com:neo/t2-allocation`
1. Change directory: `cd t2-allocation`
1. Install npm dependencies: `npm install`
1. Start [t2-api](https://github.com/neo/t2-api#start-the-server).
1. Start: `ember serve`.  You can specify a `--port` argument if you'd like.
1. You'll probably want the [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
## Testing

Tests are written in [ember-qunit](https://github.com/rwjblue/ember-qunit).
Run them using `ember test`

## Deployment

* Add your public key to `~/.ssh/authorized_keys` via the `neo` user at `t2static.neo.com`.
* Run `ember build --env production`

### Production

* Run `scp -r dist/* neo@t2static.neo.com:/var/www/t2allocationbeta.neo.com`

## Getting started with EmberJS

Here are some links to help lead the way:

- [Ember.js Getting Started](http://emberjs.com/guides/getting-started/)

And for a comprehensive list of what's happening in Ember Land:

- [emberwatch.com](http://emberwatch.com/)
- [emberweekly.com](http://emberweekly.com/)
