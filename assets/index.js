window.onload = function () {
  fetch(`https://api.unsplash.com/photos?per_page=25&client_id=${API_KEY}`)
    .then(convert_to_json)
    .then(function (data) { 
      generateCards(data);
    });
};

//getting data
function generateCards(data) {
  // console.log(data); // check for data

  const container = document.getElementById("image_container");

  for (let i = 0; i < data.length; i++) {
    const single_itme = data[i];
    const card = document.createElement("div");
    const anchor = document.createElement("a");
    const img = document.createElement("img");

    card.classList.add("item");
    anchor.href = `../detail.html?id=${single_itme.id}`;
    card.style.backgroundColor = single_itme.color;
    img.src = single_itme.urls.thumb;

    anchor.appendChild(img);
    card.appendChild(anchor);
    container.appendChild(card);
  }
}
