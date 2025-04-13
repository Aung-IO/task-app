import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const res = await fetch("http://localhost:4000/tickets");
  const tickets = await res.json();

  return NextResponse.json(tickets, {
    status: 200,
  });
}

export async function POST(requset: NextRequest) {
  const data = await requset.json();

  const res = await fetch("http://localhost:4000/tickets", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const newTicket = res.json();

  return NextResponse.json(newTicket, { status: 201 });
}
