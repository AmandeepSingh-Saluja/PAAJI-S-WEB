
import MenuSection from '@/components/MenuSection';
import { Separator } from '@/components/ui/separator';
import { Utensils } from 'lucide-react';

export const metadata = {
  title: "Our Menu - Paaji's Restaurant",
  description: "Explore Paaji's delicious and authentic Chinese and Biryani dishes. Vegetarian and Non-Vegetarian options for Starters and Mains.",
};

export default function MenuPage() {
  return (
    <div className="bg-background min-h-screen">
      <header className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Utensils size={64} className="mx-auto text-primary mb-4" />
          <h1 className="font-headline text-5xl font-extrabold text-primary tracking-tight">
            Our Culinary Delights
          </h1>
          <p className="mt-4 font-body text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our delicious and authentic Chinese and Biryani dishes.
          </p>
        </div>
      </header>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <MenuSection category="Starters" title="Vegetarian Starters" isVegetarian={true} />
        <Separator className="my-12" />
        <MenuSection category="Starters" title="Non-Vegetarian Starters" isVegetarian={false} />
        <Separator className="my-12" />
        <MenuSection category="Mains" title="Vegetarian Main Courses" isVegetarian={true} />
        <Separator className="my-12" />
        <MenuSection category="Mains" title="Non-Vegetarian Main Courses" isVegetarian={false} />
      </div>
    </div>
  );
}

