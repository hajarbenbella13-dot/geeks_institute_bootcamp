// 1- class Video
class Video {
    constructor(title, uploader, time) {
      this.title = title;
      this.uploader = uploader;
      this.time = time;
    }
 //2- method watch 
    watch() {
      console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
  }
  //3 - create 3 instances of the Video class
  // Première instance
const video1 = new Video("JavaScript Basics", "Alice", 120);
video1.watch();
// Output: "Alice watched all 120 seconds of JavaScript Basics!"

// Deuxième instance
const video2 = new Video("CSS Animations", "Bob", 90);
video2.watch();
// Output: "Bob watched all 90 seconds of CSS Animations!"
 //5- bonnus1
 const videosData = [
    { title: "JS Basics", uploader: "Alice", time: 120 },
    { title: "CSS Animations", uploader: "Bob", time: 90 },
    { title: "HTML Forms", uploader: "Charlie", time: 75 },
    { title: "React Intro", uploader: "Diana", time: 200 },
    { title: "Node.js Server", uploader: "Eve", time: 150 }
  ];
//6- bonnus2  
const videos = [];

for (let data of videosData) {
  const video = new Video(data.title, data.uploader, data.time);
  videos.push(video);
}

// Vérification
videos.forEach(v => v.watch());
