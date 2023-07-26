import postgres from "postgres";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  const { wallet_address, category, bet_amount, user_id } = req.body;
  const sql = postgres(process.env.DATABASE_URL || "", {
    ssl: {
      rejectUnauthorized: false, // This allows connecting to a database with a self-signed certificate
    },
  });

  try {
    // Determine the team field to update based on the user's choice
    // You can add the team selection logic here if needed

    // Insert the new bet into the `bet` table
    await sql.begin(async (sql) => {
      // Insert the new bet with the initial total betting pool set to zero
      await sql`
        INSERT INTO bet (
          user_id,
          wallet_address,
          category,
          timestamp,
          total_betting_pool,
          bet_amount,
   
        ) VALUES (
                ${user_id},
          ${wallet_address},
          ${category},
          NOW(),
          0, -- Initial total betting pool is zero
          ${bet_amount}
    
        );
      `;
    });

    res.status(200).json({ message: "Data inserted successfully" });
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).json({ message: "Error inserting data" });
  }
}
