import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function GET() {
  try {
    const visit = await prisma.visit.findUnique({
      where: { id: 1 },
    });

    return NextResponse.json({ visits: visit?.count ?? 0 });
  } catch (error) {
    console.error("Error fetching visit count:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
