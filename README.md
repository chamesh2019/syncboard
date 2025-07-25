# Sync Board

Sync Board is a modern web application designed to simplify content sharing and synchronization across multiple devices. Whether you're working on different computers, tablets, or mobile devices, Sync Board provides a seamless way to copy, paste, and share text content instantly.

## About

This application serves as a universal clipboard that works across any device with internet access. Users can create boards with custom titles and content, making it perfect for:
- Transferring text between devices
- Sharing code snippets with colleagues
- Creating temporary notes accessible from anywhere
- Collaborating on content across different platforms

Built with modern web technologies, Sync Board offers a clean, responsive interface that works flawlessly on desktop and mobile devices.

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
- **Backend**: Node.js API Routes, MongoDB, Mongoose
- **Database**: MongoDB Atlas
- **Styling**: Tailwind CSS for responsive design
- **Icons**: React Icons
- **Development**: ESLint for code quality

## Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account or local MongoDB installation
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

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following:
   ```env
   MONGO_URI=<your-mongodb-connection-string>
   APP_URL_API=http://localhost:3000/api/
   ```
   
   **Note**: Replace `<your-mongodb-connection-string>` with your actual MongoDB connection string.

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open the application:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

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
│   ├── api/               # API routes
│   ├── addNewBoard/       # Add board page
│   ├── editBoard/         # Edit board pages
│   └── globals.css        # Global styles
├── components/            # Reusable React components
├── libs/                  # Utility libraries
├── models/                # MongoDB models
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

- **Vercel** (Recommended for Next.js)
- **Netlify**
- **Railway**
- **Heroku**

Make sure to set up your environment variables in your deployment platform.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Support

If you find this project helpful, please consider giving it a ⭐ on GitHub!

For issues and feature requests, please create an issue in the [GitHub repository](https://github.com/JanishkaM/syncboard/issues).