export async function* prosConsStreamGeneratorUseCase(
  prompt: string,
  abortSignal?: AbortSignal
) {
  try {
    const resp = await fetch(
      `${import.meta.env.VITE_GPT_API}/pros-cons-discusser-stream`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
        // TODO: abortSignal
        signal: abortSignal,
      }
    );

    if (!resp.ok) {
      throw new Error("No se puede realizar la comparación ");
    }

    // devolver como stream

    const reader = resp.body?.getReader();
    if (!reader) {
      console.log("No se pudo generar el reader");
      return null;
    }

    const decoder = new TextDecoder();
    let text = "";
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      const decodedChunk = decoder.decode(value, { stream: true });
      text += decodedChunk;
      yield text;
    }
  } catch (error) {
    return null;
  }
}
