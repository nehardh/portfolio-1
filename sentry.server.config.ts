// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://df8143c539423a6ca42bd33bba8164df@o4508614754566144.ingest.us.sentry.io/4508614759088128",

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,
  environment: process.env.NODE_ENV || "development",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
