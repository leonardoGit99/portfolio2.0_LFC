import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// Crear una instancia de Prisma Client
const prisma = new PrismaClient();

export async function GET() {
  try {
    // Obtener el contador de visitas
    let visit = await prisma.visit.findUnique({
      where: { id: 1 },
    });



    return NextResponse.json({ visits: visit?.count });
  } catch (error) {
    console.error("Error updating visit count:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
