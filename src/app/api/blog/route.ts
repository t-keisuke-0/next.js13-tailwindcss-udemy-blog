import { supabase } from "@/utils/supabaseClient";
import { NextResponse } from "next/server";

export async function GET() {
    const { data, error } = await supabase.from('posts').select('*');

    if (error) {
        return NextResponse.json(error);
    }

    return NextResponse.json(data, {status: 200});
}

export async function POST(req: Request) {
    const { id, title, content } = await req.json()

    const { data, error } = await supabase
        .from('posts')
        .insert([{ id, title, content, createdAt: new Date().toISOString() }]);

    if (error) {
        return NextResponse.json(error);
    }

    return NextResponse.json(data, {status: 201});
}