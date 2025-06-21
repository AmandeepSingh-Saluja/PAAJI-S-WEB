interface GoogleMapsEmbedProps {
  latitude: number;
  longitude: number;
  placeName?: string; // Optional: Name of the place for the q parameter
  zoom?: number;
}

// IMPORTANT: Replace YOUR_API_KEY with your actual Google Maps API Key
// For a production app, ensure this key is properly secured and restricted.
// For this example, we'll use a generic q parameter which often works without an API key for basic embeds.
const API_KEY = "YOUR_GOOGLE_MAPS_API_KEY_HERE"; // Not strictly needed for q= query based embeds

const GoogleMapsEmbed = ({ latitude, longitude, placeName = "Paaji's Restaurant", zoom = 15 }: GoogleMapsEmbedProps) => {
  // Using a query string that works for basic embeds without an API key.
  // For more advanced features or to avoid "for development purposes only" watermarks, an API key is required.
  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(placeName)}%20${latitude},${longitude}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`;
  // Alternative if you have an API key and want to use it (replace YOUR_API_KEY):
  // const embedUrl = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=place_id:YOUR_PLACE_ID`
  // Or by coordinates:
  // const embedUrl = `https://www.google.com/maps/embed/v1/view?key=${API_KEY}&center=${latitude},${longitude}&zoom=${zoom}`


  return (
    <div className="aspect-[16/9] w-full overflow-hidden rounded-lg shadow-lg border border-border">
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={embedUrl}
        title={`Location of ${placeName}`}
        aria-label={`Google Map showing location of ${placeName}`}
      ></iframe>
    </div>
  );
};

export default GoogleMapsEmbed;
