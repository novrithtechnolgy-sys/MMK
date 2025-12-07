"use client";

export default function MapEmbed() {
  return (
    <div className="w-full h-[450px] md:h-[550px]  p-2 md:p-6 border-2 border-[#FF914D] rounded-xl md:rounded-3xl">
      <iframe
        src="https://www.google.com/maps/embed?pb=!4v1765097590459!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJREgwT0dZZWc.!2m2!1d6.450236367081153!2d80.0275978905331!3f189.630888015948!4f-9.879439901156431!5f0.7820865974627469"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-xl md:rounded-3xl"
      />
    </div>
  );
}
