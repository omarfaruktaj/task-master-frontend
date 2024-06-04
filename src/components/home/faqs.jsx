export default function FAQs() {
  const faqs = [
    {
      question: "What is TaskMaster?",
      answer:
        "TaskMaster is a personal task management system to help you stay organized and productive.",
    },
    {
      question: "How do I create an account?",
      answer:
        "Click on the 'Get Started' button and fill in your details to create an account.",
    },

    {
      question: "Can I use TaskMaster on my mobile device?",
      answer: "Yes, TaskMaster is responsive and can be used on any device.",
    },
    {
      question: "How do I contact support?",
      answer:
        "You can contact support by filling out the form in the Contact Us section or by emailing support@taskmaster.com.",
    },
  ];
  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq, index) => (
            <div key={index} className="p-6 bg-base-200 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{faq.question}</h3>
              <p className="text-gray-500">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
