export default function Features() {
  const featuresData = [
    {
      title: "User Authentication and Authorization",
      description: "Secure login and signup with JWT and OAuth options.",
    },
    {
      title: "Profile Management",
      description: "Manage your personal information and profile settings.",
    },
    {
      title: "Task Management",
      description: "Create, read, update, and delete tasks effortlessly.",
    },
    {
      title: "Search and Filtering",
      description: "Find tasks quickly with search and filter options.",
    },
    {
      title: "Dashboard Overview",
      description: "Get a comprehensive view of your tasks and activities.",
    },
  ];
  return (
    <section className="py-20 ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
