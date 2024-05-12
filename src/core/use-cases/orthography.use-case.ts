import type { OrthographyResponse } from "../../interfaces";

export const orthographyCheckUseCase = async (prompt: string) => {
  const parseData = JSON.stringify({ prompt });

  try {
    const resp = await fetch(
      `${import.meta.env.VITE_GPT_API}/orthography-check`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: parseData,
      }
    );

    if (!resp.ok) {
      throw new Error("No se puede realizar la corrección");
    }

    const data = (await resp.json()) as OrthographyResponse;

    return {
      ok: true,
      ...data,
    };
  } catch (error) {
    return {
      ok: false,
      userScore: 0,
      errors: [],
      message: "No se puede realizar la corrección",
    };
  }
};
