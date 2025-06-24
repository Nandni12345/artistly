
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Artist } from '@/data/mockData';

interface ArtistCardProps {
  artist: Artist;
}

const ArtistCard = ({ artist }: ArtistCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative">
        <img
          src={artist.imageUrl}
          alt={artist.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {artist.verified && (
          <Badge className="absolute top-2 right-2 bg-green-500 hover:bg-green-600">
            ✓ Verified
          </Badge>
        )}
      </div>
      
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
            {artist.name}
          </h3>
          <div className="flex items-center space-x-1">
            <span className="text-yellow-500">★</span>
            <span className="text-sm font-medium">{artist.rating}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-2">
          {artist.category.map((cat) => (
            <Badge key={cat} variant="secondary" className="text-xs">
              {cat}
            </Badge>
          ))}
        </div>
        
        <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
          {artist.bio}
        </p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>📍 {artist.location}</span>
          <span className="font-medium text-primary">{artist.priceRange}</span>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
          Request Quote
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ArtistCard;
