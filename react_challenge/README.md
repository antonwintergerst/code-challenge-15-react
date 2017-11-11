Installation Instructions

Clone the repo to your local system, then cd into folder and run npm install. After that run npm start and navigate your browser to http://localhost:8080/

That should be it!

conceptual overview

My first action was to create the basic game board layout. 
I created the board as a stateful div and the pieces as stateless p's. I did consider having the pieces be stateful but I elected to keep all the game state in one place, I thought this would reduce the chance of something breaking.

 After I created this wireframe I looked at the logic I'd need to get the game to work. I created an Array of objects in the Boards state. Each object had the keys value - a string and canMove - a boolean. This seemed like an easy was to dictate whether a piece could move or not.

  Initially I set can move to true for all pieces so i could try and get the pieces swapping. This was the first time I have created something with React where an OnClick function defined in a parent element has needed to be used by a child but after a bit of trial and error I realised I could pass the function via props.

   Once I had that working with a console log I worked on defining the atteptMove function that I was passing. I found the index of the clicked piece and the index of the blank. I then created a function called swapArrayElements that would swap the clicked and blank pieces if canMove === true.

    Once this was working I looked at setting the canMove boolean dependant on where the blank was. In the setCanMove function I again found the index of the blank tile. I was unable to discern a numerical pattern that allowed me to programatically set the valid pieces to be able to move so I manually coded this in a if else statement dependant on the index of the blank.

     Next up was randomizing the game board. I had used the componentDidMount function once before and I thought this would be a good place to create the randomization. I added the underscore library for this as there appears to be no native .shuffle method even in es6. I ran into a bit of trouble as I was trying to call randomizePieces and setCanMove together inside componentDidMount but realized that due to the 'this' binding setCanMove was still working with the pre randomized state. I then discovered the componentWillMount function which allowed me to create the desired result.

     The last piece I created was the checkWin function which will console log winner if the pieces return to thier numerical order. I was able to do this but checking the values of the pieces as a number to the index. I had to -1 from the values as my pieces started from 1 and my array indexes 0.

     I read in the wiki entry for this game that half of the starting positions are unsovlable but I was unsure of the logic necessary to account for this. That is definately a short coming of my solution.

     This is my first ever coding test so I hope I did ok and wasn't too verbose in my explanation. I would welcome feedback and hope I get a chance to review this in person. Thanks for your time.

     Trystan Sykes 
