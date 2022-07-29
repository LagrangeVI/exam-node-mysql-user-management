# CRUD REST API using Express, MySQL

<h2>To run project:</h2>

0. Setup database configurations. On MySQL,create a database named ```user_management```. Change credentials based on your created MySQL account.

1. Run `npm install` to install dependencies.

2. Run `npm run init-start` to setup database and seed with test data.

3. Wait for server to start.

4. Run `npm run test` to run script consuming API endpoints

<h2>To reset after test:</h2>

1. Run `npm run migrate-undo` to drop users table and data in it. 

2. Run `npm run init-start` to setup database and seed with test data.


<h2>USER data:</h2>

`first_name` 
type: STRING,
Required: true,

`last_name` 
type: STRING,
Required: true,

`address` 
type: STRING,

`post_code` 
type: STRING,

`contact_number` 
type: STRING,

`email`
type: STRING,

`username`
type: STRING,
unique: true,

`password`
type: STRING,


<h2>Available endpoints:</h2>

`GET /getAllUsers` Gets all users

`POST /createUser` Create a user

`GET /getUserByID/:id` Get a user with a given id

`PUT /editUser/:id` Update a user using a given id

`DELETE /deleteUser/:id` Delete a user based on a given id

`DELETE /users/delete` Delete multiple users based on an array of ids

Example`{id: [1,2,3,n]}`
