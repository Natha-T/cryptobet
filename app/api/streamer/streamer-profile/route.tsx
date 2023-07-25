import postgres from "postgres";

export default async function handler(req, res) {
  if (req.method !== "PUT") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  const { user_id, username, email, password } = await req.body;

  const sql = postgres(process.env.DATABASE_URL || "", {
    ssl: {
      rejectUnauthorized: false,
    },
  });

  try {
    // Fetch the existing user profile from the database based on the provided user_id
    const existingUserData = await sql`
      SELECT * FROM users
      WHERE id = ${user_id};
    `;

    // Merge the updated data with the existing data to handle partial updates
    const updatedUserData = {
      username: username || existingUserData.username,
      email: email || existingUserData.email,
      password: password || existingUserData.password,
    };

    // Update the user profile in the database with the merged data
    await sql`
      UPDATE users
      SET
        username = ${updatedUserData.username},
        email = ${updatedUserData.email},
        password = ${updatedUserData.password}
      WHERE
        id = ${user_id};
    `;

    res.status(200).json({ message: "User profile updated successfully" });
  } catch (error) {
    console.error("Error updating user profile:", error);
    res.status(500).json({ message: "Error updating user profile" });
  }
}
