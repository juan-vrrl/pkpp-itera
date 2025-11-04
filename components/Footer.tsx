import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#F4F4F4] text-primary py-12 mt-auto">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">PKPP ITERA</h3>
            <p className="text-primary leading-relaxed">
              Aplikasi Pusat Kurikulum Dan Pengembangan Pembelajaran
            </p>
          </div>

          <div className="flex gap-10">
            <div>
              <h4 className="font-semibold mb-4">Useful Links</h4>
              <ul className="space-y-2 text-primary">
                <li>
                  <Link
                    href="https://www.itera.ac.id/"
                    className="hover:text-red-400 transition-colors"
                  >
                    ITERA
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://lpmpp.itera.ac.id/"
                    className="hover:text-red-400 transition-colors"
                  >
                    LPMPP
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://lppm.itera.ac.id/"
                    className="hover:text-red-400 transition-colors"
                  >
                    LPPM
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <div className="space-y-2 text-primary">
                <p>Gedung Training Center (TC)</p>
                <p>Institut Teknologi Sumatera</p>
                <p>Jln Terusan Ryacudu</p>
                <p>Lampung Selatan, Indonesia</p>
              </div>
              <div className="text-primary mt-4">
                <p>
                  <span className="font-semibold">Phone</span> : (0721) 8030188
                </p>
                <p>
                  <span className="font-semibold">Email</span> :
                  pkpp@itera.ac.id
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
