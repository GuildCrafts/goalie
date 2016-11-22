# Goalie

**Goalie** is a better goal library for the LOS. It is an ongoing, maintained `prototype` project that will have a deployed, live alpha version usable by current learners.

Goalie uses GitHub issues as its canonical data store, wrapping the issue data and providing a more useful/relevant interface to the LOS goals.

The live app is available here: https://lg-goalie.herokuapp.com/

[![CircleCI](https://circleci.com/gh/GuildCrafts/goalie.svg?style=svg&circle-token=8720e3371dc1f20036897f45eb3a918fbcad640f)](https://circleci.com/gh/GuildCrafts/goalie)
[![Heroku](https://heroku-badge.herokuapp.com/?app=lg-goalie)](https://lg-goalie.herokuapp.com/)

## Getting Started

### Development Setup

Clone the repo and install npm dependencies.

You'll need to [register this app](https://github.com/settings/applications/new) as an `Oauth application` on Github.

```
Application name
Goalie (development)

Homepage URL
http://localhost:5000/

Application description
A GUI for GuildCraft Issues to help students at Learner's Guild plan and execute projects.

Authorization callback URL
http://localhost:5000/auth/oauth_callback
```

Copy the `client id` and `client secret` and use them below:

Create a `.env` file in the root of the cloned repo that looks like this:

```
GITHUB_CLIENT_ID=GET_THIS_VALUE_FROM_GITHUB
GITHUB_CLIENT_SECRET=GET_THIS_VALUE_FROM_GITHUB
SESSION_SECRET=MAKEUP_A_REALLY_LONG_STRING_HERE
APP_URL=http://localhost:5000
```

Now you should be ready to run `npm start` to start the server using `node-foreman` (defaults to http://localhost:5000)

## Contributing

Read the guide on [CONTRIBUTING][contributing] and then grab an issue from the top of the backlog in the [main project][main-project].

[contributing]: ./CONTRIBUTING.md
[main-project]: https://github.com/GuildCrafts/goalie/projects/1

### Contributors
- [tannerwelsh](https://github.com/tannerwelsh)
- [rachel-ftw](https://github.com/rachel-ftw)
- [pllearns](https://github.com/pllearns)
- [Jusdev89](https://github.com/Jusdev89)
