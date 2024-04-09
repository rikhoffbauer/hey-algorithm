# Wakeword Detection POC

This project aims to implement a Proof of Concept (POC) for wakeword detection using TypeScript, Picovoice Porcupine, Parcel for building the project, Tailwind for styling, and various Picovoice npm packages. The POC will include setting up project boilerplate and tooling, implementing wakeword detection using Porcupine, allowing for configuring the wakeword, creating a simple UI to start and stop wakeword detection, providing an API to handle transcribed speech captured after the wakeword was detected, using Web Stream API (`ReadableStream`), logging transcribed speech to the console, and using Voice Activity Detection (VAD) to detect when speech has ended. Finally, the project will be deployed to GitHub Pages.

## Stack

- TypeScript
- Picovoice Porcupine (using `@picovoice/web-voice-processor`, `@picovoice/picovoice-web`, `@picovoice/cobra-web`, `@picovoice/porcupine-web`, `@picovoice/leopard-web` or `@picovoice/cheetah-web`, and `@picovoice/web-utils` npm packages)
- Parcel for building the project
- Tailwind for styling

## Requirements

1. Set up project boilerplate and tooling.
2. Implement wakeword detection using Porcupine.
3. Allow for configuring the wakeword.
4. Create a simple UI to start and stop wakeword detection.
5. Provide an API to handle transcribed speech captured after the wakeword was detected, using Web Stream API (`ReadableStream`).
6. Log transcribed speech to the console.
7. Use VAD to detect when speech has ended.
8. Deploy to GitHub Pages.

## Usage

To use this project, follow these steps:

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Build the project: `npm run build`.
4. Start the project: `npm start`.
5. Access the project in your browser at `http://localhost:1234`.

## Development

To contribute to this project, follow these steps:

1. Fork the repository.
2. Clone your forked repository.
3. Create a new branch: `git checkout -b feature/new-feature`.
4. Make your changes.
5. Test your changes: `npm test`.
6. Commit your changes: `git commit -am 'Add new feature'`.
7. Push to the branch: `git push origin feature/new-feature`.
8. Submit a pull request.

## Credits

This project utilizes the following technologies and libraries:

- Picovoice Porcupine
- Parcel
- Tailwind

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
