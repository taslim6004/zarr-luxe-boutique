export const MapEmbed = () => {
  return (
    <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-border/50 shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.8947!2d90.3648!3d23.8103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ4JzM3LjEiTiA5MMKwMjEnNTMuMyJF!5e0!3m2!1sen!2sbd!4v1234567890"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="ZARR Location - Mirpur, Dhaka"
      />
    </div>
  );
};
