import { features } from "@/data/site";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function ValueGrid() {
  return (
    <section className="container mx-auto px-4 py-16" id="why-sunny">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary">
          Why Sunny Child Care
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
          Everything a modern bilingual family needs—under one sunny roof.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Families choose us for our immersive classrooms, warm meals, and
          transparent communication. Explore the pillars of our program.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="h-full border-border/70 bg-white/80 shadow-sm duration-200 hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg"
          >
            <CardHeader className="flex flex-row items-center gap-3 pb-2">
              <span className="rounded-full bg-primary/10 p-2 text-primary">
                <feature.icon className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-base text-muted-foreground">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
