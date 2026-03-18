import React from 'react';

export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-center space-y-4 text-center hover:scale-105 transition-transform duration-300">
      <Icon className="h-12 w-12 text-blue-500" />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
