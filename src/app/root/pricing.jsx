import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <div>
      <section className="bg-blue-500 text-white text-center py-20 rounded-md">
        <h1 className="text-4xl font-bold mb-4">Pricing Plans</h1>
        <p className="text-xl mb-6">
          Choose the plan that best fits your needs
        </p>
      </section>

      <section className="py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="p-6 border rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-center">Free</h2>
              <p className="text-center text-4xl font-bold mb-4">
                $0<span className="text-base">/month</span>
              </p>
              <ul className="mb-6">
                <li className="mb-4">✔️ Access to basic features</li>
                <li className="mb-4">✔️ 5 Projects</li>
                <li className="mb-4">✔️ 10 Team Members</li>
                <li className="mb-4">✔️ Community Support</li>
              </ul>
              <div className="text-center">
                <Link
                  to="/"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Standard Plan */}
            <div className="p-6 border rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-center">Standard</h2>
              <p className="text-center text-4xl font-bold mb-4">
                $9.99<span className="text-base">/month</span>
              </p>
              <ul className="mb-6">
                <li className="mb-4">✔️ Access to all features</li>
                <li className="mb-4">✔️ Unlimited Projects</li>
                <li className="mb-4">✔️ 50 Team Members</li>
                <li className="mb-4">✔️ Email Support</li>
              </ul>
              <div className="text-center">
                <Link
                  to="/"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="p-6 border rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-center">Premium</h2>
              <p className="text-center text-4xl font-bold mb-4">
                $29.99<span className="text-base">/month</span>
              </p>
              <ul className="mb-6">
                <li className="mb-4">✔️ All Standard Features</li>
                <li className="mb-4">✔️ Unlimited Team Members</li>
                <li className="mb-4">✔️ Priority Support</li>
                <li className="mb-4">✔️ Advanced Reporting</li>
              </ul>
              <div className="text-center">
                <Link
                  to="/"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
