## Create a Dashboard Layout

You have to create a dashboard layout with a sidebar and main panel. The sidebar will contain the navigation an the main will contain the main content. Go through the requirements given below. To understand it better take a look at the live demo.

For help you can take a look at https://reactrouter.com/web/guides/quick-start

### App Demo:

[Routing Practice](https://q5on1.csb.app/)

- Create a dashboard layout with two section sidebar and main
- Sidebar will contain the navigation
- Main will contain the content
- Clicking on any navigation will make the change the route
- Based on different route display different content in main component
- HINT: Use link in the sidebar component to change the route to things like (`/articles`, `/help` etc)
- HINT: In main component define different routes. Based on routed display different component i.e Articles for `/articles`, Help for `/help`
- Display a 404 Page Not Found on routes not defined
- On the articles page using the data given below display a list of articles
- Clicking on each article will take you to an individual article page (`/articles/(article slug)`)
- On the individual article page you will show the slug

```json
[
  {
    "title": "How to handle state in React. The missing FAQ.",
    "author": "Osmel Mora",
    "slug": "handle-state-in-react"
  },
  {
    "title": "You might not need React Router",
    "author": "Konstantin Tarkus",
    "slug": "no-need-to-use-react-router"
  },
  {
    "title": "Mixins Considered Harmful",
    "author": "Dan Abramov",
    "slug": "mixins-considered-harmful"
  },
  {
    "title": "React Design Principles",
    "author": "Dan Abramov",
    "slug": "react-design-principles"
  },
  {
    "title": "Don't use .bind() when passing props",
    "author": "Dave Ceddia",
    "slug": "don-use-bind-when-passing-props"
  }
]
```
