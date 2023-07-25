import postgres from "postgres";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  const {
    username,
    email,
    password,
    profile_image,
    wallet_address,
    can_create_bets,
    bio,
  } = await req.json();

  const sql = postgres(process.env.DATABASE_URL || "", {
    ssl: {
      rejectUnauthorized: false,
    },
  });

  console.log("Data received:", {
    username,
    email,
    password,
    profile_image,
    wallet_address,
    can_create_bets,
    bio, // Log the bio as well
  });

  try {
    await sql`
      INSERT INTO streamer_profile (
        username,
        email,
        password,
        profile_image,
        wallet_address,
        can_create_bets,
        bio
      ) VALUES (
        ${username},
        ${email},
        ${password},
        ${profile_image},
        ${wallet_address},
        ${can_create_bets},
        ${bio} -- Insert the bio field
      );
    `;

    return new Response(
      JSON.stringify({ message: "Data inserted successfully" })
    );
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).json({ message: "Error inserting data" });
  }
}
