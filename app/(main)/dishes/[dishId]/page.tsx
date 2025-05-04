"use client";
import React from "react";

import Layout from "@/app/components/Layout";
import { mockDishes } from "@/data/mockData";
import DetailHeader from "@/app/components/DetailHeader";
import { useParams } from "next/navigation";
import Link from "next/link";

const DishDetail: React.FC = () => {
  const { dishId } = useParams<{ dishId: string }>();
  const dish = mockDishes.find((d) => d.id === dishId);

  if (!dish) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Dish not found</h2>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <DetailHeader
        title={dish.name}
        subtitle={`${
          dish.category?.name || "Uncategorized"
        } • $${dish.price.toFixed(2)}`}
        imageUrl={dish.images[0]?.url}
        backLink="/dishes"
        backText="Back to Dishes"
      />

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              About this dish
            </h2>
            <p className="text-gray-600 mb-6">{dish.description}</p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Category
              </h3>
              <Link
                href={`/categories/${dish.categoryId}`}
                className="text-red-600 hover:text-red-800"
              >
                {dish.category?.name || "Uncategorized"}
              </Link>
            </div>

            {dish.menu && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Available On
                </h3>
                <Link
                  href={`/menus/${dish.menuId}`}
                  className="text-red-600 hover:text-red-800"
                >
                  {dish.menu.name}
                </Link>
                {dish.menu.restaurant && (
                  <p className="mt-1 text-sm text-gray-500">
                    at{" "}
                    <Link
                      href={`/restaurants/${dish.menu.restaurant.id}`}
                      className="text-red-600 hover:text-red-800"
                    >
                      {dish.menu.restaurant.name}
                    </Link>
                  </p>
                )}
              </div>
            )}

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Price
              </h3>
              <p className="text-2xl font-bold text-red-600">
                ${dish.price.toFixed(2)}
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 lg:mt-0 mt-8">
              Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dish.images.map((image, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden shadow-md"
                >
                  <img
                    src={image.url}
                    alt={`${dish.name} - Image ${index + 1}`}
                    className="w-full h-48 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DishDetail;
