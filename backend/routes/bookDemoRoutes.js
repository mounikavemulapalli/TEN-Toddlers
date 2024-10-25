import express from "express";
const router = express.Router();
import BookDemo from "../models/demo.js";

import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,

  auth: {
    user: "mounikavemulapalli289@gmail.com", // Replace with your email
    pass: "fsdi uykz goxm zglj",
  },
});

router.post("/book-demo", async (req, res) => {
  const { fullName, email, mobile, mobileCode, babyAge } = req.body;

  try {
    const newBooking = new BookDemo({
      fullName,
      email,
      mobile,
      mobileCode,
      babyAge,
    });
    await newBooking.save();

    // Send email notification
    const mailOptions = {
      from: "mounikavemulapalli289@gmail.com",
      to: email,
      subject: "Demo Session Booking Confirmation",
      html: `<h1>Dear ${fullName}, your demo session has been successfully booked. Our team will contact you soon!</h1>`,
    };
    await transporter.sendMail(mailOptions);

    // Send WhatsApp notification using Twilio
    // await client.messages.create({
    //   body: `Dear ${fullName}, your demo session is booked. Our team will contact you soon!`,
    //   from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`,
    //   to: `whatsapp:${mobileCode}${mobile}`,
    // });

    // Respond back to frontend
    res.status(200).json({ message: "Booking successful!" });
  } catch (error) {
    console.error("Error booking demo session:", error);
    res.status(500).json({ message: "Server error, try again later" });
  }
});

export default router;
