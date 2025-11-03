import ExampleComponent from '@/components/ExampleComponent';
import Container from '@/components/primitives/Container';
import Section from '@/components/primitives/Section';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Home() {
  return (
    <main className="min-h-screen py-12">
      <Container>
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-bold tracking-tight font-display text-neon-violet">
              Neon Glass UI
            </h1>
            <p className="mt-2 text-muted-foreground">
              Tailwind CSS tokens, next-themes, fonts, and layout primitives.
            </p>
          </div>
          <ThemeToggle />
        </div>

        <Section>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="glass rounded-glass p-6">
              <h2 className="text-2xl font-semibold mb-2">Demo Card</h2>
              <p className="text-muted-foreground">
                This card uses the glassmorphism styles and theme tokens.
              </p>
            </div>

            <ExampleComponent />
          </div>
        </Section>

        <Section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className="group glass rounded-glass px-5 py-4 transition-colors hover:shadow-neon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                Docs{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm text-muted-foreground">
                Find in-depth information about Next.js features and API.
              </p>
            </a>

            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="group glass rounded-glass px-5 py-4 transition-colors hover:shadow-neon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                Learn{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm text-muted-foreground">
                Learn about Next.js in an interactive course with quizzes!
              </p>
            </a>

            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className="group glass rounded-glass px-5 py-4 transition-colors hover:shadow-neon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                Templates{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm text-muted-foreground">
                Explore starter templates for Next.js 14.
              </p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className="group glass rounded-glass px-5 py-4 transition-colors hover:shadow-neon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                Deploy{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm text-muted-foreground">
                Instantly deploy your Next.js site to Vercel.
              </p>
            </a>
          </div>
        </Section>
      </Container>
    </main>
  );
}
