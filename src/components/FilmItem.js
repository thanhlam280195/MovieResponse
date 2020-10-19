import React from "react";
import { Link } from "react-router-dom";

function FilmsContainer(props) {
  return (
    <div className="col-lg-3 col-md-6 mb-r">
      <div className="card text-center card-cascade narrower">
        <div className="view overlay hm-white-slight z-depth-1">
          <img src={props.image} className="img-fluid" alt="ten phim" />
          <div className="mask waves-light waves-effect waves-light"></div>
        </div>
        <div className="card-body">
          <div className="card-footer">
            <span className="right">
              <Link
                className="btn-floating blue-gradient"
                to={`/film/${props.id}`}
              >
                <i className="fa fa-info" />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FilmsContainer;
