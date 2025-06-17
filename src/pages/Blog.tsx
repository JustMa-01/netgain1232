
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const blogPosts = [
    {
      title: "Why Web + Ads Together = Business Boost",
      excerpt: "Discover how combining professional web development with strategic advertising campaigns can exponentially grow your business revenue.",
      category: "Digital Marketing",
      readTime: "5 min read",
      date: "Dec 15, 2024",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
    },
    {
      title: "SEO vs Ads: What's Right for You?",
      excerpt: "Compare the benefits of organic search optimization versus paid advertising to determine the best strategy for your business goals.",
      category: "SEO",
      readTime: "7 min read",
      date: "Dec 12, 2024",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800"
    },
    {
      title: "Future of AI Chatbots in Business",
      excerpt: "Explore how AI chatbots are revolutionizing customer service and what it means for businesses looking to scale efficiently.",
      category: "AI Technology",
      readTime: "6 min read",
      date: "Dec 10, 2024",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800"
    },
    {
      title: "Website Speed: Why Every Second Counts",
      excerpt: "Learn how website loading speed impacts user experience, search rankings, and conversion rates with actionable optimization tips.",
      category: "Web Development",
      readTime: "4 min read",
      date: "Dec 8, 2024",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
    },
    {
      title: "Social Media ROI: Measuring Success",
      excerpt: "Master the art of measuring social media return on investment with proven metrics and tracking strategies.",
      category: "Social Media",
      readTime: "8 min read",
      date: "Dec 5, 2024",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800"
    },
    {
      title: "E-commerce Trends 2025: What's Next?",
      excerpt: "Stay ahead of the curve with emerging e-commerce trends that will shape online retail in the coming year.",
      category: "E-commerce",
      readTime: "10 min read",
      date: "Dec 3, 2024",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800"
    }
  ];

  const categories = ["All", "Digital Marketing", "SEO", "Web Development", "AI Technology", "Social Media", "E-commerce"];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            Our <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Insights, tips, and strategies to help you succeed in the digital world.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className={index === 0 ? "glow-button" : "glass-button"}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        <Card className="glass-card mb-12 overflow-hidden animate-slide-up">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-sm">
                  Featured
                </span>
                <span className="text-amber-400 text-sm">{blogPosts[0].category}</span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-white mb-4">
                {blogPosts[0].title}
              </h2>
              <p className="text-gray-400 mb-6">{blogPosts[0].excerpt}</p>
              <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {blogPosts[0].date}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {blogPosts[0].readTime}
                </div>
              </div>
              <Button className="glow-button">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <Card key={index} className="glass-card border-white/10 hover:border-amber-400/50 transition-all duration-300 overflow-hidden group animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-500/90 text-black px-2 py-1 rounded text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-amber-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <Button variant="outline" size="sm" className="glass-button w-full">
                  Read Article <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 glass-card p-12 text-center">
          <h3 className="text-3xl font-serif font-bold text-white mb-4">
            Never Miss an Update
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest insights, tips, and strategies delivered to your inbox.
          </p>
          <Link to="/resources">
            <Button size="lg" className="glow-button">
              Subscribe Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
