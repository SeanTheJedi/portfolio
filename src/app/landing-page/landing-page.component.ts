import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  projectData = [
    {
      title: "Rental App",
      description: "This is an android application that allow users to find, post, shortlist and locate rental properties on a map",
      techStack: ["Kotlin", "Android", "Android Studio", "Google Maps API", "Firebase"],
      ghLink: "https://github.com/SeanTheJedi/rent_buddy"
    },
    {
      title: "Kordzi",
      description: "Kordzi is product created by Devnest provides a full paperless hospital management system which is designed to enhance the workflow of your hospital regardless of its size.",
      techStack: ["Kotlin", "Android", "Android Studio", "Google Maps API", "Firebase"],
      ghLink: "https://github.com/SeanTheJedi/rent_buddy"
    },
    {
      title: "Weather App",
      description: "This is an android application that allows user to view weather information based on the cities or location they enter",
      techStack: ["Kotlin", "Android", "Android Studio", "Retrifit"],
      ghLink: "https://github.com/SeanTheJedi/weather_app"
    },
    {
      title: "Books App",
      description: "This is an iOS app that manages a list of books",
      techStack: ["iOS", "Swift", "Xcode"],
      ghLink: "https://github.com/SeanTheJedi/weather_app"
    },
    {
      title: "Playlist Web App",
      description: "This is a web application that allows users to have a playlist and add songs to their playlist",
      techStack: ["HTML & CSS", "JavaScript", "NodeJS & Express", "Express Handlebars"],
      ghLink: "https://github.com/SeanTheJedi/playlist_web_app"
    },
    {
      title: "Power Usage App",
      description: "This is an android applicatio that lets user calculate their electricity power usage.",
      techStack: ["Kotlin", "Android", "Android Studio"],
      ghLink: "https://github.com/SeanTheJedi/power_usage_app"
    },
    
    {
      title: "Famished Backend Api",
      description: "This is a backend api for a local restaurant web solution",
      techStack: ["JavaScript", "NodeJS & Express", "Mongo DB", "Mongoose"],
      ghLink: "https://github.com/SeanTheJedi/weather_app"
    },
    {
      title: "Famished Frontend",
      description: "This is a frontend for a local restaurant web solution",
      techStack: ["Angular", "HTML & CSS", "Boostrap",],
      ghLink: "https://github.com/SeanTheJedi/famished-client"
    },

  ]

}
