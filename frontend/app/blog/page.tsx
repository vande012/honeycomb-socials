import { Metadata } from 'next';
import { getBlogPosts, getCategories } from '../api/blog/api';
import BlogPostCard from '../components/BlogPostCard';
import CategoryFilter from '../components/CategoryFilter';
import SortSelector from '../components/SortSelector';
import Pagination from '../components/Pagination';

// Base URL from environment or default
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Blog',
    description: 'Read our latest articles and insights.',
    alternates: {
      canonical: `${baseUrl}/blog`,
    },
  };
}

// Next.js 15 compatible types
type SearchParams = Promise<{
  page?: string;
  sort?: string;
}>;

export default async function BlogPage(props: { searchParams?: SearchParams }) {
  const searchParamsResolved = props.searchParams ? await props.searchParams : {};
  const page = searchParamsResolved.page ? parseInt(searchParamsResolved.page, 10) : 1;
  const sortOption = searchParamsResolved.sort || 'newest';
  const pageSize = 9;

  const sortParam = sortOption === 'newest'
    ? ['publishedAt:desc']
    : sortOption === 'oldest'
      ? ['publishedAt:asc']
      : sortOption === 'a-z'
        ? ['title:asc']
        : ['title:desc'];

  const postsData = await getBlogPosts({
    pagination: { page, pageSize },
    sort: sortParam,
  });

  const categoriesData = await getCategories();

  const posts = postsData.data;
  const categories = categoriesData.data;

  const pagination = postsData.meta.pagination || { page: 1, pageCount: 1 };
  const currentPage = pagination.page;
  const totalPages = pagination.pageCount;

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Blog
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Stay informed with our latest articles and insights.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          {/* Filters */}
          <div className="bg-card rounded-xl p-6 shadow-sm border border-border mb-12 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <CategoryFilter categories={categories} />
              <SortSelector />
            </div>
          </div>

          {/* Posts Grid */}
          {posts.length > 0 ? (
            <>
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12"
                role="feed"
                aria-label="Blog posts"
              >
                {posts.map((post, index) => (
                  <BlogPostCard
                    key={post.id}
                    post={post}
                    featured={index === 0 && page === 1}
                  />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <nav aria-label="Blog pagination" className="bg-card rounded-xl p-6 shadow-sm border border-border max-w-md mx-auto">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                  />
                </nav>
              )}
            </>
          ) : (
            <div className="bg-card rounded-xl p-12 shadow-sm border border-border max-w-md mx-auto text-center">
              <h3 className="text-xl font-bold mb-4">No Posts Found</h3>
              <p className="text-muted-foreground mb-6">
                We couldn't find any blog posts. Check back soon!
              </p>
              <a
                href="/blog"
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                View All Posts
              </a>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}