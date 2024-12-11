console.log("hello world");

const buttonEle = document.querySelector(".clickMe") as HTMLButtonElement;
const bodyElem = document.body;
let isWhite: boolean = false;
buttonEle.addEventListener("click", (): void => {
  console.log("I am clicked");

  if (isWhite) {
    bodyElem.style.backgroundColor = "";
  } else {
    bodyElem.style.backgroundColor = "#cedebd";
  }
  isWhite = !isWhite;
});
