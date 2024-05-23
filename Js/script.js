const button = document.querySelector(".print");
const paragraph = document.querySelector("p");
function printEvenNumbers() {
    for (let i = 0; i <= 10; i += 2) {
      console.log(i);
      return i;
    }
    return printEvenNumbers;
  }
  printEvenNumbers();
  button.addEventListener("click", function(){
    paragraph.innerHTML=printEvenNumbers();
  })
  printEvenNumbers();