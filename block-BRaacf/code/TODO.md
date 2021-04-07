## Create of the two given apps

#### App Demo

Go through the demo below to understand the app functionality better.

[https://www.hnclone.win/](https://www.hnclone.win/)

#### Hacker News Clone

Introduction to the API

- We will be using the Hackernews API from this url (https://github.com/HackerNews/API).
- API to get top stories, use this URL: `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`
- API to get new stories, use this URL: `https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty`
- API to get best stories, use this URL: `https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty`
- Each of the above stories API returns only an array of IDs representing a story.
- So to get the details of that particular story, we need to make another API call.
- API to get story details, use this URL: `https://hacker-news.firebaseio.com/v0/item/[story_id].json?print=pretty`
- For example: https://hacker-news.firebaseio.com/v0/item/26061935.json?print=pretty
- To implement search use this link `https://hn.algolia.com/api`

#### You can also choose alternative UI

![Alternative UI](./assets/dribble.png)
