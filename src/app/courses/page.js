import CourseList from './CourseList'

export const metadata = {
  title: 'CodePion Courses',
  description: 'Explore our courses'
}

// Server component: fetch data directly
async function getCourses() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    // cache: 'force-cache', // => SSG (Static Site Generation)
    next: { revalidate: 60 }, // regenerates every 60 seconds => ISR (Incremental Site Regeneration)
    // cache: 'no-store', // server-rendered on every request => SSR
  })
  if (!res.ok) throw new Error('Failed to fetch courses!')

  return res.json()
}

export default async function CoursesPage() {
  const courses = await getCourses()

  return (
    <section className='max-w-3xl mx-auto p-8'>
      <h1 className='text-2xl font-semibold mb-6'>
        📚 Available Courses
      </h1>
      
      {/* Pass data to Client Component */}
      <CourseList courses={courses} />
    </section>
  )
}
