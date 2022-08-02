# SmartTurismo Prediction Code

This program uses a linear regression model to determine if a website visitor will actually visit a location on an individual listing page.

It measures: 
 - Time spent on the website
 - Right clicks on the website
 
 and turns it into a yes or no prediction.

index.js gives a socket.io server that receives and parses data sent by the pred.js code

pred.js should be inserted in the head of all of the websites that the prediction should be ran on---it will send necessary data points to the index.js server.

# socket.io Requirements

express

