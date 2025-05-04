import React from "react";
import Layout from "@/app/components/Layout";
import PageHeader from "@/app/components/PageHeader";
import Card from "@/app/components/Card";
import { mockMenus } from "@/data/mockData";

const MenusList: React.FC = () => {
  return (
    <Layout>
      <PageHeader title="Menus" subtitle="Explore restaurant menus" />

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockMenus.map((menu) => (
            <Card
              key={menu.id}
              title={menu.name}
              description={`From ${
                menu.restaurant?.name || "Unknown Restaurant"
              }`}
              linkTo={`/menus/${menu.id}`}
              footer={
                <div className="text-sm font-medium text-gray-500">
                  {new Date(menu.createdAt).toLocaleDateString()}
                </div>
              }
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default MenusList;
