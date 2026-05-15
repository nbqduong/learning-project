export type Role = "student" | "instructor";

export type User = {
  id: string;
  email: string;
  full_name: string;
  role: Role;
  created_at: string;
};

export type Course = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  price_cents: number;
  instructor_id: string;
  published: boolean;
  created_at: string;
};

export type Enrollment = {
  id: string;
  user_id: string;
  course_id: string;
  created_at: string;
};

