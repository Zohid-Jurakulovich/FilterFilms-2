var elList = document.querySelector(".list");
const elBookmarkList = document.querySelector(".bookmark-list");

for(var film of films){
  
  var newItem = document.createElement("li");
  var newHeading = document.createElement("h3");
  var newImg = document.createElement("img");
  var newText = document.createElement("p");
  
  
  let newBookmarkBtn = document.createElement("button");
  // console.log(newBookmarkBtn);
  
  // var newTime = document.createElement("time");
  // var newSubList = document.createElement("ul");
  
  
  // for(var genre of film.genres){
  //  var newSubItem = document.createElement("li");
  //  newSubItem.textContent = genre;
  
  //  newSubList.appendChild(newSubItem);
  
  // }
  
  
  newHeading.textContent = film.title;
  newText.textContent = film.overview.split(" ").slice(0,20).join(" ") + " ...";
  newBookmarkBtn.textContent = "BookMark"
  // newTime.textContent = formatDate(film.release_date);
  
  
  newItem.setAttribute("class", "list__item");
  newImg.setAttribute("src", film.poster);
  newImg.setAttribute("class", "list__img");
  newBookmarkBtn.setAttribute("class", "bookmark-button")
  newBookmarkBtn.dataset.filmId = film.id;
  
  
  
  
  
  newItem.appendChild(newImg);
  newItem.appendChild(newHeading);
  newItem.appendChild(newText);
  newItem.appendChild(newBookmarkBtn)
  // newItem.appendChild(newTime);
  // newItem.appendChild(newSubList);
  
  
  elList.appendChild(newItem);
  
}
let bookMarks = [];

elList.addEventListener("click", evt =>{
  
  if(evt.target.matches(".bookmark-button")){
    const bookmarkBtnid = evt.target.dataset.filmId;
    // console.log(bookmarkBtnid);
    
    const findFilms = films.find(e => e.id === bookmarkBtnid);
    
    console.log(findFilms);
    
    
    if(!bookMarks.includes(findFilms)){
      bookMarks.push(findFilms)
    }
    
    
    
  };
  
  
  renderBookmarks(bookMarks, elBookmarkList)  
  
  
  
  // console.log(bookMarks);
  
  
  
})

elBookmarkList.addEventListener("click", evt =>{
  if(evt.target.matches(".bookmark-remove-btn")){
    let btnRemoveId = evt.target.dataset.dataRemoveId;
    let findArray = bookMarks.findIndex(films => films.id == btnRemoveId);
    
    bookMarks.splice(findArray, 1);
    
    renderBookmarks(bookMarks, elBookmarkList);
  }
})


function renderBookmarks(arr, element) {
  element.innerHTML = ""  ;
  arr.forEach(e => {
    
    let bookmarkItem = document.createElement("li"); 
    let bookmarkTitle =document.createElement("p");
    let bookmarkRemoveBtn = document.createElement("button");
    
    
    
    
    bookmarkTitle.textContent = e.title;
    bookmarkRemoveBtn.textContent = "Remove";
    bookmarkRemoveBtn.dataset.dataRemoveId = e.id;
    
    bookmarkItem.classList.add("bookmark-item");
    bookmarkTitle.classList.add("bookmark-title")
    bookmarkRemoveBtn.setAttribute("class", "bookmark-remove-btn");
    
    bookmarkItem.appendChild(bookmarkTitle)
    bookmarkItem.appendChild(bookmarkRemoveBtn);
    element.appendChild(bookmarkItem);
    // element.appendChild(bookmarkRemoveBtn);
  });
}

// console.log(renderBookmarks);