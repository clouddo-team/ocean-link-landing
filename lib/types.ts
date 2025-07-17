export interface User {
  id: string
  email: string
  role: 'admin' | 'hr' | 'recruiter'
  company_id: string
  created_at: string
}

export interface Company {
  id: string
  name: string
  logo_url?: string
  description?: string
  fleet_size?: number
  vessel_types: string[]
  operational_focus?: string
  created_at: string
}

export interface Job {
  id: string
  company_id: string
  title: string
  description: string
  requirements: string[]
  location: string
  salary_range?: string
  contract_type: 'permanent' | 'contract' | 'temporary'
  is_urgent: boolean
  status: 'active' | 'paused' | 'closed'
  created_at: string
  expires_at?: string
}

export interface Candidate {
  id: string
  email: string
  first_name: string
  last_name: string
  expertise: string[]
  skills: string[]
  languages: string[]
  location: string
  relocation_preferences: string[]
  years_experience: number
  education: string
  portfolio_url?: string
  references: string[]
  created_at: string
}

export interface Certification {
  id: string
  candidate_id: string
  name: string
  issuer: string
  issue_date: string
  expiry_date: string
  certificate_url?: string
}

export interface Application {
  id: string
  job_id: string
  candidate_id: string
  status: 'pending' | 'shortlisted' | 'interviewed' | 'hired' | 'rejected'
  cover_letter?: string
  applied_at: string
  updated_at: string
}

export interface Message {
  id: string
  application_id: string
  sender_id: string
  content: string
  sent_at: string
}