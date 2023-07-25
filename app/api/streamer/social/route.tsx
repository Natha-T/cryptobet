import postgres from "postgres";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  const { streamer_id, platform, link } = await req.body;

  const sql = postgres(process.env.DATABASE_URL || "", {
    ssl: {
      rejectUnauthorized: false,
    },
  });

  try {
    await sql`
      INSERT INTO social_media_links (
        streamer_id,
        platform,
        link
      ) VALUES (
        ${streamer_id},
        ${platform},
        ${link}
      );
    `;

    res.status(200).json({ message: "Social media link added successfully" });
  } catch (error) {
    console.error("Error adding social media link:", error);
    res.status(500).json({ message: "Error adding social media link" });
  }
}
