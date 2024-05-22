### Initializing the project

This is a simple map project where fake user data and location are imported through faker package. Every time browser refreshes new random data will be displayed or marked on the map"

1. Install TypeScript and ts-node globally to enable TypeScript support in Node.js.

   npm install -g typescript ts-node

2. Install Parcel, a web application bundler, globally to enable bundling and minification of web assets.
   npm install -g parcel-bundler

3. Use Parcel to bundle and serve the index.html file, automatically installing any required dependencies and starting a development server.
   npx parcel index.html

4. Install the @faker-js/faker package, which provides a library for generating fake data for testing and development purposes.
   npm install --save-dev @faker-js/faker

5. Install the type definitions for the @types/google.maps package, which provides TypeScript type definitions for the Google Maps JavaScript API. This allows you to use the Google Maps API in a TypeScript project with type checking and autocompletion.
   npm install --save-dev @types/google.maps
