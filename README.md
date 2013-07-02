# T2 - Ember 

A reimplementation of a reimplementation of Teamster, a time tracking and scheduling program used to quantify the essence of our business.  The newest implementation using [lineman](https://github.com/testdouble/lineman) & built in [ember](http://emberjs.com) together.

## Install

As a client-side only app, it requires interfacing with a backend api.  Currently, we are using a rails api, which should be installed separately.

So to get the API working, go install the [T2 backend](https://github.com/neo/T2/tree/t3) and get it running on localhost:3000.  This is a standard rails application, and there should be instructions there if you have any issues.

Next, lineman requires node.js to run.

So,if you haven't already done so, install [node.js](http://nodejs.org)

Then, install lineman gloablly:

```
$ npm install -g lineman
```

Then clone this repository and run:

```
$ npm install
$ lineman run
```

Finally, visit the page at [localhost:8000](http://localhost:8000) to verify that it works.
