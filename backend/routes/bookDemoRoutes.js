import express from "express";
const router = express.Router();
import BookDemo from "../models/demo.js";
// import twilio from "twilio";

import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// const accountSid = "" //generate yours in twilio;
// const authToken = ""; //generate your auth token in twilio
// const twilioClient = twilio(accountSid, authToken);

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,

  auth: {
    user: "tech@entrepreneurshipnetwork.net", // Replace with your email
    pass: "ulzo ueut cueu vlpv",
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

    // Send email to user
    const userMailOptions = {
      from: "tech@entrepreneurshipnetwork.net",
      to: email, // User's email address
      subject: "Demo Session Booking Confirmation",
      html: `
    <div>
      <h1>Dear ${fullName}, your demo session has been successfully booked. Our team will contact you soon!</h1>
      <br />
      <h3>This is what you have filled:</h3>
      <ul>
        <li>Full Name: ${fullName}</li>
        <li>Email: ${email}</li>
        <li>Mobile Code: ${mobileCode}</li>
        <li>Mobile: ${mobile}</li>
        <li>Child Age: ${babyAge}</li>
      </ul>
    </div>`,
    };

    // Send email to admin
    const adminMailOptions = {
      from: "tech@entrepreneurshipnetwork.net",
      to: "tech@entrepreneurshipnetwork.net", // Admin's email address
      subject: "New Demo Session Booking Alert",
      html: `
    <div>
      <h1>Hello, you have received! one new demo. ${fullName} booked a demo session</h1>
      <br />
      <h3>Booking Details:</h3>
      <ul>
        <li>Full Name: ${fullName}</li>
        <li>Email: ${email}</li>
        <li>Mobile Code: ${mobileCode}</li>
        <li>Mobile: ${mobile}</li>
        <li>Child Age: ${babyAge}</li>
      </ul>
    </div>`,
    };

    try {
      // Send emails
      await transporter.sendMail(userMailOptions);
      await transporter.sendMail(adminMailOptions);

      res.status(200).json({ message: "Booking successful!" });
    } catch (error) {
      console.error("Error sending emails:", error);
      res.status(500).json({ message: "Server error, try again later" });
    }

    // const sendWhatsAppMessage = async (recipient, message) => {
    //   try {
    //     const whatsappMessage = await twilioClient.messages.create({
    //       body: message,
    //       from: "whatsapp:+14155238886",
    //       to: `whatsapp:${mobileCode}${mobile}`,
    //     });
    //     console.log("whatsapp message sent:", whatsappMessage.sid);
    //   } catch (error) {
    //     console.error("Error sending whatsapp message with Twilio:", error);
    //   }
    // };
    // const whatsappMessage = `Dear ${fullName}, your demo session is booked. Our team will contact you soon!.This is what you have filled: FullName:${fullName}  Email:${email}  MobileCode: ${mobileCode}  mobile: ${mobile} ChildAge: ${babyAge}`;
    // const recipientNumber = `${mobileCode}${mobile}`; // e.g., "1234567890" (with country code)
    // await sendWhatsAppMessage(recipientNumber, whatsappMessage);

    // Respond back to frontend
    // res.status(200).json({ message: "Booking successful!" });
  } catch (error) {
    console.error("Error booking demo session:", error);
    res.status(500).json({ message: "Server error, try again later" });
  }
});

export default router;
