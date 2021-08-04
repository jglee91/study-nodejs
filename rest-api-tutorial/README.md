# Build a REST API with Node.js, Mongoose & TypeScript

<br/>

## Who is this tutorial for?
- Junior to mid-level developers
- Anyone interested in build REST APIs with TypeScript

## Why?
- REST APIs are the simple of web development industry
- Knowing how REST APIs is important for both back and frontend developers
- There is no better why to understand how they work than to build one

## Concepts
- REST API principals
  - CURD
  - HTTP methods
  - What REST is and is not
- JWT & refresh tokens

## Technologies
- Node js
- MongoDB with Mongoose
- TypeScript
- Express && express middleware

## Video Structure
1. What are we going to build
2. Bootstrap application
3. Build out registration
4. Build out post CRUD operations

## Set up
```bash
# install yarn globally
$ yarn init

# create typescript config
$ npx tsc --init

# install dependencies
$ yarn add express yup config cors express mongoose pino pino-pretty dayjs bcrypt jsonwebtoken lodash nanoid
$ yarn add @types/body-parser @types/config @types/cors @types/express @types/node @types/yup @types/pino @types/mongoose @types/bcrypt @types/jsonwebtoken @types/lodash @types/nanoid ts-node typescript nodemon -D

$ yarn dev
```