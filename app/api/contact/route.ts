import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/schema";

/** Mock contact API — logs payload, returns success. Replace with real provider later. */
export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = contactSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          message: "Validation failed",
          errors: parsed.error.flatten(),
        },
        { status: 400 },
      );
    }

    // TODO: integrate email / CRM
    console.info("[contact mock]", parsed.data);

    return NextResponse.json({
      ok: true,
      message: "Accepted",
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body" },
      { status: 400 },
    );
  }
}
