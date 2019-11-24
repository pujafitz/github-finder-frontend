# GitHub Finder

![Screenshot](/github_screenshot_jr.png){:height="50%" width="50%"}

This app was created using React to learn and practice new skills and tools.

At first, I created the app using stateful class-based components. Then the app was refactored using the state management library, Redux. Finally, I refactored again, using Hooks and the Context API (current production build).

Version: 3.1.0

## Contents

    -Description
    -Features
    -Technologies
    -Contributor
    -Special Thanks
    -Available Scripts

## Decription

This app allows a user to search GitHub's API. If the "Search" button is cicked without input, the user will be prompted to insert search parameters. The search will look for the input text in a GitHub user's name, username, and bio. The Search results are displayed below, with a new button appearing to Clear search results.

When a user clicks the "More" button of any particular GitHub user, they are directed to that user's page within the app. The GitHub user page displays the user's information directly from the GitHub API, including the person's name, image, hireability, location, bio, username, website, company, a button to visit their GitHub profile, number of followers, number following, number of public repos, number of public gists, and finally, a list of the five most recently created public repos with links to access them.

There are links to Home and About pages in the Navbar, as well as a "Back to Search" button, where the user's last search results (state) is still preserved until they choose to click the "Clear Search" button or enter new search parameters.

## Features

- CSS Styling (no framework like bootstrap)
- Not found page, Clear Search button, Back to Search button

## Technologies

- HTML
- CSS
- JavaScript
- Node.js
- React (including Hooks & Context API)
- Redux
- AWS EC2 depoloyment

## Contributor

Puja Fitzpatrick: [GitHub Profile](https://github.com/pujafitz)

## Special Thanks

Jonathan Ray: [GitHub Profile](https://github.com/ray-jonathan)

## Available Scripts

This project was created with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
