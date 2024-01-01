import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS(_: NextRequest) {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(request: Request) {
  const res = await request.json();

  const bodyRequest = {
    name: res.cpf,
    email: res.cpf,
    subject: res.subject,
    message: res.message,
  };

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "galpaojuma@gmail.com",
        pass: "ugil zdzy lywn mpzm ",
      },
    });

    const mailOptions = {
      from: "galpaojuma@gmail.com",
      to: "ppm@grv.art.br",
      subject: `Novo email no site PPM 2024: ${bodyRequest.subject}`,
      html: `
      <p>
        Nome: ${bodyRequest.name}.
        <br />
        Email: ${bodyRequest.email}
        <br />
        Message: ${bodyRequest.message}
      </p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);

    return NextResponse.json({ status: 201, data: bodyRequest });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Erro ao criar, verifique novamente";
    return NextResponse.json({ status: 500, data: { message: message } });
  }
}
