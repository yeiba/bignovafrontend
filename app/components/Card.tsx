import React from "react";

// import { cn } from "@/lib/utils";
import Link from "next/link";

interface CardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  linkTo?: string;
  className?: string;
  footer?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  linkTo,
  className,
  footer,
}) => {
  const cardContent = (
    <div
      className={`
        "bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-xl",
        ${className}
      `}
    >
      {imageUrl && (
        <div className="h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        {description && <p className="mt-2 text-gray-600">{description}</p>}
      </div>
      {footer && <div className="px-4 py-3 bg-gray-50 border-t">{footer}</div>}
    </div>
  );

  if (linkTo) {
    return (
      <Link href={linkTo} className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};

export default Card;
