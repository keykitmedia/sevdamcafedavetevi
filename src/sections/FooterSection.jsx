import { contact, img } from "../constants";

const FooterSection = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <section className="footer-section">
      <img
        src={img("dis-cephe.jpg")}
        alt=""
        loading="lazy"
        className="footer-photo"
      />

      <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
        <div className="overflow-hidden z-10 relative">
          <h1 className="general-title text-center text-milk py-5">
            Tarihiniz hazır mı?
          </h1>
        </div>

        <p className="relative z-10 text-center text-milk/80 font-paragraph md:text-xl px-5 max-w-xl mx-auto">
          Bir mesajla müsait günleri, dekor seçeneklerini ve size özel
          fiyatı öğrenin.
        </p>

        <div className="flex-center gap-5 relative z-10 md:mt-16 mt-8">
          <a href={contact.whatsappHref} target="_blank" rel="noreferrer" className="social-btn" aria-label="WhatsApp">
            <img src={`${base}images/sevdam/whatsapp.svg`} alt="" />
          </a>
          <a href={contact.phoneHref} className="social-btn" aria-label="Telefon">
            <img src={`${base}images/sevdam/phone.svg`} alt="" />
          </a>
          <a href={contact.instagramHref} target="_blank" rel="noreferrer" className="social-btn" aria-label="Instagram">
            <img src={`${base}images/insta.svg`} alt="" />
          </a>
        </div>

        <div className="relative z-10 mt-32 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium">
          <div className="flex items-start md:gap-16 gap-8">
            <div className="footer-col">
              <p className="footer-head">Davetler</p>
              <p>Kız İsteme</p>
              <p>Söz & Nişan</p>
              <p>Kına Gecesi</p>
              <p>Doğum Günü</p>
            </div>
            <div className="footer-col">
              <p className="footer-head">İletişim</p>
              <a href={contact.phoneHref}>{contact.phone}</a>
              <a href={contact.phone2Href}>{contact.phone2}</a>
              <a href={contact.mapsHref} target="_blank" rel="noreferrer">
                Sami Soysal Cd. No:12/A
              </a>
              <p>Ünye / Ordu</p>
            </div>
          </div>

          <div className="md:max-w-lg">
            <p>
              Gününüzü konuşalım: tarih, kişi sayısı ve konsepti yazın, size
              özel teklifle dönelim.
            </p>
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="footer-cta"
            >
              <span>WhatsApp&apos;tan yazın</span>
              <img src={`${base}images/arrow.svg`} alt="" />
            </a>
          </div>
        </div>

        <div className="copyright-box">
          <p>© 2026 Sevda&apos;M Cafe & Davet Evi · Ünye</p>
          <div className="flex items-center gap-7">
            <a href={contact.mapsHref} target="_blank" rel="noreferrer">Yol Tarifi</a>
            <a href={contact.instagramHref} target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
