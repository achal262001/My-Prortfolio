// import { name } from "./a.js";
// name();

const colorGene = () => {
  const randomNum = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + randomNum.toString(16);
  // console.log(randomCode);
  document.body.style.backgroundColor = randomCode;
  document.getElementById("color-code").innerHTML = randomCode;
  // document.body.style.
};

document.getElementById("btn").addEventListener("click", colorGene);

colorGene();
