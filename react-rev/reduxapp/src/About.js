import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Avatar } from "@mui/material";
import './About.css';
import modelPink from './images/5.jpg';

const About = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Far far away",
      subtitle: "behind the word mountains",
      excerpt: "Far far away, behind the word mountains...",
      date: "April 03, 2023",
      author: "Admin",
      comments: 3
    },
    {
      id: 2,
      title: "Far far away",
      subtitle: "behind the word mountains",
      excerpt: "Far far away, behind the word mountains...",
      date: "April 03, 2023",
      author: "Admin",
      comments: 3
    },
    {
      id: 3,
      title: "Far far away",
      subtitle: "behind the word mountains",
      excerpt: "Far far away, behind the word mountains...",
      date: "April 03, 2023",
      author: "Admin",
      comments: 3
    },
    {
      id: 4,
      title: "Far far away",
      subtitle: "behind the word mountains",
      excerpt: "Far far away, behind the word mountains...",
      date: "April 03, 2023",
      author: "Admin",
      comments: 3
    },
    {
      id: 5,
      title: "Far far away",
      subtitle: "behind the word mountains",
      excerpt: "Far far away, behind the word mountains...",
      date: "April 03, 2023",
      author: "Admin",
      comments: 3
    }
  ];

  return (
    <div className="about-container">
      {/* Hero section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Create, Code, and Published.</h1>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          <button className="button">Get Started</button>
        </div>
        <div className="hero-image">
          <div className="testimonial-container1">
            <div className="testimonial">   </div>     </div>
          <img src= {modelPink} alt="Woman in black with orange fabric" />
          
        </div>
      </section>

      {/* Features section */}
      <section className="features-section">
        <h2>Far far away, behind the word mountains, far from the countries Vokalia.</h2>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon blue">
              <span>🔍</span>
            </div>
            <h3>Explore all courses</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon blue">
              <span>📚</span>
            </div>
            <h3>Create new skills</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon blue">
              <span>🧠</span>
            </div>
            <h3>Improve your skills</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
          </div>
        </div>
      </section>

      {/* Content section with image */}
      <section className="content-section">
        <div className="content-text">
          <h2>Far far away, behind the word mountains</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          <ul>
            <li>✓ Behind the word mountains</li>
            <li>✓ Far far away mountains</li>
            <li>✓ Large language ocean</li>
          </ul>
          <button className="primary-button">Learn More</button>
        </div>
        <div className="content-image">
          <img src= {modelPink} alt="Woman with camera" />
        </div>
      </section>

      {/* Testimonial section */}
      <section className="testimonial-section">
        <div className="testimonial-container">
          <div className="testimonial-icon">
            <span>💬</span>
          </div>
          <p className="quote">"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</p>
          <div className="testimonial-footer">
            <span>Maria Anderson</span>
            <span className="separator">•</span>
            <span>Designer at Studio</span>
          </div>
          <div className="testimonial-pagination">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </section>

      {/* Blog section */}
      <section className="blog-section">
        <h2>Latest Blog Posts</h2>
        <div className="blog-grid">
          {blogPosts.map(post => (
            <div key={post.id} className="blog-card">
              <div className="blog-info">
                <h3>{post.title}</h3>
                <p className="blog-subtitle">{post.subtitle}</p>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-meta">
                  <span>{post.date}</span>
                  <span className="separator">•</span>
                  <span>{post.author}</span>
                  <span className="separator">•</span>
                  <span>{post.comments} comments</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;