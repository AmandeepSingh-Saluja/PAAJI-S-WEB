
import Link from 'next/link';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52s-.67-.816-.916-.966c-.247-.149-.496-.149-.669-.149-.174 0-.371.025-.57.025-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871-.118.571-.355.94-.814 1.068-1.282.128-.468.128-.875.091-1.023-.036-.149-.184-.224-.381-.373zM12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
    />
  </svg>
);


const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground border-t border-border mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h5 className="font-headline text-xl font-semibold text-primary mb-4">Paaji&apos;s Restaurant</h5>
            <p className="text-sm text-muted-foreground">
              Experience the authentic taste of Chinese and Biryani cuisine. Quality ingredients, traditional recipes, and a warm atmosphere.
            </p>
          </div>
          <div>
            <h6 className="font-headline text-lg font-semibold text-foreground mb-4">Quick Links</h6>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/menu" className="text-sm text-muted-foreground hover:text-primary transition-colors">Menu</Link></li>
              <li><Link href="/catering" className="text-sm text-muted-foreground hover:text-primary transition-colors">Catering</Link></li>
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h6 className="font-headline text-lg font-semibold text-foreground mb-4">Contact Us</h6>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start space-x-2"> 
                <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                <span>1843, Sadashiv Peth, Pune, Maharashtra 411030</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-primary" />
                <a href="tel:+919834464883" className="hover:text-primary transition-colors">098344 64883</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-primary" />
                <a href="mailto:paajisrestaurant@gmail.com" className="hover:text-primary transition-colors">paajisrestaurant@gmail.com</a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-headline text-lg font-semibold text-foreground mb-4">Follow Us</h6>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/193iM6d4Dv/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/paajis_restaurant?igsh=MWprOHJtZHEwczhvbQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://wa.me/919834464883" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-muted-foreground hover:text-primary transition-colors">
                <WhatsAppIcon />
              </a>
            </div>
            <div className="mt-6">
                <h6 className="font-headline text-lg font-semibold text-foreground mb-2">Leave Us Your Feedback</h6>
                <p className="text-sm text-muted-foreground mb-3">Your opinion is important to us! Let us know how we did and how we can improve our service.</p>
                <Button asChild variant="outline" size="sm">
                    <a href="mailto:paajisrestaurant@gmail.com?subject=Feedback%20for%20Paaji's%20Restaurant">
                        Share Your Thoughts
                    </a>
                </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground mt-8">
          <p>&copy; {new Date().getFullYear()} Paaji&apos;s Restaurant. All Rights Reserved. Crafted with passion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
