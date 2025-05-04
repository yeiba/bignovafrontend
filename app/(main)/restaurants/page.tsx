"use client";
import React, { useEffect } from "react";
import Layout from "@/app/components/Layout";
import PageHeader from "@/app/components/PageHeader";
import Card from "@/app/components/Card";
// import { mockRestaurants } from "@/data/mockData";
import config from "@/config/config";
import { useGetRestaurantsQuery } from "@/redux/features/restaurantsApiSlice";

const RestaurantsList: React.FC = () => {
  const { data: mockRestaurants } = useGetRestaurantsQuery("");
  console.log(mockRestaurants?.data);
  useEffect(() => {
    fetch("https://bignovabackend.onrender.com/api/v1/users/authenticate", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "your-secure-api-key-value",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log("✅ Success:", data))
      .catch((err) => console.error("❌ Fetch failed:", err));
  }, []);
  return (
    <Layout>
      <PageHeader
        title="Restaurants"
        subtitle="Explore our curated list of amazing restaurants"
      />

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockRestaurants?.data.map((restaurant: any) => (
            <Card
              key={restaurant.id}
              title={restaurant.name}
              description={restaurant.address}
              imageUrl={restaurant.banner?.imageUrl}
              linkTo={`/restaurants/${restaurant.id}`}
              footer={
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-500">
                    {restaurant.category?.name || "Uncategorized"}
                  </span>
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Popular
                  </span>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default RestaurantsList;
