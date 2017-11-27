[Find the hosted app here](https://lyleinnes.github.io/code-challenge-15-react/)

# To run the app localy in development:

* Clone this repo to your local directory
```
git clone https://github.com/lyleinnes/code-challenge-15-react.git
```
* Ensure you have node installed on your system. For instructions on installing node, see:
```
https://nodejs.org/en/
```
* Install dependencies using node package manager 
```
npm install
```
* Start the development server by running 
```
npm start
```
* View the app in your browser:
```
http://localhost:8080/
```

# Approach taken

To begin with I considered whether it was worth componentizing any part of the app.
I decided that it would be most straight forward to keep everything in one component as there would only be a few bits of data to store in the state.

Initially I began by storing the data for each 'tile' as an array of objects, simply because I thought I may need to store more than just the number that each tile displays.

Further down the track I realised all I needed was an array to store the nine values that each tile displays, so I refactored the code I had written to work with the new format of the 'tiles' data in state.

Using the array of 'tiles' from state, I used the map method to transform each element to a div with an onClick handler that would initiate the rest of the functions I would write.

Most of the functions I have written are quite straight forward with the exception of the findSurroundingTiles function. I know that this function is limited to working within a board of only 3x3 tiles, so I would need to rewrite it if this was going to be applied to a larger size board (eg: 4x4..) I have decided to leave it as is, to try and keep within the advised timeframe.

Given more time to work on the puzzle I believe I could come up with a function to work with any size board.

## Things to note:

* It is possible that this puzzle will load a set of 'tiles' that results in an unsolvable puzzle. For the purposes of this coding challenge I have not attempted to filter out the un-solvable tile combinations. If you reach a point where there are only two tiles that need to be swapped to complete the puzzle, it is unsolvalble. Reset and try again. Below are some examples of unsolvable puzzles:
```
+--------------------         +--------------------         +--------------------
|     ||     ||     |         |     ||     ||     |         |     ||     ||     |
|  1  ||  2  ||  3  |         |  1  ||  2  ||  3  |         |  1  ||  5  ||  3  |
+--------------------         +--------------------         +--------------------
|     ||     ||     |         |     ||     ||     |         |     ||     ||     |
|  4  ||  5  ||  6  |    or   |  5  ||  4  ||  6  |    or   |  4  ||  2  ||  6  |
+--------------------         +--------------------         +--------------------
|     ||     ||     |         |     ||     ||     |         |     ||     ||     |
|  8  ||  7  ||     |         |  7  ||  8  ||     |         |  7  ||  8  ||     |
+-------------------+         +-------------------+         +-------------------+
```