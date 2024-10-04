import Link from 'next/link'

export default function Blog() {
  const blogPosts = [
    { id: 1, title: "Introduction to FeeFiFoFum", date: "2024-06-01", excerpt: "Learn about the giant of Solana memecoins..." },
    { id: 2, title: "The Benefits of LPing with FFF", date: "2024-06-15", excerpt: "Discover how you can earn rewards by providing liquidity..." },
    { id: 3, title: "Understanding the Fee Meta", date: "2024-07-01", excerpt: "Dive deep into the mechanics of the Fee Meta and how it benefits FFF holders..." },
    { id: 4, title: "FeeFiFoFum Q3 Roadmap Update", date: "2024-07-15", excerpt: "Exciting developments coming to the FFF ecosystem..." },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">FeeFiFoFum Blog</h1>
      <div className="space-y-4">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded px-8 pt-6 pb-8">
            <h2 className="text-xl font-semibold mb-2">
              <Link href={`/blog/${post.id}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-2">{post.date}</p>
            <p>{post.excerpt}</p>
            <Link href={`/blog/${post.id}`} className="text-purple-600 hover:underline">
              Read more
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
