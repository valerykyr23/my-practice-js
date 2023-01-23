
// // создаем функцию феча

// async function getData() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await response.json();
//   return data;
// }



//         let myQuery = "";
//         let currentPage = 1;
//         let rows = 10;


// async function fetchPicsPixabay() {
//   const API_KEY = "32855803-d56bfd48c48aac08c2ef5d962";
//   const BASE_URL = "https://pixabay.com/api";
//   const FULL_URL = `${BASE_URL}/?key=${API_KEY}&q=${myQuery}&image_type="photo"&orientation="horizontal"&safesearch=true&page=${currentPage}&per_page=${rows}`


//   const response = await fetch(FULL_URL);
//   const data = await response.json();
//   return data;
// }


// const input = document.querySelector("input");
// const form = document.querySelector(".search-form");
// const gallery = document.querySelector(".gallery");



// form.addEventListener("submit", onSearch);


// async function onSearch(event) {

//   event.preventDefault();
//   myQuery = event.currentTarget.elements.searchQuery.value;
//   console.log(myQuery);
  
//   let recievedData = await fetchPicsPixabay();
  
// function createGallerySkelleton(arrData, rowPerPage, page) {

//   // gallery.innerHTML = "";
//   // page--;


//   const start = rowPerPage * page;
//     const end = start + rowPerPage;
//   // const paginatedData = arrData.slice(start, end);
  
//   const markup = arrData.map(el =>
    

//     `<div class="general-photo-card-container">
    
  
//         <a class="gallery-img-link" href="${el.largeImageURL}">
        
//           <img
//             class="gallery-image"
//             src="${el.webformatURL}"
//             alt="${el.tags}"
//             loading="lazy"
//         />
        
//         </a>
        
//         <div class="img-general-info-container">
//           <p><b>Likes</b><br>${el.likes}</br></p>
//           <p><b>Views</b><br>${el.views}</br></p>
//           <p><b>Comments</b><br>${el.comments}</br></p>
//           <p><b>Downloads</b><br>${el.downloads}</br></p>
//         </div>
//       </div>` ).join("");
  
   
//   gallery.insertAdjacentHTML("beforeend", markup);
//   }
  

  
// function displayMyPagination(arrData, rowPerPage) {
//   const paginationOnPage = document.querySelector("pagination");
//   const pagesCount = Math.ceil(arrData.length / rowPerPage);
//   const ulEl = document.createElement("ul");

//   ulEl.classList.add('pagination__list');
//   for (let i = 0; i < pagesCount; i++) {
//       const liEl = createGallerySkelleton(i + 1);
//       ulEl.appendChild(liEl)
//     }
//   paginationOnPage.appendChild(ulEl)
//  }


// function showPaginationBtn(page) {
//   const liEl = document.createElement("li");
//     liEl.classList.add('pagination__item')
//   liEl.innerText = page;
//   if (currentPage == page) liEl.classList.add('pagination__item--active');

//     liEl.addEventListener('click', () => {
//       currentPage = page
//       createGallerySkelleton(recievedData, rows, currentPage)

//       let currentItemLi = document.querySelector('li.pagination__item--active');
//       currentItemLi.classList.remove('pagination__item--active');

//       liEl.classList.add('pagination__item--active');
//     })

//     return liEl;
// }



//    createGallerySkelleton(recievedData, rows, currentPage);
//   showPaginationBtn(recievedData, rows);
// }








// async function main() {
//   const postsData = await getData();
//   let currentPage = 1;
//   let rows = 10;

//   function displayList(arrData, rowPerPage, page) {
//     const postsEl = document.querySelector('.posts');
//     postsEl.innerHTML = "";
//     page--;

//     const start = rowPerPage * page;
//     const end = start + rowPerPage;
//     const paginatedData = arrData.slice(start, end);

//     paginatedData.forEach((el) => {
//       const postEl = document.createElement("div");
//       postEl.classList.add("post");
//       postEl.innerText = `${el.title}`;
//       postsEl.appendChild(postEl);
//     })
//   }

//   function displayPagination(arrData, rowPerPage) {
//     const paginationEl = document.querySelector('.pagination');
//     const pagesCount = Math.ceil(arrData.length / rowPerPage);
//     const ulEl = document.createElement("ul");
//     ulEl.classList.add('pagination__list');

//     for (let i = 0; i < pagesCount; i++) {
//       const liEl = displayPaginationBtn(i + 1);
//       ulEl.appendChild(liEl)
//     }
//     paginationEl.appendChild(ulEl)
//   }

//   function displayPaginationBtn(page) {
//     const liEl = document.createElement("li");
//     liEl.classList.add('pagination__item')
//     liEl.innerText = page

//     if (currentPage == page) liEl.classList.add('pagination__item--active');

//     liEl.addEventListener('click', () => {
//       currentPage = page
//       displayList(postsData, rows, currentPage)

//       let currentItemLi = document.querySelector('li.pagination__item--active');
//       currentItemLi.classList.remove('pagination__item--active');

//       liEl.classList.add('pagination__item--active');
//     })

//     return liEl;
//   }

//   displayList(postsData, rows, currentPage);
//   displayPagination(postsData, rows);
// }

// main();
