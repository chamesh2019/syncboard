import connectMongoDB from "@/libs/mongodb";
import Board from "@/models/board";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, content } = await request.json();
  await connectMongoDB();
  await Board.create({ title, content });
  return NextResponse.json({ message: "Board created successfully" }, { status: 201 });
};

export async function GET(request) {
  await connectMongoDB();
  if(request.nextUrl.searchParams.get("id")){
    const id = request.nextUrl.searchParams.get("id");
    const board = await Board.findById(id);
    if (!board) {
      return NextResponse.json({ message: "Board not found" }, { status: 404 });
    }
    return NextResponse.json({ board });
  }
  const boards = await Board.find();
  if (!boards) {
    return NextResponse.json({ message: "No boards found" }, { status: 404 });
  }
  return NextResponse.json({ boards });
};

export async function PUT(request) {
  const id = request.nextUrl.searchParams.get("id");
  if (!id) {
    return NextResponse.json({ message: "Board ID is Not found" }, { status: 404 });
  }
  const {newTitle : title, newContent : content} = await request.json();
  await connectMongoDB();
  await Board.findByIdAndUpdate(id, { title, content });
  return NextResponse.json({ message: "Board updated successfully" }, { status: 200 });

}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  if (!id) {
    return NextResponse.json({ message: "Board ID is required" }, { status: 400 });
  }
  await connectMongoDB();
  await Board.findByIdAndDelete(id);
  return NextResponse.json({ message: "Board deleted successfully" }, { status: 200 });
}