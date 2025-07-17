"use client"

import { useState } from 'react'
import { Sidebar } from '@/components/layout/sidebar'
import { Header } from '@/components/layout/header'
import { CandidateCard } from '@/components/candidates/candidate-card'
import { CandidateFilters } from '@/components/candidates/candidate-filters'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Users, Download } from 'lucide-react'

const mockCandidates = [
  {
    id: '1',
    email: 'sarah.chen@email.com',
    first_name: 'Sarah',
    last_name: 'Chen',
    expertise: ['Marine Engineering', 'Engine Room Operations', 'Safety Management'],
    skills: ['Diesel Engines', 'Hydraulic Systems', 'Preventive Maintenance', 'Troubleshooting'],
    languages: ['English', 'Mandarin', 'Spanish'],
    location: 'Singapore',
    relocation_preferences: ['Hong Kong', 'Dubai', 'Rotterdam'],
    years_experience: 8,
    education: 'Marine Engineering Degree',
    portfolio_url: 'https://portfolio.example.com',
    references: ['Capt. John Smith', 'Chief Eng. Maria Garcia'],
    created_at: '2024-01-10',
  },
  {
    id: '2',
    email: 'marcus.rodriguez@email.com',
    first_name: 'Marcus',
    last_name: 'Rodriguez',
    expertise: ['Navigation', 'Bridge Management', 'Cargo Operations'],
    skills: ['ECDIS', 'Radar Operation', 'Weather Routing', 'Port Operations'],
    languages: ['English', 'Spanish', 'Portuguese'],
    location: 'Panama',
    relocation_preferences: ['Global'],
    years_experience: 12,
    education: 'Nautical Science Degree',
    references: ['Capt. Lisa Wong', 'Port Manager Carlos Silva'],
    created_at: '2024-01-08',
  },
  {
    id: '3',
    email: 'emma.thompson@email.com',
    first_name: 'Emma',
    last_name: 'Thompson',
    expertise: ['Safety Compliance', 'Maritime Law', 'Environmental Protection'],
    skills: ['ISM Code', 'MARPOL', 'Risk Assessment', 'Audit Management'],
    languages: ['English', 'French', 'German'],
    location: 'London',
    relocation_preferences: ['Rotterdam', 'Hamburg', 'Antwerp'],
    years_experience: 6,
    education: 'Maritime Law & Safety Management',
    references: ['Safety Dir. James Wilson', 'Legal Counsel Anne Martin'],
    created_at: '2024-01-05',
  },
]

export default function CandidatesPage() {
  const [filters, setFilters] = useState({})
  const [shortlistedCandidates, setShortlistedCandidates] = useState<string[]>([])

  const handleFiltersChange = (newFilters: any) => {
    setFilters(newFilters)
  }

  const handleViewProfile = (candidateId: string) => {
    console.log('Viewing profile for candidate:', candidateId)
    // Navigate to candidate profile page
  }

  const handleShortlist = (candidateId: string) => {
    setShortlistedCandidates(prev => 
      prev.includes(candidateId)
        ? prev.filter(id => id !== candidateId)
        : [...prev, candidateId]
    )
  }

  // Filter candidates based on current filters
  const filteredCandidates = mockCandidates.filter(candidate => {
    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase()
      const matchesSearch = 
        candidate.first_name.toLowerCase().includes(searchLower) ||
        candidate.last_name.toLowerCase().includes(searchLower) ||
        candidate.expertise.some(exp => exp.toLowerCase().includes(searchLower)) ||
        candidate.skills.some(skill => skill.toLowerCase().includes(searchLower))
      
      if (!matchesSearch) return false
    }

    if (filters.expertise?.length > 0) {
      const hasMatchingExpertise = filters.expertise.some(exp => 
        candidate.expertise.includes(exp)
      )
      if (!hasMatchingExpertise) return false
    }

    if (filters.locations?.length > 0) {
      const hasMatchingLocation = filters.locations.some(loc => 
        candidate.location.includes(loc) || 
        candidate.relocation_preferences.includes(loc)
      )
      if (!hasMatchingLocation) return false
    }

    if (filters.languages?.length > 0) {
      const hasMatchingLanguage = filters.languages.some(lang => 
        candidate.languages.includes(lang)
      )
      if (!hasMatchingLanguage) return false
    }

    if (filters.experienceRange) {
      const [min, max] = filters.experienceRange.includes('+') 
        ? [parseInt(filters.experienceRange), Infinity]
        : filters.experienceRange.split('-').map(n => parseInt(n))
      
      if (candidate.years_experience < min || candidate.years_experience > max) {
        return false
      }
    }

    return true
  })

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Candidate Database</h1>
                <p className="text-gray-600">Search and discover qualified maritime professionals</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export Results
                </Button>
                <Button>
                  Import Candidates
                </Button>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-4">
              {/* Filters Sidebar */}
              <div className="lg:col-span-1">
                <CandidateFilters onFiltersChange={handleFiltersChange} />
              </div>

              {/* Candidates Grid */}
              <div className="lg:col-span-3">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm text-gray-600">
                    Showing {filteredCandidates.length} of {mockCandidates.length} candidates
                  </p>
                  {shortlistedCandidates.length > 0 && (
                    <Button variant="outline" size="sm">
                      View Shortlisted ({shortlistedCandidates.length})
                    </Button>
                  )}
                </div>

                {filteredCandidates.length > 0 ? (
                  <div className="grid gap-6 md:grid-cols-2">
                    {filteredCandidates.map((candidate) => (
                      <CandidateCard
                        key={candidate.id}
                        candidate={candidate}
                        onViewProfile={handleViewProfile}
                        onShortlist={handleShortlist}
                        isShortlisted={shortlistedCandidates.includes(candidate.id)}
                      />
                    ))}
                  </div>
                ) : (
                  <Card>
                    <CardContent className="p-8 text-center">
                      <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">No candidates found</h3>
                      <p className="text-gray-500 mb-4">
                        Try adjusting your search criteria or filters to find more candidates.
                      </p>
                      <Button variant="outline" onClick={() => setFilters({})}>
                        Clear All Filters
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}