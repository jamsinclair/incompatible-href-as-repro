# `incompatible-href-as` reproduction with catch all and custom rewrite

This repo is a minimal reproduction of an odd https://nextjs.org/docs/messages/incompatible-href-as error with a custom server rewrite.

```
Error: The provided `as` value (/) is incompatible with the `href` value (/customer/[[...slug]]). Read more: https://nextjs.org/docs/messages/incompatible-href-as
```

The key points of interest are:
- Have a Next app at stable v10.2.0 or above canary v10.1.4-canary.10
- Have a catch all route, e.g. `[[...slug]].js`
- Have rewrites configured in your next.config.js
- Have a url rewrite outside of the context of Next.js server

To run this reproduction you will need [docker cli installed](https://docs.docker.com/get-docker/).

Simply run `docker compose up` and once the server is active visit `localhost:8000`
