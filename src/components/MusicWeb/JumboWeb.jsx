const JumboWeb = () => {
  return (
    <div className="jumbotron text-light">
      <div className="container">
        <h1 className="display-4">Serving you since 1989!</h1>

        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          nobis accusamus cumque perspiciatis <br /> veniam consequatur
          molestiae autem amet deserunt quae?
        </p>
        <p className="lead">
          <a
            className="btn btn-light btn-md jumboBtn"
            href="#home"
            role="button"
          >
            Learn more
          </a>
        </p>
      </div>
    </div>
  );
};

export default JumboWeb;
