import { redirect } from 'next/navigation'

import { createClient } from '@/app/lib/supabase/server'

// This can only be accessed if the user is logged in
export default async function ProfilePage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return <p>Hello {data.user.email}</p>
}
