
import CateringForm from '@/components/CateringForm';
import { UtensilsCrossed } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: "Catering Services - Paaji's Restaurant",
  description: "Bring the authentic taste of Paaji's Chinese and Biryani to your special events. Inquire about our catering services.",
};

export default function CateringPage() {
  return (
    <div className="bg-background min-h-screen py-12 sm:py-16">
      <header className="py-12 bg-primary/10 mb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <UtensilsCrossed size={64} className="mx-auto text-primary mb-4" />
          <h1 className="font-headline text-5xl font-extrabold text-primary tracking-tight">
            Catering Services
          </h1>
          <p className="mt-4 font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Let us make your event unforgettable with the authentic flavors of Paaji&apos;s.
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          <div className="space-y-6">
            <h2 className="font-headline text-3xl font-semibold text-primary">
              Bring Paaji&apos;s to Your Next Event
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you&apos;re planning a corporate lunch, a birthday party, a wedding celebration, or any special gathering, Paaji&apos;s Restaurant offers comprehensive catering services to delight your guests. We bring our passion for authentic Chinese and Biryani cuisine directly to you.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team works closely with you to create a customized menu that fits your event&apos;s needs and budget. From our classic Starters to our flavorful Mains, we ensure every dish is prepared with the freshest ingredients and the same care you&apos;d find in our restaurant.
            </p>
             <div className="rounded-lg overflow-hidden shadow-2xl aspect-video">
              <Image 
                src="src/app/catering.png"
                alt="Catering food display"
                width={600}
                height={400}
                className="object-cover w-full h-full"
                data-ai-hint="catering food"
              />
            </div>
          </div>

          <div>
            <h2 className="font-headline text-2xl font-semibold text-foreground mb-6 text-center">
              For Corporate Booking &amp; Bulk Orders, Please fill in the details.
            </h2>
            <CateringForm />
          </div>

        </div>
      </div>
    </div>
  );
}
