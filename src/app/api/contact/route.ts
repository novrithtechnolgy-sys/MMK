import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      location,
      clientType,
      services,
      requiredServices,
      message,
    } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "sumalnadira123@gmail.com",
        pass: process.env.EMAIL_PASS || "neou ymir aqwh tfxf",
      },
    });

    const mailOptions = {
      from: `"${firstName} ${lastName}" <${email}>`,
      to: process.env.EMAIL_TO || "sumalnadera81@gmail.com",
      subject: `📨 New Form Submission – ${firstName} ${lastName} via Website Contact Form`,
      html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          /* Mobile responsiveness */
          @media only screen and (max-width: 600px) {
            .container {
              width: 100% !important;
              padding: 2px !important;
            }
            .content {
              padding: 2px !important;
            }
            .header h1 {
              font-size: 18px !important;
            }
            table td {
              display: block !important;
              width: 100% !important;
            }
            table td:first-child {
              font-weight: bold;
              margin-top: 10px;
            }
          }
        </style>
      </head>

      <body style="margin:0; padding:0; font-family: Arial, sans-serif; background:#f7f7f7;">

        <div style="padding:25px;">
          <div class="container" style="max-width:700px; margin:auto; background:#ffffff; border-radius:10px; overflow:hidden;">

            <!-- Header -->
            <div class="header" style="background-color:#fa7a12ff; padding:25px; text-align:center; color:#ffffff;">
              <img src="https://res.cloudinary.com/dgm9hbcb1/image/upload/v1764655875/pcseadvjnildtv2g9nlo.png"
                  alt="Company Logo"
                  style="width:120px; max-width:100%; margin-bottom:10px;" />
              <h1 style="margin:0; font-size:20px; letter-spacing:1px;">
                New Contact Form Submission
              </h1>
            </div>

            <!-- Body -->
            <div class="content" style="padding:30px;">
              <h2 style="margin-top:0;">Contact Details</h2>

              <table cellpadding="6" cellspacing="0" width="100%" style="border-collapse:collapse;">
                <tr>
                  <td style="font-weight:bold;">Name:</td>
                  <td>${firstName} ${lastName}</td>
                </tr>
                <tr>
                  <td style="font-weight:bold;">Email:</td>
                  <td>${email}</td>
                </tr>
                <tr>
                  <td style="font-weight:bold;">Phone:</td>
                  <td>${phone}</td>
                </tr>
                <tr>
                  <td style="font-weight:bold;">Location:</td>
                  <td>${location}</td>
                </tr>
                <tr>
                  <td style="font-weight:bold;">Client Type:</td>
                  <td>${clientType}</td>
                </tr>
                <tr>
                  <td style="font-weight:bold;">Services:</td>
                  <td>${services}</td>
                </tr>
                <tr>
                  <td style="font-weight:bold;">Required Services:</td>
                  <td>${requiredServices}</td>
                </tr>
              </table>

              <h3 style="margin-top:30px;">Message</h3>
              <div style="padding:15px; background:#fafafa; border-left:4px solid #000;">
                ${message?.replace(/\n/g, "<br>") || "No message provided"}
              </div>
            </div>

            <!-- Footer -->
            <div style="background-color:#fa7a12ff; padding:20px; text-align:center; font-size:12px; color:#ffffff;">
              <p style="margin:0;">
                This message was sent from your website contact form.
              </p>
              <p style="margin:5px 0;">
                © ${new Date().getFullYear()} Digital Escapes. All rights reserved.
              </p>

              <div style="margin-top:10px;">
                <a href="https://www.marketmykey.com"
                  style="color:#ffffff; text-decoration:underline; margin:0 6px;">
                  Website
                </a> |
                <a href="mailto:marketmykeys@gmail.com"
                  style="color:#ffffff; text-decoration:underline; margin:0 6px;">
                  Email
                </a> |
                <a href="https://linkedin.com/company/marketmykeys"
                  style="color:#ffffff; text-decoration:underline; margin:0 6px;">
                  LinkedIn
                </a>
              </div>
            </div>

          </div>
        </div>

      </body>
      </html>

    `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
