# Login tech test

An example tech test of creating login functionality in React. This app was created entirely through TDD with over 90% test coverage.

I have deployed the website [here](https://login-tech-test.netlify.app/)

## Design notes

### Assumptions

- No error handling is performed in this app and in reality this would need to be addressed e.g. in case the API endpoint is down. 
- No verification of user details is performed and I assumed this was done on the server. However I did make the username and password fields 'required'.
- It is assumed that the access token expires after a period of time and this is implemented on the server.

### Design choices

- React router was used to simulate a multi-page website and axios was used for API calls.
- No frameworks were used to style the website, only CSS was used. The style was inspired by the ByBits login screen.
- In order to download policy data, the access token is saved to local storage. This is then used when consuming the API. 
- I added a 'Sign Out' button to allow the user to return to the Login page and clear local storage.
- The pages are fully responsive and the website was tested on both a computer and phone screen.
- A specific class was created to format text from the API response and keep the Policy component clean.

### Improvements / future work

Time permitting I would address the following next:
- The buttons have an animation but it appears to be stuttering. 
- There is an ESLint warning that needs to be addressed but no impact to functionality.
- Sign out functionality was added but not tested (I need to look into testing react-router redirection).
- Access to the policy webpage is not restricted, this could be implemented with some sort of authentication function. 

## Time of completion 

I spent around 7 hours on this exercise and had a lot of fun. It gave me a chance to do TDD in React and get to grips with mocking API calls and testing asynchronous code.

## How to use

#### To install

```
$ git clone https://github.com/ArifEbrahim/login-tech-test.git
$ cd login-tech-test
$ npm install
```

#### To run the app

```
$ npm start
```

The app can then be used in a web browser at localhost:3000

#### To test

```
$ npm test
```