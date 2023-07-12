import postgres from "postgres";

export async function PATCH(request: Request) {
  const { id, username, email, password, profile_image, wallet_address } =
    await request.json();

  const sql = postgres(process.env.DATABASE_URL || "", {
    ssl: {
      rejectUnauthorized: false, // This allows connecting to a database with a self-signed certificate
    },
  });

  console.log("Data received:", {
    id,
    username,
    email,
    password,
    profile_image,
    wallet_address,
  });

  try {
    let query = sql`UPDATE streamer-profile SET`;

    // Build the SET clause dynamically based on the provided fields
    if (username !== undefined) query.append(sql` username = ${username},`);
    if (email !== undefined) query.append(sql` email = ${email},`);
    if (password !== undefined) query.append(sql` password = ${password},`);
    if (profile_image !== undefined)
      query.append(sql` profile_image = ${profile_image},`);
    if (wallet_address !== undefined)
      query.append(sql` wallet_address = ${wallet_address},`);

    // Remove the trailing comma from the SET clause
    query = query.slice(0, -1);

    // Add the WHERE clause to specify the profile to update
    query.append(sql` WHERE id = ${id};`);

    await query;

    return new Response(
      JSON.stringify({ message: "Profile updated successfully" })
    );
  } catch (error) {
    console.error("Error updating profile:", error);

    return new Response(JSON.stringify({ message: "Error updating profile" }), {
      status: 500,
    });
  }
}
