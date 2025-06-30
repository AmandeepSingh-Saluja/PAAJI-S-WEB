
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import ThemeToggleButton from './ThemeToggleButton';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-card shadow-md sticky top-0 z-50 h-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/logo.webp"
              alt="Paaji's Logo"
              width={34}
              height={34}
              className="group-hover:animate-pulse rounded-full"
            />
            <span className="font-headline text-xl font-bold text-primary group-hover:text-accent transition-colors">
              PAAJI&apos;S
            </span>
          </Link>
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
              <Link href="/" className="font-medium text-foreground hover:text-primary transition-colors text-sm lg:text-base">
                Home
              </Link>
              <Link href="/menu" className="font-medium text-foreground hover:text-primary transition-colors text-sm lg:text-base">
                Menu
              </Link>
              <Link href="/catering" className="font-medium text-foreground hover:text-primary transition-colors text-sm lg:text-base">
                Catering
              </Link>
              <Link href="/about" className="font-medium text-foreground hover:text-primary transition-colors text-sm lg:text-base">
                About Us
              </Link>
              <Link href="/contact" className="font-medium text-foreground hover:text-primary transition-colors text-sm lg:text-base">
                Contact
              </Link>
            </nav>
            <ThemeToggleButton />
            <Button asChild variant="default" size="default" className="hidden sm:inline-flex bg-primary hover:bg-accent transition-all duration-300 transform hover:scale-105 text-primary-foreground shadow-md hover:shadow-lg text-sm px-4 py-2 md:text-base md:px-5 md:py-2.5">
              <a href="https://www.zomato.com/kn/pune/paajis-restaurant-sadashiv-peth" target="_blank" rel="noopener noreferrer">
                Order Now
              </a>
            </Button>
            
            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                   <nav className="flex flex-col gap-6 text-lg font-medium mt-10">
                      <SheetClose asChild>
                        <Link href="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/menu" className="text-foreground hover:text-primary transition-colors">Menu</Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/catering" className="text-foreground hover:text-primary transition-colors">Catering</Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/about" className="text-foreground hover:text-primary transition-colors">About Us</Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
                      </SheetClose>
                      <Button asChild variant="default" className="w-full bg-primary hover:bg-accent text-primary-foreground mt-4">
                          <a href="https://www.zomato.com/kn/pune/paajis-restaurant-sadashiv-peth" target="_blank" rel="noopener noreferrer">
                            Order Now
                          </a>
                      </Button>
                    </nav>
                </SheetContent>
              </Sheet>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
