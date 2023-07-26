import postgres from "postgres";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  const { streamer_id } = req.query;

  if (!streamer_id) {
    res.status(400).json({ error: "Missing streamer_id in query parameters" });
    return;
  }

  const sql = postgres(process.env.DATABASE_URL || "", {
    ssl: {
      rejectUnauthorized: false,
    },
  });

  try {
    // Fetch the specific streamer's profile from the database
    const streamerProfile = await sql`
      SELECT * FROM streamer_profile
      WHERE id = ${streamer_id};
    `;

    // Check if the streamer profile exists
    if (streamerProfile.length === 0) {
      res.status(404).json({ error: "Streamer profile not found" });
      return;
    }

    res.status(200).json(streamerProfile[0]); // Return the first (and only) element of the result array
  } catch (error) {
    console.error("Error fetching streamer profile:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
