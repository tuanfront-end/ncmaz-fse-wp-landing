import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Heading, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Ncmaz Fse - Blog, News and Magazine Full Site Editing WordPress Block theme',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <Navbar
          banner={
            <Link
              href="https://themeforest.net/item/ncmaz-blog-magazine-wordpress-theme/34122841"
              target="_blank"
              className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-[hover]:bg-fuchsia-950/30"
            >
              Buy the Ncmaz theme on Themeforest
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          <h1 className="font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Ncmaz Fse Theme.
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Ncmaz Fse - Blog, News and Magazine Full Site Editing WordPress
            Block theme.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button
              href="https://themeforest.net/item/ncmaz-blog-magazine-wordpress-theme/34122841"
              target="_blank"
            >
              By theme
            </Button>
            <Button
              variant="secondary"
              href="https://ncmaz-fse.booliitheme.com/"
              target="_blank"
            >
              Live demo
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          A snapshot of the demo site.
        </Heading>
        <Screenshot
          width={1216}
          height={768}
          src="/screenshots/home.png"
          className="mt-16 h-[36rem] sm:h-auto sm:w-[76rem]"
        />
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading>Features</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Some outstanding features.
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Bookmarks"
          title="The collection of articles you have saved."
          description="The collection of articles you have saved to read later. Save time searching,easily access important information anytime.."
          graphic={
            <div className="h-80 bg-[url(/screenshots/reading-list.png)] bg-[size:1100px_650px] bg-[left_-10px_top_-88px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Wishlist"
          title="The collection of your favorite articles."
          description="The collection of your favorite articles. Rediscover creative ideas, touching stories, and valuable lessons whenever you want."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/wishlist.png)] bg-[size:1100px_650px] bg-[left_-10px_top_-85px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Customized"
          title="Full site editing functionality."
          description="Ncmaz Fse is customizable barrier-free universal WordPress block theme with full site editing functionality."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/editor.png)] bg-cover bg-no-repeat" />
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Patterns"
          title="Multiple Pre-built patterns."
          description="Multiple header, footer and home layouts to choose from with ability to create your own custom ones"
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/patterns.png)] bg-cover bg-no-repeat" />
          }
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Pages, Posts"
          title="Multiple Pre-built templates."
          description="Multiple page and post templates to choose from with ability to create your own custom ones."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/pages.png)] bg-cover bg-no-repeat" />
          }
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <div className="bg-gradient-to-b from-white from-50% to-gray-100 pb-32 pt-20">
          <FeatureSection />
          <BentoSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
