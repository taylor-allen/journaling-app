# MindFrame - AI-Powered Journaling Web App

A secure, privacy-focused journaling application built with React, TailwindCSS, Flask, and MongoDB. MindFrame helps users reflect on their thoughts and emotions with AI-powered insights and mood tracking capabilities.

## 🌟 Features

### Phase 1: Core Functionality (MVP)
- ✅ **Secure Authentication**: User registration and login with JWT tokens
- ✅ **Private Journal Entries**: Create, read, update, and delete journal entries
- ✅ **End-to-End Encryption**: All journal content is encrypted before storage
- ✅ **Mood Tracking**: Rate your mood on a 1-5 scale with each entry
- ✅ **Responsive Design**: Works seamlessly on desktop and mobile devices

### Upcoming Features
- 🔄 **AI Thought Reframing**: Get gentle suggestions to reframe negative thoughts
- 🔄 **Writing Prompts**: Thoughtful prompts when you're stuck
- 🔄 **Mood Analytics**: Visual graphs showing emotional trends over time
- 🔄 **Entry Tagging**: Organize entries with custom tags
- 🔄 **Data Export**: Export your journal data anytime

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript (ES6+)** - No TypeScript complexity

### Backend
- **Flask** - Lightweight Python web framework
- **PyMongo** - MongoDB integration
- **JWT** - Secure authentication
- **Werkzeug** - Password hashing

### Database
- **MongoDB** - NoSQL database for flexible data storage

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-service orchestration

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm
- Python 3.9+
- MongoDB
- Docker (optional)

### Option 1: Docker Compose (Recommended)

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd journaling-app
   ```

2. **Start all services**
   ```bash
   docker-compose up --build
   ```

3. **Initialize the database**
   ```bash
   docker-compose exec backend python scripts/setup_db.py
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - MongoDB: localhost:27017

### Option 2: Manual Setup

#### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Create virtual environment**
   ```bash
   python -m venv venv       # On Mac: python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\\Scripts\\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set environment variables**
   ```bash
   export MONGO_URI="mongodb://localhost:27017/journaling_app"
   export SECRET_KEY="your-secret-key-change-in-production"
   export ENCRYPTION_KEY="your-encryption-key-change-in-production"
   ```

5. **Start the Flask server**
   ```bash
   python app.py
   ```

#### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

#### Database Setup

1. **Start MongoDB**
   ```bash
   mongod
   ```

2. **Initialize database with sample data**
   ```bash
   cd scripts
   python setup_db.py
   ```

## 🔐 Security Features

- **Password Hashing**: Passwords are hashed using Werkzeug's secure methods
- **JWT Authentication**: Stateless authentication with configurable expiration
- **Content Encryption**: Journal entries are encrypted using Fernet symmetric encryption
- **CORS Protection**: Configured for secure cross-origin requests
- **Input Validation**: Server-side validation for all user inputs

## 📱 Usage

### Getting Started
1. **Sign Up**: Create a new account with your email and password
2. **Log In**: Access your personal journal dashboard
3. **Write**: Create your first journal entry with an optional mood rating
4. **Reflect**: View, edit, or delete your past entries anytime

### Test Account
For testing purposes, use these credentials:
- **Email**: test@example.com
- **Password**: password123

## 🏗️ Project Structure

```
journaling-app/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── auth/        # Authentication components
│   │   │   ├── dashboard/   # Dashboard components
│   │   │   ├── journal/     # Journal entry components
│   │   │   └── layout/      # Layout components
│   │   ├── App.jsx          # Main App component
│   │   └── index.css        # Tailwind CSS styles
│   ├── package.json
│   └── tailwind.config.js
├── backend/                 # Flask backend
│   ├── app.py              # Main Flask application
│   ├── requirements.txt    # Python dependencies
│   └── Dockerfile
├── scripts/                # Database scripts
│   └── setup_db.py        # Database initialization
├── docker-compose.yml     # Docker services configuration
└── README.md
```

## 🔧 Configuration

### Environment Variables

#### Backend (.env)
```env
MONGO_URI=mongodb://localhost:27017/journaling_app
SECRET_KEY=your-secret-key-change-in-production
ENCRYPTION_KEY=your-encryption-key-change-in-production
PORT=5000
```

#### Frontend (.env)
```env
REACT_APP_API_URL=http://localhost:5000
```

### Tailwind Configuration
The project uses a custom Tailwind configuration with a carefully designed color palette optimized for journaling and mental wellness.

## 🧪 Testing

### Run Frontend Tests
```bash
cd frontend
npm test
```

### Test API Endpoints
```bash
# Test authentication
curl -X POST http://localhost:5000/api/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{"email": "test@example.com", "password": "password123"}'

# Test protected route (replace TOKEN with actual JWT)
curl -X GET http://localhost:5000/api/entries \\
  -H "Authorization: Bearer TOKEN"
```

## 🚀 Deployment

### Production Considerations
1. **Environment Variables**: Use secure, randomly generated keys
2. **HTTPS**: Enable SSL/TLS in production
3. **Database**: Use MongoDB Atlas or a managed database service
4. **Monitoring**: Implement logging and error tracking
5. **Backup**: Regular database backups for user data protection

### Deploy to Vercel (Frontend)
```bash
cd frontend
npm run build
npx vercel --prod
```

### Deploy to Heroku (Backend)
```bash
cd backend
git init
heroku create your-app-name
git add .
git commit -m "Initial commit"
git push heroku main
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style and structure
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

## 📋 API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - Create new user account
- `POST /api/auth/login` - User login
- `GET /api/auth/verify` - Verify JWT token

### Journal Entry Endpoints
- `GET /api/entries` - Get all user entries
- `GET /api/entries/:id` - Get specific entry
- `POST /api/entries` - Create new entry
- `PUT /api/entries/:id` - Update entry
- `DELETE /api/entries/:id` - Delete entry

## 🐛 Troubleshooting

### Common Issues

**MongoDB Connection Error**
```bash
# Make sure MongoDB is running
mongod --dbpath /path/to/your/db
```

**Port Already in Use**
```bash
# Kill process on port 3000 or 5000
lsof -ti:3000 | xargs kill -9
lsof -ti:5000 | xargs kill -9
```

**CORS Issues**
- Ensure the backend CORS configuration includes your frontend URL
- Check that API requests use the correct backend URL

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with love for mental health and self-reflection
- Inspired by the power of journaling for emotional well-being
- Thanks to the open-source community for the amazing tools and libraries

## 📞 Support

If you encounter any issues or have questions:
1. Check the [Issues](https://github.com/your-username/journaling-app/issues) page
2. Create a new issue with detailed information
3. Join our community discussions

---

**Happy Journaling! 📝✨**

*Remember: Your thoughts and feelings are valid. This app is here to support your journey of self-discovery and emotional growth.*
