"use client"

import { Button } from '@/components/ui/button'

export function LearnMoreButton() {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <Button 
      size="lg" 
      className="px-8"
      onClick={scrollToForm}
    >
      Learn More
    </Button>
  )
}