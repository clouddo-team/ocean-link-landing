"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Briefcase, Users, UserCheck, TrendingUp } from 'lucide-react'

const stats = [
  {
    title: 'Active Jobs',
    value: '24',
    change: '+12%',
    changeType: 'positive' as const,
    icon: Briefcase,
  },
  {
    title: 'Total Candidates',
    value: '1,247',
    change: '+8%',
    changeType: 'positive' as const,
    icon: Users,
  },
  {
    title: 'Applications This Month',
    value: '89',
    change: '+23%',
    changeType: 'positive' as const,
    icon: UserCheck,
  },
  {
    title: 'Hire Rate',
    value: '18%',
    change: '+5%',
    changeType: 'positive' as const,
    icon: TrendingUp,
  },
]

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-green-600 mt-1">
              {stat.change} from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}