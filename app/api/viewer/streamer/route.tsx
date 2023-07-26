import postgres from "postgres";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  const sql = postgres(process.env.DATABASE_URL || "", {
    ssl: {
      rejectUnauthorized: false,
    },
  });

  try {
    // Fetch all streamers from the database
    const streamers = await sql`
      SELECT * FROM streamer_profile;
    `;

    res.status(200).json(streamers);
  } catch (error) {
    console.error("Error fetching streamers:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
