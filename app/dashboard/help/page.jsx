import React from "react";

const HelpPage = () => {
  return (
    <div className="min-h-screen bg-[#171717] text-whitesmoke">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-semibold text-center mb-8">
          Help &amp; Support
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-[#1f1f1f] p-4 rounded-lg">
              <h3 className="font-medium">How do I reset my password?</h3>
              <p>
                If you&apos;ve forgotten your password, you can reset it by
                clicking the Forgot Password link on the login page.
              </p>
            </div>
            <div className="bg-[#1f1f1f] p-4 rounded-lg">
              <h3 className="font-medium">
                How can I update my monthly budget?
              </h3>
              <p>
                You can update your budget by going to the &quot;Settings&quot;
                page and adjusting the &quot;Monthly Budget Limit&quot; field.
              </p>
            </div>
            <div className="bg-[#1f1f1f] p-4 rounded-lg">
              <h3 className="font-medium">Can I export my expenses?</h3>
              <p>
                Yes, you can export your expense reports as CSV files by
                clicking the &quot;Export&quot; button on the Dashboard.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
          <div className="bg-[#1f1f1f] p-6 rounded-lg">
            <p className="mb-4">
              If you have any issues or need help with the app, please feel free
              to reach out to our support team.
            </p>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-[#171717] border border-whitesmoke text-whitesmoke p-2 rounded"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-[#171717] border border-whitesmoke text-whitesmoke p-2 rounded"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full bg-[#171717] border border-whitesmoke text-whitesmoke p-2 rounded"
                  placeholder="Describe your issue or inquiry"
                />
              </div>
              <button className="w-full py-2 bg-[#171717] text-whitesmoke border border-whitesmoke rounded hover:bg-whitesmoke hover:text-[#171717] transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Help Resources</h2>
          <div className="space-y-4">
            <div className="bg-[#1f1f1f] p-4 rounded-lg">
              <a href="#" className="text-whitesmoke hover:text-gray-400">
                User Guide
              </a>
              <p>Learn how to use the app step-by-step with our user guide.</p>
            </div>
            <div className="bg-[#1f1f1f] p-4 rounded-lg">
              <a href="#" className="text-whitesmoke hover:text-gray-400">
                Video Tutorials
              </a>
              <p>
                Watch video tutorials to get the most out of your Expense
                Tracker experience.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HelpPage;
