document.addEventListener("DOMContentLoaded", function () {
    const reviewsSection = document.getElementById("reviewsSection");
    const newReviewForm = document.getElementById("newReviewForm");
  
    // Function to generate review cards
    function generateReviewCards() {
      reviewsSection.innerHTML = ""; // Clear the existing review cards
  
      // Loop through review data and create a card for each review
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
  
    // Function to handle new review form submission
    newReviewForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent form submission
  
      // Get form values
      const nameInput = document.getElementById("name");
      const dateInput = document.getElementById("date");
      const ratingInput = document.getElementById("rating");
      const reviewTextInput = document.getElementById("reviewText");
  
      // Create a new review object
      const newReview = {
        name: nameInput.value,
        date: dateInput.value,
        rating: parseInt(ratingInput.value),
        reviewText: reviewTextInput.value,
      };
  
      // Add the new review to the reviewData array
      window.reviewData.push(newReview);
  
      // Clear the form fields
      nameInput.value = "";
      dateInput.value = "";
      ratingInput.value = "";
      reviewTextInput.value = "";
  
      // Regenerate the review cards with the new review added
      generateReviewCards();
    });
  
    // Generate initial review cards on page load
    generateReviewCards();
  });