
import React from 'react';
import { Control } from 'react-hook-form';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { FormData } from './types';
import { availabilityOptions } from './constants';

interface AvailabilitySectionProps {
  control: Control<FormData>;
}

const AvailabilitySection = ({ control }: AvailabilitySectionProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Availability</CardTitle>
      </CardHeader>
      <CardContent>
        <FormField
          control={control}
          name="availability"
          render={() => (
            <FormItem>
              <FormLabel>When are you typically available? *</FormLabel>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {availabilityOptions.map((option) => (
                  <FormField
                    key={option}
                    control={control}
                    name="availability"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(option)}
                            onCheckedChange={(checked) => {
                              const updatedValue = checked
                                ? [...(field.value || []), option]
                                : (field.value || []).filter(value => value !== option);
                              field.onChange(updatedValue);
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm">{option}</FormLabel>
                      </FormItem>
                    )}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
};

export default AvailabilitySection;
