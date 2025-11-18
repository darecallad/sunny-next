import { testimonials } from "@/data/site";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function TestimonialsSection() {
  return (
    <section
      className="bg-gradient-to-b from-white to-amber-50/60"
      id="testimonials"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary">
            Love from our families
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
            Parent testimonials
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Real stories from families who trust Sunny Child Care with their
            little learners every day.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="bg-white/90 shadow-lg">
              <CardContent className="flex h-full flex-col gap-6 p-6">
                <p className="text-base leading-relaxed text-foreground">
                  “{testimonial.quote}”
                </p>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <Badge variant="secondary" className="mt-1">
                    {testimonial.source ?? "Family"}
                  </Badge>
                  {testimonial.href && (
                    <div className="mt-2 text-sm">
                      <Link
                        href={testimonial.href}
                        target="_blank"
                        className="text-primary underline"
                      >
                        Read full story
                      </Link>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
