(async (roomId) => {
    try {
        // 1. Get the Firebase Auth Token from IndexedDB
        const token = await new Promise((resolve, reject) => {
            const request = indexedDB.open('firebaseLocalStorageDb');
            request.onerror = () => reject('Could not open IndexedDB');
            request.onsuccess = (event) => {
                const db = event.target.result;
                const transaction = db.transaction(['firebaseLocalStorage'], 'readonly');
                const store = transaction.objectStore('firebaseLocalStorage');
                const getAll = store.getAll();

                getAll.onsuccess = () => {
                    const data = getAll.result;
                    if (data && data.length > 0) {
                        // Firebase stores the token info under the 'fbase_key' property
                        const authData = data[0].value;
                        resolve(authData.stsTokenManager.accessToken);
                    } else {
                        reject('No Firebase Auth data found');
                    }
                };
                getAll.onerror = () => reject('Error reading from IndexedDB');
            };
        });
        console.log("Successfully extracted Auth Token!");
        // 2. Define the changes
        const updates = {
            "activeTeam": "team2", //<- "team2" or "team1"
            "team1/reserve": 10   // maybe "team2/penalty"
        };
        // 3. Make the PATCH request WITH the auth token
        const response = await fetch(`https://giocaitoiyeu-a87f8-default-rtdb.asia-southeast1.firebasedatabase.app/rooms/${roomId}/timer.json?auth=${token}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updates)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log(`Successfully updated room ${roomId}! Changes:`, result);

    } catch (error) {
        console.error("Error updates room:", error);
    }
})(`ma phong o day`)