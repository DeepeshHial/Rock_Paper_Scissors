Rock, Paper, Scissors Game

A simple Rock, Paper, Scissors game built with React.js. Play against the computer and track your scores in real-time.

Features
User vs. Computer gameplay
Real-time score updates
Reset game functionality
Getting Started
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/rock-paper-scissors.git
cd rock-paper-scissors
Install dependencies:

bash
Copy code
npm install
Run the application:

bash
Copy code
npm start
The app will be available at http://localhost:3000.

Code Overview
App.js
State:

choice, win, userchoice, computerChoice, userScore, computerScore
Functions:

winner(user, comp): Determines the winner.
choicedone(val): Handles user choice and game logic.
getImage(choice): Returns image paths for choices.
UI:

Displays scores and choices.
Provides buttons for user choices.
Reset button to start a new game.
Contributing
Fork the repository and submit a pull request for improvements.
