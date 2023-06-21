import Navbar from "../components//global/navbar";
import StreamerNav from "../components/Streamer/streamernav";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-800">
        <Navbar />
        <StreamerNav />
        {children}
      </body>
    </html>
  );
}
