import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Ruta del archivo donde se almacenará el contador de visitas
const visitsFilePath = path.resolve("visits.json");

async function getVisitCount() {
  try {
    const data = fs.readFileSync(visitsFilePath, "utf8");
    const { visits } = JSON.parse(data);
    return visits;
  } catch (error) {
    // Si el archivo no existe, retornamos 0
    return 0;
  }
}

async function setVisitCount(visits: number) {
  try {
    fs.writeFileSync(visitsFilePath, JSON.stringify({ visits }), "utf8");
  } catch (error) {
    console.error("Error writing visit count:", error);
  }
}

export async function GET() {
  let visitCount = await getVisitCount();
  visitCount += 1;
  await setVisitCount(visitCount);
  
  return NextResponse.json({ visits: visitCount });
}

export async function POST() {
  return NextResponse.json({ message: "POST method is not supported" }, { status: 405 });
}
