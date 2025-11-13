"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Building2, School, MapPin, Phone, Mail, Clock } from "lucide-react";
import {
  AnimatedSection,
  AnimatedCard,
} from "@/components/animations/animated-section";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full overflow-hidden bg-[#fdfaf1] py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-amber-100 to-orange-300 rounded-full blur-3xl opacity-20"
            data-aos="fade-down-left"
          />
          <div
            className="absolute top-1/2 -left-32 w-96 h-96 bg-gradient-to-r from-yellow-100 to-amber-200 rounded-full blur-3xl opacity-15"
            data-aos="fade-up-right"
          />

          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1200 600"
            preserveAspectRatio="none"
            data-aos="fade-in"
            data-aos-delay="200"
          >
            <path
              d="M 0 300 Q 300 200, 600 300 T 1200 300"
              stroke="rgba(251, 146, 60, 0.1)"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M 0 250 Q 400 100, 800 250 T 1200 250"
              stroke="rgba(217, 119, 6, 0.15)"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col justify-center">
            <div
              className="inline-flex items-center gap-2 w-fit mb-6"
              data-aos="fade-down"
            >
              <div className="w-2 h-2 bg-orange-500 rounded-full" />
              <span className="text-sm font-semibold text-orange-600 tracking-wider uppercase">
                Selamat Datang
              </span>
            </div>

            <div className="mb-6" data-aos="fade-up" data-aos-delay="200">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
                <span className="block">Aplikasi</span>
                <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  PKPP ITERA
                </span>
              </h1>
            </div>

            <p
              className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed text-balance font-semibold"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Pusat Kurikulum Dan Pengembangan Pembelajaran
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16 flex flex-col">
            <h2 className="text-3xl md:text-2xl font-bold mb-4 text-red-400 p-3 bg-red-100 rounded-md self-center">
              Tentang
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Pusat Kurikulum dan Pengembangan Pembelajaran (PKPP) merupakan
              salah satu pusat yang berada di bawah Lembaga Penjaminan Mutu dan
              Pengembangan Pembelajaran Institut Teknologi Sumatera (LPMPP) yang
              bertanggung jawab dalam pengelolaan kurikulum dan inovasi
              pembelajaran guna meningkatkan kualitas pendidikan.
            </p>
          </AnimatedSection>

          <AnimatedSection stagger className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedCard className="group h-full">
              <Card className="text-center p-8 hover:shadow-lg transition-shadow h-full flex flex-col">
                <CardContent className="pt-6 flex-1 flex flex-col">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-400 transition-colors">
                    <Building2 className="h-8 w-8 text-red-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">LPMPP</h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    Lembaga Penjaminan Mutu dan Pengembangan Pembelajaran
                    Institut Teknologi Sumatera
                  </p>
                </CardContent>
              </Card>
            </AnimatedCard>

            <AnimatedCard className="group h-full">
              <Card className="text-center p-8 hover:shadow-lg transition-shadow h-full flex flex-col">
                <CardContent className="pt-6 flex-1 flex flex-col">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-400 transition-colors">
                    <School className="h-8 w-8 text-red-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">PKPP</h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    Pusat Kurikulum dan Pengembangan Pembelajaran
                  </p>
                </CardContent>
              </Card>
            </AnimatedCard>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24" id="kontak">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div
            className="max-w-3xl mx-auto text-center mb-12"
            data-aos="fade-up"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">
              <span className="text-red-500">—</span> Kontak{" "}
              <span className="text-red-500">—</span>
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              Ada pertanyaan atau keluhan? silahkan hubungi kontak di bawah ini.
            </p>
          </div>

          {/* Contact Cards and Map */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Address Card */}
              <Card
                className="bg-neutral-50 dark:bg-neutral-950 border-0"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <CardContent className="pt-8 pb-6">
                  <div className="flex flex-col items-start gap-4">
                    <MapPin
                      className="w-8 h-8 text-red-500"
                      strokeWidth={1.5}
                    />
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-1">
                        Address
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Jln Terusan Ryacudu
                        <br />
                        Lampung Selatan, Indonesia
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Call Us Card */}
              <Card
                className="bg-neutral-50 dark:bg-neutral-950 border-0"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <CardContent className="pt-8 pb-6">
                  <div className="flex flex-col items-start gap-4">
                    <Phone className="w-8 h-8 text-red-500" strokeWidth={1.5} />
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-1">
                        Call Us
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        (0721) 8030188
                        <br />
                        (0721) 8030189
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email Us Card */}
              <Card
                className="bg-neutral-50 dark:bg-neutral-950 border-0"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <CardContent className="pt-8 pb-6">
                  <div className="flex flex-col items-start gap-4">
                    <Mail className="w-8 h-8 text-red-500" strokeWidth={1.5} />
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-1">
                        Email Us
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        pkpp@itera.ac.id
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Open Hours Card */}
              <Card
                className="bg-neutral-50 dark:bg-neutral-950 border-0"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <CardContent className="pt-8 pb-6">
                  <div className="flex flex-col items-start gap-4">
                    <Clock className="w-8 h-8 text-red-500" strokeWidth={1.5} />
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-1">
                        Open Hours
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Monday - Friday
                        <br />
                        08:00AM - 04:00PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right: Map */}
            <div
              className="rounded-lg overflow-hidden shadow-md h-full min-h-96"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7944.813987609946!2d105.317408!3d-5.354699!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40c30023a9c495%3A0x77f302ebeab5bc07!2sGedung%20Training%20Center%20(TC)%20Itera!5e0!3m2!1sen!2sid!4v1762171571494!5m2!1sen!2sid"
                width="600"
                height="450"
                className="border-0 w-full h-full"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
