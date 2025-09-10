# 🌟 Sovereign Chain - Pitch Deck Website

A modern, responsive pitch deck website showcasing Sovereign Chain's revolutionary blockchain logistics platform.

## 🚀 Features

- **4 Beautiful Slides**: Welcome, Features, Technology, and Contact
- **Gradient Backgrounds**: Professional gradient designs instead of video backgrounds
- **Smooth Animations**: Fade-in effects and smooth transitions
- **Mobile Responsive**: Optimized for all device sizes
- **Keyboard Navigation**: Use arrow keys, spacebar, Home/End keys
- **Touch Support**: Swipe navigation on mobile devices
- **Auto-play**: Automatic slide progression (8-second intervals)
- **Progress Bar**: Visual progress indicator
- **Slide Indicators**: Clickable dots for quick navigation

## 📋 Navigation Controls

### Keyboard Shortcuts
- `→` or `↓` or `Space`: Next slide
- `←` or `↑`: Previous slide
- `Home`: Go to first slide
- `End`: Go to last slide

### Mouse/Touch
- Click navigation buttons at the bottom
- Click slide indicator dots (top right)
- Swipe left/right on mobile devices

## 🏗️ Project Structure

```
pith-deck/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # All styling and responsive design
├── js/
│   └── script.js      # Interactive functionality
├── assets/            # Future assets (images, icons)
├── pith              # Original HTML file (backup)
└── README.md         # This file
```

## 🎨 Design Features

### Gradient Backgrounds
- **Slide 1 (Welcome)**: Blue-purple gradient (#667eea → #764ba2)
- **Slide 2 (Features)**: Pink-red gradient (#f093fb → #f5576c)
- **Slide 3 (Technology)**: Blue-cyan gradient (#4facfe → #00f2fe)
- **Slide 4 (Contact)**: Green-turquoise gradient (#43e97b → #38f9d7)

### Typography
- Modern font stack: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- Responsive font sizes that scale on mobile
- Text shadows for better readability over gradient backgrounds

### Interactive Elements
- Hover effects on buttons
- Active states for current slide indicators
- Smooth transitions between slides
- Glass-morphism effects on feature cards

## 🌐 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS/Android)

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/jaquelinejaque/pith-deck.git
   cd pith-deck
   ```

2. **Serve the website**:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser**:
   Navigate to `http://localhost:8000`

## 📱 Mobile Optimization

The website is fully responsive and optimized for:
- **Tablets**: 768px and below
- **Mobile phones**: 480px and below
- **Touch gestures**: Swipe navigation
- **Viewport scaling**: Proper meta tags for mobile

## 🔧 Customization

### Adding More Slides
1. Add a new slide div in `index.html`:
   ```html
   <div class="slide" id="slide5">
       <div class="content">
           <h1>Your Title</h1>
           <p>Your content...</p>
       </div>
   </div>
   ```

2. Add a gradient background in `css/style.css`:
   ```css
   #slide5 {
       background: linear-gradient(135deg, #color1, #color2);
   }
   ```

3. Update `totalSlides` in `js/script.js` and add a navigation button.

### Changing Colors
Modify the gradient backgrounds in `css/style.css` by changing the hex color values in the `linear-gradient` functions.

### Customizing Content
Update the content in the `.content` divs within each slide in `index.html`.

## 📊 Performance

- **Fast Loading**: No external dependencies or large assets
- **Optimized CSS**: Efficient animations and transitions
- **Minimal JavaScript**: Clean, efficient code
- **Mobile-First**: Responsive design for all devices

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

For questions or support regarding this pitch deck website:

- **Email**: contact@sovereignchain.io
- **Phone**: +1 (555) 123-CHAIN
- **Website**: www.sovereignchain.io

---

*Built with ❤️ for modern web standards and accessibility*