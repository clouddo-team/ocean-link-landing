"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'

const applicationData = [
  { month: 'Jan', applications: 45, hires: 8 },
  { month: 'Feb', applications: 52, hires: 12 },
  { month: 'Mar', applications: 48, hires: 9 },
  { month: 'Apr', applications: 61, hires: 15 },
  { month: 'May', applications: 55, hires: 11 },
  { month: 'Jun', applications: 67, hires: 18 },
]

const timeToHireData = [
  { month: 'Jan', days: 28 },
  { month: 'Feb', days: 25 },
  { month: 'Mar', days: 30 },
  { month: 'Apr', days: 22 },
  { month: 'May', days: 26 },
  { month: 'Jun', days: 20 },
]

export function HiringMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Applications vs Hires</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={applicationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="applications" fill="#3b82f6" name="Applications" />
              <Bar dataKey="hires" fill="#10b981" name="Hires" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Average Time to Hire (Days)</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={timeToHireData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="days" 
                stroke="#8b5cf6" 
                strokeWidth={2}
                name="Days"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}