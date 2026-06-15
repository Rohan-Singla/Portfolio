import { COOKIE_NAME, getExpectedToken } from "@/lib/auth";
import { getPortfolioData, savePortfolioData, type PortfolioData } from "@/lib/portfolio-data";
import { NextRequest, NextResponse } from "next/server";

function isAuthorized(req: NextRequest) {
  return req.cookies.get(COOKIE_NAME)?.value === getExpectedToken();
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const data = getPortfolioData();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Failed to read data" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const data: PortfolioData = await req.json();
    savePortfolioData(data);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to save data" }, { status: 500 });
  }
}
