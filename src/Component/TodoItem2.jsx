function TodoItem2() {
  let todogo = "Go to college";
  let tododate = "4/10/2023";
  return (
    <div className="container ">
      <div className="row kg-row">
        <div className="col-6">{todogo}</div>
        <div className="col-4">{tododate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
