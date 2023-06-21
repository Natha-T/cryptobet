import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Crypto Bet",
  description:
    "Join CryptoBet, the ultimate betting app built for cryptocurrency enthusiasts. Place bets using popular cryptocurrencies and enjoy a seamless betting experience with secure transactions and real-time updates. Explore a wide range of betting options, from sports to eSports and more. Take advantage of the power of blockchain technology and indulge in thrilling betting opportunities with CryptoBet.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
