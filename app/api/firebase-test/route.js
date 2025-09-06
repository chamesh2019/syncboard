import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Test Firebase import and initialization
    const { db } = await import('@/libs/firebase');
    console.log('Firebase db imported successfully');
    
    // Test Firestore connection
    const { collection, getDocs } = await import('firebase/firestore');
    console.log('Firestore methods imported successfully');
    
    const boards = await getDocs(collection(db, 'boards'));
    console.log('Firestore query executed successfully');
    
    const boardsData = [];
    boards.forEach((doc) => {
      boardsData.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return NextResponse.json({ 
      message: "Firebase test successful",
      boardCount: boardsData.length,
      boards: boardsData
    });
  } catch (error) {
    console.error('Firebase test error:', error);
    return NextResponse.json({ 
      message: "Firebase test failed", 
      error: error.message,
      stack: error.stack
    }, { status: 500 });
  }
}
