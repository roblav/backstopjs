# BackstopJS

BackstopJS is a visual regression tool. As website have grown in size, managing site styles using CSS has been problematic as indicated by its name styles cascade. Unfortunately, changing a style for one page can also have unexpected effects in other pages. Instead of relying on the developer to catch any issues through manual testing BackstopJS aims to automate visual testing.

###References

Read more about BackstopJS - http://garris.github.io/BackstopJS/
Read a BackstopJS setup guide - https://joe-watkins.io/css-visual-regression-testing-with-grunt-backstopjs/

##Initial Setup

Initially this project is setup to work with the P800 prototype, you will need to have this running locally to run tests against.

https://github.com/roblav/p800-payments-prototype

##Step One - Required Packages

$ sudo npm install -g phantomjs

$ sudo npm install -g casperjs

##Step Two - Install backstop using Bower

$ bower install

##Step Three - grunt-backstopjs

$ npm install

##Step Four - BackstopJS Setup

$ grunt backstop:setup

##Step Six - Generate reference images

Initially we have to create our base image files to compare against.

$ grunt backstop:reference

##Step Seven - Run tests after making updates

After we have made our changes to the project we can now run our tests, which will compare any changes with the original reference image files.

$ grunt backstopjs:test

This will tell you how many tests passed or failed. See example below: 
Test completed...
0 Passed
3 Failed

##Step Eight - Viewing report

$ gulp openReport



