import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-background py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        {/* Decorative background image or pattern could go here */}
        {/* <Image src="https://placehold.co/1920x1080.png" alt="Restaurant background" layout="fill" objectFit="cover" className="opacity-20" /> */}
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          <span className="block text-primary">Paaji&apos;s</span>
          <span className="block text-foreground">A Symphony of Flavors</span>
        </h1>
        <p className="font-body max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10">
          Discover authentic Chinese and Biryani cuisine crafted with love and the freshest ingredients. Join us for an unforgettable dining experience.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button asChild size="lg" className="bg-primary hover:bg-accent text-primary-foreground shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-10 py-6 text-lg">
            <Link href="/menu">Explore Our Menu</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 hover:text-accent shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 px-10 py-6 text-lg">
             <a href="https://www.zomato.com/kn/pune/paajis-restaurant-sadashiv-peth" target="_blank" rel="noopener noreferrer">
                Order Now
              </a>
          </Button>
        </div>
      </div>
      {/* Subtle background elements */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-primary/20 rounded-full opacity-30 transform -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-accent/20 rounded-full opacity-30 transform translate-x-1/2 translate-y-1/2 blur-2xl"></div>
    </section>
  );
};

export default Hero;
