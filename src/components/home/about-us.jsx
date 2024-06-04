export default function AboutUs() {
  return (
    <section className="bg-base-200 py-20 rounded-2xl">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">About Us</h2>
          <p className="text-lg text-gray-500 leading-relaxed mb-8">
            TaskMaster is dedicated to helping individuals and teams stay
            organized and productive. Our mission is to provide a simple yet
            powerful task management solution that can be used by anyone,
            anywhere.
          </p>
          <p className="text-lg text-gray-500 leading-relaxed mb-8">
            Founded in 2023, we have continuously worked on improving our app to
            meet the evolving needs of our users. Our team is passionate about
            productivity and is always here to support you in achieving your
            goals.
          </p>
          <p className="text-lg text-gray-500 leading-relaxed mb-8">
            For any inquiries or support, please reach out to us at{" "}
            <a href="mailto:support@taskmaster.com" className="text-blue-500">
              support@taskmaster.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
