import React from "react";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import {
  Utensils,
  Users,
  FolderPlus,
  Clipboard,
  Pizza,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

// About Section
const About: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
            About BigNova
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            The Restaurant Management Platform
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            BigNova brings together restaurants, menus, and food enthusiasts in
            one comprehensive platform.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                  <Utensils className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Restaurants
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Browse through a wide selection of restaurants, filter by
                cuisine, location, or ratings to find your perfect dining
                experience.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                  <Users className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  User Management
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Create profiles, save favorite restaurants, track order history,
                and manage your preferences with ease.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                  <FolderPlus className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Categories
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Explore different cuisine categories, from Italian to Japanese,
                vegetarian to barbecue, all organized for easy discovery.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                  <Clipboard className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Menus
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                View detailed menu information with prices, descriptions, and
                high-quality images to help you decide what to order.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

// Features Section
const Features: React.FC = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything You Need in One Place
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            BigNova offers a comprehensive suite of tools to enhance your
            restaurant experience.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {[
              {
                title: "User Profiles",
                description:
                  "Create personalized profiles, save preferences, and manage your dining history.",
                icon: <Users className="h-6 w-6" />,
              },
              {
                title: "Restaurant Listings",
                description:
                  "Explore detailed restaurant profiles with photos, reviews, and location information.",
                icon: <Utensils className="h-6 w-6" />,
              },
              {
                title: "Category Management",
                description:
                  "Browse restaurants by cuisine type, dietary restrictions, or special features.",
                icon: <FolderPlus className="h-6 w-6" />,
              },
              {
                title: "Menu Browsing",
                description:
                  "View complete menus with pricing, descriptions, and nutritional information.",
                icon: <Clipboard className="h-6 w-6" />,
              },
              {
                title: "Dish Details",
                description:
                  "Get in-depth information about specific dishes, including ingredients and preparation.",
                icon: <Pizza className="h-6 w-6" />,
              },
              {
                title: "Seamless Experience",
                description:
                  "Enjoy an intuitive interface designed for both desktop and mobile users.",
                icon: <ChevronRight className="h-6 w-6" />,
              },
            ].map((feature, index) => (
              <div key={index} className="relative">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// CTA Section
const CTA: React.FC = () => {
  return (
    <div className="bg-red-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to get started?</span>
          <span className="block text-yellow-300">Join BigNova today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-red-50"
            >
              Get started
            </Link>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Link
              href="/restaurants"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-800 hover:bg-red-700"
            >
              View Restaurants
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Features />
      <CTA />
    </Layout>
  );
};

export default Home;
