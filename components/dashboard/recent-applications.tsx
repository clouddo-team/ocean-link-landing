"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { formatDistanceToNow } from 'date-fns'

const recentApplications = [
  {
    id: '1',
    candidateName: 'Sarah Chen',
    jobTitle: 'Chief Engineer',
    status: 'shortlisted',
    appliedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    experience: '8 years',
  },
  {
    id: '2',
    candidateName: 'Marcus Rodriguez',
    jobTitle: 'Navigation Officer',
    status: 'pending',
    appliedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    experience: '5 years',
  },
  {
    id: '3',
    candidateName: 'Emma Thompson',
    jobTitle: 'Safety Officer',
    status: 'interviewed',
    appliedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    experience: '12 years',
  },
  {
    id: '4',
    candidateName: 'David Kim',
    jobTitle: 'Deck Officer',
    status: 'hired',
    appliedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    experience: '6 years',
  },
]

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800',
  shortlisted: 'bg-blue-100 text-blue-800',
  interviewed: 'bg-purple-100 text-purple-800',
  hired: 'bg-green-100 text-green-800',
  rejected: 'bg-red-100 text-red-800',
}

export function RecentApplications() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Applications</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentApplications.map((application) => (
            <div key={application.id} className="flex items-center space-x-4">
              <Avatar>
                <AvatarFallback>
                  {application.candidateName.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {application.candidateName}
                </p>
                <p className="text-sm text-gray-500 truncate">
                  {application.jobTitle} • {application.experience}
                </p>
              </div>
              <div className="flex flex-col items-end space-y-1">
                <Badge className={statusColors[application.status as keyof typeof statusColors]}>
                  {application.status}
                </Badge>
                <p className="text-xs text-gray-500">
                  {formatDistanceToNow(application.appliedAt, { addSuffix: true })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}