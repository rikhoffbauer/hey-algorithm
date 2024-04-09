import { PorcupineWorkerFactory, PorcupineWorker } from "@picovoice/porcupine-web";
import { WebVoiceProcessor } from "@picovoice/web-voice-processor";

let porcupineWorker: PorcupineWorker | null = null;

async function initWakeWordDetection() {
  porcupineWorker = await PorcupineWorkerFactory.create({
    // Placeholder for the actual wake word configuration
  });

  porcupineWorker.onmessage = (message: MessageEvent) => {
    if (message.data.command === "wake-word-detected") {
      console.log("Wake word detected!");
      // Placeholder for handling the transcribed speech after wake word detection
    }
  };

  WebVoiceProcessor.init({
    engines: [porcupineWorker]
  });
}

function handleTranscribedSpeech(transcription: string) {
  console.log("Transcribed speech:", transcription);
  // Placeholder for further processing of transcribed speech
}

// Placeholder for starting and stopping the wake word detection
// and for configuring the wake word

document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("startButton") as HTMLButtonElement;
  const stopButton = document.getElementById("stopButton") as HTMLButtonElement;
  const statusElement = document.getElementById("status") as HTMLParagraphElement;

  startButton.addEventListener("click", async () => {
    const wakeWord = (document.getElementById("wakeWord") as HTMLInputElement).value;
    if (wakeWord) {
      statusElement.textContent = "Status: Initializing...";
      try {
        await initWakeWordDetection(wakeWord);
        statusElement.textContent = "Status: Detection running";
        startButton.disabled = true;
        stopButton.disabled = false;
      } catch (error) {
        console.error(error);
        statusElement.textContent = "Status: Error initializing wake word detection";
      }
    } else {
      statusElement.textContent = "Status: Please enter a wake word";
    }
  });

  stopButton.addEventListener("click", () => {
    if (porcupineWorker) {
      porcupineWorker.postMessage({ command: "stop" });
      WebVoiceProcessor.terminate();
      porcupineWorker = null;
      statusElement.textContent = "Status: Detection stopped";
      startButton.disabled = false;
      stopButton.disabled = true;
    }
  });
});

export { initWakeWordDetection, handleTranscribedSpeech };
