//array of object
//const imgData = (arr) => arr.map((item) => item["url"]);
const imgData = (arr) => arr.map(item=> `<img src="${item.url}" alt="$(item.title}"/>`);

console.log(
    (imgData([
        {url: "google.com", title: "Google" },
        {url: "pickupBiz", title: "pickupBiz" },
        {url: "gmail.com", title: "Gmail" },
        {url: "amazon.com", title: "Amazon" },
        
    ]))
);
