interface FAQSchemaProps {
  faqs: Array<{
    Question: string;
    Answer: string;
  }>;
}

const FAQSchema: React.FC<FAQSchemaProps> = ({ faqs }) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  
  // Don't render if no FAQs or no base URL
  if (!faqs || faqs.length === 0 || !baseUrl) {
    return null;
  }

  // Validate required Schema.org FAQPage fields
  const validateSchema = (schema: any) => {
    const required = ['@context', '@type', 'mainEntity'];
    const missing = required.filter(field => !schema[field]);
    if (missing.length > 0) {
      console.warn('FAQSchema missing required fields:', missing);
    }
    return schema;
  };

  const schema = validateSchema({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.Question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.Answer,
      },
    })),
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default FAQSchema;


