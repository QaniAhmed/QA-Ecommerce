import { createClient } from "@supabase/supabase-js/dist/index.cjs";

export const SecureRoute = async (req, res, next) => {
  // 1. Initialize DB (Ideally, do this once outside the function to save resources)
  const db = createClient(process.env.DB_URL, process.env.DB_KEY);

  const token = req.cookies.session;
  console.log(token);

  // 2. Add 'return' to stop execution if no token
  if (!token) {
    return res.status(401).json({ message: "login first" });
  }

  try {
    // 3. Get the user from supabase
    const {
      data: { user },
      error,
    } = await db.auth.getUser(token);

    // 4. Check for both the error object and the user existence
    if (error || !user) {
      return res.status(401).json({ message: "expired or invalid token" });
    }

    // 5. Success! Attach user and move to the next function
    req.user = user;
    next();
  } catch (err) {
    // 6. Catch unexpected system errors
    return res.status(500).json({ message: "Internal server error" });
  }
};
