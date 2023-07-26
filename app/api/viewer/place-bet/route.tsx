import postgres from "postgres";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  const {
    wallet_address,
    team1_bets,
    team2_bets,
    bet_side,
    bet_amount,
    created_at,
  } = await req.json();

  const sql = postgres(process.env.DATABASE_URL || "", {
    ssl: {
      rejectUnauthorized: false,
    },
  });

  console.log("Data received:", {
    wallet_address,
    team1_bets,
    team2_bets,
    bet_side,
    bet_amount,
    created_at,
  });

  try {
    // Insert the new bet into the database
    await sql`
      INSERT INTO bet (
        wallet_address,
        team1_bets,
        team2_bets,
        bet_side,
        bet_amount,
        created_at
      ) VALUES (
        ${wallet_address},
        ${team1_bets},
        ${team2_bets},
        ${bet_side},
        ${bet_amount},
        ${created_at}
      );
    `;

    res.status(200).json({ message: "Bet created successfully" });
  } catch (error) {
    console.error("Error creating bet:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
