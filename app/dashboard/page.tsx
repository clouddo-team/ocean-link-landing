"use client"

import { Sidebar } from '@/components/layout/sidebar'
import { Header } from '@/components/layout/header'
import { StatsCards } from '@/components/dashboard/stats-cards'
import { RecentApplications } from '@/components/dashboard/recent-applications'
import { HiringMetrics } from '@/components/dashboard/hiring-metrics'

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">Welcome back! Here's what's happening with your maritime hiring.</p>
            </div>
            
            <StatsCards />
            
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <HiringMetrics />
              </div>
              <div>
                <RecentApplications />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}