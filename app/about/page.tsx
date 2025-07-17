import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Anchor,
  Users,
  Globe,
  Award,
  Shield,
  Target,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Ship,
  Briefcase,
} from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/Ocean Link.png"
                alt="OceanLink Logo"
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold text-gray-900">
                OceanLink
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button
                  variant="ghost"
                  className="text-navy-800 hover:text-navy-900 hover:bg-navy-50"
                >
                  Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            About OceanLink
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We're revolutionizing maritime talent acquisition with cutting-edge
            technology and deep industry expertise, connecting the best maritime
            professionals with leading shipping companies worldwide.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Leading Maritime Recruitment Platform
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2020, OceanLink has quickly become the premier
                platform for maritime talent acquisition. We understand the
                unique challenges of the shipping industry and have built our
                platform specifically to address the complex requirements of
                maritime recruitment.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our comprehensive CRM solution streamlines the entire hiring
                process, from candidate discovery to onboarding, while ensuring
                full compliance with international maritime regulations and
                certifications.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    500+
                  </div>
                  <div className="text-sm text-gray-600">Companies Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    15K+
                  </div>
                  <div className="text-sm text-gray-600">
                    Maritime Professionals
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    50+
                  </div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    98%
                  </div>
                  <div className="text-sm text-gray-600">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white flex items-start justify-center md:items-start md:justify-center">
              <Image
                src="/image_ship.png"
                alt="OceanLink Ship"
                width={600}
                height={600}
                className="object-contain mt-0 md:mt-[-40px] md:h-[500px] md:w-[500px] h-[260px] w-[260px] rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  To bridge the gap between exceptional maritime talent and
                  leading shipping companies through innovative technology,
                  comprehensive compliance management, and personalized service
                  that drives the maritime industry forward.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  To become the global standard for maritime recruitment,
                  creating a world where every maritime professional finds their
                  ideal career opportunity and every shipping company has access
                  to the best talent available.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape our commitment
              to excellence in maritime recruitment.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Safety First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Maritime safety is paramount. We ensure all candidates meet
                  the highest safety standards and certifications.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We strive for excellence in every interaction, delivering
                  superior service and results.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We build lasting partnerships with both candidates and
                  companies, fostering mutual success.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="h-16 w-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Anchor className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle>Maritime Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Deep maritime industry expertise drives our specialized
                  approach to recruitment solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Details */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Company Information
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Briefcase className="h-5 w-5 mr-2" />
                  Company Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Legal Name</h4>
                    <p className="text-gray-600">
                      OceanLink Maritime Solutions Ltd.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Founded</h4>
                    <p className="text-gray-600">2020</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Industry</h4>
                    <p className="text-gray-600">
                      Maritime Technology & Recruitment
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Company Size
                    </h4>
                    <p className="text-gray-600">50-100 employees</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Specializations
                    </h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="secondary">Maritime Recruitment</Badge>
                      <Badge variant="secondary">CRM Solutions</Badge>
                      <Badge variant="secondary">Compliance Management</Badge>
                      <Badge variant="secondary">Talent Analytics</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Headquarters
                  </h4>
                  <p className="text-gray-600">
                    Marina Bay Financial Centre
                    <br />
                    10 Marina Boulevard, #15-01
                    <br />
                    Singapore 018983
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Regional Offices
                  </h4>
                  <div className="space-y-2 text-gray-600">
                    <p>• Dubai, UAE - Middle East Operations</p>
                    <p>• Rotterdam, Netherlands - European Operations</p>
                    <p>• Hong Kong - Asia Pacific Operations</p>
                  </div>
                </div>
                <div className="pt-4 space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Phone className="h-4 w-4 mr-2" />
                    +65 6123 4567
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Mail className="h-4 w-4 mr-2" />
                    info@oceanlink.com
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Leadership Team */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our experienced leadership team brings decades of maritime
              industry expertise and technology innovation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="h-24 w-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Georgi Kovachev
                </h3>
                <p className="text-blue-600 font-medium mb-3">CEO & Founder</p>
                <p className="text-gray-600 text-sm">
                  Former Master Mariner with 20+ years at sea and 10 years in
                  maritime recruitment. MBA from INSEAD.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="h-24 w-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Georgi Pasqualy
                </h3>
                <p className="text-blue-600 font-medium mb-3">CTO</p>
                <p className="text-gray-600 text-sm">
                  Technology leader with 15+ years in SaaS platforms. Former VP
                  Engineering at leading HR tech companies.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="h-24 w-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Zhivko Stoykov
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  VP of Operations
                </p>
                <p className="text-gray-600 text-sm">
                  Maritime operations expert with extensive experience in crew
                  management and regulatory compliance across global markets.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Partner with OceanLink?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of maritime companies who trust OceanLink for their
            talent acquisition needs.
          </p>
          <Link href="/#contact-form">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8"
            >
              Get Started Today
            </Button>
          </Link>
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
