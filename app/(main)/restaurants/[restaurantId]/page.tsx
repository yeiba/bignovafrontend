"use client";
import React from "react";

import Layout from "@/app/components/Layout";
import DetailHeader from "@/app/components/DetailHeader";
import Card from "@/app/components/Card";
import { mockRestaurants, mockMenus, mockDishes } from "@/data/mockData";
import { useParams } from "next/navigation";
import { useGetRestaurantByIdQuery } from "@/redux/features/restaurantsApiSlice";
import { useGetMenusByRestaurantIdQuery } from "@/redux/features/menusApiSlice";

const RestaurantDetail: React.FC = () => {
  const { restaurantId } = useParams<{ restaurantId: string }>();

  const { data: restaurant } = useGetRestaurantByIdQuery(restaurantId);
  const { data: restaurantMenus } =
    useGetMenusByRestaurantIdQuery(restaurantId);

  console.log(restaurant?.data);
  if (!restaurant) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Restaurant not found
          </h2>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <DetailHeader
        title={restaurant?.data.name}
        subtitle={`${restaurant?.data.category?.name || "Restaurant"} • ${
          restaurant.address
        }`}
        imageUrl={restaurant?.data.banner?.imageUrl}
        backLink="/restaurants"
        backText="Back to Restaurants"
      />

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            About {restaurant?.data.name}
          </h2>
          <p className="text-gray-600">
            {restaurant?.data.name} is a wonderful{" "}
            {restaurant?.data.category?.name || "restaurant"} located at{" "}
            {restaurant?.data.address}. Come and enjoy our delicious food in a
            warm and welcoming atmosphere.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Menus</h2>
          {restaurantMenus?.data.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {restaurantMenus?.data.map((menu: any) => (
                <Card
                  key={menu.id}
                  title={menu.name}
                  linkTo={`/menus/${menu.id}`}
                  className="border border-gray-200"
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-600">
              No menus available for this restaurant.
            </p>
          )}
        </div>
        {/* 
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Featured Dishes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockDishes
              .filter((dish) =>
                restaurantMenus.some((menu) => menu.id === dish.menuId)
              )
              .slice(0, 3)
              .map((dish) => (
                <Card
                  key={dish.id}
                  title={dish.name}
                  description={`$${dish.price.toFixed(2)} - ${
                    dish.description
                  }`}
                  imageUrl={dish.images[0]?.url}
                  linkTo={`/dishes/${dish.id}`}
                />
              ))}
          </div>
        </div> */}
      </div>
    </Layout>
  );
};

export default RestaurantDetail;
