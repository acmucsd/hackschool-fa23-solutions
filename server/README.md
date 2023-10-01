# Hack School Fall 2023 - Part 4
Hi! This is for the Frontend/React workshop. We are going to be doing a Next.js frontend and a 
Node.js and Express.js backend. For the purposes of this workshop, please follow the steps shown below.

Initialize  a new Node.js project using npm (or yarn)

 ``` npm init -y ```

## Install dependencies 
Install Next.js and React 

```npm install next react react-dom ```

<!-- Install Express.js 

```npm install express```
  -->
(Optional) Install nodemon 

```npm install --save-dev nodemon```

## Creating the Frontend 

Within our project directory, we will now proceed to create a Next.js app. This can be achieved by running the following command:

```npx create-next-app frontend ```

**Answer the prompted questions as follows:**

Would you like to use TypeScript? No. 

Would you like to use ESLint? Yes.

Would you like to use Tailwind CSS? No.

Would you like to use `src/` directory? Yes. 

Would you like to use App Router? (recommended) No (since we are using an express backend). 

Would you like to customize the default import alias?  No 

---

Then, go into the frontend directory using:

```cd frontend```

Open up the next app using:

```npm run dev``` (or yarn dev)

---
In a Next.js application, the "public" directory is a special directory that is used to serve static assets. These static assets can include images, fonts, and other files that should be accessible directly by the client without going through the Next.js server.
**For simplicity, i am deleting the `public` directory for now.** 

To be able to use the Typing game component, we need the `react-typing-game-hook` and `axios`. These can be added using:

```npm i react-typing-game-hook axios```

----