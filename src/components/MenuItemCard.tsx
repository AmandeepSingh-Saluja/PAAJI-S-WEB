'use client';

import Image from 'next/image';
import type { MenuItem } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquareText, Sparkles } from 'lucide-react';
import { useState } from 'react';
import ReviewSummaryModal from './ReviewSummaryModal';

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard = ({ item }: MenuItemCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSummarizeReviews = () => {
    if (item.reviews && item.reviews.length > 0) {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <Card className="overflow-hidden h-full flex flex-col group transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
        <CardHeader className="p-0 relative">
          <div className="aspect-[16/10] w-full overflow-hidden">
            <Image
              src={item.imageUrl}
              alt={item.name}
              width={600}
              height={400}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              data-ai-hint={item.imageHint || 'food item'}
            />
          </div>
          {item.isSpecial && (
            <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-3 py-1 text-xs font-semibold rounded-full shadow-md">
              Special!
            </div>
          )}
        </CardHeader>
        <CardContent className="p-6 flex-grow">
          <CardTitle className="font-headline text-2xl mb-2 text-primary group-hover:text-accent transition-colors">{item.name}</CardTitle>
          <CardDescription className="font-body text-sm text-muted-foreground mb-3 h-20 overflow-y-auto">
            {item.description}
          </CardDescription>
          <p className="font-body text-xl font-semibold text-foreground">₹{item.price.toFixed(2)}</p>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          {item.reviews && item.reviews.length > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleSummarizeReviews}
              className="w-full border-primary text-primary hover:bg-primary/10 hover:text-accent transition-colors group-hover:border-accent"
              aria-label={`Summarize reviews for ${item.name}`}
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Summarize Reviews
            </Button>
          )}
          {(!item.reviews || item.reviews.length === 0) && (
             <Button
              variant="outline"
              size="sm"
              disabled
              className="w-full"
              aria-label={`No reviews to summarize for ${item.name}`}
            >
              <MessageSquareText className="mr-2 h-4 w-4" />
              No Reviews Yet
            </Button>
          )}
        </CardFooter>
      </Card>
      {item.reviews && item.reviews.length > 0 && (
        <ReviewSummaryModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          dishName={item.name}
          reviews={item.reviews}
        />
      )}
    </>
  );
};

export default MenuItemCard;
