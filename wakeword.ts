import { PorcupineWorker } from "@picovoice/porcupine-web";
import { WebVoiceProcessor } from "@picovoice/web-voice-processor";
import * as KEYWORD_MODEL_BASE64 from "./model";
import * as PORCUPINE_MODEL_BASE64 from "./porcupine_model";

let porcupineWorker: PorcupineWorker | null = null;

async function startWakeWordDetection(wakeWord: string) {
  porcupineWorker = await PorcupineWorker.create(
    localStorage.picoVoiceAccessKey, // TODO make configurable via UI
    [{publicPath: "model.ppn", label: "HeyAlgorithm"}],
    porcupineKeywordCallback,
  {
    publicPath: "model.pv"
  }
    
  );

  porcupineWorker.onmessage = (msg: MessageEvent) => {
    if (msg.data.keywordLabel === wakeWord) {
      console.log("Wake word detected!");
      // Handle wake word detection event
      // For now, we'll just log it to the console
    }
  };

  WebVoiceProcessor.subscribe(porcupineWorker);
}

function porcupineKeywordCallback(detection) {
      const time = new Date();
      const message = `keyword detected at ${time.toLocaleTimeString()}: ${detection.label} (index = ${detection.index})`
      console.log(message);
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
