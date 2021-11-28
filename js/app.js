document.addEventListener('DOMContentLoaded', () => {

    const newItemform = document.querySelector('#new-experience-form');
    newItemform.addEventListener('submit', handleNewItem);
  
    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAll);
})

const handleNewItem = function (e) {

    e.preventDefault();
  
    const bucketListItem = createBucketListItem(e.target);
    const bucketList = document.querySelector('#bucket-list');
    bucketList.appendChild(bucketListItem);
  
    e.target.reset();
};
  
const createBucketListItem = function (form) {

    const bucketListItem = document.createElement('li');
    bucketListItem.classList.add('bucket-list-item');
  
    const animal = document.createElement('h2');
    animal.textContent = form.animal.value;
    bucketListItem.appendChild(animal);
  
    const country = document.createElement('p');
    country.textContent = form.country.value;
    bucketListItem.appendChild(country);
  
    const continent = document.createElement('p');
    continent.textContent = form.continent.value;
    bucketListItem.appendChild(continent);
  
    return bucketListItem;
};

const handleDeleteAll = function (e) {

    const bucketList = document.querySelector("#bucket-list");
    bucketList.innerHTML = "";
};