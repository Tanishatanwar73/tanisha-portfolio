function FloatingContact() {
  return (
    <a
      href="#contact"
      className="
        fixed
        bottom-6
        right-6
        z-50

        px-5
        py-3

        rounded-full
        float-contact
        text-white
        font-semibold

        shadow-lg

        transition-all
        duration-300

        hover:bg-blue-700
        hover:scale-110

        animate-bounce

        sm:bottom-8
        sm:right-8
      "
    >
      Contact Me
    </a>
  );
}

export default FloatingContact;
