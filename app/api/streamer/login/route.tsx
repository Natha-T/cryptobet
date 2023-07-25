import postgres from "postgres";
import jwt from "jsonwebtoken";

// Create a database pool
const db = createPool(process.env.DATABASE_URL || "", {
  ssl: {
    rejectUnauthorized: false,
  },
});

// Your secret key for JWT token generation (keep it secure and don't commit it)
const JWT_SECRET = "your-secret-key-here";

export default async function handler(req, res) {
  const sql = postgres(process.env.DATABASE_URL || "", {
    ssl: {
      rejectUnauthorized: false, // This allows connecting to a database with a self-signed certificate
    },
  });

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  const { email, username, password } = await req.body;

  try {
    // Step 1: Check if the streamer exists in your database based on the provided email or username
    const streamer = await db.queryFirst(sql`
      SELECT * FROM streamer_profile
      WHERE email = ${email} OR username = ${username};
    `);

    // Step 2: Verify the provided password against the stored hashed password (use a proper password hashing library like bcrypt for production)
    if (!streamer || password !== streamer.password) {
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }

    // Step 3: Generate a JWT token for the streamer's session
    const token = jwt.sign({ streamer_id: streamer.id }, JWT_SECRET);

    // Step 4: Set the JWT as a secure HTTP-only cookie
    res.cookie("streamer_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Set to true in production
      // Add more options for cookie configuration as needed
    });

    // Step 5: Redirect the streamer to a success page or dashboard
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Error during streamer login:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
