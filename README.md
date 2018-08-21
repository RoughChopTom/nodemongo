# Tax Calculator

This is a Single Page App consuming a Webservice via a REST API and storing data in a database, allowing users to calculate a simple tax amount estimation
from a given income and a tax rates year, then save them under their profile.

## To Run
* Backend
    * Ensure NodeJs, NPM, and @angular/cli are installed globally on your machine
    * cd to 'api' and run 'npm install', then run 'node server.js'
    * ./api/config/config.development.json has the configurations for this api. The mongo database used is my own atlas instance (cloud based). This should work but if not, you can change this setting to your own mongo db if you so choose to.

* Frontend
    * cd to 'tax-app' and run 'npm install', then run 'npm start'. The client Angular application is served on port 4200 via webpack (ng serve)
and I have made it use a proxy config in order to do cross origin requests to the api (on port 4000).
    * In your browser, navigate to localhost:4200, enjoy :)

