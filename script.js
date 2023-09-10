const showMoreText = document.querySelector(".show-more");
const readMoreBtn = document.querySelector(".read-more-btn");
const showDots = document.querySelector(".show-more-dots");
let isExpanded = false;
document.querySelector(".read-more-btn").addEventListener('click',function(){
    isExpanded = !isExpanded;
    if(isExpanded){
        showMoreText.style.display = "inline";
        readMoreBtn.textContent = "read less";
        showDots.style.display = "none";
        readMoreBtn.classList.add("read-more-btn-content");
    }
    else{
        showMoreText.style.display = "none";
        readMoreBtn.textContent = "read more";
        showDots.style.display = "inline";
        readMoreBtn.classList.remove("read-more-btn-content");
    }
})