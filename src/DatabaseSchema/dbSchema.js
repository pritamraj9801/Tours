class TourCategory {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }
}
class TourLocation {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }
}
class Testimonial{
  constructor(author, content) {
    this.author = author;
    this.content = content;
  }
}
class Package{
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }
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
    new TourCategory("Adventure", "Explore the wild with our adventure tours."),
    new TourCategory("Cultural", "Immerse yourself in the local culture."),
    new TourCategory("Relaxation", "Unwind with our relaxation packages."),
    new TourCategory("Historical", "Discover the history of ancient civilizations."),
  ];
}
export function getTourLocations (){
  return [
    new TourLocation("Grand Canyon", "Experience the breathtaking views of the Grand Canyon."),
    new TourLocation("Eiffel Tower", "Visit the iconic Eiffel Tower in Paris."),
    new TourLocation("Great Wall of China", "Walk along the historic Great Wall of China."),
    new TourLocation("Machu Picchu", "Explore the ancient ruins of Machu Picchu in Peru."),
  ];
}