# SmartTurismo Prediction Code

SmartTurismo is a project intended to help DMO's to attract more visitors. Using a proprietary algorithm created using crowdsourced data, it predicts with good accuracy an individual's decision to visit using only a few simple data points, listed below. The word count and other attribute measurements serve to paint a picture of the attributes of each venue page - by seeing which venue pages are successful at attracting visitors and what attributes they contain, a new, more effective venue page can be designed for any venue.

- Innovate WithIN district finalists
- Purdue Firestarter Graduate Project

We have decided to make this service free and public so that it can be of use to more communities everywhere.

This particular program uses a simple linear regression model to determine if a website visitor will actually visit a location on an individual listing page.

It measures: 
 - Time spent on the website
 - Right clicks on the website
 
 and turns it into a yes or no prediction.

index.js gives a socket.io server that receives and parses data sent by the pred.js code

pred.js should be inserted in the head of all of the websites that the prediction should be ran on---it will send necessary data points to the index.js server.

Note - when inserting url of the website you want to collect data on in pred.js code, make sure to follow format    http://number/    , for example.    http://216.137.179.27:3000/  ,   within the quote marks

# socket.io Requirements

express

