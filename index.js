//OBJECTS
//  Create a User object with properties like name, stepsWalked (an array of daily steps), and a method totalSteps() that calculates and returns the total number of steps walked. Add another method averageSteps() that returns the average steps per day.
//Pseudocode
// Create a User object with the name,stepsWalked(array)
//create method totalSteps that returns the sum of daily steps in the array by looping  using reduce method to add
//create method averageSteps that finds the average steps(dividetotal steps by the length)

const User = {
    name: "Joy",
    stepsWalked: [1750, 5000, 2000, 2050],
    totalSteps: function () {
        return this.stepsWalked.reduce((a, b) => a + b, 0);
    },
    averageSteps: function () {
        return this.totalSteps() / this.stepsWalked.length

    }
}
console.log(`Congratulations ${User.name} you have walked ${User.totalSteps()} this week`);
console.log(User.averageSteps());


//  Create a Car object with properties like model, mileage, and serviceHistory (an array of service dates). Add a method addService(date) to add a new service record, and lastServiceDate() to return the most recent service date.
//Pseudocode
//create  car object with the model, mileage and serviceHistory that holds an array of service  dates
//create method addService that pushes a new date into the system
//create method lastService that shows the most recent record
const Car = {
    model: "Mazda",
    mileage: "122000km",
    serviceHistory: ["2022-02-10", "2023-03-09", "2024-02-13"],
    addService: function (date) {
        this.serviceHistory.push(date);
        return this.serviceHistory
    },
    lastServiceDate: function () {
        return this.serviceHistory[this.serviceHistory.length - 1];
    }
}
Car.addService("2025-03-11");
console.log(`Car service record: ${Car.serviceHistory}`);
console.log(`Your next service date is ${Car.lastServiceDate()}`);

//  Create a Playlist object with a property songs (an array of song titles). Add methods addSong(title) to add a song, removeSong(title) to delete one, and listSongs() to log all songs currently in the playlist.
//Pseudocode
//Create playlist object with songs(array)
//create :addSongs(title)method which pushes new songs to the array(push)
//       removeSong(title)method which removes title(pop())
//       listsSongs() method that prints each song

const Playlist = {
    songs: ['Perfect Day', 'Yeshua', 'Ready', 'My Hallelujah'],
    addSongs: function (title) {
        this.songs.push(title);
        return this.songs
    },
    removeSong: function (title) {
        this.songs.pop();
        return this.songs
    },
    listSong: function () {
        return this.songs

    }
}
Playlist.addSongs('Show me');
console.log(`New song is: ${Playlist.songs}`);
console.log(`Removed:${Playlist.removeSong('Yeshua')}`);
console.log(Playlist.listSong());


//  Create a Course constructor with title, lessons (an array), and completedLessons (array). Add a method markComplete(lesson) that adds the lesson to completedLessons, and a method getProgress() that returns a string like "3 out of 5 lessons completed".
//Pseudocode
//Create a course constructor with title, lessons(array),completed Lessons(array)
//Add markComplete(lesson)method which adds to the completedLessons by using if, else
//GetProgress()method which returns X out of Y lessons completed by using the length of completedLessons and lessons
function Course(title, lessons, completedLessons) {
    this.title = title;
    this.lessons = lessons;
    this.completedLessons = completedLessons;
    this.markComplete = function (lesson) {
        if (this.lessons.includes(lesson) && !this.completedLessons.includes(lesson)) {
            this.completedLessons.push(lesson);
        }
        return this.completedLessons;
    }
    this.getProgress = function () {
        return (`${this.completedLessons.length} out of ${this.lessons.length} lessons completed`);
    }

};
const courses = new Course("Python", ["Introduction", "Variables", "Lists"], ["Variables", "Lists"]);
console.log(courses.markComplete("Introduction"));
console.log(courses.getProgress());


// Create a Recipe constructor with name, ingredients (array), and cookTime in minutes. Add a method displayRecipe() that logs the name and all ingredients in a readable list, and another method isQuickMeal() that returns true if cookTime is 30 minutes or less.
//Pseudocode
//create a recipe constructor and added name,ingredients(array) and cookTime in minutes.
//created two methods:
//                   displayRecipe() which returns the name and ingredients
//                   isQuickmeal() which returns if the cookTime is less than 30minutes

function Myrecipe(name, ingredients, cookingTime) {
    this.name = name
    this.ingredients = ingredients
    this.cookingTime = cookingTime
    this.displayRecipe = function () {
        console.log(`This is ${this.name} the ingredients are: ${this.ingredients}`)
    }
    this.isQuickmeal = function () {
        if (this.cookingTime <= '30 minutes') {
            return true;
        } else {
            return false;
        }

    }
}
const ingredientsNew = new Myrecipe('Vegetable Rice'['ginger', 'salt', 'garlic', 'onions', 'rice', '3 tablespoons on cooking oil', 'mixed vegetables'], '45 minutes');
console.log(ingredientsNew.isQuickmeal());
ingredientsNew.displayRecipe();
