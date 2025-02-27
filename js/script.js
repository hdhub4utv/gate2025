document.addEventListener("DOMContentLoaded", function() {
  console.log("Gate 2025 website loaded successfully.");

  // GATE 2025 Rank Predictor Tool
  document.getElementById("rankForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let marks = parseFloat(document.getElementById("marksInput").value);
    if (isNaN(marks) || marks < 0 || marks > 100) {
      document.getElementById("rankResult").innerHTML = "<p>Please enter a valid marks value between 0 and 100.</p>";
      return;
    }
    // Dummy formula for rank prediction (for demonstration only)
    let estimatedRank = Math.max(1, Math.round(100000 - (marks * 1000)));
    document.getElementById("rankResult").innerHTML = `<p>Based on your marks, your estimated rank is <strong>${estimatedRank}</strong>.</p>`;
  });

  // Enhanced GATE 2025 Answer Key Tool with Fetch API
  document.getElementById("answerKeyForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let subject = document.getElementById("subjectSelect").value;
    if (!subject) {
      document.getElementById("answerKeyResult").innerHTML = "<p>Please select a subject.</p>";
      return;
    }

    // Placeholder API endpoint – replace with the official endpoint once available
    let apiEndpoint = `https://api.example.com/gate2025/answer-key?subject=${subject}`;
    
    // Inform the user that data is being fetched
    document.getElementById("answerKeyResult").innerHTML = "<p>Loading answer key...</p>";

    fetch(apiEndpoint)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        if (data && data.length > 0) {
          let resultHtml = "<table><thead><tr><th>Question</th><th>Answer</th></tr></thead><tbody>";
          data.forEach(item => {
            resultHtml += `<tr><td>${item.question}</td><td>${item.answer}</td></tr>`;
          });
          resultHtml += "</tbody></table>";
          document.getElementById("answerKeyResult").innerHTML = resultHtml;
        } else {
          document.getElementById("answerKeyResult").innerHTML = "<p>No answer key data available yet. Please check back later.</p>";
        }
      })
      .catch(error => {
        console.error("Error fetching answer key:", error);
        document.getElementById("answerKeyResult").innerHTML = "<p>There was an error fetching the answer key. Please try again later.</p>";
      });
  });

  // Read More toggle functionality in About GATE section
  document.getElementById("readMoreBtn").addEventListener("click", function() {
    const moreContent = document.getElementById("moreAbout");
    if (moreContent.style.display === "none" || moreContent.style.display === "") {
      moreContent.style.display = "block";
      this.textContent = "Read Less";
    } else {
      moreContent.style.display = "none";
      this.textContent = "Read More";
    }
  });
});
