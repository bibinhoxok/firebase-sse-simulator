// simulate-100-users.js
var FIREBASE_CONFIG = {
  apiKey: "AIzaSyCJ6ecQJGcpf4K4AeiFW4YYpsDZoIaac_Y",
  databaseURL: "https://giocaitoiyeu-a87f8-default-rtdb.asia-southeast1.firebasedatabase.app"
};
async function getAuthToken() {
  const authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_CONFIG.apiKey}`;
  try {
    const res = await fetch(authUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ returnSecureToken: true })
    });
    if (!res.ok) {
      throw new Error(`Auth failed: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    return data.idToken;
  } catch (error) {
    console.error("Error getting auth token:", error);
    return null;
  }
}
var activeConnections = 0;
async function connectUser(userId, token) {
  const url = `${FIREBASE_CONFIG.databaseURL}/data/characters.json?auth=${token}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Accept": "text/event-stream",
      "Cache-Control": "no-cache"
    }
  });
  if (!response.ok) {
    if (response.status === 402) {
      throw new Error("402");
    }
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  console.log("[+] User " + userId + " connected successfully.");
  activeConnections++;
  (async () => {
    try {
      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          console.log("[-] User " + userId + " disconnected.");
          activeConnections--;
          break;
        }
        const chunk = decoder.decode(value);
      }
    } catch (error) {
      console.error("[!] User " + userId + " stream error:", error.message);
      activeConnections--;
    }
  })();
}
async function runSimulation() {
  console.log("1. Authenticating to get token...");
  const token = await getAuthToken();
  if (!token) {
    console.error("Could not obtain token, aborting.");
    return;
  }
  console.log("Successfully extracted Auth Token via REST API!");
  const NUM_USERS = 100;
  console.log(`Starting SSE simulation for ${NUM_USERS} users on /data/characters...`);
  let currentUserId = 1;
  while (activeConnections < NUM_USERS) {
    const promises = [];
    const neededConnections = NUM_USERS - activeConnections;
    for (let i = 0; i < neededConnections; i++) {
      promises.push(connectUser(currentUserId, token));
      currentUserId++;
    }
    try {
      await Promise.all(promises);
    } catch (error) {
      if (error.message === "402") {
        console.log(`[~] Limit reached (402) at ${activeConnections} connections. Waiting 1 second before resuming...`);
        await new Promise((resolve) => setTimeout(resolve, 1e3));
      } else {
        console.error(`[!] Failed to connect batch: ${error.message}. Waiting 1s before next wave...`);
        await new Promise((resolve) => setTimeout(resolve, 1e3));
      }
    }
  }
  console.log(`[*] Successfully reached ${NUM_USERS} concurrent connections!`);
}
runSimulation();
