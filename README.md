# FindPrime

## Project

Application which takes a string input of three numbers from a User and performs a search to return the first prime number that contains those same digits in the correct order from the following list of the first 10,000 primes.

### Start - `npm start`

Client:
- Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

Server:
- Run the Project: https://github.com/pedrodiogoneto/FindPrimeServer

### Code Walkthrough

This project contains a Homepage that will Render a SearchInput component where the User will be able to insert his number, and a table showcasing all previous searches.

All the conections with the backend are handled by inputAPI.js, namely retrieving all previous searches ( `getInputHistory()`) and storing a new search (`saveNewInput()` )

