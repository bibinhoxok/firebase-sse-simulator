# Firebase SSE Simulator Bundle

This repository contains the bundled JavaScript code for the target website and scripts designed to interact with the Firebase Real-time Database using Server-Sent Events (SSE).

## Files

- **`asd.js`**: The bundled code of the target website.
- **`simulate-100-users.js`**: A Node.js script that simulates 100 concurrent users accessing the database. It works by:
  - Authenticating anonymously via the Firebase Auth REST API to get an authentication token.
  - Using the native `fetch` API and `TextDecoder` to establish and maintain Server-Sent Events (SSE) connections to the `/data/characters.json` endpoint.
  - Automatically handling Firebase rate limiting (HTTP 402) by pausing and retrying until exactly 100 concurrent active connections are achieved.
- **`bundle-simulation.js` / `update.js`**: Additional Node.js scripts to establish concurrent connections and interact with the database.

## Production Release

The standalone executable `bundle.exe` is available in the Releases section. This is the compiled version of the application for Windows production use that runs independently without requiring Node.js.

### How it Works

Similar to `simulate-100-users.js`, `bundle.exe` executes the following step-by-step process:

1. **Anonymous Authentication**: It first makes a `POST` request to the Firebase Authentication REST API (`identitytoolkit.googleapis.com`) using the project's API key to obtain an anonymous `idToken`.
2. **Concurrent Connection Calculation**: It calculates the number of connections required to reach the target of 100 concurrent users and attempts to initiate them all simultaneously as a batch of promises.
3. **SSE Stream Initialization**: For each connection, it sends a `GET` request to the Firebase Real-time Database endpoint (`/data/characters.json`), attaching the generated `idToken` and setting the `Accept: text/event-stream` header to establish a Server-Sent Events (SSE) stream.
4. **Non-blocking Stream Consumption**: Once a connection is established, it utilizes a `TextDecoder` and a `ReadableStream` reader (`response.body.getReader()`) in an asynchronous, non-blocking loop to continuously read incoming data chunks and keep the connection actively open.
5. **Rate Limit Handling & Auto-resume**: If the batch connection attempt hits Firebase's concurrent connection rate limit (returning an HTTP 402 error) or fails otherwise, the script catches the error, pauses execution for exactly 1 second, and then automatically loops back to step 2. It recalculates the remaining needed connections and retries until exactly 100 active connections are successfully maintained.
