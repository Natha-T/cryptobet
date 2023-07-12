import postgres from "postgres";

export async function GET(request: Request) {
  const { streamerId, streamerWallet } = request.params; // Assuming streamer ID or wallet address is provided as route parameters
  const sql = postgres(process.env.DATABASE_URL || "", {
    ssl: {
      rejectUnauthorized: false, // This allows connecting to a database with a self-signed certificate
    },
  });

  try {
    let betData;
    if (streamerId) {
      betData = await sql`
        SELECT * FROM bet WHERE streamer_id = ${streamerId};
      `;
    } else if (streamerWallet) {
      betData = await sql`
        SELECT * FROM bet WHERE streamer_wallet = ${streamerWallet};
      `;
    } else {
      return new Response(JSON.stringify({ message: "Invalid request" }), {
        status: 400,
      });
    }

    return new Response(JSON.stringify(betData));
  } catch (error) {
    console.error("Error retrieving data:", error);

    return new Response(JSON.stringify({ message: "Error retrieving data" }), {
      status: 500,
    });
  }
}
