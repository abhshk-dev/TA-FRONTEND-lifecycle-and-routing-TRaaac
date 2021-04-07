## Stopwatch and Countdown

We will create a stopwatch and a countdown timer in this exercise. We will also make a use case for using `componentWillUnmount` to remove the time interval when the component is unmounted.

### Stopwatch

- Create a timer app
- It will have two buttons Show Stopwatch and a Show Countdown
- When you click on `Show Stopwatch` it will display a counter with time and a `Start` button
- When you click on `Start` it will start from 0 and keep changing every 15 milliseconds
- Stopwatch will start from 0 and keep changing every second or centi second (1 second = 100 centi second)
- Once started it will show another button `Stop`
- Once you click on `Stop` the timer will stop and display two other button `Resume` and `Reset`
- `Reseume` will resume the time and `Reset` will reset the time to 0
- The box will also have `x` clicking on this will remove the box
- Also make to clear the time interval when the box is closed

### Countdown

- Countdown will have three button (Hours : Minutes : Seconds)
- All three will have up and down button clicking on which will increment or decrement the time
- It will have a `Start` button
- Also make sure to `clearInterval` when the component is unmounted
- Once countdown is completed alert message saying `Countdown ended`

Go through the demo to understand it better [Timer App](https://eb3mq.csb.app/)
