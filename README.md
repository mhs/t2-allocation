# T2 - Ember 

A reimplementation of a reimplementation of Teamster, a time tracking and scheduling program used to quantify the essence of our business.  The newest implementation using [lineman](https://github.com/testdouble/lineman) & built in [ember](http://emberjs.com) together.

Ember can be VERY difficult to get started, so here are some links to help lead the way:

- [Ember.js Getting Started](http://emberjs.com/guides/getting-started/)
- [Peepcode Ember.js](https://peepcode.com/products/emberjs)
- [How a gaslighter learned Ember](http://www.youtube.com/watch?v=LyHK18s9taM)
- [Getting Started with Ember](http://tech.pro/tutorial/1166/getting-started-with-emberjs)

Due to Ember Data's unstable nature, we use Ember Model:

- [Embercasts.com screencast on Ember Model](http://www.embercasts.com/episodes/getting-started-with-ember-model)

and for a comprehensive list of what's happening in Ember Land:

- [emberwatch.com](http://emberwatch.com/)

## Install

As a client-side only app, it requires interfacing with a backend api.  Currently, we are using a rails api, which should be installed separately.

So to get the API working, go install the [t2-api repo](https://github.com/neo/t2-api) and get it running on localhost:3000.  This is a standard rails application, and there should be instructions there if you have any issues.

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

Finally, visit the page at [localhost:8000/projects](http://localhost:8000/projects) to verify that it works.


## Testing

Tests can be run by entering the command

```
$ lineman spec
```

then a browser will open [localhost:7357](http://localhost:7357) and run the tests.  Additional tests are in Qunit using the ember-testing framework, which currently is a work in progress, but is the best thing we have.

Some links to help get started:

- [Lineman docs on testing](https://github.com/testdouble/lineman#specs)
- [Qunit](http://qunitjs.com/)
- [Erik Bryn's talk at Seattle Ember.js Meetup](http://www.youtube.com/watch?v=nO1hxT9GBTs) - April 23rd, 2013
- [Dan Gephart's talk at Boston Ember.js Meetup](http://www.youtube.com/watch?v=9DC4M1BWPH4#t=38s)
