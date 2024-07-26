import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts():Product[]{
    return   [
      {
          "name": "iPhone 12",
          "description": "The latest Apple iPhone with A14 Bionic chip.",
          "price": 79900,
          "image": "https://via.placeholder.com/150?text=iPhone+12",
          "category": "Electronics"
      },
      {
          "name": "Samsung Galaxy S21",
          "description": "Samsung's flagship smartphone with Exynos 2100.",
          "price": 69900,
          "image": "https://via.placeholder.com/150?text=Galaxy+S21",
          "category": "Electronics"
      },
      {
          "name": "Sony WH-1000XM4",
          "description": "Noise-cancelling wireless headphones.",
          "price": 34900,
          "image": "https://via.placeholder.com/150?text=WH-1000XM4",
          "category": "Electronics"
      },
      {
          "name": "Dell XPS 13",
          "description": "High-performance laptop with 11th Gen Intel Core i7.",
          "price": 129900,
          "image": "https://via.placeholder.com/150?text=Dell+XPS+13",
          "category": "Computers"
      },
      {
          "name": "Apple MacBook Pro",
          "description": "Powerful laptop with M1 chip and Retina display.",
          "price": 239900,
          "image": "https://via.placeholder.com/150?text=MacBook+Pro",
          "category": "Computers"
      },
      {
          "name": "Nintendo Switch",
          "description": "Hybrid gaming console with portable and docked modes.",
          "price": 29900,
          "image": "https://via.placeholder.com/150?text=Nintendo+Switch",
          "category": "Gaming"
      },
      {
          "name": "Sony PlayStation 5",
          "description": "Next-generation gaming console with 4K graphics.",
          "price": 49900,
          "image": "https://via.placeholder.com/150?text=PlayStation+5",
          "category": "Gaming"
      },
      {
          "name": "Fitbit Charge 4",
          "description": "Advanced fitness tracker with GPS and heart rate monitoring.",
          "price": 14900,
          "image": "https://via.placeholder.com/150?text=Fitbit+Charge+4",
          "category": "Fitness"
      },
      {
          "name": "Samsung Galaxy Watch 4",
          "description": "Smartwatch with health tracking and Wear OS.",
          "price": 24900,
          "image": "https://via.placeholder.com/150?text=Galaxy+Watch+4",
          "category": "Fitness"
      },
      {
          "name": "GoPro Hero 9",
          "description": "Action camera with 5K video and built-in stabilization.",
          "price": 39900,
          "image": "https://via.placeholder.com/150?text=GoPro+Hero+9",
          "category": "Outdoor"
      },
      {
          "name": "DJI Mavic Air 2",
          "description": "Compact drone with 4K camera and obstacle avoidance.",
          "price": 79900,
          "image": "https://via.placeholder.com/150?text=Mavic+Air+2",
          "category": "Outdoor"
      },
      {
          "name": "KitchenAid Stand Mixer",
          "description": "Versatile mixer with multiple attachments for baking.",
          "price": 29900,
          "image": "https://via.placeholder.com/150?text=KitchenAid+Mixer",
          "category": "Home Appliances"
      },
      {
          "name": "Dyson V11",
          "description": "Cordless vacuum cleaner with powerful suction.",
          "price": 59900,
          "image": "https://via.placeholder.com/150?text=Dyson+V11",
          "category": "Home Appliances"
      },
      {
          "name": "Sony 65-Inch 4K TV",
          "description": "Ultra HD TV with stunning picture quality and smart features.",
          "price": 149900,
          "image": "https://via.placeholder.com/150?text=65+Inch+4K+TV",
          "category": "Home Entertainment"
      },
      {
          "name": "Bose SoundLink Revolve+",
          "description": "Portable Bluetooth speaker with 360-degree sound.",
          "price": 29900,
          "image": "https://via.placeholder.com/150?text=Bose+SoundLink+Revolve+",
          "category": "Home Entertainment"
      },
      {
          "name": "Ecovacs Deebot Ozmo T8",
          "description": "Robotic vacuum cleaner with mopping functionality.",
          "price": 64900,
          "image": "https://via.placeholder.com/150?text=Deebot+Ozmo+T8",
          "category": "Home Appliances"
      },
      {
          "name": "Oculus Quest 2",
          "description": "Standalone VR headset with immersive experiences.",
          "price": 29900,
          "image": "https://via.placeholder.com/150?text=Oculus+Quest+2",
          "category": "Gaming"
      },
      {
          "name": "Nest Learning Thermostat",
          "description": "Smart thermostat that learns your preferences.",
          "price": 24900,
          "image": "https://via.placeholder.com/150?text=Nest+Thermostat",
          "category": "Smart Home"
      },
      {
          "name": "Ring Video Doorbell Pro",
          "description": "Smart doorbell with high-definition video and two-way audio.",
          "price": 24900,
          "image": "https://via.placeholder.com/150?text=Ring+Doorbell+Pro",
          "category": "Smart Home"
      },
      {
          "name": "Roku Streaming Stick+",
          "description": "Streaming device with 4K HDR content and voice control.",
          "price": 4900,
          "image": "https://via.placeholder.com/150?text=Roku+Stick+",
          "category": "Home Entertainment"
      },
      {
          "name": "Apple AirPods Pro",
          "description": "Wireless earbuds with active noise cancellation.",
          "price": 24900,
          "image": "https://via.placeholder.com/150?text=AirPods+Pro",
          "category": "Electronics"
      }
  ];
  }

}
