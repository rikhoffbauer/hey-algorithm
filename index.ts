import { startWakeWordDetection, stopWakeWordDetection } from "./wakeword";
import { WebVoiceProcessor } from "@picovoice/web-voice-processor";

// Remove unnecessary closing brace and update export statement
// Correct the event listeners to use the imported functions

document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("startButton") as HTMLButtonElement;
  const stopButton = document.getElementById("stopButton") as HTMLButtonElement;
  const statusElement = document.getElementById("status") as HTMLParagraphElement;

  startButton.addEventListener("click", async () => {
    const wakeWord = (document.getElementById("wakeWord") as HTMLInputElement).value;
    if (wakeWord) {
      statusElement.textContent = "Status: Initializing...";
      try {
        await startWakeWordDetection(wakeWord);
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
    stopWakeWordDetection();
    statusElement.textContent = "Status: Detection stopped";
    startButton.disabled = false;
    stopButton.disabled = true;
  });
});

export { handleTranscribedSpeech };
