import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(254),
  message: z.string().min(20).max(5000),
  website: z.string().max(0).optional(),
  formStart: z.number(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ success: false, message: 'Invalid input' }, { status: 400 });
    }
    const { formStart } = parsed.data;
    const elapsed = Date.now() - Number(formStart);

    if (elapsed < 2500) {
      return NextResponse.json({ success: false, message: 'Suspicious timing' }, { status: 400 });
    }

    // Mock adapter: pretend to forward to ticketing/email
    await new Promise((r) => setTimeout(r, 150));

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
