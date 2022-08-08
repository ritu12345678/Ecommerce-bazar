import React from "react";
import comment from "../Assets/Image/comment.png";

const ReviewCard = ({ data }) => {
  console.log(data.rating);
  const newarr = Array(data.rating).fill(data.rating);
  console.log(newarr);
  let blankstar;
  let blankstararr = [];
  // console.log(newarr)
  if (data.rating <= 5) {
    blankstar = 5 - data.rating;
    blankstararr = Array(blankstar).fill(blankstar);
  }
  // console.log("blan", blankstararr)
  return (
    <>
      <div>
        <div className="review-card-wrap">
          <div className="review-card">
            <div className="prof-img">
              <span>
                <img
                  src="https://inszn-ecom.s3.amazonaws.com/91de0681-ede1-4ce2-8f30-d823eb338ddb.jpg"
                  alt="Customer man"
                />
              </span>
              <span className="prof-name">{data.name}</span>
            </div>
            <div className="review-content">{data.review_comment}</div>
            <div className="test-ico">
              <img src={comment} alt="img" />
            </div>
            <ul className="ratings">
              {newarr.map((item, index) => {
                return (
                  <li className="fill" key={index}>
                    <i className="fas fa-star"></i>
                  </li>
                );
              })}
              {blankstararr.map((item, index) => {
                return (
                  <li key={index}>
                    <i className="far fa-star"></i>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
