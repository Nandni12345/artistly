import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { categories } from '@/data/mockData';
import Layout from '@/components/Layout';

const Homepage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 via-yellow-50 to-yellow-100 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Connect with Amazing 
              <br />
              Performing Artists
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book talented singers, dancers, speakers, and DJs for your events. 
              Artistly connects event planners with verified performing artists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg"
                className="bg-gradient-to-r from-pink-600 to-yellow-500 hover:from-pink-700 hover:to-yellow-600 text-lg px-8"
              >
                <Link to="/artists">Explore Artists</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="text-lg px-8 border-2 hover:bg-muted"
              >
                <Link to="/onboard">Join as Artist</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 text-4xl animate-bounce delay-1000">🎤</div>
        <div className="absolute top-32 right-20 text-4xl animate-bounce delay-500">💃</div>
        <div className="absolute bottom-20 left-20 text-4xl animate-bounce delay-700">🎧</div>
        <div className="absolute bottom-32 right-10 text-4xl animate-bounce delay-300">🎙️</div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find Artists by Category
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Browse through our curated collection of professional performers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.id} to={`/artists?category=${category.id}`}>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-gradient-to-br from-white to-yellow-50/50 border-2 hover:border-yellow-200">
                  <CardContent className="p-6 text-center">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {category.description}
                    </p>
                    <div className="text-sm font-medium text-yellow-600">
                      {category.count} artists available
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Artistly?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl text-white">✓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Artists</h3>
              <p className="text-muted-foreground">All our artists are thoroughly vetted and verified for quality assurance.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl text-white">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-muted-foreground">Clear pricing ranges with no hidden fees. Get quotes directly from artists.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl text-white">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Perfect Match</h3>
              <p className="text-muted-foreground">Advanced filtering helps you find the perfect artist for your event.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-yellow-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Book Your Perfect Artist?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of event planners who trust Artistly to find amazing talent.
          </p>
          <Button 
            asChild 
            size="lg" 
            variant="secondary"
            className="text-lg px-8"
          >
            <Link to="/artists">Start Browsing</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Homepage;
