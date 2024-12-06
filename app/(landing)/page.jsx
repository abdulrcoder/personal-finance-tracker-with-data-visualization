import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BarChart, DollarSign, Settings } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-[#171717] text-white min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-[#1F1F1F] py-4 shadow-lg z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-2xl font-bold text-blue-600">
            Finance Tracker
          </div>
          <ul className="hidden md:flex space-x-8 text-white">
            <li>
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/features" className="hover:text-blue-600">
                Features
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-blue-600">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>
          <div className="md:hidden">
            {/* Hamburger menu */}
            <Button className="bg-blue-600 text-white p-2 rounded-md">☰</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="w-full h-[90vh] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Overlay */}
        <div className="container mx-auto text-center text-white absolute inset-0 flex flex-col justify-center items-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-600 mb-4 animate__animated animate__fadeIn animate__delay-1s">
            Take Control of Your Finances
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mb-6 animate__animated animate__fadeIn animate__delay-2s">
            Easily track your spending, manage budgets, and achieve your
            financial goals with our powerful yet simple Finance Tracker.
          </p>
          <Link href={"/dashboard"}>
            <Button className="px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-blue-700 animate__animated animate__fadeIn animate__delay-3s">
              Get Started
            </Button>
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">
          Why Choose Finance Tracker?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Expense Tracking */}
          <div className="bg-[#1F1F1F] p-8 rounded-lg shadow-lg hover:scale-105 transition-transform transform hover:shadow-xl flex flex-col items-center">
            <BarChart className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Expense Tracking
            </h3>
            <p className="text-gray-300 text-center">
              Monitor your daily, weekly, and monthly expenses with detailed
              reports and visual insights.
            </p>
          </div>

          {/* Budget Management */}
          <div className="bg-[#1F1F1F] p-8 rounded-lg shadow-lg hover:scale-105 transition-transform transform hover:shadow-xl flex flex-col items-center">
            <DollarSign className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Budget Management
            </h3>
            <p className="text-gray-300 text-center">
              Set custom budgets and get alerts when you are nearing your
              spending limits.
            </p>
          </div>

          {/* Goal Setting */}
          <div className="bg-[#1F1F1F] p-8 rounded-lg shadow-lg hover:scale-105 transition-transform transform hover:shadow-xl flex flex-col items-center">
            <Settings className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Goal Setting
            </h3>
            <p className="text-gray-300 text-center">
              Achieve your savings goals by setting targets and tracking
              progress in real-time.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-[#1F1F1F] text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">
          Ready to Transform Your Financial Future?
        </h2>
        <p className="text-gray-300 text-lg mb-8">
          Join thousands of users who are managing their money smarter.
        </p>
        <Link href={"/dashboard"}>
          <Button className="px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-blue-700 animate__animated animate__fadeIn animate__delay-3s">
            Start Tracking Now
          </Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#171717] text-center text-gray-400">
        <p>&copy; 2024 Finance Tracker. All Rights Reserved.</p>
        <p className="text-sm">
          <Link
            href="/privacy-policy"
            className="text-blue-600 hover:underline"
          >
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link
            href="/terms-of-service"
            className="text-blue-600 hover:underline"
          >
            Terms of Service
          </Link>
        </p>
      </footer>
    </div>
  );
}
