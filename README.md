# 📋 Todo New Tab

**A Sleek Todo List Extension Right in Your Browser’s New Tab**

Transform your Chrome new-tab into a productive workspace. Create, prioritize, complete, and delete tasks seamlessly—then jump back to your familiar Google page with one click.

---

## 🌟 Key Features

- 🆕 **Native New-Tab Override**  
  Your tasks greet you every time you open a new tab.

- 📝 **Add & Delete Todos**  
  Quickly jot down tasks, assign priorities (Low, Medium, High), and remove them when done.

- ✅ **Mark as Done**  
  Check off completed tasks with a subtle strike-through animation.

- 🎨 **Priority-Color Coding**  
  Cards change border colors (green, yellow, red) based on priority.

- 🎵 **Smooth Animations**  
  Framer Motion handles entrance, exit, and layout transitions for a polished feel.

- 🚀 **One-Click Google Redirect**  
  A gradient-bordered “Google Search” button at top-center opens Chrome’s built-in new-tab page (`chrome://new-tab-page`) and closes the todo tab.

- 💾 **Persistent Storage**  
  Tasks are saved locally via `chrome.storage`, so your list survives browser restarts.

- 🛡️ **Privacy-First**  
  All data stays in your browser—no external servers involved.

---

## 🚀 Installation

### Chrome Web Store (Future)
1. Publish your extension under the name **Todo New Tab**.  
2. Users click **Add to Chrome** → **Add extension**.  
3. Every new tab shows your todo interface.

### Developer Mode
```bash
# Clone the repo and install
git clone https://github.com/sschoudhary30/todo_chrome_extension.git
cd todo-chrome-extension
npm install
# Build and load
npm run build
# In Chrome, go to chrome://extensions, enable Developer mode, and Load unpacked → select the "dist/" folder
