const likeButton = document.querySelector('#like-button');
const dislikeButton = document.querySelector('#dislike-button');

likeButton.addEventListener('click', (event) => {
  // likeButton.className.toggle("hide");
  console.log('DisLike')
});

dislikeButton.addEventListener('click', (event) => {
  // dislikeButton.className.toggle("hide");
  console.log('Like')
});

export { likeButton, dislikeButton };
