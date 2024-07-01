// John has just signed in to your website and you want to welcome him.

// 1. Create a Bootstrap Navbar in your HTML file.
// 2. In your js file, create a self invoking funtion that takes 1 argument:
// the name of the user that just signed in.
// 3. The function should add a div in the nabvar, displaying the name
// of the user and his profile picture.

(function (name) {
  const div = document.createElement("div");
  div.innerHTML =
    `<span style="font-size: 1.8em;">${name}</span>` +
    `<img src="https://picsum.photos/50" style="padding-right: 30px; padding-left: 30px">`;

  const classNavbar = document.querySelector(".navbar");
  classNavbar.appendChild(div);
})("Irina");
