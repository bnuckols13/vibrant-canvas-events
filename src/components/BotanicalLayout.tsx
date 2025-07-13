import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";

const BotanicalLayout = () => {
  const navigationItems = [
    "Home",
    "Original Paintings", 
    "Prints",
    "Energy Readings",
    "About",
    "Contact"
  ];

  const artworkSeries = [
    {
      id: 1,
      title: "Cosmic Essence No. 01",
      subtitle: "Limited Edition Print",
      price: "From $95.00 CAD",
      image: artwork1,
      isOutOfStock: false
    },
    {
      id: 2,
      title: "Cosmic Essence No. 02", 
      subtitle: "Limited Edition Print",
      price: "From $95.00 CAD",
      image: artwork2,
      isOutOfStock: true
    },
    {
      id: 3,
      title: "Cosmic Essence No. 03",
      subtitle: "Limited Edition Print", 
      price: "From $95.00 CAD",
      image: artwork3,
      isOutOfStock: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="border-b border-border/20 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-2xl font-light tracking-wide text-foreground">
                Ethereal Expressions
              </h1>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <button 
                  key={index}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
                >
                  {item}
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <select className="text-sm text-muted-foreground bg-transparent border-none outline-none">
                <option>CA (CAD $)</option>
              </select>
              <button className="text-sm text-muted-foreground hover:text-foreground">
                Account
              </button>
              <button className="relative">
                <span className="text-sm text-muted-foreground hover:text-foreground">🔍</span>
              </button>
              <button className="relative">
                <span className="text-sm text-muted-foreground hover:text-foreground">🛍</span>
                <span className="absolute -top-2 -right-2 bg-foreground text-background text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Series Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-foreground mb-6 tracking-wide">
              Cosmic Essence Series
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-4xl mx-auto">
              Cosmic Essence is an on-going explorational series of limited edition fine art prints. 
              Each piece serves as a beautiful visual reminder that energy flows through all things. 
              Everything must have an end, or there is no beginning. I wish to convey a sense of beauty, 
              truth, and serenity through this energetic series.
            </p>
          </div>

          {/* Artwork Grid */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {artworkSeries.map((artwork) => (
              <div key={artwork.id} className="group cursor-pointer">
                <div className="relative mb-6">
                  {artwork.isOutOfStock && (
                    <Badge 
                      variant="secondary" 
                      className="absolute top-4 left-4 z-10 bg-foreground text-background"
                    >
                      OUT OF STOCK
                    </Badge>
                  )}
                  
                  <div className="bg-card overflow-hidden">
                    <img 
                      src={artwork.image} 
                      alt={artwork.title}
                      className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-light text-foreground mb-1">
                    {artwork.title} / {artwork.subtitle}
                  </h3>
                  <p className="text-muted-foreground font-light">
                    {artwork.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Button 
              variant="outline"
              className="px-8 py-3 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 font-light"
            >
              Explore Full Collection
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BotanicalLayout;