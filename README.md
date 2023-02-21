### Backend setup

1. Fork and clone this repo
2. CD into directory
3. touch your repo with an .env
4. Add these variables as listed below:
   PORT=the value can be any port between 3000-9000
   PG_HOST=localhost
   PG_PORT=5432
   PG_DATABASE=postgres
   5.npm install these packages:
   cors(to allow your frontend to access your backend app)
   dotenv(to store .env file configuration in files like our server.js)
   express (it provides mechanisms to: Write handlers for requests with different HTTP verbs at different URL paths (routes))
   6.run the npm run db:init command for the initialization of a new database and to create tables
   7.run the npm run db:seed for the seeding of the table(s) with data
   8.npm install pg-promise in order to connect your Postrgres data base in express
   9.run the nodemon command to run PORT assigned in the server
   10.visit your localhost (same as your PORT) in the browser to see your app running and listing out data
