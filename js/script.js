document.addEventListener("DOMContentLoaded", function () {
    const reviewsSection = document.getElementById("reviewsSection");
    const newReviewForm = document.getElementById("newReviewForm");
  
    function generateReviewCards() {
      reviewsSection.innerHTML = "";
  
      window.reviewData.forEach((review) => {
        const card = document.createElement("div");
        card.classList.add("reviewCard");
  
        const name = document.createElement("h3");
        name.textContent = review.name;
        card.appendChild(name);
  
        const date = document.createElement("p");
        date.textContent = review.date;
        card.appendChild(date);
  
        const rating = document.createElement("p");
        rating.textContent = "Rating: " + "★".repeat(review.rating) + "☆".repeat(5 - review.rating);
        card.appendChild(rating);
  
        const reviewText = document.createElement("p");
        reviewText.textContent = review.reviewText;
        card.appendChild(reviewText);
  
        reviewsSection.appendChild(card);
      });
    }
  
    newReviewForm.addEventListener("submit", function (e) {
      e.preventDefault(); 
  
   
      const nameInput = document.getElementById("name");
      const dateInput = document.getElementById("date");
      const ratingInput = document.getElementById("rating");
      const reviewTextInput = document.getElementById("reviewText");
  
      const newReview = {
        name: nameInput.value,
        date: dateInput.value,
        rating: parseInt(ratingInput.value),
        reviewText: reviewTextInput.value,
      };
  
      window.reviewData.push(newReview);
  
      nameInput.value = "";
      dateInput.value = "";
      ratingInput.value = "";
      reviewTextInput.value = "";
  
      generateReviewCards();
    });
  
    generateReviewCards();
  });