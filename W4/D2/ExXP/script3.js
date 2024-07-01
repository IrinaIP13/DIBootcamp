// 1. Create a self invoking function that takes 4 arguments: number of children,
// partner’s name, geographic location, job title.
// 2. The function should display in the DOM a sentence like
// "You will be a <job title> in <geographic location>,
// and married to <partner's name> with <number of children> kids."

(function (numChild, partner, loc, jobTitle) {
  const text = document.createElement("p");
  text.innerHTML = `You will be a ${jobTitle} in ${loc}, and married to ${partner} with ${numChild} kids.`;
  document.body.appendChild(text);
})("4", "Igor", "Israel", "web developer");
