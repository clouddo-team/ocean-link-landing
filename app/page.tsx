"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Anchor,
  Users,
  Briefcase,
  Award,
  BarChart3,
  Shield,
} from "lucide-react";
import { LearnMoreButton } from "@/components/landing/learn-more-button";
import { useState } from "react";

export default function Home() {
  // State for contact form fields
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [interest, setInterest] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Handle form submit
  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(false);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, companyName, email, role, interest }),
      });
      if (res.ok) {
        setSuccess(true);
        setFullName("");
        setCompanyName("");
        setEmail("");
        setRole("");
        setInterest("");
      } else {
        const data = await res.json();
        setError(data.error || "Failed to send.");
      }
    } catch (err) {
      setError("Failed to send.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-2">
              <img
                src="/Ocean Link.png"
                alt="OceanLink Logo"
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold text-gray-900">
                OceanLink
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/about">
                <Button
                  variant="ghost"
                  className="text-navy-800 hover:text-navy-900 hover:bg-navy-50"
                >
                  About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Maritime Talent Management
            <span className="block text-blue-600">Made Simple</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Streamline your maritime hiring process with our comprehensive CRM
            platform. Connect with qualified maritime professionals, manage
            applications, and ensure regulatory compliance—all in one place.
          </p>
          <div className="flex justify-center space-x-4">
            <LearnMoreButton />
            <Button variant="outline" size="lg" className="px-8">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need for Maritime Hiring
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform is specifically designed for the maritime industry,
              addressing your unique challenges and regulatory requirements.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Talent Search & Matching</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Find qualified maritime professionals with advanced search
                  filters and AI-powered matching based on skills,
                  certifications, and experience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Job Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Create and manage job postings with industry-specific
                  templates. Track applications and streamline your hiring
                  workflow.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Certification Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Monitor maritime certifications and receive alerts for
                  expiring credentials to ensure regulatory compliance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Analytics & Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Make data-driven decisions with comprehensive analytics on
                  hiring metrics, candidate demographics, and performance
                  trends.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Compliance & Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  GDPR compliant with enterprise-grade security. AES-256
                  encryption and role-based access controls protect your data.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Anchor className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle>Maritime Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Built specifically for the maritime industry with deep
                  understanding of vessel types, roles, and regulatory
                  requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600" id="get-started">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Maritime Hiring?
          </h2>
          <p className="text-xl text-blue-100 mb-2 max-w-2xl mx-auto">
            Get Started Today or Want to learn more?
          </p>
        </div>
      </section>

      {/* Lead Capture Form Section */}
      <section id="contact-form" className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-lg text-gray-600">
              Please fill in your details below and we'll be in touch shortly.
            </p>
            {success && (
              <p className="text-green-600 mt-2">
                Thank you! We'll be in touch soon.
              </p>
            )}
            {error && <p className="text-red-600 mt-2">{error}</p>}
          </div>
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={handleContactSubmit}>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <Label
                      htmlFor="fullName"
                      className="text-sm font-medium text-gray-700"
                    >
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      className="mt-1"
                      placeholder="Enter your full name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="companyName"
                      className="text-sm font-medium text-gray-700"
                    >
                      Company Name *
                    </Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      type="text"
                      required
                      className="mt-1"
                      placeholder="Enter your company name"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
                    >
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-1"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <Label
                    htmlFor="role"
                    className="text-sm font-medium text-gray-700"
                  >
                    Role/Department
                  </Label>
                  <Input
                    id="role"
                    name="role"
                    type="text"
                    className="mt-1"
                    placeholder="e.g., HR Manager, Recruitment Director"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-3 block">
                    Interested In *
                  </Label>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <input
                        id="get-started"
                        name="interest"
                        type="radio"
                        value="get-started"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        required
                        checked={interest === "get-started"}
                        onChange={() => setInterest("get-started")}
                      />
                      <Label
                        htmlFor="get-started"
                        className="ml-3 text-sm text-gray-700"
                      >
                        Get Started Today
                      </Label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="learn-more"
                        name="interest"
                        type="radio"
                        value="learn-more"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        required
                        checked={interest === "learn-more"}
                        onChange={() => setInterest("learn-more")}
                      />
                      <Label
                        htmlFor="learn-more"
                        className="ml-3 text-sm text-gray-700"
                      >
                        Learn More
                      </Label>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 text-lg font-medium"
                    disabled={submitting}
                  >
                    {submitting ? "Submitting..." : "Submit"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src="/Ocean Link Dark.png"
                alt="OceanLink Logo"
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold">OceanLink</span>
            </div>
            <p className="text-gray-400">
              © 2025 OceanLink. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
