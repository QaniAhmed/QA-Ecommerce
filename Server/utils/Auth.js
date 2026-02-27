import { createClient } from "@supabase/supabase-js/dist/index.cjs";

export const SecureRoute = async (req, res, next) => {
  const db = createClient(process.env.DB_URL, process.env.DB_KEY);
  const token = req.cookies.session;
  if (!token) res.status(401).json({ message: "login first" });
  //get the user from supabase
  const {
    data: { user },
    error,
  } = await db.auth.getUser(token);
  if (!user || error) res.status(401).json({ message: "expired token" });

  req.user = user;
  next();
};
