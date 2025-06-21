'use client';

import { useState, useEffect } from 'react';
import type { SummarizeDishReviewInput } from '@/ai/flows/summarize-dish-review';
import { summarizeDishReview } from '@/ai/flows/summarize-dish-review';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Loader2, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ReviewSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  dishName: string;
  reviews: string[];
}

export default function ReviewSummaryModal({ isOpen, onClose, dishName, reviews }: ReviewSummaryModalProps) {
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (isOpen && dishName && reviews && reviews.length > 0) {
      const fetchSummary = async () => {
        setIsLoading(true);
        setSummary(null);
        try {
          const input: SummarizeDishReviewInput = { dishName, reviews };
          const result = await summarizeDishReview(input);
          setSummary(result.summary);
        } catch (error) {
          console.error("Error summarizing reviews:", error);
          toast({
            title: "Summarization Error",
            description: "Could not generate review summary at this time. Please try again later.",
            variant: "destructive",
          });
        } finally {
          setIsLoading(false);
        }
      };
      fetchSummary();
    } else if (isOpen && (!reviews || reviews.length === 0)) {
        setSummary("No reviews available to summarize for this dish.");
        setIsLoading(false);
    }
  }, [isOpen, dishName, reviews, toast]);

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-card text-card-foreground shadow-xl rounded-lg">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl text-primary flex items-center">
            <Sparkles className="mr-2 h-6 w-6 text-primary" />
            AI Summary: {dishName}
          </DialogTitle>
          <DialogDescription className="font-body text-muted-foreground pt-1">
            A concise summary of what our customers are saying.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 min-h-[100px] flex items-center justify-center">
          {isLoading && (
            <div className="flex flex-col items-center justify-center space-y-2">
              <Loader2 className="h-10 w-10 animate-spin text-primary" />
              <p className="font-body text-muted-foreground">Crafting summary...</p>
            </div>
          )}
          {summary && !isLoading && (
            <p className="font-body text-sm leading-relaxed">{summary}</p>
          )}
        </div>
        <DialogFooter className="sm:justify-end">
          <Button onClick={onClose} variant="outline" className="hover:bg-muted transition-colors">
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
