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



## Things to note:

* It is possible that this puzzle will load a set of 'tiles' that results in an unsolvable puzzle. For the purposes of this coding challenge I have not attempted to filter out the un-solvable tile combinations. If you reach a point where there are only two tiles that need to be swapped to complete the puzzle, it is unsolvalble. Reset and try again. For example, the following puzzles are unsolvable:
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