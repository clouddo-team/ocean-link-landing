"use client"

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { MapPin, Calendar, Award, Languages, Star } from 'lucide-react'
import { Candidate } from '@/lib/types'

interface CandidateCardProps {
  candidate: Candidate
  onViewProfile: (id: string) => void
  onShortlist: (id: string) => void
  isShortlisted?: boolean
}

export function CandidateCard({ 
  candidate, 
  onViewProfile, 
  onShortlist, 
  isShortlisted = false 
}: CandidateCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-12 w-12">
              <AvatarFallback>
                {candidate.first_name[0]}{candidate.last_name[0]}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-lg">
                {candidate.first_name} {candidate.last_name}
              </h3>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <MapPin className="h-4 w-4 mr-1" />
                {candidate.location}
              </div>
            </div>
          </div>
          <Button
            variant={isShortlisted ? "default" : "outline"}
            size="sm"
            onClick={() => onShortlist(candidate.id)}
          >
            <Star className={`h-4 w-4 mr-1 ${isShortlisted ? 'fill-current' : ''}`} />
            {isShortlisted ? 'Shortlisted' : 'Shortlist'}
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-medium text-sm text-gray-700 mb-2">Expertise</h4>
          <div className="flex flex-wrap gap-1">
            {candidate.expertise.slice(0, 3).map((exp) => (
              <Badge key={exp} variant="secondary" className="text-xs">
                {exp}
              </Badge>
            ))}
            {candidate.expertise.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{candidate.expertise.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        <div>
          <h4 className="font-medium text-sm text-gray-700 mb-2">Key Skills</h4>
          <div className="flex flex-wrap gap-1">
            {candidate.skills.slice(0, 4).map((skill) => (
              <Badge key={skill} variant="outline" className="text-xs">
                {skill}
              </Badge>
            ))}
            {candidate.skills.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{candidate.skills.length - 4} more
              </Badge>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {candidate.years_experience} years experience
          </div>
          <div className="flex items-center">
            <Languages className="h-4 w-4 mr-1" />
            {candidate.languages.length} languages
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1"
            onClick={() => onViewProfile(candidate.id)}
          >
            View Profile
          </Button>
          <Button size="sm" className="flex-1">
            Contact
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}