# Insurance Claims Sample Project
Utilises on react + bulma + react hooks + moment js + lodash + the excellent @lourenci/react-kanban library

# Reasoning
* Bulma was used for ease of use and beauty of components.
* react-kanban was used because the claims structure fits a kanban board perfectly and the library was comprehensive enough to not need to build from scratch.
* Hooks were used because they are great and easy to use.
* Moment was used because of ease of use (in a much larger dataset I would use js dates with a util library for performance).
* Lodash was used for its helper functions.
* Lambdas and a functional approach were used for cleanliness but what is missing is unit tests for components as well as the various business logic functions.

Would use websockets for future realtime-multiuser claims app, the claims.js would be replaced by a more comprehensive claims client library.

## Requirements

Node.js + npm.

## Usage

To install packages:

```
npm install
```

To run in developer mode with hot reloading:

```
npm run develop
```

Point your webbrowser to http://localhost:5000

To create a minified distributable for deployment:

```
npm run build
```

The folder 'dist' will contain the distributable; to publish the application copy all the files.

To clean the build run:

```
npm run clean
```
