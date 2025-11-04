"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Building2, MapPin, Phone, Mail, Clock } from "lucide-react";
import {
  AnimatedSection,
  AnimatedCard,
} from "@/components/animations/animated-section";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <div className="flex flex-col">
      <section className="relative bg-gradient-to-b from-yellow-500 via-yellow-600 to-yellow-700 py-48 ">
        <div className="container mx-auto px-4">
          <AnimatedSection
            className="max-w-5xl mx-auto text-center"
            direction="fade"
            duration={0.8}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Selamat datang di Aplikasi PKPP ITERA
            </h1>
            <p className="text-xl md:text-2xl text-white text-balance mb-8 leading-relaxed">
              Pusat Kurikulum Dan Pengembangan Pembelajaran
            </p>
          </AnimatedSection>
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

          <AnimatedSection stagger className="grid md:grid-cols-3 gap-8">
            <AnimatedCard className="group">
              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-400 transition-colors">
                    <Building2 className="h-8 w-8 text-red-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">LPMPP</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lembaga Penjaminan Mutu dan Pengembangan Pembelajaran
                    Institut Teknologi Sumatera
                  </p>
                </CardContent>
              </Card>
            </AnimatedCard>

            <AnimatedCard className="group">
              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-400 transition-colors">
                    <Building2 className="h-8 w-8 text-red-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">LPMPP</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lembaga Penjaminan Mutu dan Pengembangan Pembelajaran
                    Institut Teknologi Sumatera
                  </p>
                </CardContent>
              </Card>
            </AnimatedCard>

            <AnimatedCard className="group">
              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-400 transition-colors">
                    <Building2 className="h-8 w-8 text-red-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">LPMPP</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lembaga Penjaminan Mutu dan Pengembangan Pembelajaran
                    Institut Teknologi Sumatera
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
