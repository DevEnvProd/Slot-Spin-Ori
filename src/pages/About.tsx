import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Mail, MapPin, AlertTriangle } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About SLOTSPIN MY</h1>
        <p className="text-xl text-gray-600">"Review slot. Cari jackpot."</p>
      </motion.div>

      <div className="prose prose-lg max-w-none text-gray-600 mb-20">
        <p>
          Selamat datang ke <strong>SLOTSPIN MY</strong>, destinasi utama anda untuk review slot game yang jujur dan telus di Malaysia. Misi kami adalah mudah: kami review slot supaya anda boleh bermain dengan lebih bijak.
        </p>
        <p>
          Dalam dunia kasino dalam talian yang luas, sukar untuk mengetahui game mana yang benar-benar berbaloi dengan masa dan wang anda. Itulah sebabnya kami mengkaji setiap aspek game — daripada RTP (Return to Player) dan tahap volatility, sehingga ke potensi kemenangan maksimum dan ciri-ciri bonus.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 not-prose">
          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
            <ShieldCheck className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2 text-text-dark">Jujur & Telus</h3>
            <p className="text-gray-500 text-sm">Kami tidak menyembunyikan kebenaran. Jika slot itu kurang memuaskan, kami akan beritahu anda.</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
            <MapPin className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2 text-text-dark">Fokus Malaysia</h3>
            <p className="text-gray-500 text-sm">Review kami disesuaikan untuk pemain di Malaysia, menonjolkan game yang popular di sini.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-text-dark mb-6">Contact Us</h2>
        <p>
          Ada slot baru yang anda mahu kami review? Atau mahu bekerjasama dengan kami? Sila hubungi kami melalui emel di bawah:
        </p>
        <div className="flex items-center gap-3 bg-primary/5 p-4 rounded-xl w-fit not-prose">
          <Mail className="w-5 h-5 text-primary" />
          <span className="font-bold text-primary">contact@slotspin.my</span>
        </div>
      </div>

      {/* Disclaimer Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-red-50 border-2 border-red-100 rounded-3xl p-8 md:p-12"
      >
        <div className="flex items-center gap-3 mb-6">
          <AlertTriangle className="w-8 h-8 text-primary" />
          <h2 className="text-2xl font-bold text-primary">PENAFIAN (DISCLAIMER)</h2>
        </div>
        <div className="space-y-4 text-red-900/80 text-sm md:text-base leading-relaxed">
          <p>
            1. <strong>SLOTSPIN MY</strong> adalah laman web review maklumat sahaja. Kami tidak menawarkan sebarang perkhidmatan perjudian secara langsung.
          </p>
          <p>
            2. Perjudian melibatkan risiko kewangan. Sila pastikan anda bermain mengikut kemampuan anda. Jangan sesekali menggunakan wang yang anda tidak mampu untuk rugi.
          </p>
          <p>
            3. Laman web ini adalah untuk individu berumur <strong>18 tahun ke atas</strong> sahaja.
          </p>
          <p>
            4. Kami tidak bertanggungjawab ke atas sebarang kerugian yang dialami di laman web pihak ketiga yang dipautkan dari sini.
          </p>
          <p className="font-bold mt-6">
            Sila bermain secara bertanggungjawab. Jika anda rasa anda mempunyai masalah perjudian, sila dapatkan bantuan profesional.
          </p>
        </div>
      </motion.div>
    </div>
  );
};
