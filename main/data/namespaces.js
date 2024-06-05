const Namespace = require("../classes/Namespace");
const Room = require("../classes/Room");

const Java = new Namespace(0, "Java", "/assets/Java-logo.jpeg", "/Java");
const NextJS = new Namespace(1, "NextJS", "/assets/Next-logo.webp", "/NextJS");
const Android = new Namespace(
  2,
  "Android",
  "/assets/Android-logo.png",
  "/Android"
);

Java.addRoom(new Room(0, "Discussion", 0, true));
Java.addRoom(new Room(1, "Reviews", 0));
Java.addRoom(new Room(2, "chit-chat", 0));

NextJS.addRoom(new Room(0, "Discussion", 1));
NextJS.addRoom(new Room(1, "Reviews", 1));
NextJS.addRoom(new Room(2, "chit-chat", 1));
NextJS.addRoom(new Room(3, "Learn", 1));

Android.addRoom(new Room(0, "Discussion", 2));
Android.addRoom(new Room(1, "Reviews", 2));
Android.addRoom(new Room(2, "chit-chat", 2));
Android.addRoom(new Room(3, "Learn", 2, true));

const namespaces = [Java, NextJS, Android];
module.exports = namespaces;
