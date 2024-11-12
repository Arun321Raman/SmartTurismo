# SmartTurismo Prediction Code

SmartTurismo is a project intended to help visitors bureaus (or any other venue/location promoters) to attract more visitors. Using a proprietary algorithm created using crowdsourced data, it predicts a venue page's likelihood to elicit an uncommitted individual's decision to visit a destination using only a few simple data points, listed below. The word count and other attribute measurements serve to paint a picture of the attributes of each venue page - by seeing which venue pages are successful at attracting visitors and what attributes they contain, a new, more effective venue page can be designed for any venue.

- Innovate WithIN district finalists
- Purdue Firestarter Graduate Project

This particular program uses a simple logistic regression model to determine if a website visitor will actually visit a location on an individual listing page. 

It measures: 
 - Time spent on the website
 - Right clicks on the website
 
 and turns it into a yes or no prediction.

Index.js gives a socket.io server that receives and parses data sent by the pred.js code.

Pred.js should be inserted in the head of all of the websites that the prediction should be ran on---it will send necessary data points to the index.js server.

Note: depending on setup, SmartTurismo may not collect data for all phone visitors, but will collect data on any computer user.

To test SmartTurismo, feel free to use the sample website and data page that I have set up - these are the sites shown in the video.

# socket.io Requirements

express

Questions or Comments: Email - aruniaraman@gmail.com

