window.onload = function () {
  document.addEventListener('click', documentActions);

  function documentActions(e) {
    const targetElement = e.target;

    if (targetElement.classList.contains('gallery__button')) {
      getProducts(targetElement);
      e.preventDefault();
    }
  }
}

async function getProducts(button) {
  const file = 'json/cards.json'

  let responce = await fetch(file, {
    method: "GET"
  });

  if (responce.ok) {
    let result = await responce.json();
    loadProducts(result);
    button.remove();
  } else {
    alert('Erorr');
  }
};

function loadProducts(data) {
  const masonry = document.querySelector('.masonry');

  data.cards.forEach(card => {
    const img = card.image;

    let template = `
    <li class="masonry__item">
    <a href="portfolio-item.html">
      <img src="${img}" width="360" height="350" alt="cosmetic-1">
    </a>
    <div class="masonry__cover">
      <a href="portfolio-item.html" class="masonry__link"></a>
    </div>
    </li>
    `
    masonry.insertAdjacentHTML('beforeend', template);
  });
};
