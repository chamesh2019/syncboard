import FirebaseBoardService from "@/libs/firebaseService";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    if (!request.body) {
      return NextResponse.json({ message: "Request body is required" }, { status: 400 });
    }
    const { title, content } = await request.json();
    
    const boardId = await FirebaseBoardService.createBoard({ title, content });
    return NextResponse.json({ 
      message: "Board created successfully", 
      id: boardId 
    }, { status: 201 });
  } catch (error) {
    console.error("Error creating board:", error);
    return NextResponse.json({ message: "Failed to create board" }, { status: 500 });
  }
};

export async function GET(request) {
  try {
    if (request.nextUrl.searchParams.get("id")) {
      const id = request.nextUrl.searchParams.get("id");
      const board = await FirebaseBoardService.getBoardById(id);
      if (!board) {
        return NextResponse.json({ message: "Board not found" }, { status: 404 });
      }
      return NextResponse.json({ board });
    }
    
    const boards = await FirebaseBoardService.getAllBoards();
    return NextResponse.json({ boards });
  } catch (error) {
    console.error("Error fetching boards:", error);
    return NextResponse.json({ message: "Failed to fetch boards", error: error.message }, { status: 500 });
  }
};

export async function PUT(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
      return NextResponse.json({ message: "Board ID is Not found" }, { status: 404 });
    }
    const { newTitle: title, newContent: content } = await request.json();
    
    await FirebaseBoardService.updateBoard(id, { title, content });
    return NextResponse.json({ message: "Board updated successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error updating board:", error);
    return NextResponse.json({ message: "Failed to update board" }, { status: 500 });
  }

}

export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
      return NextResponse.json({ message: "Board ID is required" }, { status: 400 });
    }
    
    await FirebaseBoardService.deleteBoard(id);
    return NextResponse.json({ message: "Board deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting board:", error);
    return NextResponse.json({ message: "Failed to delete board" }, { status: 500 });
  }
}