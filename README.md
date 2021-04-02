# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# README
Link to the API github: https://github.com/antromo741/tutorfy-api

# About
Hello and welcome to the Tutorfy API. Tutorfy is a vision of a tutoring website where\
teachers and tutors are able to upload tutoring content for students.

This application relies on React, Redux and Javascript.\
This is the client side part of the application that deals with the design and\
styling of the application.\
This repo contains the components, containers and reducers that connect to our\
store and communicate with the API.

## Getting Started
First run npm install to get all the dpendencies and packages.\
After following the steps from the API, we can start the application with running yarn start.\
Once yarn starts up and opens in the browser you will be able to use the application\
and communicate data from the client side to the API.
### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Usage
Once the application is up and running in the browser you will be shwon the home page.\
Here we can see the seeded data. If you did not seed the data go ahead and click\
on create a class. Here you can choose the subject you are looking to publish lessons for\
After we create the subject we can click on it to view any lessons.\
Of course it will be empty. :ets click on add a lesson.\
Here we can add a lesson title, description, start and end time, a location, cover photo and\
a link to the lesson video. This link can be a youtube link as well as a regular video file.\
For right now the video lesson is hard coded in, and can easily be altered from the group show\
container inside of the react video player url.\
This is a work in progress to get the correct video link displayed.