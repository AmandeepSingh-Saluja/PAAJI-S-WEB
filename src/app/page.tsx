import Hero from '@/components/Hero';
import DailySpecials from '@/components/DailySpecials';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Utensils, Info } from 'lucide-react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <Hero />
      
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-6 tracking-tight flex items-center">
                <Info size={36} className="mr-3" /> About Paaji&apos;s
              </h2>
              <p className="font-body text-lg text-muted-foreground mb-6 leading-relaxed">
                Welcome to Paaji&apos;s! We specialize in authentic Chinese and flavorful Biryani dishes, crafted with the freshest ingredients and traditional recipes. Our passion is to bring you a delightful dining experience with every meal.
              </p>
              <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
                Our chefs expertly blend traditional cooking techniques with modern culinary innovation to create unique and mouth-watering Chinese and Biryani dishes.
              </p>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-accent shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-2xl aspect-video transform transition-all duration-500 hover:scale-105">
               <Image 
                src="src/app/aboutus.webp" 
                alt="Interior of Paaji's Restaurant" 
                width={600} 
                height={400} 
                className="object-cover w-full h-full"
                data-ai-hint="restaurant interior"
              />
            </div>
          </div>
        </div>
      </section>

      <DailySpecials />

      <section className="py-16 lg:py-24 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Utensils size={48} className="mx-auto text-primary mb-6" />
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-6 tracking-tight">
            Ready for an Unforgettable Meal?
          </h2>
          <p className="font-body max-w-xl mx-auto text-lg text-muted-foreground mb-10">
            Order your favorite dishes now or explore our full menu.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button asChild size="lg" className="bg-primary hover:bg-accent text-primary-foreground shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-10 py-6 text-lg">
              <a href="https://www.zomato.com/kn/pune/paajis-restaurant-sadashiv-peth" target="_blank" rel="noopener noreferrer">
                Order with Zomato
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 hover:text-accent shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 px-10 py-6 text-lg">
              <a href="https://www.swiggy.com/city/pune/paajis-restaurant-swargate-rest1093714" target="_blank" rel="noopener noreferrer">
                Order with Swiggy
              </a>
            </Button>
          </div>
           <div className="mt-8">
             <Button asChild variant="link" size="lg" className="text-primary hover:text-accent">
                <Link href="/menu">View Full Menu</Link>
            </Button>
           </div>
        </div>
      </section>
    </>
  );
}
