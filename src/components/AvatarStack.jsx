const avatars = [
  "/images/Archie.png",
  "/images/Holmes.png",
  "/images/Kenneth.png",
  "/images/Malanie.png",
];

const AvatarStack = () => {
  return (
    <div className="flex items-center">
      {avatars.slice(0, 4).map((src, index) => (
        <img
          key={index}
          src={src}
          alt="avatar"
          className="w-9 h-9 rounded-full border-2 border-white object-cover -ml-3 first:ml-0"
        />
      ))}

      {/* More icon */}
      <div className="-ml-3 w-9 h-9 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-gray-500 text-lg font-bold">
        …
      </div>
    </div>
  );
};

export default AvatarStack;
