export default function Blogs() {
  const blogs = [
    {
      title: "How to Boost Your Productivity",
      excerpt:
        "Learn effective strategies to enhance your productivity and manage your tasks efficiently.",
      link: "/blogs/productivity",
    },
    {
      title: "Top 10 Task Management Tips",
      excerpt:
        "Discover the top 10 tips for managing your tasks and staying organized.",
      link: "/blogs/task-management-tips",
    },
    {
      title: "The Importance of Work-Life Balance",
      excerpt:
        "Understand the significance of maintaining a healthy work-life balance and how to achieve it.",
      link: "/blogs/work-life-balance",
    },
    {
      title: "Using Technology to Stay Organized",
      excerpt:
        "Explore how technology can help you stay organized and on top of your tasks.",
      link: "/blogs/technology-organization",
    },
    {
      title: "Effective Goal Setting Techniques",
      excerpt:
        "Learn about effective techniques for setting and achieving your goals.",
      link: "/blogs/goal-setting",
    },
  ];
  return (
    <div>
      <section className="bg-blue-500 text-white text-center py-20 rounded-md">
        <h1 className="text-4xl font-bold mb-4">Our Blogs</h1>
        <p className="text-xl mb-6">
          Stay updated with the latest tips and insights on productivity and
          task management
        </p>
      </section>

      <section className="py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div key={index} className="p-6 border rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">{blog.title}</h3>
                <p className="mb-4">{blog.excerpt}</p>
                <button className="btn btn-primary"> Read More</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
