
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';
import ArtistCard from '@/components/ArtistCard';
import { artists, categories, Artist } from '@/data/mockData';

const ArtistsPage = () => {
  const [searchParams] = useSearchParams();
  const [filteredArtists, setFilteredArtists] = useState<Artist[]>(artists);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');

  // Get initial category from URL params
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategories([categoryParam]);
    }
  }, [searchParams]);

  // Filter artists based on selected criteria
  useEffect(() => {
    let filtered = artists;

    // Search by name or bio
    if (searchTerm) {
      filtered = filtered.filter(artist =>
        artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artist.bio.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(artist =>
        artist.category.some(cat => selectedCategories.includes(cat))
      );
    }

    // Filter by location
    if (selectedLocation) {
      filtered = filtered.filter(artist =>
        artist.location.toLowerCase().includes(selectedLocation.toLowerCase())
      );
    }

    // Filter by price range
    if (selectedPriceRange) {
      filtered = filtered.filter(artist =>
        artist.priceRange === selectedPriceRange
      );
    }

    setFilteredArtists(filtered);
  }, [searchTerm, selectedCategories, selectedLocation, selectedPriceRange]);

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, categoryId]);
    } else {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
    }
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedCategories([]);
    setSelectedLocation('');
    setSelectedPriceRange('');
  };

  const priceRanges = [
    'Rs 20k - 40k',
    'Rs 40k-50k', 
    'Rs 50k-70k',
    'Rs 70k+'
  ];

  const locations = [
    'DELHI,INDIA',
    'NOIDA, INDIA',
    'PUNE, INDIA',
    'MUMBAI, INDIA',
    'CHANDIGARH, INDIA',
    'BANGALORE, INDIA'
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Find Artists</h1>
          <p className="text-lg text-muted-foreground">
            Discover talented performers for your next event
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <Card className="sticky top-24">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Filters</CardTitle>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={clearAllFilters}
                    className="text-muted-foreground hover:text-primary"
                  >
                    Clear All
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Search</label>
                  <Input
                    placeholder="Search artists..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                {/* Categories */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Category</label>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={category.id}
                          checked={selectedCategories.includes(category.id)}
                          onCheckedChange={(checked) => 
                            handleCategoryChange(category.id, checked as boolean)
                          }
                        />
                        <label 
                          htmlFor={category.id} 
                          className="text-sm cursor-pointer flex items-center space-x-2"
                        >
                          <span>{category.icon}</span>
                          <span>{category.name}</span>
                          <span className="text-muted-foreground">({category.count})</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Location</label>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger>
                      <SelectValue placeholder="Any location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Any location</SelectItem>
                      {locations.map((location) => (
                        <SelectItem key={location} value={location}>
                          {location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Price Range</label>
                  <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Any price" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Any price</SelectItem>
                      {priceRanges.map((range) => (
                        <SelectItem key={range} value={range}>
                          {range}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="flex-1">
            {/* Active Filters */}
            {(selectedCategories.length > 0 || selectedLocation || selectedPriceRange || searchTerm) && (
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {searchTerm && (
                    <Badge variant="secondary" className="px-3 py-1">
                      Search: "{searchTerm}"
                    </Badge>
                  )}
                  {selectedCategories.map(catId => {
                    const category = categories.find(c => c.id === catId);
                    return category ? (
                      <Badge key={catId} variant="secondary" className="px-3 py-1">
                        {category.icon} {category.name}
                      </Badge>
                    ) : null;
                  })}
                  {selectedLocation && (
                    <Badge variant="secondary" className="px-3 py-1">
                      📍 {selectedLocation}
                    </Badge>
                  )}
                  {selectedPriceRange && (
                    <Badge variant="secondary" className="px-3 py-1">
                      💰 {selectedPriceRange}
                    </Badge>
                  )}
                </div>
              </div>
            )}

            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                {filteredArtists.length} artist{filteredArtists.length !== 1 ? 's' : ''} found
              </p>
            </div>

            {/* Artists Grid */}
            {filteredArtists.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredArtists.map((artist) => (
                  <ArtistCard key={artist.id} artist={artist} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎭</div>
                <h3 className="text-xl font-semibold mb-2">No artists found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your filters or search terms
                </p>
                <Button onClick={clearAllFilters} variant="outline">
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ArtistsPage;
