import React from "react";

// About ...

export default () => {
  return (
    <div>
      <h1 className="display-4">About Contact Manager</h1>
      <p className="lead">
        Simple interface to demonstrate CRUD functionality.
      </p>
      <p>Uses the context api to manage state.</p>
      <p className="text">
        Uses the https://jsonplaceholder.typicode.com API for data.
      </p>
      <p>
        Persistent data is not allowed by this api. Any locally added contact
        will disappear once the browser is refreshed and the page is reloaded.
        Any user that is added locally will not be editable, because it is not
        part of the data being returned by the api.
      </p>

      <p>
        Run npm install to install all requirements and npm start to start the
        sever locally.
      </p>
    </div>
  );
};
