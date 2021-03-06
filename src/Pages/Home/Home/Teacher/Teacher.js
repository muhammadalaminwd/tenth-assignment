import React from "react";

const Teacher = ({ teacher }) => {
  const { name, img, aboutme } = teacher;
  return (
    <div className="g-5 gx-5 col-sm-12 col-md-6 col-lg-4">
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
           {aboutme}
          </p>
          <a href="https://www.facebook.com/muhammad.alamin.web/" className="btn">
            My CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
