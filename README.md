# ConnectPpl

**ConnectPpl** is a connecting app designed to facilitate communication between people. It allows users to create rooms, send messages, and interact through various communication channels. This app aims to make it easier for individuals to connect, collaborate, and communicate effectively in real-time.

## Features

- **User Registration and Authentication**: Secure user authentication using JWT (JSON Web Tokens).
- **Create Rooms**: Users can create rooms to engage in group conversations or individual chats.
- **Messaging**: Send and receive messages in real-time.
- **Audio and Video Calls**: Real-time audio and video calling features for enhanced communication.
- **User Profiles**: Users can update their profile, including their avatar and display name.
- **Real-time Updates**: Instant notification and updates for new messages and calls.

## Tech Stack

- **Frontend**: React.js (with hooks and Context API)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Real-time Communication**: Socket.IO
- **Authentication**: JWT (JSON Web Tokens)
- **WebRTC** for Audio and Video calls

## Installation

Follow the instructions below to get started with the project.

### Prerequisites

Make sure you have the following installed:

- Node.js (version >=14)
- npm or yarn
- MongoDB

### Clone the Repository

```bash
git clone https://github.com/yourusername/connectppl.git
cd connectppl
```
### Backend Setup
```bash
cd backend
npm install


PORT=5004
MONGO_URI=mongodb://localhost:27017/connectppl
JWT_SECRET=your_secret_key

Start the backend server:
npm run dev
```
### Frontent Setup
```bash
Navigate to the frontend directory.
cd frontend
npm install


Start the frontend development server:
npm start
```
## Usage

Once both the backend and frontend servers are running:

1. Navigate to `http://localhost:3000` in your browser to access the app.
2. Register or login to start using the app.
3. Create rooms and start chatting with other users.
4. Make real-time audio or video calls directly from the chat rooms.

## Contributing

We welcome contributions to the **ConnectPpl** project. To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add feature'`).
5. Push to the branch (`git push origin feature-name`).
6. Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Socket.IO](https://socket.io/)
- [WebRTC](https://webrtc.org/)







