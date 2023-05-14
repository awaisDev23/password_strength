const password = document.getElementById("password");
const background = document.querySelector(".background");

if (password) {
  password.addEventListener("input", (e) => {
    const input = e.target.value;
    const length = input.length;
    const blurValue = 20 - length * 2;
    const filter = (background.style.filter = `blur(${blurValue}px)`);
    console.log(filter);
  });
}
