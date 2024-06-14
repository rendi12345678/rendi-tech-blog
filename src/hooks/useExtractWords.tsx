function useExtractWords() {
  const extractWords = (text: string, wordCount: number = 10) => {
    const wordsArray = text.split(" ");
    return wordsArray.slice(0, wordCount).join(" ");
  };

  return extractWords;
}

export default useExtractWords;
