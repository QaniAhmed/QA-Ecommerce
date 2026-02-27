import express from "express";
import cors from "cors";
import { createClient } from "@supabase/supabase-js/dist/index.cjs";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { SecureRoute } from "./utils/Auth.js";
dotenv.config();

const app = express();
app.use(cors());
const db = createClient(process.env.DB_URL, process.env.DB_KEY);
// console.log(db);
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("live");
});

app.post("/Signup", async (req, res) => {
  const { email, password, fullname, phone } = req.body;
  console.log(
    `name = ${email} password = ${password} fullname= ${fullname} phone= ${phone} `,
  );
  const { data, error } = await db.auth.signUp(
    {
      email,
      password,
      options: {
        data: {
          full_name: fullname,
          phone_number: phone,
        },
      },
    },
    { emailRedirectTo: "http://localhost:5000/welcome" },
  );
  if (error)
    return res.status(401).json({ message: "Error in signup", error: error });
  return res.status(201).json({ message: "Account successfully created" });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  const { data, error } = await db.auth.signInWithPassword({ email, password });
  if (error)
    return res
      .status(400)
      .json({ message: "Error in login process", error: error });
  res.cookie("session", data.session.access_token, { httpOnly: true });
  return res.status(200).json({ message: "Successfully login" });
});

app.post("/logout", (req, res) => {
  res.clearCookie("session");
  res.status(200).json({ message: "logout successfully" });
});

app.get("/profile", SecureRoute, (req, res) => {
  const {
    id,
    email,
    role,
    user_metadata: { full_name, phone_number },
  } = req.user;
  res.status(200).json({
    Details: {
      data: id,
      email,
      role,
      full_name: full_name || "غير مسجل", // قيمة بديلة
      phone_number: phone_number || "غير مسجل",
    },
  });
});

app.listen(5000, () => {
  console.log("lestening . . .");
});
