import React from 'react';

export const metadata = {
  title: 'Free Social Media Audit | Honeycomb Socials',
  description: 'Get a free social media audit with personalized feedback and actionable tips. Discover what\'s working, what\'s not, and how to attract your dream clients today.',
};

export default function AuditPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              ✨ Free Social Media Audit ✨
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-6">
              Want honest, personalized feedback on your social media?
            </p>
            <p className="text-base md:text-lg text-primary-foreground/90 leading-relaxed">
              I'll take a look at your page and send simple, actionable tips to help you attract your dream clients and make your online presence feel more like <em>you</em>.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border-2 border-primary/20 rounded-2xl p-4 md:p-8 shadow-xl">
              <p className="text-center text-muted-foreground mb-6 italic">
                This is completely free! I just ask that you fill out this quick form so I can understand your business and goals.
              </p>
              
              {/* Google Form Embed */}
              <div className="w-full" style={{ minHeight: '800px' }}>
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfEkfqn54P-G2NuIemRt5ZJUsOOE_YuO8Ady34mNM25kfzFrA/viewform?embedded=true"
                  width="100%"
                  height="1200"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="rounded-lg"
                  title="Free Social Media Audit Form"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What You'll Get
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🔍</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Honest Feedback</h3>
                <p className="text-sm text-muted-foreground">
                  Real insights on what's working and what's not
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💡</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Actionable Tips</h3>
                <p className="text-sm text-muted-foreground">
                  Simple changes you can implement right away
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Personalized Strategy</h3>
                <p className="text-sm text-muted-foreground">
                  Tailored advice for your specific business
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

