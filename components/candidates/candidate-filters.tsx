"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { X, Search } from 'lucide-react'

const expertiseOptions = [
  'Marine Engineering',
  'Navigation',
  'Safety Compliance',
  'Port Operations',
  'Cargo Management',
  'Bridge Management',
  'Engine Room Operations',
  'Maritime Law',
]

const certificationOptions = [
  'STCW',
  'GMDSS',
  'Medical Certificate',
  'Radar Operation',
  'ARPA',
  'ECDIS',
  'Ship Security Officer',
  'Dangerous Goods',
]

const locationOptions = [
  'Singapore',
  'Hong Kong',
  'Dubai',
  'Rotterdam',
  'Hamburg',
  'London',
  'Manila',
  'Mumbai',
]

const languageOptions = [
  'English',
  'Mandarin',
  'Spanish',
  'French',
  'German',
  'Japanese',
  'Korean',
  'Arabic',
]

export function CandidateFilters({ onFiltersChange }: {
  onFiltersChange: (filters: any) => void
}) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([])
  const [selectedCertifications, setSelectedCertifications] = useState<string[]>([])
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])
  const [experienceRange, setExperienceRange] = useState('')

  const handleExpertiseChange = (expertise: string, checked: boolean) => {
    const updated = checked 
      ? [...selectedExpertise, expertise]
      : selectedExpertise.filter(e => e !== expertise)
    setSelectedExpertise(updated)
    updateFilters({ expertise: updated })
  }

  const handleCertificationChange = (cert: string, checked: boolean) => {
    const updated = checked 
      ? [...selectedCertifications, cert]
      : selectedCertifications.filter(c => c !== cert)
    setSelectedCertifications(updated)
    updateFilters({ certifications: updated })
  }

  const addLocation = (location: string) => {
    if (location && !selectedLocations.includes(location)) {
      const updated = [...selectedLocations, location]
      setSelectedLocations(updated)
      updateFilters({ locations: updated })
    }
  }

  const removeLocation = (location: string) => {
    const updated = selectedLocations.filter(l => l !== location)
    setSelectedLocations(updated)
    updateFilters({ locations: updated })
  }

  const addLanguage = (language: string) => {
    if (language && !selectedLanguages.includes(language)) {
      const updated = [...selectedLanguages, language]
      setSelectedLanguages(updated)
      updateFilters({ languages: updated })
    }
  }

  const removeLanguage = (language: string) => {
    const updated = selectedLanguages.filter(l => l !== language)
    setSelectedLanguages(updated)
    updateFilters({ languages: updated })
  }

  const updateFilters = (newFilters: any) => {
    onFiltersChange({
      searchTerm,
      expertise: selectedExpertise,
      certifications: selectedCertifications,
      locations: selectedLocations,
      languages: selectedLanguages,
      experienceRange,
      ...newFilters,
    })
  }

  const clearAllFilters = () => {
    setSearchTerm('')
    setSelectedExpertise([])
    setSelectedCertifications([])
    setSelectedLocations([])
    setSelectedLanguages([])
    setExperienceRange('')
    onFiltersChange({})
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Search & Filters
          <Button variant="ghost" size="sm" onClick={clearAllFilters}>
            Clear All
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Search */}
        <div className="space-y-2">
          <Label>Search Candidates</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search by name, skills, or experience..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                updateFilters({ searchTerm: e.target.value })
              }}
              className="pl-10"
            />
          </div>
        </div>

        {/* Experience Range */}
        <div className="space-y-2">
          <Label>Experience Level</Label>
          <Select value={experienceRange} onValueChange={(value) => {
            setExperienceRange(value)
            updateFilters({ experienceRange: value })
          }}>
            <SelectTrigger>
              <SelectValue placeholder="Select experience range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-2">0-2 years</SelectItem>
              <SelectItem value="3-5">3-5 years</SelectItem>
              <SelectItem value="6-10">6-10 years</SelectItem>
              <SelectItem value="11-15">11-15 years</SelectItem>
              <SelectItem value="15+">15+ years</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Expertise */}
        <div className="space-y-2">
          <Label>Expertise Areas</Label>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {expertiseOptions.map((expertise) => (
              <div key={expertise} className="flex items-center space-x-2">
                <Checkbox
                  id={expertise}
                  checked={selectedExpertise.includes(expertise)}
                  onCheckedChange={(checked) => handleExpertiseChange(expertise, !!checked)}
                />
                <Label htmlFor={expertise} className="text-sm">
                  {expertise}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-2">
          <Label>Required Certifications</Label>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {certificationOptions.map((cert) => (
              <div key={cert} className="flex items-center space-x-2">
                <Checkbox
                  id={cert}
                  checked={selectedCertifications.includes(cert)}
                  onCheckedChange={(checked) => handleCertificationChange(cert, !!checked)}
                />
                <Label htmlFor={cert} className="text-sm">
                  {cert}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Locations */}
        <div className="space-y-2">
          <Label>Preferred Locations</Label>
          <Select onValueChange={addLocation}>
            <SelectTrigger>
              <SelectValue placeholder="Add location" />
            </SelectTrigger>
            <SelectContent>
              {locationOptions.map((location) => (
                <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {selectedLocations.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {selectedLocations.map((location) => (
                <Badge key={location} variant="secondary" className="flex items-center gap-1">
                  {location}
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => removeLocation(location)}
                  />
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Languages */}
        <div className="space-y-2">
          <Label>Languages</Label>
          <Select onValueChange={addLanguage}>
            <SelectTrigger>
              <SelectValue placeholder="Add language" />
            </SelectTrigger>
            <SelectContent>
              {languageOptions.map((language) => (
                <SelectItem key={language} value={language}>
                  {language}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {selectedLanguages.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {selectedLanguages.map((language) => (
                <Badge key={language} variant="secondary" className="flex items-center gap-1">
                  {language}
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => removeLanguage(language)}
                  />
                </Badge>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}