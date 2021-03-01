const CData = (props) => {
  return (
    <div className="col-sm-4">
      <div className="card bg-dark text-light">
        <div className="card-body">
          <h5
            className="card-title"
            style={{ fontWeight: "700", fontSize: "25px" }}
          >
            {props.num}
          </h5>
          <p
            className="card-text text-center my-5"
            style={{ fontWeight: "900", fontSize: "25px" }}
          >
            {props.text}
          </p>
        </div>
      </div>
      <br />
      <small>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
        quasi aliquid nesciunt expedita enim sed rerum id, quae placeat.
      </small>
    </div>
  );
};

export default CData;
