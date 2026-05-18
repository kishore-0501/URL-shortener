import { useState } from "react";

export default function Dashboard() {
  const stats = [
    { title: "Total URLs", value: "1,248" },
    { title: "Total Clicks", value: "18,920" },
    { title: "Active Users", value: "342" },
    { title: "Error Rate", value: "0.2%" },
  ];

  const recentUrls = [
    {
      short: "short.ly/yt12",
      original: "https://youtube.com/watch?v=123",
      clicks: 120,
    },
    {
      short: "short.ly/aws9",
      original: "https://aws.amazon.com/",
      clicks: 89,
    },
    {
      short: "short.ly/dev7",
      original: "https://developer.mozilla.org/",
      clicks: 64,
    },
  ];

  // UI STATE
  const [showModal, setShowModal] = useState(false);
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // API CALL
  const createShortUrl = async () => {
    setLoading(true);
    setError("");
    setShortUrl("");

    try {
      const res = await fetch("http://localhost:3000/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ longUrl }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to create short URL");
      }

      setShortUrl(data.shortUrl);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold">URL Shortener Dashboard</h1>
          <p className="text-slate-400 mt-2">
            Kubernetes + Docker + Monitoring Project
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-2xl font-semibold shadow-lg"
        >
          Create Short URL
        </button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-6"
          >
            <p className="text-slate-400 text-sm">{item.title}</p>
            <h2 className="text-3xl font-bold mt-2">{item.value}</h2>
          </div>
        ))}
      </div>

      {/* MAIN SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* ANALYTICS */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-3xl p-6">
          <h2 className="text-2xl font-semibold mb-6">Traffic Analytics</h2>

          <div className="h-72 bg-slate-800 rounded-2xl flex items-center justify-center text-slate-400">
            Chart Area (Prometheus / Grafana Later)
          </div>
        </div>

        {/* SYSTEM HEALTH */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
          <h2 className="text-2xl font-semibold mb-6">System Health</h2>

          <p className="text-slate-400">CPU Usage: 42%</p>
          <p className="text-slate-400">Memory Usage: 61%</p>
          <p className="text-slate-400">API Response: 99ms</p>
        </div>
      </div>

      {/* RECENT URLS */}
      <div className="mt-8 bg-slate-900 border border-slate-800 rounded-3xl p-6">
        <h2 className="text-2xl font-semibold mb-6">Recent URLs</h2>

        <table className="w-full text-left">
          <thead>
            <tr className="text-slate-400 border-b border-slate-800">
              <th className="pb-3">Short URL</th>
              <th className="pb-3">Original</th>
              <th className="pb-3">Clicks</th>
            </tr>
          </thead>

          <tbody>
            {recentUrls.map((url, i) => (
              <tr key={i} className="border-b border-slate-800">
                <td className="py-3 text-blue-400">{url.short}</td>
                <td className="py-3 text-slate-300">{url.original}</td>
                <td className="py-3">{url.clicks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="bg-white text-black p-6 rounded-xl w-[400px]">

            <h2 className="text-xl font-bold mb-4">
              Create Short URL
            </h2>

            <input
              type="text"
              placeholder="Enter long URL"
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              className="w-full border p-2 rounded mb-3"
            />

            {error && (
              <p className="text-red-500 mb-2">{error}</p>
            )}

            <button
              onClick={createShortUrl}
              disabled={loading}
              className="bg-blue-600 text-white px-4 py-2 rounded w-full disabled:opacity-50"
            >
              {loading ? "Generating..." : "Generate"}
            </button>

            {shortUrl && (
              <p className="mt-4 text-green-600 break-all">
                {shortUrl}
              </p>
            )}

            <button
              onClick={() => setShowModal(false)}
              className="mt-4 text-red-500"
            >
              Close
            </button>

          </div>
        </div>
      )}

    </div>
  );
}