import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Check environment variables
    const config = {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ? 'exists' : 'missing',
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'missing',
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'missing',
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'missing',
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || 'missing',
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ? 'exists' : 'missing'
    };

    return NextResponse.json({ 
      message: "Test endpoint",
      firebaseConfig: config,
      nodeEnv: process.env.NODE_ENV
    });
  } catch (error) {
    return NextResponse.json({ 
      message: "Error in test endpoint", 
      error: error.message 
    }, { status: 500 });
  }
}
