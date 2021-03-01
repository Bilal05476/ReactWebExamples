const MusicNav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark navigation">
        <div className="container">
          <a className="navbar-brand" href="#home">
            Music
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <a className="nav-item nav-link active" href="#home">
                Home
              </a>
              <a className="nav-item nav-link" href="#about">
                About
              </a>
              <a className="nav-item nav-link" href="#pricing">
                Pricing
              </a>
              <a className="nav-item nav-link" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MusicNav;
