export default function Works() {
  const steps = [
    { title: "Step 1", description: "Sign up and create an account." },
    { title: "Step 2", description: "Log in and set up your profile." },
    { title: "Step 3", description: "Start adding and managing your tasks." },
    {
      title: "Step 4",
      description:
        "Use the search and filtering features to organize your tasks.",
    },
    { title: "Step 5", description: "Get insights from the dashboard." },
  ];
  return (
    <section className="bg-base-200 py-20 px-5 rounded-2xl">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              className="p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:bg-base-100 rounded-lg"
              key={index}
            >
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
