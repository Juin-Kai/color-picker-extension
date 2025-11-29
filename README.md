# Color Picker Chrome Extension

A lightweight, minimalistic Chrome extension that allows you to pick any color from your screen using the native browser EyeDropper API. It automatically copies the HEX code to your clipboard.

## Features

- Pixel Perfect: Pick colors from any pixel on your screen (even outside the browser window).
- Clipboard Support: Easily copy the detected color value to your clipboard with a dedicated button.
- Lightweight: Built with vanilla HTML, CSS and JavaScript. No external libraries.
- Privacy Focused: Runs entirely locally with no tracking.

## Install Locally

Since this is a custom extension not yet on the Chrome Web Store, you need to load it in "Developer Mode".

1. Clone the project:

```bash
  git clone https://github.com/Juin-Kai/color-picker-extension.git
```

_(Or simply download the project folder to your computer)_

2. Open Chrome Extensions Page:

   - Open a browser.
   - Go to the Extensions page by entering chrome://extensions in a new tab.

3. Enable Developer Mode:

   - Click the toggle switch next to Developer mode in the top right corner.

4. Load the Extension:

   - Click the **Load unpacked** button.
   - Select the extension directory.

5. Pin the extension:

   - Click the "Puzzle Piece" icon in your Chrome toolbar.
   - Find the "Color Picker" and click the pin icon to keep it visible.

## How to Use

1. Click the extension icon in your toolbar.

2. Click the **Pick New Color** button.

3. A magnifying glass will appear. Move your mouse to capture any pixels.

4. Click to select the color.

5. Click the **Copy All to Clipboard** button to copy to your clipboard.

6. Remove any color by clicking the **X** button next to it.

## Troubleshooting

- "EyeDropper API not supported": This extension relies on the modern EyeDropper API, It works on Chrome, Edge, and Opera. It may not work on Firefox or older browser versions.
