import Image from 'next/image'

import { Button } from '@/components/ui/button'
import ThemeToggle from '@/components/theme/theme-toggle'

export default function Home() {
  return (
    <main className="relative w-full">
      <div className="container relative mx-auto">
        <section className="absolute -right-16 top-0 -z-10">
          <Image src={'/flower.png'} alt="flower" width={800} height={754} />
        </section>
        <nav className="absolute left-0 right-0 top-8 z-10 flex items-center justify-between rounded-full bg-background/60 px-4 py-2 backdrop-blur-lg">
          <p>
            <span>🌻</span>
            <span className="font-display font-semibold italic">
              Kalediosekop,{' '}
            </span>
            Digital Product Designer.
          </p>
          <div className="flex gap-3">
            <ThemeToggle />
            <Button
              className="rounded-full border-foreground bg-transparent px-4 py-2 text-base"
              variant={'outline'}
            >
              Works
            </Button>

            <Button
              className="rounded-full border-foreground bg-transparent px-4 py-2 text-base"
              variant={'outline'}
            >
              About
            </Button>
            <Button
              className="btn-gradient rounded-full border-foreground px-4 py-2 text-base"
              variant={'ghost'}
            >
              Collaborate Now!
            </Button>
          </div>
        </nav>

        <section className="relative flex h-[540px] flex-col">
          <p className="absolute top-36 text-8xl">Your</p>

          <div className="absolute left-1/3 top-56 -translate-x-1/3 font-display text-9xl italic">
            <Image
              className="absolute inset-0 -z-10 -mt-2 scale-125"
              src={'/outline.svg'}
              alt="outline"
              width={500}
              height={216}
            />
            <p>Dreams,</p>
          </div>
          <p className="absolute bottom-0 right-0 text-8xl">Conceptualize.</p>
          <p className="absolute bottom-0 left-0 max-w-[397px] text-base font-normal">
            Halo! My Name is{' '}
            <span className="font-bold">Ardhiya Febrian Rachman</span> and you
            can call me <span className="font-bold">Dio </span>and I’ll be happy
            for a collaboration to make life easier with Digital Product Design.{' '}
            <span className="text-secondary">
              Currently work at GITS Indonesia.
            </span>
          </p>
        </section>

        <section className="mt-12 grid w-full grid-cols-3 gap-4">
          {[1, 2, 3].map((v) => (
            <div
              className="flex w-full flex-col gap-3 bg-background px-3 py-3.5"
              key={v}
            >
              <Image
                src={'/portfolio-1.png'}
                alt="pocari"
                width={379}
                height={207}
              />
              <p className="text-3xl">
                Free Event Registration with Receipt & Bills
              </p>
            </div>
          ))}
        </section>
      </div>
    </main>
  )
}
