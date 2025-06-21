
import { getMenuItemsByCategory } from '@/lib/data';
import type { MenuItem } from '@/types';
import MenuItemCard from './MenuItemCard';
import { Utensils } from 'lucide-react'; // Using Utensils as a generic icon for Starters and Mains

interface MenuSectionProps {
  category: MenuItem['category'];
  title: string;
  isVegetarian: boolean;
}

const categoryIcons: Record<MenuItem['category'], React.ElementType> = {
  Starters: Utensils,
  Mains: Utensils,
};

const MenuSection = async ({ category, title, isVegetarian }: MenuSectionProps) => {
  const items = await getMenuItemsByCategory(category, isVegetarian);
  const IconComponent = categoryIcons[category];

  if (!items || items.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-muted-foreground">No items available in {title.toLowerCase()} at the moment.</p>
      </div>
    );
  }

  return (
    <section id={`${isVegetarian ? 'veg' : 'nonveg'}-${category.toLowerCase()}`} className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-10 pl-2 border-l-4 border-primary">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary tracking-tight flex items-center">
            {IconComponent && <IconComponent className="mr-3 h-8 w-8" />}
            {title}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {items.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
