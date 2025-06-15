# Microfrontend Multi-Lodash Demo

A demonstration of how to load multiple versions of the same library (lodash) in a microfrontend architecture using **Module Federation**, **import maps**, and **global variables**.

## 🎯 Overview

This project shows how to:
- Load multiple versions of lodash simultaneously without conflicts
- Share dependencies across microfrontends efficiently
- Use import maps for centralized dependency management
- Implement Module Federation with Webpack 5



## 🚀 Features

- **✅ No Version Conflicts**: Multiple lodash versions coexist peacefully
- **✅ Centralized Loading**: Host loads all versions once via import maps
- **✅ Efficient Sharing**: No duplicate downloads, CDN cached
- **✅ Clean Separation**: Each remote uses its required version
- **✅ Simple Implementation**: Minimal code, maximum clarity

## 📁 Project Structure

```
microfrontend-multi-lodash/
├── host-app/                 # Main application (loads all versions)
│   ├── public/index.html     # Import maps configuration
│   ├── src/App.jsx          # Host component
│   ├── webpack.config.js    # Module Federation config
│   └── package.json
├── remote-app-a/            # Remote using lodash 4.17
│   ├── src/App.jsx          # Uses window.lodash17
│   ├── webpack.config.js    # Exposes components
│   └── package.json
└── remote-app-b/            # Remote using lodash 4.16
    ├── src/App.jsx          # Uses window.lodash16
    ├── webpack.config.js    # Exposes components
    └── package.json
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 16+ 
- npm 

### 1. Clone the repository
```bash
git clone https://github.com/saranyakannan/microfrontend-multi-lodash.git
cd microfrontend-multi-lodash
```

### 2. Install dependencies for all apps
```bash
# Install host dependencies
cd host-app
npm install

# Install remote-app-a dependencies  
cd ../remote-app-a
npm install

# Install remote-app-b dependencies
cd ../remote-app-b
npm install
```

### 3. Start all applications
Open **3 separate terminals**:

```bash
# Terminal 1 - Host App (port 3000)
cd host-app
npm start

# Terminal 2 - Remote App A (port 3001)  
cd remote-app-a
npm start

# Terminal 3 - Remote App B (port 3002)
cd remote-app-b  
npm start
```

### 4. Open the application
Navigate to: **http://localhost:3000**

## 🎮 How It Works

### Host App Loading Strategy
The host app uses **import maps** to load both lodash versions:

```html
<script type="importmap">
{
  "imports": {
    "lodash17": "https://cdn.skypack.dev/lodash@4.17.21",
    "lodash16": "https://cdn.skypack.dev/lodash@4.16.6"
  }
}
</script>

<script type="module">
import lodash17 from 'lodash17';
import lodash16 from 'lodash16';

window.lodash17 = lodash17; 
window.lodash16 = lodash16;
</script>
```

### Remote App Consumption
Each remote app consumes its required version:

```javascript
// Remote App A uses lodash 4.17
const capitalized = window.lodash17.map(data, window.lodash17.capitalize);

// Remote App B uses lodash 4.16  
const uppercased = window.lodash16.map(data, str => str.toUpperCase());
```

# Microfrontend Multi-Lodash Demo

A demonstration of how to load multiple versions of the same library (lodash) in a microfrontend architecture using **Module Federation**, **import maps**, and **global variables**.

## 🎯 Overview

This project shows how to:
- Load multiple versions of lodash simultaneously without conflicts
- Share dependencies across microfrontends efficiently
- Use import maps for centralized dependency management
- Implement Module Federation with Webpack 5

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        HOST APP                             │
│  ┌─────────────────────────────────────────────────────────┐│
│  │              Import Maps                                ││
│  │  lodash17: "lodash@4.17.21"                           ││
│  │  lodash16: "lodash@4.16.6"                            ││
│  └─────────────────────────────────────────────────────────┘│
│                          ↓                                  │
│  ┌─────────────────────────────────────────────────────────┐│
│  │              Global Variables                           ││
│  │  window.lodash17 = lodash@4.17.21                      ││
│  │  window.lodash16 = lodash@4.16.6                       ││
│  └─────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────┘
           ↓                              ↓
┌───────────────────────┐        ┌───────────────────────┐
│     REMOTE APP A      │        │     REMOTE APP B      │
│                       │        │                       │
│ Uses: window.lodash17 │        │ Uses: window.lodash16 │
│ Version: 4.17.21      │        │ Version: 4.16.6       │
└───────────────────────┘        └───────────────────────┘
```

## 🚀 Features

- **✅ No Version Conflicts**: Multiple lodash versions coexist peacefully
- **✅ Centralized Loading**: Host loads all versions once via import maps
- **✅ Efficient Sharing**: No duplicate downloads, CDN cached
- **✅ Clean Separation**: Each remote uses its required version
- **✅ Simple Implementation**: Minimal code, maximum clarity

## 📁 Project Structure

```
microfrontend-multi-lodash/
├── host-app/                 # Main application (loads all versions)
│   ├── public/index.html     # Import maps configuration
│   ├── src/App.jsx          # Host component
│   ├── webpack.config.js    # Module Federation config
│   └── package.json
├── remote-app-a/            # Remote using lodash 4.17
│   ├── src/App.jsx          # Uses window.lodash17
│   ├── webpack.config.js    # Exposes components
│   └── package.json
└── remote-app-b/            # Remote using lodash 4.16
    ├── src/App.jsx          # Uses window.lodash16
    ├── webpack.config.js    # Exposes components
    └── package.json
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn

### 1. Clone the repository
```bash
git clone https://github.com/saranyakannan/microfrontend-multi-lodash.git
cd microfrontend-multi-lodash
```

### 2. Install dependencies for all apps
```bash
# Install host dependencies
cd host-app
npm install

# Install remote-app-a dependencies  
cd ../remote-app-a
npm install

# Install remote-app-b dependencies
cd ../remote-app-b
npm install
```

### 3. Start all applications
Open **3 separate terminals**:

```bash
# Terminal 1 - Host App (port 3000)
cd host-app
npm start

# Terminal 2 - Remote App A (port 3001)  
cd remote-app-a
npm start

# Terminal 3 - Remote App B (port 3002)
cd remote-app-b  
npm start
```

### 4. Open the application
Navigate to: **http://localhost:3000**

## 🎮 How It Works

### Host App Loading Strategy
The host app uses **import maps** to load both lodash versions:

```html
<script type="importmap">
{
  "imports": {
    "lodash17": "https://cdn.skypack.dev/lodash@4.17.21",
    "lodash16": "https://cdn.skypack.dev/lodash@4.16.6"
  }
}
</script>

<script type="module">
import lodash17 from 'lodash17';
import lodash16 from 'lodash16';

window.lodash17 = lodash17; 
window.lodash16 = lodash16;
</script>
```

### Remote App Consumption
Each remote app consumes its required version:

```javascript
// Remote App A uses lodash 4.17
const capitalized = window.lodash17.map(data, window.lodash17.capitalize);

// Remote App B uses lodash 4.16  
const uppercased = window.lodash16.map(data, str => str.toUpperCase());
```

## 🔧 Key Technologies

- **[Module Federation](https://webpack.js.org/concepts/module-federation/)**: Webpack 5 feature for sharing code between applications
- **[Import Maps](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap)**: Native browser feature for mapping import specifiers
- **[Skypack CDN](https://www.skypack.dev/)**: Fast, reliable CDN for npm packages
- **React 18**: UI framework
- **Webpack 5**: Module bundler with federation support

## 🎯 Use Cases

This pattern is perfect for:

- **Legacy System Migration**: Different teams can upgrade dependencies at their own pace
- **Plugin Architecture**: Each plugin brings its required version
- **Gradual Modernization**: Migrate from old to new versions incrementally  
- **Dependency Isolation**: Prevent version conflicts in large applications
- **Team Autonomy**: Teams choose their preferred library versions

## 🚀 Benefits

1. **No Conflicts**: Multiple versions coexist without interference
2. **Performance**: Single load per version, CDN caching
3. **Flexibility**: Each team picks their optimal version
4. **Maintainability**: Centralized version management in host
5. **Scalability**: Easy to add more versions or remotes

## 🔍 Version Details

| App | Lodash Version | Global Variable | Use Case |
|-----|----------------|-----------------|----------|
| Host | 4.17.21 & 4.16.6 | `window.lodash17` & `window.lodash16` | Loads all versions |
| Remote A | 4.17.21 | `window.lodash17` | Uses latest features |
| Remote B | 4.16.6 | `window.lodash16` | Needs stable/older version |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit: `git commit -m 'Add some feature'`
5. Push: `git push origin feature-name`
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♀️ Questions?

If you have questions or need help:
- Open an [issue](https://github.com/saranyakannan/microfrontend-multi-lodash/issues)
- Check the [discussions](https://github.com/saranyakannan/microfrontend-multi-lodash/discussions)

---

**⭐ If this helped you, please star the repository!**

## 🎯 Use Cases

This pattern is perfect for:

- **Legacy System Migration**: Different teams can upgrade dependencies at their own pace
- **Plugin Architecture**: Each plugin brings its required version
- **Gradual Modernization**: Migrate from old to new versions incrementally  
- **Dependency Isolation**: Prevent version conflicts in large applications
- **Team Autonomy**: Teams choose their preferred library versions

## 🚀 Benefits

1. **No Conflicts**: Multiple versions coexist without interference
2. **Performance**: Single load per version, CDN caching
3. **Flexibility**: Each team picks their optimal version
4. **Maintainability**: Centralized version management in host
5. **Scalability**: Easy to add more versions or remotes

## 🔍 Version Details

| App | Lodash Version | Global Variable | Use Case |
|-----|----------------|-----------------|----------|
| Host | 4.17.21 & 4.16.6 | `window.lodash17` & `window.lodash16` | Loads all versions |
| Remote A | 4.17.21 | `window.lodash17` | Uses latest features |
| Remote B | 4.16.6 | `window.lodash16` | Needs stable/older version |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit: `git commit -m 'Add some feature'`
5. Push: `git push origin feature-name`
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♀️ Questions?

If you have questions or need help:
- Open an [issue](https://github.com/saranyakannan/microfrontend-multi-lodash/issues)
- Check the [discussions](https://github.com/saranyakannan/microfrontend-multi-lodash/discussions)

---

**⭐ If this helped you, please star the repository!**
