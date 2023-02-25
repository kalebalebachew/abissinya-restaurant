
//home page start
function hide(){
    document.getElementById("nav").style.display = "none";
    document.getElementById("open").style.display = "block";
  }
  function dis(){
    document.getElementById("nav").style.display = "block";
    document.getElementById("open").style.display = "none";
  }
  //Home page end
  
  //order page start
  const fastingFoods = [
      {
          name: "Beyaynet",
          description: "Fried patties made with sago pearls, potatoes, and peanuts.",
          image: "https://th.bing.com/th/id/OIP.454UgKASQKbyL6rLtauHbAHaE8?pid=ImgDet&rs=1"
      },
      {
          name: "Misir",
          description: "Crispy potato cutlets served with chutney.",
          image: "https://th.bing.com/th/id/OIP.A_zhdTbv5kh8OLEEEXrKKQHaE8?w=254&h=180&c=7&r=0&o=5&pid=1.7"
      },
      {
          name: "Tegabino",
          description: "Pancakes made with water chestnut flour and served with chutney.",
          image: "https://th.bing.com/th/id/OIP.w6VFNSB4naUP7zkLDBHpDQHaHa?w=180&h=180&c=7&r=0&o=5&pid=1.7"
      },
    {
          name: "FirFir",
          description: "Pancakes made with water chestnut flour and served with chutney.",
          image: "https://www.messyvegancook.com/wp-content/uploads/2015/06/IMG_6899.jpg"
      }
  ];
  
  const nonFastingFoods = [
      {
          name: "Doro wot",
          description: "Spicy rice dish with chicken and aromatic spices.",
          image: "https://th.bing.com/th/id/OIP.biI9B87NFGqaEDwc0dq7BQHaE8?w=286&h=191&c=7&r=0&o=5&pid=1.7"
      },
      {
          name: "kikil",
          description: "Chicken cooked in a rich tomato and butter sauce.",
          image: "https://th.bing.com/th/id/R.44bf4878fe3164c36fce6ebfdfb1ca5c?rik=QiJYvmS5iqWtbg&pid=ImgRaw&r=0"
      },
      {
          name: "Shekla Tibs",
          description: "Grilled cottage cheese skewers marinated in spices.",
          image: "https://th.bing.com/th/id/R.a61032e57b24ad44bd26884dd6040263?rik=z4NeQA%2balGSpyg&pid=ImgRaw&r=0"
      }
  ];
  
  const foodItemsDiv = document.getElementById("food-items");
  
  function showFastingFoods() {
      foodItemsDiv.innerHTML = ""; // clear previously displayed items
      console.log("Showing fasting foods");
      fastingFoods.forEach(function(food) {
          const foodItem = createFoodItem(food);
          console.log("Food item created:", foodItem);
          foodItemsDiv.appendChild(foodItem);
          console.log("Food item added to foodItemsDiv:", foodItemsDiv);
      });
  }
  
  function showNonFastingFoods() {
      foodItemsDiv.innerHTML = ""; // clear previously displayed items
      console.log("Showing non-fasting foods");
      nonFastingFoods.forEach(function(food) {
          const foodItem = createFoodItem(food);
          console.log("Food item created:", foodItem);
          foodItemsDiv.appendChild(foodItem);
          console.log("Food item added to foodItemsDiv:", foodItemsDiv);
      });
  }
  
  function createFoodItem(food) {
      const foodItemDiv = document.createElement("div");
      foodItemDiv.classList.add("food-item");
      const foodImage = document.createElement("img");
      foodImage.src = food.image;
      foodImage.alt = food.name;
      const foodName = document.createElement("h2");
      foodName.innerText = food.name;
      const foodDescription = document.createElement("p");
      foodDescription.innerText = food.description;
      foodItemDiv.appendChild(foodImage);
      foodItemDiv.appendChild(foodName);
      foodItemDiv.appendChild(foodDescription);
      console.log("Food item HTML created:", foodItemDiv.innerHTML);
      return foodItemDiv;
  }
  
  // show fasting foods by default
  showFastingFoods();
  
  function searchFoodItems() {
      const searchTerm = document.getElementById("search-bar").value.toLowerCase();
      const filteredFoods = fastingFoods.concat(nonFastingFoods).filter(function(food) {
          return food.name.toLowerCase().includes(searchTerm) || food.description.toLowerCase().includes(searchTerm);
      });
      foodItemsDiv.innerHTML = ""; // clear previously displayed items
      filteredFoods.forEach(function(food) {
          const foodItem = createFoodItem(food);
          foodItemsDiv.appendChild(foodItem);
      });
  }
  
  

function valid(){
    if(document.getElementById("pn").value.length > 10 && document.getElementById("pn").value.length < 10){
    alert("Invalid Phone number")
  }
  if(document.getElementById("fd").value == "top"){
    alert("You must select one food from the list.")
  }
}
function calc(){
    let doro = 120;
    let ketfo = 300;
    let tibs = 270;
    let bur = 300;
    let pizza = 300;
    let shwa = 100;
    if(document.getElementById("fd").value == "doro"){
        document.getElementById("tt").value =  (document.getElementById("it").value * doro)
    }
    if(document.getElementById("fd").value == "kitfo"){
      document.getElementById("tt").value =  (document.getElementById("it").value * ketfo)
      }
      if(document.getElementById("fd").value == "tibs"){
          document.getElementById("tt").value =  (document.getElementById("it").value * tibs)
      }
      if(document.getElementById("fd").value == "humb"){
          document.getElementById("tt").value =  (document.getElementById("it").value * bur)
      }
      if(document.getElementById("fd").value == "pizza"){
          document.getElementById("tt").value =  (document.getElementById("it").value * pizza)
      }
      if(document.getElementById("fd").value == "shawa"){
          document.getElementById("tt").value =  (document.getElementById("it").value * shwa)
      }
      
}
/*HOURS
Monday: Closed
Tuesday-Thursday: 2PM-10PM
Friday-Sunday: 12PM-10PM
OPENED FOR INDOOR DINE IN AND TAKE OUT ONLY!
*Reservations are highly recommended* */
