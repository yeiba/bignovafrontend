"use client";
import React from "react";

import Layout from "@/app/components/Layout";
import DetailHeader from "@/app/components/DetailHeader";
import Card from "@/app/components/Card";
import { mockMenus, mockDishes } from "@/data/mockData";
import { useParams } from "next/navigation";
import { useGetMenuByIdQuery } from "@/redux/features/menusApiSlice";

const MenuDetail: React.FC = () => {
  const { menuId } = useParams<{ menuId: string }>();

  const { data: menu } = useGetMenuByIdQuery(menuId);

  console.log(menu?.data);

  if (!menu) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Menu not found</h2>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <DetailHeader
        title={menu?.data.name}
        subtitle={`Menu from ${
          menu?.data.restaurant?.name || "Unknown Restaurant"
        }`}
        backLink="/menus"
        backText="Back to Menus"
      />

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Dishes</h2>

        {/* {menuDishes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuDishes.map((dish) => (
              <Card
                key={dish.id}
                title={dish.name}
                description={dish.description}
                imageUrl={dish.images[0]?.url}
                linkTo={`/dishes/${dish.id}`}
                footer={
                  <div className="text-right font-semibold text-red-600">
                    ${dish.price.toFixed(2)}
                  </div>
                }
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-600">
            No dishes available in this menu?.data .
          </p>
        )} */}
      </div>
    </Layout>
  );
};

export default MenuDetail;
