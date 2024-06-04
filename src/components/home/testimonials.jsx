export default function Testimonials() {
  const testimonials = [
    {
      text: "TaskMaster has transformed how I manage my daily tasks!",
      author: "Jane Doe",
    },
    {
      text: "The best task management app I've ever used.",
      author: "John Smith",
    },
    {
      text: "TaskMaster saved my life! I'm more organized than ever.",
      author: "Emily Johnson",
    },
  ];
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div className="p-6 border rounded-lg shadow-lg" key={index}>
              <p>{testimonial.text}</p>
              <p className="mt-4 font-bold">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
