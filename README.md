# Sync Board

Sync Board is a modern web application designed to simplify content sharing and synchronization across multiple devices. Whether you're working on different computers, tablets, or mobile devices, Sync Board provides a seamless way to copy, paste, and share text content instantly.

## About

This application serves as a universal clipboard that works across any device with internet access. Users can create boards with custom titles and content, making it perfect for:
- Transferring text between devices
- Sharing code snippets with colleagues
- Creating temporary notes accessible from anywhere
- Collaborating on content across different platforms

Built with modern web technologies, Sync Board offers a clean, responsive interface that works flawlessly on desktop and mobile devices.

## 🔥 Real-time Features

Sync Board now includes **real-time synchronization** powered by Firebase:

- **Live Updates**: See changes instantly across all connected devices
- **No Refresh Required**: Updates appear automatically without page reloads  
- **Offline Support**: Continue working even without internet connection
- **Conflict Resolution**: Firebase handles simultaneous edits gracefully
- **Real-time Hooks**: Use `useRealtimeBoards` for live data in your components

## Features

- **Create & Manage Boards**: Create, edit, and delete boards with custom titles and content
- **Cross-Device Sync**: Access your boards from any device with internet connection
- **Instant Sharing**: Share boards with unique links for easy collaboration
- **Seamless Copy/Paste**: Copy and paste content effortlessly across devices
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Real-time Updates**: Changes are instantly synchronized across all devices
- **Clean Interface**: Intuitive and user-friendly design for better productivity

## Technologies Used

- **Frontend**: Next.js 15, React, Tailwind CSS
- **Backend**: Node.js API Routes, Firebase Firestore
- **Database**: Firebase Firestore (NoSQL)
- **Real-time Updates**: Firebase real-time listeners
- **Authentication**: Firebase Auth (ready for future features)
- **Styling**: Tailwind CSS for responsive design
- **Icons**: React Icons
- **Development**: ESLint for code quality

## Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- Firebase project (free tier available)
- Git

### Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/JanishkaM/syncboard.git
   cd syncboard
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Firebase:**
   - Create a new project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Firestore Database
   - Copy your Firebase configuration from Project Settings

4. **Set up environment variables:**
   Create a `.env.local` file in the root directory and add the following:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```
   
   **Note**: Replace the values with your actual Firebase configuration.

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open the application:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## 🔄 Migration from MongoDB Version

If you're upgrading from Sync Board v1.0.0 (MongoDB version), please follow the [Firebase Migration Guide](FIREBASE_MIGRATION.md) for a complete step-by-step migration process.

## Features

- **Create & Manage Boards**: Create, edit, and delete boards with custom titles and content
- **Cross-Device Sync**: Access your boards from any device with internet connection
- **Real-time Updates**: Live synchronization across all devices using Firebase listeners
- **Instant Sharing**: Share boards with unique links for easy collaboration
- **Seamless Copy/Paste**: Copy and paste content effortlessly across devices
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Clean Interface**: Intuitive and user-friendly design for better productivity
- **Offline Ready**: Firebase provides offline persistence for better user experience

## Development

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

### Project Structure

```
syncboard/
├── app/                    # Next.js App Router
│   ├── api/               # API routes (Firebase integration)
│   ├── addNewBoard/       # Add board page
│   ├── editBoard/         # Edit board pages
│   └── globals.css        # Global styles
├── components/            # Reusable React components
├── hooks/                 # Custom React hooks
│   ├── useFirebaseBoards.js   # Firebase CRUD operations
│   └── useRealtimeBoards.js   # Real-time Firebase listeners
├── libs/                  # Utility libraries
│   ├── firebase.js        # Firebase configuration
│   └── firebaseService.js # Firebase service layer
└── public/               # Static assets
```

### Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Deployment

The application can be deployed on various platforms:

- **Vercel** (Recommended for Next.js) - Automatically detects Firebase environment variables
- **Netlify** - Configure Firebase environment variables in build settings
- **Railway** - Set up Firebase configuration in environment variables
- **Firebase Hosting** - Native Firebase hosting with seamless integration

### Firebase Configuration for Deployment
Make sure to set up your Firebase environment variables in your deployment platform:
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Support

If you find this project helpful, please consider giving it a ⭐ on GitHub!

For issues and feature requests, please create an issue in the [GitHub repository](https://github.com/JanishkaM/syncboard/issues).