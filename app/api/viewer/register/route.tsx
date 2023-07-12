import postgres from "postgres";

export async function POST(request: Request) {
  const { username, email, password, profile_image, wallet_address } =
    await request.json();

  const sql = postgres(process.env.DATABASE_URL || "", {
    ssl: {
      rejectUnauthorized: false, // This allows connecting to a database with a self-signed certificate
    },
  });

  console.log("Data received:", {
    username,
    email,
    password,
    profile_image,
    wallet_address,
  });

  try {
    await sql`
      INSERT INTO viewer-profile (
       username,
        email,
        password,
        profile_image,
        wallet_address,
    
      ) VALUES (
        ${username},
        ${email},
        ${password},
        ${profile_image},
        ${wallet_address}
      );
    `;

    return new Response(
      JSON.stringify({ message: "Data inserted successfully" })
    );
  } catch (error) {
    console.error("Error inserting data:", error);

    return new Response(JSON.stringify({ message: "Error inserting data" }), {
      status: 500,
    });
  }
}
