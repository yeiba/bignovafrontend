"use client";
import React from "react";
import Layout from "@/app/components/Layout";
import PageHeader from "@/app/components/PageHeader";
import Card from "@/app/components/Card";
// import { mockDishes } from "@/data/mockData";
import { useGetDishesQuery } from "@/redux/features/dishesApiSlice";

const DishesList: React.FC = () => {
  const { data: mockDishes } = useGetDishesQuery("");
  console.log(mockDishes?.data);
  return (
    <Layout>
      <PageHeader title="Dishes" subtitle="Explore our delicious dishes" />

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockDishes?.data.map((dish: any) => (
            <Card
              key={dish.id}
              title={dish.name}
              description={dish.description}
              imageUrl={dish.images[0]?.imageUrl}
              linkTo={`/dishes/${dish.id}`}
              footer={
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-500">
                    {dish.category?.name || "Uncategorized"}
                  </span>
                  <span className="font-semibold text-red-600">
                    ${dish.price.toFixed(2)}
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

export default DishesList;
