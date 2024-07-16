// In this exercise, you will use object oriented programming concepts
// to define and use a custom object in JavaScript.

// 1. Create a class named Video. The class should be constructed
// with the following parameters:
// - title (a string)
// - uploader (a string, the person who uploaded it)
// - time (a number, the duration of the video - in seconds)

// 2. Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”

class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`);
  }
}

// 3. Instantiate a new Video instance and call the watch() method.

const video1 = new Video('"The fifth element"', "Irina", 126);
video1.watch();

// 4. Instantiate a second Video instance with different values.

const video2 = new Video("A beautiful mind", "Anastasia", 135);

// 5. Bonus: Use an array to store data for five Video instances
// (ie. title, uploader, time).
// Think of the best data structure to save this information within the array.

const arrayVideos = [
  {
    title: "The fifth element",
    uploader: "Irina",
    time: 126,
  },
  {
    title: "A beautiful mind",
    uploader: "Anastasia",
    time: 135,
  },
  {
    title: "The departed",
    uploader: "Irina",
    time: 152,
  },
  {
    title: "In time",
    uploader: "Igor",
    time: 110,
  },
  {
    title: "Atlas",
    uploader: "Igor",
    time: 120,
  },
];

// 6. Bonus: Loop through the array to instantiate those instances.

const newArray = [];
arrayVideos.forEach((element) => {
  newArray.push(new Video(element.title, element.uploader, element.time));
});
console.log(newArray);
