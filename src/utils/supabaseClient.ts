// This file contains the Supabase client configuration.
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bdzovlsbmxkauwuugumk.supabase.co'; // Replace with your own Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkem92bHNibXhrYXV3dXVndW1rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3NzM3NjUsImV4cCI6MjA1ODM0OTc2NX0.pg4NWyiqE56jfC9VJOuNXRP9jyKn5dd89Fd3TKeaxgE'; // Replace with your own Supabase API Key

export const supabase = createClient(supabaseUrl, supabaseKey);