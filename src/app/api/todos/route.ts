import { connectDB } from "@/lib/db";
import Todo from "@/models/Todo";
import { NextResponse } from "next/server";

// Ensure DB connection only if needed
async function ensureDB() {
  if (!(global as any)?.mongoose || !(global as any)?.mongoose.conn) {
    await connectDB();
  }
}

// GET: Fetch all todos
export async function GET() {
  await connectDB(); // Ensures connection only when needed
  try {
    console.log("Fetching todos...");
    const todos = await Todo.find({});
    console.log("Todos fetched successfully", todos);
    return NextResponse.json(todos);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching todos" }, { status: 500 });
  }
}

// POST: Create a new todo
export async function POST(req: Request) {
  await ensureDB();
  try {
    const { title } = await req.json();
    if (!title.trim()) {
      return NextResponse.json({ message: "Title is required" }, { status: 400 });
    }

    const newTodo = await Todo.create({ title, completed: false });
    return NextResponse.json(newTodo);
  } catch (error) {
    return NextResponse.json({ message: "Error creating todo" }, { status: 500 });
  }
}

// DELETE: Remove all todos
export async function DELETE() {
  await ensureDB();
  try {
    await Todo.deleteMany({});
    return NextResponse.json({ message: "All todos deleted" });
  } catch (error) {
    return NextResponse.json({ message: "Error deleting todos" }, { status: 500 });
  }
}
