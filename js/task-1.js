const listItem = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${listItem.length}`);

listItem.forEach(category => {
    const title = category.querySelector("h2").textContent;
    const elementsCount = category.querySelectorAll("ul li").length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${elementsCount}`);
    });


