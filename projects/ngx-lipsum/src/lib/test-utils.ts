import { LoremIpsumParams } from 'lorem-ipsum';

export const predictableLoremIpsumParams: LoremIpsumParams = {
  count: 3, // Number of "words", "sentences", or "paragraphs"
  paragraphLowerBound: 2, // Min. number of sentences per paragraph.
  paragraphUpperBound: 2, // Max. number of sentences per paragarph.
  sentenceLowerBound: 5, // Min. number of words per sentence.
  sentenceUpperBound: 5, // Max. number of words per sentence.
  units: 'paragraphs', // paragraph(s), "sentence(s)", or "word(s)"
  words: ['foo'], // Array of words to draw from
};

export const getTestParams = (
  config: LoremIpsumParams = {},
): { params: LoremIpsumParams; result: string } => {
  return {
    params: {
      ...predictableLoremIpsumParams,
      ...config,
    },
    result: Object.keys(config).length
      ? ''
      : `Foo foo foo foo foo. Foo foo foo foo foo.
Foo foo foo foo foo. Foo foo foo foo foo.
Foo foo foo foo foo. Foo foo foo foo foo.`,
  };
};
