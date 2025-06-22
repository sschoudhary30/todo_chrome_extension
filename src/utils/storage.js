// Wrap chrome.storage calls, handle fallbacks
export const getTodos = () =>
  new Promise((resolve) => {
    chrome.storage.local.get(["todos"], (res) => resolve(res.todos || []));
  });
export const saveTodos = (list) => chrome.storage.local.set({ todos: list });
