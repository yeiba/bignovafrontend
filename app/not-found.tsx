import React from "react";

import Layout from "./components/Layout";
import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-6">
            Oops! The page youre looking for doesnt exist.
          </p>
          <Link
            href="/"
            className="bg-red-600 text-white hover:bg-red-700 px-6 py-3 rounded-md text-lg font-medium transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
