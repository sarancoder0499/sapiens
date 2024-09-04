export function handleServerError(error: unknown): unknown {
  try {
    let parsedError;

    if(error instanceof TypeError){
        throw new Error(error.message);
    }

    if (error instanceof Error) {
      parsedError = JSON.parse(error.message);
    }

    if (typeof parsedError.message === "string") {
      throw new Error(parsedError);
    }

    return parsedError.message;

  } catch (error) {
    if (error instanceof Error) {
      console.error("An unexpected error occurred:", error.message);
    }
  }
}
