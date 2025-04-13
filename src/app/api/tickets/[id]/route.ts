import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type Params = {
  params: {
    id: string;
  };
};

export async function GET(_req: NextRequest, { params }: Params) {
  try {
    const id = params.id;
    const res = await fetch(`http://localhost:4000/tickets/${id}`);

    if (!res.ok) {
      return NextResponse.json(
        { error: "Cannot find the ticket" },
        { status: 404 }
      );
    }
    const ticket = await res.json();

    return NextResponse.json(ticket, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong", details: String(error) },
      { status: 500 }
    );
  }
}
