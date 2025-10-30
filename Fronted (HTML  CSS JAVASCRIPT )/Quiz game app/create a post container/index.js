// Define the post1 object with the given details.
let post1 = {
  id: 1,
  author: "John",
  content: "My first Post!",
  likes: 10,
  comments: ["Great post!", "Nice photo!"],
  image: "https://files.codingninjas.in/image2-28694.jpg",
};

// Function to render the post1 object on the screen.
function renderPosts() {
  // Get the container where the post will be added.
  const postsContainer = document.getElementById("posts");

  // Clear any existing content in the posts container.
  postsContainer.innerHTML = "";

  // Create a new div element for the post and set its class.
  const postDiv = document.createElement("div");
  postDiv.className = "post";

  // Create an h3 element for the author's name and set its text content.
  const authorElement = document.createElement("h3");
  authorElement.textContent = post1.author;

  // Create an img element for the post's image and set its source and alt text.
  const imgElement = document.createElement("img");
  imgElement.src = post1.image;
  imgElement.alt = "Post image";

  // Create a p element for the post's content and set its text content.
  const contentElement = document.createElement("p");
  contentElement.textContent = post1.content;

  // Create a button element for "Like" and set its text content.
  const likeButton = document.createElement("button");
  likeButton.textContent = "Like";

  // Create an input element for writing comments and set its type and placeholder.
  const commentInput = document.createElement("input");
  commentInput.type = "text";
  commentInput.placeholder = "Write a comment";

  // Create a button element for "Comment" and set its text content.
  const commentButton = document.createElement("button");
  commentButton.textContent = "Comment";

  // Create a div element for the post footer and set its class and text content.
  const postFooter = document.createElement("div");
  postFooter.className = "post-footer";
  postFooter.textContent = `Likes: ${post1.likes} Comments: ${post1.comments.length}`;

  // Create a div element for the comments container and set its class.
  // Initially, set its display style to 'none' to hide it.
  const commentsContainer = document.createElement("div");
  commentsContainer.className = "comments-container";
  commentsContainer.style.display = "none";

  // For each comment in the comments array, create a p element and append it to the comments container.
  post1.comments.forEach((comment) => {
    const commentElement = document.createElement("p");
    commentElement.textContent = comment;
    commentsContainer.appendChild(commentElement);
  });

  // Add a click event listener to the post footer to toggle comments visibility.
  postFooter.addEventListener("click", () => {
    if (commentsContainer.style.display === "none") {
      commentsContainer.style.display = "block";
    } else {
      commentsContainer.style.display = "none";
    }
  });

  // Append all created elements to the post container.
  postDiv.appendChild(authorElement);
  postDiv.appendChild(imgElement);
  postDiv.appendChild(contentElement);
  postDiv.appendChild(likeButton);
  postDiv.appendChild(commentInput);
  postDiv.appendChild(commentButton);
  postDiv.appendChild(postFooter);
  postDiv.appendChild(commentsContainer);

  // Append the post element to the posts container.
  postsContainer.appendChild(postDiv);
}

// Call the renderPosts function to display the post on the screen.
renderPosts();
