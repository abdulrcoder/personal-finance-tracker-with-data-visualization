import { Roboto } from "next/font/google";
import "./globals.css";

const outfit = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Personal Finance Tracker | Your Finance Management Tool",
  description:
    "Track your income and expenses, visualize your financial data, and make informed decisions with our easy-to-use Personal Finance Tracker.",
  keywords:
    "Personal finance, budget tracker, financial data, income, expenses, budget visualization",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${outfit.variable} antialiased`}>{children}</body>
    </html>
  );
}
