class TourCategory {
  constructor(name, description,imageURL) {
    this.name = name;
    this.description = description;
    this.imageURL=imageURL;
  }
}
class TourLocation {
  constructor(name, description, imageURL) {
    this.imageURL = imageURL || "./images/Tours/TourCategory1/tour1.jpg";
    this.name = name;
    this.description = description;
  }
}
class Testimonial{
  constructor(author, content,imageURL) {
    this.author = author;
    this.content = content;
    this.imageURL = imageURL || "./images/testimonials/testimonial1.jpg"; // Default image if not provided
  }
}
class Package{
  constructor(name, price, description,imageURL) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.imageURL = imageURL || "./images/Tours/TourCategory1/tour1.jpg"; 
  }
}
class Tour {
  constructor(name, price, description,imageURL) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.imageURL = imageURL;
  }
}
export function getTours(){
  return [
    new Tour("Grand Canyon Tour", 199.99, "Experience the breathtaking views of the Grand Canyon.","./images/Tours/TourCategory1/tour1.jpg"),
    new Tour("Eiffel Tower Tour", 149.99, "Visit the iconic Eiffel Tower in Paris.","./images/Tours/TourCategory1/tour1.jpg"),
    new Tour("Great Wall of China Tour", 299.99, "Walk along the historic Great Wall of China.","./images/Tours/TourCategory1/tour1.jpg"),
    new Tour("Machu Picchu Tour", 249.99, "Explore the ancient ruins of Machu Picchu in Peru.","./images/Tours/TourCategory1/tour1.jpg"),
  ];
}
export function GetPackages() {
  return [
    new Package("Adventure Package", 299.99, "Includes hiking, rafting, and camping."),
    new Package("Cultural Package", 199.99, "Explore local traditions and cuisines."),
    new Package("Relaxation Package", 149.99, "Spa treatments and beach access included."),
    new Package("Historical Package", 249.99, "Guided tours of ancient sites and museums."),
  ];
}
export function getTestimonials(){
  return [
    new Testimonial("Alice", "This tour was amazing! Highly recommend."),
    new Testimonial("Bob", "An unforgettable experience, will book again."),
    new Testimonial("Charlie", "Great value for money, loved every moment."),
  ];
}
export function getTourCategories (){
 return [
    new TourCategory("Adventure", "Explore the wild with our adventure tours.","./images/Tours/TourCategory1/tour1.jpg"),
    new TourCategory("Cultural", "Immerse yourself in the local culture.","./images/Tours/TourCategory1/tour1.jpg"),
    new TourCategory("Relaxation", "Unwind with our relaxation packages.","./images/Tours/TourCategory1/tour1.jpg"),
    new TourCategory("Historical", "Discover the history of ancient civilizations.","./images/Tours/TourCategory1/tour1.jpg"),
    new TourCategory("Historical", "Discover the history of ancient civilizations.","./images/Tours/TourCategory1/tour1.jpg"),
    new TourCategory("Historical", "Discover the history of ancient civilizations.","./images/Tours/TourCategory1/tour1.jpg"),
    new TourCategory("Historical", "Discover the history of ancient civilizations.","./images/Tours/TourCategory1/tour1.jpg"),
    new TourCategory("Historical", "Discover the history of ancient civilizations.","./images/Tours/TourCategory1/tour1.jpg"),
    new TourCategory("Historical", "Discover the history of ancient civilizations.","./images/Tours/TourCategory1/tour1.jpg"),
  ];
}
export function getTourLocations (){
  return [
    new TourLocation("Grand Canyon", "Experience the breathtaking views of the Grand Canyon.","./images/Tours/TourCategory1/tour1.jpg"),
    new TourLocation("Eiffel Tower", "Visit the iconic Eiffel Tower in Paris."),
    new TourLocation("Great Wall of China", "Walk along the historic Great Wall of China."),
    new TourLocation("Machu Picchu", "Explore the ancient ruins of Machu Picchu in Peru."),
  ];
}