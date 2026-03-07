import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';

const BlogSection = () => {
    const blogs = [
        {
            id: 1,
            title: "What Is IPTV? A Complete Beginner’s Guide to IPTV in the UK (2026)",
            excerpt: "Television has changed dramatically over the past decade. Traditional cable and satellite TV are slowly being replaced by internet-based streaming services...",
            image: "/used%20images/blog1.avif",
            date: "March 7, 2026",
            author: "Admin",
            url: "/blog"
        }
    ];

    return (
        <section id="blog" className="py-24 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-primary-orange font-black uppercase tracking-[0.2em] text-sm mb-4">Latest Insights</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-white mb-6">Explore Our Blog</h3>
                    <div className="w-24 h-1.5 bg-primary-orange mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="group bg-slate-900/50 rounded-2xl overflow-hidden border border-white/10 hover:border-primary-orange/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-orange/5">
                            {/* Blog Image */}
                            <Link to={blog.url} className="block overflow-hidden aspect-video">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </Link>

                            {/* Blog Content */}
                            <div className="p-8">
                                <div className="flex items-center gap-4 text-slate-400 text-xs mb-4 uppercase tracking-widest font-bold">
                                    <span className="flex items-center gap-2"><FaCalendarAlt className="text-primary-orange" /> {blog.date}</span>
                                    <span className="flex items-center gap-2"><FaUser className="text-primary-orange" /> {blog.author}</span>
                                </div>
                                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-primary-orange transition-colors line-clamp-2">
                                    <Link to={blog.url}>{blog.title}</Link>
                                </h4>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {blog.excerpt}
                                </p>
                                <Link
                                    to={blog.url}
                                    className="inline-flex items-center gap-2 text-primary-orange font-black uppercase tracking-widest text-xs hover:gap-4 transition-all"
                                >
                                    Read Full Guide <FaArrowRight />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
