import { PorcupineWorkerFactory, PorcupineWorker } from "@picovoice/porcupine-web";
import { WebVoiceProcessor } from "@picovoice/web-voice-processor";

let porcupineWorker: PorcupineWorker | null = null;

async function startWakeWordDetection(wakeWord: string) {
  porcupineWorker = await PorcupineWorkerFactory.create({
    accessKey: localStorage.picoVoiceAccessKey, // TODO make configurable via UI
    keywords: [wakeWord]
  });

  porcupineWorker.onmessage = (msg: MessageEvent) => {
    if (msg.data.keywordLabel === wakeWord) {
      console.log("Wake word detected!");
      // Handle wake word detection event
      // For now, we'll just log it to the console
    }
  };

  WebVoiceProcessor.subscribe(porcupineWorker);
}

async function stopWakeWordDetection() {
  if (porcupineWorker !== null) {
    WebVoiceProcessor.unsubscribe(porcupineWorker);
    porcupineWorker.terminate();
    porcupineWorker = null;
  }
}

// Export the start and stop functions so they can be used by other parts of the application
export { startWakeWordDetection, stopWakeWordDetection };
