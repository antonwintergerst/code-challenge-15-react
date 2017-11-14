# 15 Puzzle Challenge 
> Coding Challenge for Isobar
_____

## Installation Instructions
1. Clone the repository to your device
2. Navigate to the root of the folder and run:
```
npm install
```
3. Install react (local installation)
```
npm install react react-dom --save
```
4. Start up the server on port 9000
[http://localhost:9000/](http://localhost:9000/)
```
npm start
```
## Troubleshooting
- scripts in package.json should be:
```
"scripts": {
    "start": "webpack-dev-server --env.dev --config config/webpack.config.js",
    "build": "webpack --env.prod -p --config config/webpack.config.js"
  }
```
- Update packages
- Port allocated to 9000 (or any port you choose). Check webpack.config.js:
```
const dev = {
    devtool: 'cheap-module-source-map',
    devServer: {
      port: 9000,
      stats: 'errors-only'
    }
  }
```
- Check .babelrc file has correct presets:
```
{ "presets": ["env", "react"] }
```
_____
## Usage Instructions
- Click on a square that is above, below or on the left or right of the empty square to swap it.
- You win the game when the board has the squares numbers 1-8 in a row from left to right.
_____
## Approach and Conceptual Overview
- Drawing the board with dummy data and some SASS to show the board and making sure the app is connected properly.
- I initially decided to assign state to the pieces but discovered it was harder to control state on each piece rather than assign it to the board.
- Initially i only had 'value' in the data structure to use to change state but later added 'coordinates' and a boolean (validMove) to determine if the move was possible.
- Using coordinates, I noticed a pattern after writing out possible moves and based my possible moves logic based on the difference of the row or column coordinates being 1.
- Created an array function to swap array items since the squares were in an array with objects - and swapped the object that I wanted (surprised that there isn't a default one).

## Assumptions
- Drew a board with 9 squares. Sample board provided in README had 9 total squares with 1 empty.
- Utilised some SASS as it was in the recommendations.
- Added in a small usability feature to not be able to move a square once the win condition has been met as it made sense to not be able to continue playing even after game has finished.

## Design Decisions
- Didn't make it fully responsive as I didn't know how to do that with react.
- If I had more time I would've added in messages to notify user of an invalid move or that they've won. For now it appears in the console.

## Lessons Learnt
- Always plan first!  
> I did plan a bit and had a general idea how the game works but I should've written out more pseudocode and drawing the flowchart to work out the winning logic and game flow as I had to change logic multiple times and even had to change the data structure.  

**Image Goes here**

- Debugger is your friend  
> Utilising the debugger saved me from more headaches especially doing something as simple as writing the logic to win the game and identify the current state or the values and coordinates of the empty and numbered squares.
- Commit often and frequently  
> Although thankfully my code was not lost during the time I worked on it, I completely forgot to commit regularly. Even though it was a complete mess early on it would be helpful to see the progress of the code so I'd be able to learn from mistakes and to prevent them from happening in the future.

### Conclusion
Thank you Anton for giving the opportunity to do the test. Apologies if this is too much for a README but I hope this will give you insights to my thought process and decision making. For my first coding test, I had lots of fun, learnt lots and enjoyed the moment when it **finally** worked!