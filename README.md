# Firebase SSE Simulator Bundle

This repository contains the bundled JavaScript code for the target website and scripts designed to interact with the Firebase Real-time Database using Server-Sent Events (SSE).

## Files

- **`asd.js`**: The bundled code of the target website.
- **`simulate-100-users.js` / `bundle-simulation.js` / `update.js`**: Node.js scripts that authenticate and establish multiple concurrent SSE connections to the Firebase Real-time Database for simulation and testing purposes.

## Instructions

To run the simulation scripts, ensure you have Node.js installed.

1. Clone this repository.
2. Run the desired simulation script using Node.js. For example:
   ```bash
   node bundle-simulation.js
   ```

## Production Release

The standalone executable `bundle.exe` is available in the Releases section. This is the compiled version of the application for Windows production use.
