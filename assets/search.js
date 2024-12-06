window.onload = function () {
  const location = window.location.href;
  const url = new URL(location);
  // console.log(location)
  // console.log(url)
  const search_Params = new URLSearchParams(url.search);
  // console.log(search_Params)



  if(!search_Params.has('q') || search_Params.get('q') == "") {
    window.location.href = '../';
  }

  fetch(
    `https://api.unsplash.com/search/photos?per_page=25&query=${search_Params.get('q')}&client_id=${API_KEY}`)
    .then(convert_to_json)
    .then(function (data) {
      console.log(data[0] +"search");
      generateCards(data.results);


      document.getElementsByName('q')[0].value = search_Params.get('q');
      document.getElementById('search_query').innerText = search_Params.get('q');
    });


};
function generateCards(data) {
   // console.log(data); // check for data

   const container = document.getElementById("result_container");

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
 