
import React from 'react';
import { Control } from 'react-hook-form';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { FormData } from './types';
import { languageOptions } from './constants';
import { categories } from '@/data/mockData';

interface CategoriesSkillsSectionProps {
  control: Control<FormData>;
}

const CategoriesSkillsSection = ({ control }: CategoriesSkillsSectionProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Categories & Skills</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <FormField
          control={control}
          name="categories"
          render={() => (
            <FormItem>
              <FormLabel>Performance Categories *</FormLabel>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map((category) => (
                  <FormField
                    key={category.id}
                    control={control}
                    name="categories"
                    render={({ field }) => (
                      <FormItem className="flex flex-col items-center space-y-2 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(category.id)}
                            onCheckedChange={(checked) => {
                              const updatedValue = checked
                                ? [...(field.value || []), category.id]
                                : (field.value || []).filter(value => value !== category.id);
                              field.onChange(updatedValue);
                            }}
                          />
                        </FormControl>
                        <div className="text-center">
                          <div className="text-2xl mb-1">{category.icon}</div>
                          <FormLabel className="text-sm font-medium">
                            {category.name}
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="languages"
          render={() => (
            <FormItem>
              <FormLabel>Languages Spoken *</FormLabel>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {languageOptions.map((language) => (
                  <FormField
                    key={language}
                    control={control}
                    name="languages"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(language)}
                            onCheckedChange={(checked) => {
                              const updatedValue = checked
                                ? [...(field.value || []), language]
                                : (field.value || []).filter(value => value !== language);
                              field.onChange(updatedValue);
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm">{language}</FormLabel>
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

export default CategoriesSkillsSection;
