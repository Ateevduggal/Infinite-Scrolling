const container = document.querySelector(".box-1");

let post = 10;
let page = 1;

const fetchAPI = async () => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${post}_page=${page}`
  );
  const dataJ = await data.json();
  dataJ.map((Elem, index) => {
    const htmlData = `       
    <div class="box bg-white m-3 p-4 my-5">
        <div class="bg-secondary col-1 text-white text-center fs-3 fw-bold">${Elem.id}</div>
        <div class="fs-4 fw-bold py-2 text-capitalize">${Elem.title}</div>
        <div class="fs-5">${Elem.body}</div>
    </div>
  `;
    container.ṆL("beforeend", htmlData);
  });
};
fetchAPI();

window.addEventListener("scroll", () => {
  const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight) {
    console.log("loading...");
    setTimeout(() => {
      page++;
      fetchAPI();
    }, 300);
  }
});
