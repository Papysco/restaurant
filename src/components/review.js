import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/reviews.css";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3200/reviews"); 
      setReviews(response.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex =
        currentIndex === reviews.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex, reviews.length]);

  const currentReview = reviews[currentIndex];

  return (
    <div className="reviews">
      <h2 className="reviews_title">Reviews </h2>

      {currentReview && (
        <div key={currentReview.id} className="review-content">
          <h4 className="reviews-prenom">- {currentReview.prenom} -</h4>
          <p className="reviews-text">{currentReview.review}</p>
        </div>
      )}
    </div>
  );
};

export default Review;
