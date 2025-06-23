
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ChefHat, Heart, Leaf, Users, Smile, Utensils } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "About Us - Paaji's Restaurant",
  description: "Learn more about Paaji's Restaurant, our story, mission, values, and the unique Paaji's experience.",
};

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      <header className="py-16 lg:py-24 bg-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart size={64} className="mx-auto text-primary mb-6" />
          <h1 className="font-headline text-5xl md:text-6xl font-extrabold text-primary tracking-tight">
            Our Story: The Heart of Paaji&apos;s
          </h1>
          <p className="mt-6 font-body text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Discover the passion for authentic Chinese and Biryani cuisine that defines Paaji&apos;s.
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <section className="mb-16 lg:mb-24">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-headline text-3xl sm:text-4xl font-bold text-foreground mb-6">
                A Taste of Tradition
              </h2>
              <p className="font-body text-lg text-muted-foreground mb-4 leading-relaxed">
                Paaji&apos;s Restaurant began with a love for sharing authentic Chinese and Biryani flavors. We started small, driven by a passion for traditional family recipes and a commitment to bringing our community the true essence of these cuisines. 
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Today, we continue to serve those beloved dishes, focusing on quality ingredients and the rich culinary heritage of Chinese and Biryani cooking, all in a warm and welcoming atmosphere.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl aspect-square">
              <Image 
                src="/aboutus.webp" 
                alt="Founders of Paaji's Restaurant" 
                width={600} 
                height={600} 
                className="object-cover w-full h-full transform transition-all duration-500 hover:scale-105"
                data-ai-hint="restaurant founders"
              />
            </div>
          </div>
        </section>

        <Separator className="my-12 lg:my-16" />

        <section className="mb-16 lg:mb-24 text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Our Core Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="bg-card p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <ChefHat size={48} className="mx-auto text-primary mb-4" />
              <h3 className="font-headline text-2xl font-semibold text-primary mb-2">Authenticity</h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                We stay true to traditional recipes and cooking methods, ensuring an genuine taste of Chinese and Biryani cuisine in every bite.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Leaf size={48} className="mx-auto text-primary mb-4" />
              <h3 className="font-headline text-2xl font-semibold text-primary mb-2">Quality Ingredients</h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                We source the freshest local produce and finest spices to create dishes that are both delicious and wholesome.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Users size={48} className="mx-auto text-primary mb-4" />
              <h3 className="font-headline text-2xl font-semibold text-primary mb-2">Warm Hospitality</h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                We believe in treating every guest like family, creating a welcoming and comfortable atmosphere for all.
              </p>
            </div>
          </div>
        </section>
        
        <Separator className="my-12 lg:my-16" />

        <section className="text-center">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-foreground mb-6 flex items-center justify-center">
                <Smile size={36} className="mr-3 text-primary" /> The Paaji&apos;s Experience
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                Step into Paaji&apos;s and feel the warmth of our hospitality. We&apos;ve crafted an inviting ambiance where friends and family can gather to enjoy exceptional food and create lasting memories. Expect attentive service, a comfortable setting, and an aroma that promises a delightful culinary journey. Whether it&apos;s a quick lunch or a celebratory dinner, we aim to make every visit special.
            </p>
             <div className="rounded-lg overflow-hidden shadow-2xl aspect-[16/9] max-w-4xl mx-auto">
              <Image 
                src="/about_footer.jpg" 
                alt="Paaji's Restaurant Front" 
                width={800} 
                height={450} 
                className="object-cover w-full h-full transform transition-all duration-500 hover:scale-105"
                data-ai-hint="restaurant exterior"
              />
            </div>
        </section>

        <section className="mt-16 lg:mt-24 text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-6">
            Ready to Experience Paaji&apos;s?
          </h2>
          <p className="font-body max-w-xl mx-auto text-lg text-muted-foreground mb-10">
            Join us for a meal and become part of our story.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-accent text-primary-foreground shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-10 py-6 text-lg">
            <Link href="/menu">View Our Menu</Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
