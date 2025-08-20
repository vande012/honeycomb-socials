import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Typography } from '../components/ui/typography'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <Typography variant="h1" className="max-w-6xl mx-auto">
            Complete Design System & Component Library
          </Typography>
          <Typography variant="lead" className="max-w-2xl mx-auto">
            A comprehensive collection of reusable components, design tokens, and guidelines built with Next.js and Tailwind CSS.
            Features full light/dark mode support and modern accessibility standards.
          </Typography>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg">View Components</Button>
          </div>
        </section>

        {/* Color Palette */}
        <section className="space-y-6">
          <Typography variant="h2">Color Palette</Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Base Colors</CardTitle>
                <CardDescription>Background, foreground, and border colors</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded bg-background border border-border"></div>
                  <span className="text-sm font-mono">background</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded bg-foreground"></div>
                  <span className="text-sm font-mono">foreground</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded bg-muted"></div>
                  <span className="text-sm font-mono">muted</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded border border-border"></div>
                  <span className="text-sm font-mono">border</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Primary & Secondary</CardTitle>
                <CardDescription>Main brand and secondary colors</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded bg-primary"></div>
                  <span className="text-sm font-mono">primary</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded bg-secondary"></div>
                  <span className="text-sm font-mono">secondary</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded bg-accent"></div>
                  <span className="text-sm font-mono">accent</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Semantic Colors</CardTitle>
                <CardDescription>Success, warning, error, and info colors</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded bg-success"></div>
                  <span className="text-sm font-mono">success</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded bg-warning"></div>
                  <span className="text-sm font-mono">warning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded bg-destructive"></div>
                  <span className="text-sm font-mono">destructive</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded bg-info"></div>
                  <span className="text-sm font-mono">info</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-6">
          <Typography variant="h2">Typography</Typography>
          <Card>
            <CardHeader>
              <CardTitle>Text Hierarchy</CardTitle>
              <CardDescription>Complete typography scale with semantic headings and text styles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Typography variant="h1">Heading 1 - Main Page Title</Typography>
                <Typography variant="h2">Heading 2 - Section Title</Typography>
                <Typography variant="h3">Heading 3 - Subsection Title</Typography>
                <Typography variant="h4">Heading 4 - Component Title</Typography>
                <Typography variant="h5">Heading 5 - Small Section</Typography>
                <Typography variant="h6">Heading 6 - Minor Heading</Typography>
              </div>
              <div className="space-y-4 pt-4 border-t border-border">
                <Typography variant="lead">
                  Lead text - Use for introductory paragraphs and important descriptions.
                </Typography>
                <Typography variant="p">
                  Regular paragraph text - This is the standard body text used throughout the application.
                  It provides good readability and comfortable line height for extended reading.
                </Typography>
                <Typography variant="large">Large text for emphasis</Typography>
                <Typography variant="small">Small text for captions and metadata</Typography>
                <Typography variant="muted">Muted text for secondary information</Typography>
              </div>
              <div className="pt-4 border-t border-border">
                <Typography variant="p" className="font-mono">
                  Monospace font (font-mono) - Used for code snippets, technical data, and UI that requires fixed-width characters.
                </Typography>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Buttons */}
        <section className="space-y-6">
          <Typography variant="h2">Buttons</Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Button Variants</CardTitle>
                <CardDescription>Different button styles for various use cases</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Button Sizes</CardTitle>
                <CardDescription>Different button sizes for various contexts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center flex-wrap gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon">📁</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Badges */}
        <section className="space-y-6">
          <Typography variant="h2">Badges</Typography>
          <Card>
            <CardHeader>
              <CardTitle>Badge Variants</CardTitle>
              <CardDescription>Labels and status indicators with semantic colors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="destructive">Error</Badge>
                <Badge variant="info">Info</Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Cards */}
        <section className="space-y-6">
          <Typography variant="h2">Cards</Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic Card</CardTitle>
                <CardDescription>Simple card with header and content</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="p">
                  This is a basic card component that can contain any content.
                  Perfect for organizing information into digestible sections.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Feature Card</CardTitle>
                <CardDescription>Card showcasing a feature or service</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="h-32 bg-muted rounded-md flex items-center justify-center">
                  <span className="text-4xl">🎨</span>
                </div>
                <Typography variant="p">
                  Beautiful design system with carefully crafted components.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Stats Card</CardTitle>
                <CardDescription>Display important metrics and data</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center space-y-2">
                  <Typography variant="h1" className="text-primary">42</Typography>
                  <Typography variant="small" className="text-muted-foreground">Components</Typography>
                </div>
                <Badge variant="success" className="w-full justify-center">
                  100% Accessible
                </Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Component States */}
        <section className="space-y-6">
          <Typography variant="h2">Interactive States</Typography>
          <Card>
            <CardHeader>
              <CardTitle>Hover, Focus, and Disabled States</CardTitle>
              <CardDescription>All components support proper interactive states</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <Typography variant="h6">Enabled States</Typography>
                <div className="flex flex-wrap gap-3">
                  <Button>Hover me</Button>
                  <Button variant="outline">Focus with Tab</Button>
                  <Button variant="secondary">Click me</Button>
                </div>
              </div>
              <div className="space-y-3">
                <Typography variant="h6">Disabled States</Typography>
                <div className="flex flex-wrap gap-3">
                  <Button disabled>Disabled</Button>
                  <Button variant="outline" disabled>Disabled Outline</Button>
                  <Button variant="secondary" disabled>Disabled Secondary</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Dark Mode Demo */}
        <section className="space-y-6">
          <Typography variant="h2">Dark Mode Support</Typography>
          <Card>
            <CardHeader>
              <CardTitle>Automatic Theme Switching</CardTitle>
              <CardDescription>
                All components automatically adapt to light and dark themes. Toggle the theme using the switch in the header.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <Typography variant="h6">Theme Features</Typography>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <Badge variant="success" className="w-3 h-3 p-0"></Badge>
                      <span>System preference detection</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Badge variant="success" className="w-3 h-3 p-0"></Badge>
                      <span>Persistent user choice</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Badge variant="success" className="w-3 h-3 p-0"></Badge>
                      <span>Smooth transitions</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Badge variant="success" className="w-3 h-3 p-0"></Badge>
                      <span>No flash of unstyled content</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <Typography variant="h6">CSS Custom Properties</Typography>
                  <div className="bg-muted p-4 rounded-md">
                    <code className="text-xs font-mono">
                      {`--color-background: var(--background)
--color-foreground: var(--foreground)
--color-primary: var(--primary)
--color-border: var(--border)`}
                    </code>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <Typography variant="muted">
              Built with Next.js, Tailwind CSS, and TypeScript
            </Typography>
            <div className="flex justify-center space-x-2">
              <Badge variant="outline">Next.js 15</Badge>
              <Badge variant="outline">Tailwind CSS 4</Badge>
              <Badge variant="outline">TypeScript</Badge>
              <Badge variant="outline">React 19</Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
