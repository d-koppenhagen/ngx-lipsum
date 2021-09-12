// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { NgxLipsumModule, NgxLipsumComponent } from 'ngx-lipsum';

export default {
  title: 'Example/Header',
  component: NgxLipsumComponent,
  decorators: [
    moduleMetadata({
      imports: [NgxLipsumModule],
    }),
  ],
} as Meta;

const Template: Story<NgxLipsumComponent> = (args: NgxLipsumComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};

export const WithConfig = Template.bind({});
WithConfig.args = {
  config: {
    count: 5, // Number of "words", "sentences", or "paragraphs"
    format: 'plain', // "plain" or "html"
    paragraphLowerBound: 3, // Min. number of sentences per paragraph.
    paragraphUpperBound: 7, // Max. number of sentences per paragarph.
    sentenceLowerBound: 5, // Min. number of words per sentence.
    sentenceUpperBound: 15, // Max. number of words per sentence.
    suffix: '\n', // Line ending, defaults to "\n" or "\r\n" (win32)
    units: 'paragraphs', // paragraph(s), "sentence(s)", or "word(s)"
    // words: [], // Array of words to draw from
  },
};
