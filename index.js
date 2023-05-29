import { YoutubeTranscript } from 'youtube-transcript';
import { writeFile } from 'fs';


async function fetchAndStoreTranscript() {
  try {
    const transcript = await YoutubeTranscript.fetchTranscript('https://www.youtube.com/watch?v=ehAGlT9DJZ4');
    const transcriptData = JSON.stringify(transcript);

    console.log(transcript)
    writeFile('transcript.json', transcriptData, (err) => {
      if (err) throw err;
      console.log('Transcript data has been saved to transcript.json');
    });
  } catch (error) {
    console.error('Error fetching or storing the transcript:', error);
  }
}

fetchAndStoreTranscript();


