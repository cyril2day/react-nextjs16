export const metadata = {
  title: 'CodePion Courses',
  description: 'Explore our courses'
}

// Server component: fetch data directly
async function getCourses() {
  const res = await fetch('https://codepion.com/api/courses', {
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
      <h1 className='text-2xl font-semibold mb-6'>📚 Available Courses</h1>
      
      <ul className='space-y-4'>
        {courses.map(course => (
          <li
            key={course.id}
            className='border rounded-lg p-4 hover:bg-gray-50 transition'
          >
            <h2 className='text-lg font-medium'>{course.title}</h2>
            <p className='text-gray-600 text-sm mt-1'>{course.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
