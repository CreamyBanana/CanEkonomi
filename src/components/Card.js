import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Card.style.css";

const Card = props => {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="Logo Img" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">
          {props.text}
        </p>
        <a href={props.page} className="btn btn-outline-success">Läs mer</a>
      </div>
    </div>

  );

}

export default Card