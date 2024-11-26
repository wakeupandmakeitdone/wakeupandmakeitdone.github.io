// ...existing code...
console.log("JavaScript is working!");

document.getElementById("read-more-btn").addEventListener("click", function() {
    var content = document.getElementById("read-more-content");
    content.style.display = "block";
    this.style.display = "none"; // Hide the "Read More" link after clicking
});
// ...existing code...