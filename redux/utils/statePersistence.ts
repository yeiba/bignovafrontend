// Utility for safely parsing JSON
export const safeJSONParse = (str: string | null, fallback = {}) => {
  if (!str) return fallback;
  try {
    return JSON.parse(str);
  } catch (err) {
    console.error("Failed to parse stored state:", err);
    return fallback;
  }
};

// Load state from localStorage
export const loadState = () => {
  if (typeof window === "undefined") return undefined;

  const storedState = localStorage.getItem("applicationState");
  const fullState = safeJSONParse(storedState);

  return {
    article: fullState?.article || {},
    user: fullState?.user || {},
  };
};

// Save state to localStorage
export const saveState = (state: any) => {
  if (typeof window === "undefined") return;

  try {
    const stateToSave = {
      user: state.user,
      article: state.article,
    };

    const serializedState = JSON.stringify(stateToSave);
    localStorage.setItem("applicationState", serializedState);
  } catch (err) {
    console.error("Failed to save state:", err);
  }
};
