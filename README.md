<!--hide-->
# ⏳ Simple Counter with React
<!--endhide-->

<p align="center">
  <img height="500px" src="./src/img/simple-counter-anim.gif?raw=true" />
</p>


# 📝 Purpose

Create a seconds-counter component, called ***SecondsCounter***. 

- The whole purpose of the component is to display how many seconds have passed since the website finished loading (onLoad).
- Use the ***ReactDOM.render()*** to render the component into the web-app.
- Use the ***setInterval()*** function to re-render the component on every second.
- The component does not need a local state, you can pass the number of seconds as **props** like this:

```jsx
<SecondsCounter seconds={3434} />
```


# 🔥 Bonus
- Create an option to countdown from a given number.
- Create stop, reset, and resume functionality
- Create an alert when the user reaches a specified time, if the user enters "10", an alert should render notifying the user that their time was reached


# 🎨👨‍💻 Features added
- Countdown mode with visual alarm when zero is reached
- Some fancy icon animations (thanks to fontawsome icons built in animation classes)


# 👥 Contributors
This and many other projects are built by students as part of the 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) by [Alejandro Sanchez](https://twitter.com/alesanchezr) and many other contributors. Find out more about our [Full Stack Developer Course](https://4geeksacademy.com/us/coding-bootcamps/part-time-full-stack-developer), and [Data Science Bootcamp](https://4geeksacademy.com/us/coding-bootcamps/datascience-machine-learning).