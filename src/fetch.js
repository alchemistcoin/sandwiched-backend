const utf8Decoder = new TextDecoder('utf-8');

async function fetchStream(reader) {
    for (;;) {
        let { value: chunk, done: readerDone } = await reader.read();
        if (readerDone) {
            return;
        }
        console.log(utf8Decoder.decode(chunk));
    }
}

let reader = (await fetch('sandwiches/foo')).body.getReader();
fetchStream(reader);
