// Define an array of video URLs
const videos = [
    "https://www.youtube.com/watch?v=ChBg4aowzX8&ab_channel=CoolingHeart",
    // Add more videos here...
  ];
  
  // Get the generate button and video container elements
  const generateBtn = document.getElementById("generate-btn");
  const videoContainer = document.getElementById("video-container");
  
  // Add a click event listener to the generate button
  generateBtn.addEventListener("click", () => {
    // Generate a random video URL from the array
    const randomIndex = Math.floor(Math.random() * videos.length);
    const videoUrl = videos[randomIndex];
    
    // Create an element to display the video
    const videoIframe = document.createElement("iframe");
    videoIframe.src = videoUrl;
    
    // Clear any existing videos from the container
    videoContainer.innerHTML = "";
    
    // Add the iframe element to the container and show it
    videoContainer.appendChild(videoIframe);
    videoContainer.style.display = "block";
  });
  