# BlogReact
In this opportunity, there is an application made with React. Using concepts such as components, hooks and props, the functionalities are based on the CRUD approach.

The navigation bar, the blog list, the blog details, the home page, the creation page, etc... All of them were created as independent components. Then, these are nested in the App.js file in order to make the application run effectively.

Hooks like useState, useEffect and useFetch are configured in order to integrate all the components by getting the data in real time.

For example, for a new blog there is a default list of authors to choose from. By clicking on "Create", the blog is added to the database and the application redirects to the home page with a list and updates the blogs with properties such as title and author.

The application can take a look at the details of a specific blog, thanks to the component created for this purpose. On this page, there is a Delete button that allows you to remove this blog from the database, followed by the update on the home page.

### Made with..

- Node.js
- React
- The database is configured with a JSON server
- To run the app:
  - Open two terminals
  - Run "npm start" at the first one
  - Run "npx json-server --watch data/db.json --port 8000" at second one
- For the browser: localhost:3000

> ---

> Following the path of the net ninjas. Thanks to Shaun-Sensei.

