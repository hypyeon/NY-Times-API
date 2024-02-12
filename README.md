# Today's Top 10 Best Sellers
By [Hayeong Pyeon](https://www.hayeong.website)

## Table of Contents
1. [Technologies Used](#technologies-used)
2. [Description](#description)
3. [Setup Requirements](#setup-requirements)
4. [Link](#link)
5. [Known Bugs](#known-bugs)
6. [License](#license)

## Technologies used
- HTML, SCSS, JavaScript
- Jest 
- React API, `useReducer` hook

## Description
- This is an in-class prompt provided by Epicodus.
- This prompt is part of **NY Times API: Making an API Call with fetch and useState, Writing and Testing Reducer and Actions, and Implementing useReducer**.
- This application shows real-time top 10 best selling books for the current date.  
- *Current design is not responsive. Recommend to use standard Desktop viewport only, when opening the Github Pages provided below.*

## Setup Requirements
1. Clone this repository to your desktop and open it with a text editor.
2. Set up your own API key: 
- Get an API key from [NY Times Developer site](https://developer.nytimes.com/get-started).
- Create a new file named `.env` in the root of this project. 
- Open the `.env` file and add `REACT_APP_API_KEY=` followed by the API key you obtained from the API provider. 
- Do not share your API key publicly by making sure `.env` file is added to the `.gitignore` file. 
3. Install all packages with `npm install`.
4. Build the project using webpack with `npm run build`.
5. Start a development server with `npm run start`.

## Link
[Today's Top 10 Best Selling Books](https://hypyeon.github.io/NY-Times-API/)

## Known Bugs
- No known bug found as of Feb 11, 2024
- *The API key exposed from a previous commit is effectively terminated and the new one is successfully secured. Please follow [Setup Requirements](#setup-requirements) to set up your own when cloning this repo.*

## License
Copyright © 2024 Hayeong Pyeon | [MIT](/LICENSE.txt)