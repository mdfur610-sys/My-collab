export default function Testimonials() {
  const testimonials = [
    { name: "Alice", review: "This platform changed the way I learn!" },
    { name: "Bob", review: "Great for creators looking to share knowledge." },
    { name: "Charlie", review: "A must-have for anyone serious about learning." },
  ];

  return (
    <section className="py-16 px-4 bg-white-100 text-center">
      <h2 className="text-3xl font-bold mb-10">What Our Users Say</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white shadow-lg rounded-lg p-6 text-left">
            <p className="italic text-gray-700">"{t.review}"</p>
            <p className="font-bold text-blue-600 mt-4">- {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
