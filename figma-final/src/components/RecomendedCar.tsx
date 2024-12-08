"use client";

import React, { useState } from "react";

const RecomendedCar: React.FC = () => {
  const allCars = [
    { id: 1, name: "Kia Sportage", image: "https://i.ytimg.com/vi/sgVuvfnaKm4/maxresdefault.jpg", price: 50 },
    { id: 2, name: "Toyota Corolla", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXFiO-DYh22R8YJMYjPNHLYdHugBdZwQB5hQ&s", price: 40 },
    { id: 3, name: "Honda Civic", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLA8f48J0FjB2kfz0TrqJGTjisPtV6v2Z9kw&s", price: 45 },
    { id: 4, name: "Ford Mustang", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ95k6TZ9Ojo2g95tJEnDGYnzTCmOJ6bWjJTQ&s", price: 70 },
    { id: 5, name: "Chevrolet Malibu", image: "https://i.ytimg.com/vi/sgVuvfnaKm4/maxresdefault.jpg", price: 55 },
    { id: 6, name: "Tesla Model 3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLA8f48J0FjB2kfz0TrqJGTjisPtV6v2Z9kw&s", price: 80 },
    { id: 7, name: "BMW X5", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ95k6TZ9Ojo2g95tJEnDGYnzTCmOJ6bWjJTQ&s", price: 90 },
    { id: 8, name: "Audi Q7", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXFiO-DYh22R8YJMYjPNHLYdHugBdZwQB5hQ&s", price: 85 },
    { id: 9, name: "Mercedes-Benz C-Class", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ95k6TZ9Ojo2g95tJEnDGYnzTCmOJ6bWjJTQ&s", price: 100 },
    { id: 10, name: "Hyundai Sonata", image: "https://i.ytimg.com/vi/sgVuvfnaKm4/maxresdefault.jpg", price: 60 },
    { id: 11, name: "Volkswagen Passat", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ95k6TZ9Ojo2g95tJEnDGYnzTCmOJ6bWjJTQ&s", price: 65 },
    { id: 12, name: "Porsche Cayenne", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLA8f48J0FjB2kfz0TrqJGTjisPtV6v2Z9kw&s", price: 120 },
  ];

  const [visibleCars, setVisibleCars] = useState(8);

  const handleShowMore = () => {
    setVisibleCars(allCars.length);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-8">
      {/* Product Grid */}
      <div className="py-10 px-10">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Explore Our Cars</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allCars.slice(0, visibleCars).map((car) => (
            <div
              key={car.id}
              className="flex flex-col justify-between bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition"
            >
              {/* Car Image */}
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />

              {/* Car Details */}
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">{car.name}</h3>
                <p className="text-sm text-gray-500 mb-4">${car.price}/Day</p>
              </div>

              {/* Rent Button */}
              <button className="mt-auto w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                Rent Now
              </button>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {visibleCars < allCars.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={handleShowMore}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Show More Cars
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecomendedCar;
