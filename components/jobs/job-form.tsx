"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

const jobSchema = z.object({
  title: z.string().min(1, "Job title is required"),
  description: z.string().min(1, "Job description is required"),
  location: z.string().min(1, "Location is required"),
  salaryRange: z.string().optional(),
  contractType: z.enum(["permanent", "contract", "temporary"]),
  isUrgent: z.boolean(), // make required
  requirements: z.array(z.string()), // make required
});

type JobFormData = z.infer<typeof jobSchema>;

const commonRoles = [
  "Chief Engineer",
  "Deck Officer",
  "Navigation Officer",
  "Safety Officer",
  "Marine Engineer",
  "Port Captain",
  "Ship Superintendent",
  "Maritime Pilot",
];

const commonRequirements = [
  "STCW Certificate",
  "GMDSS Certificate",
  "Medical Certificate",
  "Radar Operation",
  "Bridge Management",
  "Engine Room Management",
  "Safety Management",
  "Port Operations",
];

export function JobForm({
  onSubmit,
  initialData,
}: {
  onSubmit: (data: JobFormData) => void;
  initialData?: Partial<JobFormData>;
}) {
  const [requirements, setRequirements] = useState<string[]>(
    initialData?.requirements ?? []
  );
  const [newRequirement, setNewRequirement] = useState("");

  const form = useForm<JobFormData>({
    resolver: zodResolver(jobSchema),
    defaultValues: {
      title: initialData?.title || "",
      description: initialData?.description || "",
      location: initialData?.location || "",
      salaryRange: initialData?.salaryRange || "",
      contractType: initialData?.contractType || "permanent",
      isUrgent: initialData?.isUrgent ?? false,
      requirements: initialData?.requirements ?? [],
    },
  });

  const addRequirement = (requirement: string) => {
    if (requirement && !requirements.includes(requirement)) {
      setRequirements([...requirements, requirement]);
      setNewRequirement("");
    }
  };

  const removeRequirement = (requirement: string) => {
    setRequirements(requirements.filter((r) => r !== requirement));
  };

  const handleSubmit = (data: JobFormData) => {
    onSubmit({ ...data, requirements }); // requirements is now part of JobFormData
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Job Details</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="title">Job Title</Label>
              <Input
                id="title"
                {...form.register("title")}
                placeholder="e.g., Chief Engineer"
              />
              {form.formState.errors.title && (
                <p className="text-sm text-red-600">
                  {form.formState.errors.title.message}
                </p>
              )}
              <div className="flex flex-wrap gap-2 mt-2">
                {commonRoles.map((role) => (
                  <Button
                    key={role}
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => form.setValue("title", role)}
                  >
                    {role}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                {...form.register("location")}
                placeholder="e.g., Singapore, Global"
              />
              {form.formState.errors.location && (
                <p className="text-sm text-red-600">
                  {form.formState.errors.location.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Job Description</Label>
            <Textarea
              id="description"
              {...form.register("description")}
              placeholder="Describe the role, responsibilities, and what you're looking for..."
              rows={4}
            />
            {form.formState.errors.description && (
              <p className="text-sm text-red-600">
                {form.formState.errors.description.message}
              </p>
            )}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="salaryRange">Salary Range (Optional)</Label>
              <Input
                id="salaryRange"
                {...form.register("salaryRange")}
                placeholder="e.g., $80,000 - $120,000"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contractType">Contract Type</Label>
              <Select
                value={form.watch("contractType")}
                onValueChange={(value) =>
                  form.setValue("contractType", value as any)
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="permanent">Permanent</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                  <SelectItem value="temporary">Temporary</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Requirements & Skills</Label>
            <div className="flex gap-2">
              <Input
                value={newRequirement}
                onChange={(e) => setNewRequirement(e.target.value)}
                placeholder="Add a requirement..."
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addRequirement(newRequirement);
                  }
                }}
              />
              <Button
                type="button"
                onClick={() => addRequirement(newRequirement)}
                disabled={!newRequirement}
              >
                Add
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
              {commonRequirements.map((req) => (
                <Button
                  key={req}
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => addRequirement(req)}
                >
                  {req}
                </Button>
              ))}
            </div>

            {requirements.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {requirements.map((req) => (
                  <Badge
                    key={req}
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    {req}
                    <X
                      className="h-3 w-3 cursor-pointer"
                      onClick={() => removeRequirement(req)}
                    />
                  </Badge>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="isUrgent"
              checked={form.watch("isUrgent")}
              onCheckedChange={(checked) =>
                form.setValue("isUrgent", !!checked)
              }
            />
            <Label htmlFor="isUrgent">
              Mark as urgent (increased visibility)
            </Label>
          </div>

          <div className="flex gap-4">
            <Button type="submit" className="flex-1">
              {initialData ? "Update Job" : "Post Job"}
            </Button>
            <Button type="button" variant="outline">
              Save as Draft
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
