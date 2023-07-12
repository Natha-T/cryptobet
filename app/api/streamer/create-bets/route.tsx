import postgres from "postgres";

export async function POST(request: Request) {
  const { wallet_address, betting_amount, category } = await request.json();

  const sql = postgres(process.env.DATABASE_URL || "", {
    ssl: {
      rejectUnauthorized: false, // This allows connecting to a database with a self-signed certificate
    },
  });

  console.log("Data received:", {
    wallet_address,
    betting_amount,
    category,
  });

  try {
    await sql`
      INSERT INTO bet (
        wallet_address,
    betting_amount,
    category,
    
      ) VALUES (  
        ${wallet_address},
        ${betting_amount},
        ${category}
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
