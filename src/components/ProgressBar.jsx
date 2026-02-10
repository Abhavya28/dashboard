const ProgressBar = ({ value = 0, color = "bg-blue-500", height = "h-1" }) => {
  return (
    <div className="w-full">
      <div className={`w-full ${height} bg-gray-200 rounded-sm overflow-hidden`}>
        <div
          className={`${height} ${color} rounded-full transition-all duration-500`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
