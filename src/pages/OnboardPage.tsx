
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import Layout from '@/components/Layout';
import PersonalInfoSection from '@/components/onboard/PersonalInfoSection';
import ProfessionalDetailsSection from '@/components/onboard/ProfessionalDetailsSection';
import CategoriesSkillsSection from '@/components/onboard/CategoriesSkillsSection';
import AvailabilitySection from '@/components/onboard/AvailabilitySection';
import { formSchema, FormData } from '@/components/onboard/types';

const OnboardPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      bio: '',
      categories: [],
      languages: [],
      feeRange: '',
      location: '',
      email: '',
      phone: '',
      website: '',
      experience: '',
      availability: []
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Artist submission:', data);
    
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
    form.reset();
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Join Artistly</h1>
            <p className="text-lg text-muted-foreground">
              Share your talent with event planners looking for amazing performers
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <PersonalInfoSection control={form.control} />
              <ProfessionalDetailsSection control={form.control} />
              <CategoriesSkillsSection control={form.control} />
              <AvailabilitySection control={form.control} />

              {/* Submit */}
              <div className="flex justify-center">
                <Button 
                  type="submit" 
                  size="lg"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-12"
                >
                  {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Layout>
  );
};

export default OnboardPage;
