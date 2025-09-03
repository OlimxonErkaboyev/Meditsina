import { Hono } from 'npm:hono'
import { cors } from 'npm:hono/cors'
import { logger } from 'npm:hono/logger'
import { createClient } from 'npm:@supabase/supabase-js@2.39.7'
import * as kv from './kv_store.tsx'

const app = new Hono()

app.use('*', cors({
  origin: '*',
  allowHeaders: ['*'],
  allowMethods: ['*'],
}))

app.use('*', logger(console.log))

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
)

// Register user for health seminar
app.post('/make-server-6af2db0f/register', async (c) => {
  try {
    const { name, phone } = await c.req.json()
    
    if (!name || !phone) {
      return c.json({ error: 'Name and phone are required' }, 400)
    }

    // Generate a unique ID for the registration
    const registrationId = `registration_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    
    // Store registration data
    const registrationData = {
      id: registrationId,
      name: name.trim(),
      phone: phone.trim(),
      registeredAt: new Date().toISOString(),
      seminar: 'health_seminar_3_days',
      status: 'registered'
    }

    await kv.set(registrationId, registrationData)
    
    // Also store in a list for easy retrieval
    const existingRegistrations = await kv.get('all_registrations') || []
    existingRegistrations.push(registrationId)
    await kv.set('all_registrations', existingRegistrations)

    console.log(`New registration: ${name} - ${phone}`)

    return c.json({ 
      success: true, 
      message: 'Registration successful',
      registrationId 
    })
  } catch (error) {
    console.log(`Registration error: ${error}`)
    return c.json({ error: 'Registration failed' }, 500)
  }
})

// Get all registrations (admin endpoint)
app.get('/make-server-6af2db0f/registrations', async (c) => {
  try {
    const registrationIds = await kv.get('all_registrations') || []
    const registrations = await kv.mget(registrationIds)
    
    return c.json({ 
      success: true, 
      registrations: registrations.filter(r => r !== null),
      total: registrations.filter(r => r !== null).length
    })
  } catch (error) {
    console.log(`Error fetching registrations: ${error}`)
    return c.json({ error: 'Failed to fetch registrations' }, 500)
  }
})

// Health check endpoint
app.get('/make-server-6af2db0f/health', (c) => {
  return c.json({ status: 'ok', message: 'Health seminar server is running' })
})

Deno.serve(app.fetch)