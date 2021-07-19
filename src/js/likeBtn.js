const likeBtnCard = document.querySelector('.card__likes');
const likeBtnBlog = document.querySelector('.single-post__likes');

if (likeBtnCard) {
  let numberLikes = likeBtnCard.querySelector('.card__num-likes');

  likeBtnCard.addEventListener('click', (evt) => {
    evt.preventDefault();
    likeBtnCard.blur();

    if (likeBtnCard.classList.contains('card__likes--active')) {
      likeBtnCard.classList.remove('card__likes--active');
      numberLikes.textContent--;
    } else {
      likeBtnCard.classList.add('card__likes--active');
      numberLikes.textContent++;
    }
  });
}

if (likeBtnBlog) {
  let numberLikes = likeBtnBlog.querySelector('.single-post__num-likes');

  likeBtnBlog.addEventListener('click', (evt) => {
    evt.preventDefault();
    likeBtnBlog.blur();

    if (likeBtnBlog.classList.contains('single-post__likes--active')) {
      likeBtnBlog.classList.remove('single-post__likes--active');
      numberLikes.textContent--;
    } else {
      likeBtnBlog.classList.add('single-post__likes--active');
      numberLikes.textContent++;
    }
  });
}
