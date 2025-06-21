import { getDailySpecials } from '@/lib/data';
import MenuItemCard from './MenuItemCard';
import { Star } from 'lucide-react';

const DailySpecials = async () => {
  const specials = await getDailySpecials();

  if (!specials || specials.length === 0) {
    return null; // Or a message indicating no specials today
  }

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold text-primary tracking-tight flex items-center justify-center">
            <Star className="mr-3 h-10 w-10 text-amber-400" />
            Today&apos;s Specials
            <Star className="ml-3 h-10 w-10 text-amber-400" />
          </h2>
          <p className="font-body mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t miss out on these specially curated dishes, available for a limited time!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specials.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DailySpecials;
