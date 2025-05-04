import React from "react";
import Layout from "@/app/components/Layout";
import PageHeader from "@/app/components/PageHeader";
import Card from "@/app/components/Card";
import { mockCategories } from "@/data/mockData";

const CategoriesList: React.FC = () => {
  return (
    <Layout>
      <PageHeader
        title="Categories"
        subtitle="Browse restaurants by cuisine type"
      />

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCategories.map((category) => (
            <Card
              key={category.id}
              title={category.name}
              description={category.description}
              imageUrl={category.image?.url}
              linkTo={`/categories/${category.id}`}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CategoriesList;
