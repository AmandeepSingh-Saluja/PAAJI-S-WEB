// SummarizeDishReview.ts
'use server';

/**
 * @fileOverview This file defines a Genkit flow for summarizing dish reviews.
 *
 * - summarizeDishReview - A function that summarizes reviews for a given dish.
 * - SummarizeDishReviewInput - The input type for the summarizeDishReview function.
 * - SummarizeDishReviewOutput - The return type for the summarizeDishReview function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeDishReviewInputSchema = z.object({
  dishName: z.string().describe('The name of the dish to summarize reviews for.'),
  reviews: z.array(z.string()).describe('An array of customer reviews for the dish.'),
});
export type SummarizeDishReviewInput = z.infer<typeof SummarizeDishReviewInputSchema>;

const SummarizeDishReviewOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the customer reviews.'),
});
export type SummarizeDishReviewOutput = z.infer<typeof SummarizeDishReviewOutputSchema>;

export async function summarizeDishReview(input: SummarizeDishReviewInput): Promise<SummarizeDishReviewOutput> {
  return summarizeDishReviewFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeDishReviewPrompt',
  input: {schema: SummarizeDishReviewInputSchema},
  output: {schema: SummarizeDishReviewOutputSchema},
  prompt: `Summarize the following customer reviews for the dish "{{{dishName}}}".\n\nReviews:\n{{#each reviews}}- {{{this}}}\n{{/each}}\n\nProvide a concise summary of the reviews:
`,
});

const summarizeDishReviewFlow = ai.defineFlow(
  {
    name: 'summarizeDishReviewFlow',
    inputSchema: SummarizeDishReviewInputSchema,
    outputSchema: SummarizeDishReviewOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
