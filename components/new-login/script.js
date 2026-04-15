// Create falling leaves
function createLeaves() {
  const leavesContainer = document.getElementById("leaves-container");
  const leafCount = 30;

  for (let i = 0; i < leafCount; i++) {
    const leaf = document.createElement("div");
    leaf.classList.add("leaf");

    // Random properties for each leaf
    const size = Math.random() * 15 + 10;
    const left = Math.random() * 100;
    const animationDuration = Math.random() * 10 + 5;
    const animationDelay = Math.random() * 5;
    const hue = Math.random() * 30 + 20; // Autumn colors

    leaf.style.width = `${size}px`;
    leaf.style.height = `${size}px`;
    leaf.style.left = `${left}vw`;
    leaf.style.animationDuration = `${animationDuration}s`;
    leaf.style.animationDelay = `${animationDelay}s`;
    leaf.style.background = `linear-gradient(45deg, hsl(${hue}, 100%, 50%), hsl(${
      hue - 10
    }, 100%, 40%))`;

    leavesContainer.appendChild(leaf);
  }
}

// Form submission
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = this.querySelector('input[type="text"]').value;
  const password = this.querySelector('input[type="password"]').value;

  // Simple validation
  if (username && password) {
    alert(`Welcome ${username}! Find Awesome projects on darkcssweb`);
    // In a real application, you would send this data to a server
  } else {
    alert("Please fill in all fields.");
  }
});

// Initialize the scene
window.onload = function () {
  createLeaves();
};
