import { NextResponse } from "next/server";

let visitCount = 0;

export async function GET() {
  visitCount += 1;
  return NextResponse.json({ visits: visitCount });
}

export async function POST() {
  return NextResponse.json({ message: "POST method is not supported" }, { status: 405 });
}