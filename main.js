//time greeting start 

      function timeGreetings() {
        

        let currentHour = new Date ().getHours();
        let greetingText;


        if (currentHour <= 11){

           greetingText = "Good Morning"
      
        }

        else if (currentHour <= 17){
          greetingText = "Good Afternoon"
        }

        else if (currentHour >= 18){
          greetingText = "Good Evening"
        }

        else{
          greetingText ="Welcome"
        }
         
        document.querySelector("#greeting").innerHTML = greetingText;


      }
      timeGreetings()

      //time greetings end 

      //clock start 

     function updateSeconds(){

     const date = new Date();

     
     let hours = date.getHours();
     let minutes = date.getMinutes();
     let seconds = date.getSeconds ()

     console.log(hours); 
     document. querySelector(".hours").innerHTML = hours; 
     document. querySelector(".minutes").innerHTML = minutes;
     document.querySelector(".seconds") .innerHTML = seconds;
      }
     updateSeconds () ;
     
     setInterval (updateSeconds, 1000);
      
     
    //clock end 
//gallery start
function setupImageGallery() {
    const mainImage = document.querySelector('#gallery img');
    const thumbnails = document.querySelectorAll('.thumbnails img');
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const imagePath = thumbnail.getAttribute('src');
            mainImage.setAttribute('src', imagePath);
        });
    });
  }
  setupImageGallery();
  //gallery end 

  //dropdown start 
   let wrapper = document.querySelector(".wrapper")
   let closeMenu = document.querySelector("#close-nav-menu")
   let openMenu = document.querySelector("#open-nav-menu")

   
   openMenu.onclick = function() {
    wrapper.style.right ="0"
    
   }
   
   closeMenu.onclick = function() {
    wrapper.style.right ="-100%"
   }
   
   //dropdown end

   //weather and time start 
   async function getWeather(Nairobi) {
    const apiKey = '07796abcd0c656d7826a20736552f2a0'; // Replace with your API key from OpenWeatherMap
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${Nairobi}&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const weatherInfo = {
            city: data.name,
            temperature: data.main.temp,
            description: data.weather[0].description,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed
        };

        return weatherInfo;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}
getWeather('Nairobi').then(weather => {
    if (weather) {
        console.log('Weather information:', weather);
    } else {
        console.log('Failed to retrieve weather information');
    }
});
   async function updateWeatherInfo(Nairobi) {
    const weatherInfo = await getWeather(Nairobi); // Assume getWeather function is defined

    if (weatherInfo) {
        const greetingElement = document.getElementById('greeting');
        const weatherElement = document.getElementById('weather');
        const temperatureElement = document.querySelector('input[name="temperature"]:checked').id === 'celsius' ? 'temperature' : 'temperatureInFahr';
        
        greetingElement.textContent = `Good Afternoon ${weatherInfo.city}`;
        weatherElement.textContent = `The weather is ${weatherInfo.description}, ${weatherInfo[temperatureElement]}°`;

    }
}
// Update weather information on radio button change
const temperatureRadios = document.querySelectorAll('input[name="temperature"]');

temperatureRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        updateWeatherInfo('Nairobi'); // Call updateWeatherInfo with the desired city
    });
});
updateWeatherInfo('Nairobi'); 
//weather and time end 

//product display start 

// JSON array of products
async function fetchProducts() {
    try {
        const response = await fetch('products.json'); // Path to your JSON file or API endpoint
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}
const productsArea = [
    {
      title: "AstroFiction",
      author: "John Doe",
      price: 49.9,
      image: "products/img6.png"
    },
    {
      title: "Space Odissey",
      author: "Marie Anne",
      price: 35,
      image: "products/img1.png"
    },
    {
      title: "Doomed City",
      author: "Jason Cobert",
      price: 0,
      image: "products/img2.png"
    },
    {
      title: "Black Dog",
      author: "John Doe",
      price: 85.35,
      image: "products/img3.png"
    },
    {
      title: "My Little Robot",
      author: "Pedro Paulo",
      price: 0,
      image: "products/img5.png"
    },
    {
      title: "Garden Girl",
      author: "Ankit Patel",
      price: 45,
      image: "products/img4.png"
    }
];

// Function to display product details
function displayProduct(products) {
    const productElement = document.createElement('div');
    productElement.innerHTML = `
        <img src="${products.image}" alt="${product.title}">
        <h3>${products.title}</h3>
        <p>Author: ${products.author}</p>
        <p>Price: $${products.price}</p>
    `;
    document.getElementById('products-area').appendChild(productElement);
}

// Loop through the products array and display each product

document.addEventListener('DOMContentLoaded', async function() {
    const products = await fetchProducts();
    const productContainer = document.getElementById('product-container');

    if (products) {
        products.forEach(products => {
            displayProduct(products);
        });
    }
});

//product display end 


function navigateToHome() {
    
    window.location.href = "#home";
}


function navigateToPage(pageName) {
    
    window.location.href = `/${pageName}`;
}

// Add event listeners to the links in the navigation bar
document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.querySelector('home');
    const galleryLink = document.querySelector('#gallery');
    const productLink = document.querySelector('#product');
    const faqsLink = document.querySelector('#faqs');

    // Navigate to the homepage when clicking on the "Home" link
    homeLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        navigateToHome('');
    });

    // Navigate to the "About" page when clicking on the "About" link
    galleryLink.addEventListener('click', function(event) {
        event.preventDefault();
        navigateToPage('gallery');
    });

    // Navigate to the "Contact" page when clicking on the "Contact" link
    productLink.addEventListener('click', function(event) {
        event.preventDefault();
        navigateToPage('products');
    });
      // Navigate to the "f" pageaqs when clicking on the "Contact" link
    faqsLink.addEventListener('click', function(event) {
        event.preventDefault();
        navigateToPage('faqs');
    });
});


//footer start 
function showFooter() {
    const footerElement = 
    document.getElementById('footer');
    if (footerElement) {
        footerElement.classList.remove('hidden');
    }else {
        console.error('Footer element not found');
    }
}
showFooter();

   







