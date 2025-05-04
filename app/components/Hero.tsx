import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-orange-600 to-red-500 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <div className="pt-10 sm:pt-16 lg:pt-20">
            <div className="sm:text-center lg:text-left px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Delicious Food at</span>{" "}
                <span className="block text-yellow-300 xl:inline">
                  Your Fingertips
                </span>
              </h1>
              <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Discover the best restaurants, explore menus, and find your
                favorite dishes all in one place. BigNova brings culinary
                excellence to your digital experience.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    href="/restaurants"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                  >
                    Explore Restaurants
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    href="/about"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-700 hover:bg-red-800 md:py-4 md:text-lg md:px-10"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full bg-red-200 flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Restaurant dishes showcase"
            className="w-full h-full object-cover opacity-80"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
