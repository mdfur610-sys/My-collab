import React from 'react';
import { Shield, Users, Clock } from 'lucide-react';
import FeatureCard from './FeatureCard';

export default function WhyChooseUs() {
  return (
    <section className="py-8 sm:py-12 md:py-24 bg-gray-100">
      <div className="container px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-8 sm:mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <FeatureCard icon={Shield} title="Trusted Experts" description="Learn from industry leaders and professionals." />
          <FeatureCard icon={Users} title="Community Support" description="Connect with like-minded learners and experts." />
          <FeatureCard icon={Clock} title="Flexible Learning" description="Access courses anytime, anywhere." />
        </div>
      </div>
    </section>
  );
}