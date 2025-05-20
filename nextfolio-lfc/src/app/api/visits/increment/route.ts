import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    let visit = await prisma.visit.findUnique({
      where: { id: 1 },
    });

    if (!visit) {
      visit = await prisma.visit.create({
        data: { id: 1, count: 1 },
      });
    } else {
      visit = await prisma.visit.update({
        where: { id: 1 },
        data: { count: visit.count + 1 },
      });
    }

    return NextResponse.json({ visits: visit.count });
  } catch (error) {
    console.error("Error incrementing visit count:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
