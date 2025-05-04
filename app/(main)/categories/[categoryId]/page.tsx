"use client";
import React from "react";

import Layout from "@/app/components/Layout";
import DetailHeader from "@/app/components/DetailHeader";
import Card from "@/app/components/Card";
import { mockCategories, mockRestaurants } from "@/data/mockData";
import { useParams } from "next/navigation";

const CategoryDetail: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = mockCategories.find((c) => c.id === categoryId);
  const categoryRestaurants = mockRestaurants.filter(
    (r) => r.categoryId === categoryId
  );

  if (!category) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Category not found
          </h2>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <DetailHeader
        title={category.name}
        subtitle={category.description}
        imageUrl={category.image?.url}
        backLink="/categories"
        backText="Back to Categories"
      />

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {category.name} Restaurants
        </h2>

        {categoryRestaurants.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryRestaurants.map((restaurant) => (
              <Card
                key={restaurant.id}
                title={restaurant.name}
                description={restaurant.address}
                imageUrl={restaurant.banner?.url}
                linkTo={`/restaurants/${restaurant.id}`}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-600">
            No restaurants available in this category.
          </p>
        )}
      </div>
    </Layout>
  );
};

export default CategoryDetail;
