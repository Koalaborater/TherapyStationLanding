/*
  # Create bookings table

  1. New Tables
    - `bookings`
      - `id` (uuid, primary key)
      - `name` (text) — patient full name
      - `phone` (text) — contact phone number
      - `email` (text) — contact email
      - `service` (text) — requested service
      - `preferred_date` (date) — requested appointment date
      - `preferred_time` (text) — Morning / Afternoon / Evening
      - `heard_from` (text, nullable) — referral source
      - `notes` (text, nullable) — additional patient notes
      - `status` (text) — booking status, default 'pending'
      - `created_at` (timestamptz) — submission timestamp

  2. Security
    - Enable RLS on `bookings` table
    - Public INSERT policy: anyone can submit a booking request
    - No SELECT/UPDATE/DELETE policies for public — admin access only via service role
*/

CREATE TABLE IF NOT EXISTS bookings (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name           text NOT NULL,
  phone          text NOT NULL,
  email          text NOT NULL,
  service        text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  heard_from     text,
  notes          text,
  status         text NOT NULL DEFAULT 'pending',
  created_at     timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a booking"
  ON bookings
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
