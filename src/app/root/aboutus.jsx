export default function AboutUsPage() {
  return (
    <div>
      <section className="bg-blue-500 text-white text-center py-20 rounded-md">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-xl mb-6">
          Learn more about TaskMaster and our mission
        </p>
      </section>

      <section className="py-20">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Story</h2>
            <p className="mb-4">
              TaskMaster was founded in 2023 with a simple mission: to help
              individuals and teams manage their tasks more efficiently. Our
              goal is to provide a user-friendly and powerful task management
              solution that can be used by anyone, anywhere.
            </p>
            <p className="mb-4">
              Our team is passionate about productivity and technology. We
              believe that with the right tools, anyone can achieve their goals
              and stay organized. TaskMaster is designed to be your go-to app
              for managing your daily tasks, projects, and collaborations.
            </p>
            <p className="mb-4">
              Since our launch, we have continuously worked on improving our
              app, adding new features, and listening to feedback from our
              users. We are committed to providing the best task management
              experience possible.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-base-200 py-20 mb-20 rounded-2xl">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
            <p className="mb-4">
              At TaskMaster, our mission is to empower individuals and teams to
              achieve their goals and stay organized. We strive to create a task
              management tool that is not only functional but also delightful to
              use.
            </p>
            <p className="mb-4">
              We are dedicated to continuous improvement, ensuring that our app
              evolves with the needs of our users. Our focus is on simplicity,
              efficiency, and user satisfaction.
            </p>
            <p>
              Join us on our journey to make task management easier and more
              effective for everyone.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
