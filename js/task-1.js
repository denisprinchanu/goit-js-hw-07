
const items = document.querySelectorAll('li.item');
    console.log(`Number of categories: ${items.length}`);
  

    items.forEach(item => {
        showCategoryInfo(item);
    });
    function showCategoryInfo(category) {
        const categoryTitle = category.querySelector('h2').textContent;
        const categoryElementsCount = category.querySelectorAll('li').length;
        console.log(`category: ${categoryTitle}`);
        console.log(`elements: ${categoryElementsCount}`);
       
    }