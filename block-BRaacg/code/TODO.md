## Quiz App

Create a quiz app using the api below:

### Important URLs

Using the links given below create a quiz application. Go through the documentation properly.

- [API URL](https://opentdb.com/)
- [API DOCS](https://opentdb.com/api_config.php)

### What to do

- The quiz app will first display a collection of categories
- Get the list of all categories using this link (https://opentdb.com/api_category.php)
- Let user select a category from the list above
- Also show three difficulty `Easy`, `Medium` or `Hard`
- Once the category and difficulty is selected fetch 10 questions (https://opentdb.com/api.php?amount=10&category=10&difficulty=medium)
- User will click on a button `Start` to start a 10 questions quiz
- Show the progress of each question like if the user is on question 2 (2/10)
- At the end of 10 questions user will see a report card
- The report card will contain percentage of right answers.
- It will contain all the questions with user selected answer and the right answer
- Support local storage if the user is in the middle of the quiz

- To understand it better go through [https://altcampus.io/blog/quiz](https://altcampus.io/blog/quiz)
