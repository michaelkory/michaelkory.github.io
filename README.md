# ais-instantsearch-app

_This project was generated with [create-instantsearch-app](https://github.com/algolia/create-instantsearch-app) by [Algolia](https://algolia.com)._

## Get started

To run this project locally, install the dependencies and run the local server:

```sh
npm install
npm start
```

Alternatively, you may use [Yarn](https://http://yarnpkg.com/):

```sh
yarn
yarn start
```

Open http://localhost:3000 to see your app.

## Project outline and intent

This project is intended to allow a user to search the "Concerts" dataset and find shows by artist or location, filtered by date, specifically so a user can find shows come soon to a nearby city. Starting with the "Alternative Rock Artists" dataset and using "create-instantsearch-app" to bootstrap my application, I added the Calendar widget, and a "refinementList" to filter by location.

## Tips and tricks

The given dataset doesn't have the necessary data organized in a useful way, but you can use the search bar to search for a nearby city, add clubs in that city to the location filter, then search by artist. Or just start with an artist search, and find some cool clubs to filter by, and see what other artists might be playing there this week.

## Future enhancements to consider

I'd like to override the calendar presets to show "Next Week", "Next Month", etc. I want to know what bands are coming to my city, not what bands I missed!

I'd like to create a more advanced filter control for the locations, by country, by state, by distance. With the given dateset this may be challenging, but it would be fun to try. e.g. I could split the location value into "venue", "city", "state", "country", but there are some exceptions, such as not all countries have states, but we can probably find a work around that. 

I'd like to add a map to graphically show where the shows will be.

It would be sweet to have some images for the artists.
