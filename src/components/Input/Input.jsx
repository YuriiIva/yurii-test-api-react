import React from "react";

const Input = () => {
  return (
    <div class="container">
      <h2>Please, enter the date</h2>

      <form action="/action_page.php">
        <div class="form-group">
          <label for="title">Title:</label>
          <input
            type="text"
            class="form-control"
            id="title"
            name="title"
          ></input>
        </div>

        <div class="form-group">
          <label for="txt">Text:</label>
          <input type="text" class="form-control" id="txt" name="text"></input>
        </div>

        <div class="form-group">
          <label for="img">Img:</label>
          <input type="url" class="form-control" id="img" name="img"></input>
        </div>

        <div class="form-group">
          <label for="url">Url:</label>
          <input type="url" class="form-control" id="url" name="url"></input>
        </div>

        <div class="form-group">
          <label for="act">Active:</label>
          <input type="number" class="form-control" id="act" name="act"></input>
        </div>

        <div class="form-group">
          <label for="sort">Sort:</label>
          <input
            type="number"
            class="form-control"
            id="sort"
            name="sort"
          ></input>
        </div>
        <button type="submit" class="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};

export default Input;
