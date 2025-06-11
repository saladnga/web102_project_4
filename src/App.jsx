import React from "react";
import "./App.css";

const trucks = [
  {
    name: "Birria-Landia",
    cuisine: "Mexican",
    link: "#",
    image:
      "https://pyxis.nymag.com/v1/imgs/38c/2ac/b02a093f6b846ebd1aca78b0d59c7e427a-birria-1.rsocial.w1200.jpg",
  },
  {
    name: "Mysttik Masala",
    cuisine: "Indian",
    link: "#",
    image:
      "https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_1200,ar_4:3,g_auto,f_auto/cms/reviews/mysttik-masala/banners/1561989798.42",
  },
  {
    name: "The Halal Guys",
    cuisine: "Middle Eastern",
    link: "#",
    image:
      "https://nypost.com/wp-content/uploads/sites/2/2014/08/081114featureshalaguysbz-1.jpg?quality=75&strip=all&w=1024",
  },
  {
    name: "NY Dosas",
    cuisine: "Vegetarian",
    link: "#",
    image:
      "https://nydosas.com/wp-content/uploads/2018/07/maxresdefault-2-1024x630.jpg",
  },
  {
    name: "Jerk Pan",
    cuisine: "Jamaican",
    link: "#",
    image:
      "https://infatuation.imgix.net/media/images/reviews/jerk-pan/banners/1561989308.8.jpg",
  },
  {
    name: "Tong",
    cuisine: "Bangladeshi",
    link: "#",
    image:
      "https://static01.nyt.com/images/2019/09/04/dining/29hungry-tong2/merlin_159654336_783be212-7726-485e-9250-4793a743af41-jumbo.jpg",
  },
  {
    name: "King Souvlaki of Astoria",
    cuisine: "Greek",
    link: "#",
    image:
      "https://kingsouvlakinyc.com/wp-content/themes/king/images/location-f.jpg",
  },
  {
    name: "Ling's Sweet Mini Cakes",
    cuisine: "Chinese",
    link: "#",
    image:
      "https://fastly.4sqi.net/img/general/600x600/61129566_7PLEKHNMZ-VNqzYx2jWRVZGrZ42PdPX0M-j9Ftpg8Ts.jpg",
  },
  {
    name: "Uncle Gussy's",
    cuisine: "Greek",
    link: "#",
    image:
      "https://d3hbe0kmbam4a5.cloudfront.net/photos/67e1cdb7-bc27-4f26-8343-851bfaa7fc22.jpg",
  },
  {
    name: "Patacon Pisao",
    cuisine: "Venezuelan",
    link: "#",
    image: "https://live.staticflickr.com/8088/8400188739_53b16c7d13_z.jpg",
  },
  {
    name: "Mom's Mono",
    cuisine: "Tibetan",
    link: "#",
    image:
      "https://infatuation.imgix.net/media/images/reviews/moms-momo/banners/1606245507.888788.png",
  },
  {
    name: "Makina Cafe",
    cuisine: "Ethiopian",
    link: "#",
    image:
      "https://fastly.4sqi.net/img/general/600x600/784042_29bZZHPGisHnWqyIuuXMo8D2zzW7QS6Hft7Vv15SH_I.jpg",
  },
];

export const App = () => {
  return (
    <div>
      <img
        src="https://heroic-pixie-6d7f91.netlify.app/awning.png"
        className="head-img"
      />
      <div className="container">
        <header className="header">
          <h1>Food Truck Favorites</h1>
        </header>
        <div className="card-grid">
          {trucks.map((truck, index) => (
            <div key={index} className="card">
              <img src={truck.image} alt={truck.name} />
              <div className="card-body">
                <h2>{truck.name}</h2>
                <p>{truck.cuisine}</p>
                <a href={truck.link} target="_blank" rel="noopener noreferrer">
                  View Menu
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
