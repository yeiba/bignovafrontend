import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface DetailHeaderProps {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  backLink: string;
  backText: string;
}

const DetailHeader: React.FC<DetailHeaderProps> = ({
  title,
  subtitle,
  imageUrl,
  backLink,
  backText,
}) => {
  return (
    <div className="relative">
      {imageUrl ? (
        <div className="h-64 md:h-80 lg:h-96 w-full relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60 z-10" />
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
            <Link
              href={backLink}
              className="inline-flex items-center text-white mb-4 hover:text-gray-200"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              {backText}
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
            {subtitle && (
              <p className="mt-2 text-lg text-gray-200">{subtitle}</p>
            )}
          </div>
        </div>
      ) : (
        <div className="bg-gradient-to-r from-orange-600 to-red-500 p-6">
          <div className="max-w-7xl mx-auto">
            <Link
              href={backLink}
              className="inline-flex items-center text-white mb-4 hover:text-gray-200"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              {backText}
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-2 text-lg text-gray-200">{subtitle}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailHeader;
