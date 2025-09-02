# 🎵 React Music Player

A beautiful and responsive music player built with React and Tailwind CSS. Features a modern UI with playlist management, progress controls, volume adjustment, and smooth animations.

![React Music Player](https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=1200&h=630&fit=crop)

## 🌟 Live Demo

**[https://music-player-subash.netlify.app/](https://music-player-subash.netlify.app/)**

## ✨ Features

- 🎶 **Playlist Management** - Browse and select from multiple songs
- ⏯️ **Play/Pause Controls** - Intuitive music controls
- 📊 **Progress Bar** - Interactive seeking with visual progress
- 🔊 **Volume Control** - Adjustable volume with mute functionality
- 🎨 **Modern UI** - Clean, responsive design with Tailwind CSS
- 📱 **Mobile Friendly** - Fully responsive across all devices
- ⚡ **Fast Performance** - Built with Vite for optimal performance
- 🎵 **Tamil Songs Collection** - Curated selection of Tamil music

## 🛠️ Built With

- **React 18** - Frontend framework
- **Tailwind CSS** - Styling and responsive design
- **React Icons** - Beautiful icons
- **Vite** - Build tool and development server
- **Netlify** - Deployment platform

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   
bash
   git clone https://github.com/your-userInstall dependenciesgit
   cd react-music-player
  

2. **Install dependencies**
   
bash
   npm install
  

3. **Start the development server**
   
bash
   npm run dev
  

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

bash
npm run build

## 📁 Project Structure

src/
├── components/
│   ├── Player.jsx          # Main player controls
│   ├── SongList.jsx        # Playlist sidebar
│   ├── ProgressBar.jsx     # Progress indicator
│   └── VolumeControl.jsx   # Volume slider
├── hooks/
│   └── useAudio.js         # Custom audio hook
├── data/
│   └── songs.js            # Song data
├── App.jsx                 # Main component
└── main.jsx                # Entry point

## 🎨 Customization

### Adding New Songs
Edit `src/data/songs.js`:
javascript
{
  id: 14,
  title: "Your Song Title",
  artist: "Artist Name",
  cover: "image-url.jpg",
  url: "/songs/your-song.mp3",
  duration: 240 // in seconds
}

### Styling
Modify Tailwind classes in components or edit `src/index.css` for custom styles.

## 🌐 Deployment

The app is deployed on Netlify. To deploy your own version:

1. Fork this repository
2. Connect your Netlify account to your GitHub
3. Deploy with build command: `npm run build`
4. Publish directory: `dist`

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

**Subash M R**  
- Portfolio: [https://bit.ly/4ls0iwK]
- GitHub: [@M-R-Subash](https://github.com/M-R-Subash)
- Email: mrsubash1615@gmail.com

---

⭐ Star this repo if you found it helpful!
