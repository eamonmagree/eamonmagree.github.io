function filterCategory(filterSelection, filterBy){
    let itemsToFilter = Array.from(document.getElementsByClassName("RecipeCardWrapper"));
    for(let listItem of itemsToFilter){
        if(listItem.dataset[filterSelection] === filterBy){
            listItem.style.display = "flex"; /* if the lsit item matches what we are looking for, set deisplay item to flex */
        } else {
            listItem.style.display = "none";
        }
    }
}
function filterAll(filterSelection, filterBy){ 
    let itemsToFilter = Array.from(document.getElementsByClassName("RecipeCardWrapper"));
    for(let listItem of itemsToFilter){
            listItem.style.display = "flex"; /* if the lsit item matches what we are looking for, set deisplay item to flex */
    }
}

