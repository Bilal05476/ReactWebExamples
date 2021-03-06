import MusicNav from "./MusicNav";
import JumboWeb from "./JumboWeb";
import Cards from "./Cards";

const MusicWeb = () => {
  return (
    <>
      <div className="container-fluid secondary__nav">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center secondary">
              <h6 className="announce">Announcement</h6>
              <h6 className="respond">How we're responding to COVID-19</h6>
            </div>
          </div>
        </div>
      </div>
      <MusicNav />
      <JumboWeb />
      <Cards />
    </>
  );
};

export default MusicWeb;
