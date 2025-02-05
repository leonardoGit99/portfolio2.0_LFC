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

    if (!visit) {
      // Si no existe el registro, lo creamos
      visit = await prisma.visit.create({
        data: { id: 1, count: 1 },
      });
    } else {
      // Si ya existe, incrementamos el contador
      visit = await prisma.visit.update({
        where: { id: 1 },
        data: { count: visit.count + 1 },
      });
    }

    return NextResponse.json({ visits: visit.count });
  } catch (error) {
    console.error("Error updating visit count:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST() {
  return NextResponse.json(
    { message: "POST method is not supported" },
    { status: 405 }
  );
}
