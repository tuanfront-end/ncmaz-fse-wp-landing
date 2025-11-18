import { Button } from './button'
import { Subheading } from './text'

export default function CallToAction() {
  return (
    <div className="relative pb-16 pt-20 text-center sm:py-24">
      <hgroup>
        <Subheading>Get started</Subheading>
        <p className="mt-6 text-3xl font-medium tracking-tight text-gray-950 sm:text-5xl">
          Get started today.
        </p>
      </hgroup>
      <p className="mx-auto mt-6 max-w-sm text-sm/6 text-gray-500">
        It’s time to improve your website. Buy the Ncmaz theme so you can feel
        like you’re doing something productive.
      </p>
      <div className="mt-6">
        <div className="mt-12 flex flex-col items-center justify-center gap-x-6 gap-y-4 sm:flex-row">
          <Button
            href="https://themeforest.net/item/ncmaz-blog-magazine-wordpress-theme/34122841"
            target="_blank"
          >
            Buy theme
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
    </div>
  )
}
