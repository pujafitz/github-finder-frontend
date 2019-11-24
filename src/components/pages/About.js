import React, { Fragment } from 'react';

const About = () => {
  return (
    <Fragment>
      <h1>About GitHub Finder</h1>
      <h2>by Puja Fitzpatrick</h2>
      <p class='p'>
        This app was created using React to learn and practice using new skills
        and tools.{' '}
      </p>
      <p class='p'>
        At first, I created the app using stateful class-based components. Then
        the app was refactored using the state management library, Redux.
        Finally, I refactored again, using Hooks and the Context API (current
        production build).
      </p>
      <p>Version: 3.1.0</p>
    </Fragment>
  );
};

export default About;
